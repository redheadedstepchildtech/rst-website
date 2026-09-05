import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DREAM_FUNNEL_URL = "https://dreamfunnel.net";

// Lightweight in-memory rate limit (best-effort; per warm serverless instance).
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function notificationHtml(name: string, safeEmail: string, message: string): string {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0b1120;color:#e6edfa;padding:24px;border-radius:12px;">
      <h2 style="color:#ff3b3b;margin:0 0 16px;">New message from Redheaded Stepchild Tech website</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#93a4c4;width:90px;">Name</td><td style="padding:6px 0;">${name}</td></tr>
        <tr><td style="padding:6px 0;color:#93a4c4;">Email</td><td style="padding:6px 0;"><a style="color:#52d1ff;" href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
      </table>
      <hr style="border:none;border-top:1px solid #1a2438;margin:16px 0;" />
      <p style="white-space:pre-wrap;line-height:1.6;">${message}</p>
      <p style="color:#93a4c4;font-size:12px;margin-top:24px;">Sent from redheadedstepchildtech.com · mission control</p>
    </div>
  `;
}

function autoReplyHtml(name: string, message: string): string {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#04060c;color:#e6edfa;padding:32px;border-radius:14px;max-width:560px;">
      <p style="letter-spacing:0.24em;text-transform:uppercase;font-size:11px;color:#52d1ff;margin:0 0 12px;">// transmission received</p>
      <h1 style="color:#ffffff;font-size:24px;margin:0 0 16px;">We got your message, ${name}.</h1>
      <p style="color:#c7d3ea;line-height:1.7;margin:0 0 16px;">
        Thanks for reaching out to Redheaded Stepchild Tech. A real human reads every message —
        we'll be in touch shortly. You're not a bother; you're the reason this exists.
      </p>
      <div style="background:#0b1120;border:1px solid #1a2438;border-radius:10px;padding:16px;margin:0 0 20px;">
        <p style="color:#93a4c4;font-size:12px;margin:0 0 8px;">Your message</p>
        <p style="white-space:pre-wrap;line-height:1.6;color:#e6edfa;margin:0;">${message}</p>
      </div>
      <a href="${DREAM_FUNNEL_URL}" style="display:inline-block;background:#ff3b3b;color:#0a0a0a;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:9999px;">
        Explore Dream Funnel &rarr;
      </a>
      <p style="color:#6f8099;font-size:12px;margin-top:28px;">
        Redheaded Stepchild Tech · Montana<br/>
        Boldly go where no software system has gone before.
      </p>
    </div>
  `;
}

export async function POST(req: Request) {
  try {
    const raw = await req.json();

    // Honeypot: real users never fill this. Silently accept + drop bot submissions.
    if ((raw.website ?? "").toString().trim()) {
      return NextResponse.json({ ok: true });
    }

    // Basic rate limiting by client IP.
    const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const name = escapeHtml((raw.name ?? "Anonymous").toString().slice(0, 120).trim() || "Anonymous");
    const email = (raw.email ?? "").toString().slice(0, 254).trim();
    const message = escapeHtml((raw.message ?? "").toString().slice(0, 5000).trim());

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const from = process.env.SENDER_EMAIL || "onboarding@resend.dev";
    const to = process.env.CONTACT_TO_EMAIL || "admin@redheadedstepchildtech.com";
    const safeEmail = escapeHtml(email);

    // 1) Notification to the team (primary — its failure fails the request)
    const { data, error } = await resend.emails.send({
      from: `Redheaded Stepchild Tech <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New contact from ${name}`,
      html: notificationHtml(name, safeEmail, message),
    });

    if (error) {
      console.error("Resend error (notification):", error);
      return NextResponse.json(
        { error: error.message || "Email service rejected the request." },
        { status: 502 }
      );
    }

    // 2) Auto-reply confirmation to the sender (best-effort — never fails the request).
    // In Resend sandbox this only delivers to the account owner; once the domain is
    // verified it will reach any sender. Failures are logged and ignored.
    if (process.env.AUTO_REPLY === "true") {
      try {
        const reply = await resend.emails.send({
          from: `Redheaded Stepchild Tech <${from}>`,
          to: [email],
          subject: "We got your message — Redheaded Stepchild Tech",
          html: autoReplyHtml(name, message),
        });
        if (reply.error) console.warn("Auto-reply skipped:", reply.error.message);
      } catch (e) {
        console.warn("Auto-reply failed (non-blocking):", e);
      }
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message." },
      { status: 500 }
    );
  }
}
