import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const raw = await req.json();
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

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#0b1120;color:#e6edfa;padding:24px;border-radius:12px;">
        <h2 style="color:#ff3b3b;margin:0 0 16px;">New message from RST Tech website</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 0;color:#93a4c4;width:90px;">Name</td><td style="padding:6px 0;">${name}</td></tr>
          <tr><td style="padding:6px 0;color:#93a4c4;">Email</td><td style="padding:6px 0;"><a style="color:#52d1ff;" href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #1a2438;margin:16px 0;" />
        <p style="white-space:pre-wrap;line-height:1.6;">${message}</p>
        <p style="color:#93a4c4;font-size:12px;margin-top:24px;">Sent from redheadedstepchildtech.com · mission control</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: `RST Tech <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New contact from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Email service rejected the request." },
        { status: 502 }
      );
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
