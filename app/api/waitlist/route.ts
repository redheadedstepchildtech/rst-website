import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT = 8;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const raw = await req.json();
    if ((raw.website ?? "").toString().trim()) return NextResponse.json({ ok: true }); // honeypot

    const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
    }

    const email = (raw.email ?? "").toString().slice(0, 254).trim();
    const system = esc((raw.system ?? "a system").toString().slice(0, 80).trim() || "a system");
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const from = process.env.SENDER_EMAIL || "onboarding@resend.dev";
    const to = process.env.CONTACT_TO_EMAIL || "admin@redheadedstepchildtech.com";
    const safeEmail = esc(email);

    // Notify the team (primary)
    const { error } = await resend.emails.send({
      from: `Redheaded Stepchild Tech <${from}>`,
      to: [to],
      replyTo: email,
      subject: `Early-access signup: ${system}`,
      html: `<div style="font-family:Arial,sans-serif;background:#0b1120;color:#e6edfa;padding:24px;border-radius:12px;">
        <h2 style="color:#ff3b3b;margin:0 0 12px;">New waitlist signup</h2>
        <p style="margin:0 0 6px;"><strong style="color:#52d1ff;">System:</strong> ${system}</p>
        <p style="margin:0;"><strong style="color:#52d1ff;">Email:</strong> <a style="color:#52d1ff;" href="mailto:${safeEmail}">${safeEmail}</a></p>
      </div>`,
    });
    if (error) {
      console.error("Waitlist notify error:", error);
      return NextResponse.json({ error: error.message || "Could not join the waitlist." }, { status: 502 });
    }

    // Confirmation to subscriber (best-effort)
    if (process.env.AUTO_REPLY === "true") {
      try {
        await resend.emails.send({
          from: `Redheaded Stepchild Tech <${from}>`,
          to: [email],
          subject: `You're on the list — ${system}`,
          html: `<div style="font-family:Arial,sans-serif;background:#04060c;color:#e6edfa;padding:32px;border-radius:14px;max-width:520px;">
            <p style="letter-spacing:.24em;text-transform:uppercase;font-size:11px;color:#52d1ff;margin:0 0 12px;">// early access confirmed</p>
            <h1 style="color:#fff;font-size:22px;margin:0 0 14px;">You're on the list for ${system}.</h1>
            <p style="color:#c7d3ea;line-height:1.7;margin:0 0 16px;">Thanks for your interest. We'll email you the moment ${system} is ready for early access — no spam, ever.</p>
            <p style="color:#6f8099;font-size:12px;margin-top:24px;">Redheaded Stepchild Tech · Montana<br/>Boldly go where no software system has gone before.</p>
          </div>`,
        });
      } catch (e) {
        console.warn("Waitlist confirmation skipped:", e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waitlist route error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
