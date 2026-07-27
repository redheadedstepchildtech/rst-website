import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    const from = process.env.SENDER_EMAIL || "onboarding@resend.dev";
    const to = process.env.CONTACT_TO_EMAIL || "admin@redheadedstepchildtech.com";
    const safeName = (name || "Anonymous").toString().slice(0, 120);

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#0b1120;color:#e6edfa;padding:24px;border-radius:12px;">
        <h2 style="color:#ff3b3b;margin:0 0 16px;">New message from RST Tech website</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 0;color:#93a4c4;width:90px;">Name</td><td style="padding:6px 0;">${safeName}</td></tr>
          <tr><td style="padding:6px 0;color:#93a4c4;">Email</td><td style="padding:6px 0;"><a style="color:#52d1ff;" href="mailto:${email}">${email}</a></td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #1a2438;margin:16px 0;" />
        <p style="white-space:pre-wrap;line-height:1.6;">${message.toString().slice(0, 5000)}</p>
        <p style="color:#93a4c4;font-size:12px;margin-top:24px;">Sent from redheadedstepchildtech.com · mission control</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: `RST Tech <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New contact from ${safeName}`,
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
