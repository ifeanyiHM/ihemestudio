import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, service, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // ── Mail to the studio ─────────────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Iheme Studio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:32px;background:#08090A;color:#e2e8f0;border:1px solid rgba(255,255,255,0.06)">
          <p style="color:#00D4AA;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:24px">
            Iheme Studio — New Project Enquiry
          </p>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#94a3b8;font-size:12px;width:120px">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#94a3b8;font-size:12px">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">
                <a href="mailto:${email}" style="color:#00D4AA;text-decoration:none">${email}</a>
              </td>
            </tr>
            ${
              service
                ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#94a3b8;font-size:12px">Service</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">${service}</td>
            </tr>`
                : ""
            }
            ${
              budget
                ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#94a3b8;font-size:12px">Budget</td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px">${budget}</td>
            </tr>`
                : ""
            }
          </table>
          <div style="margin-top:24px">
            <p style="color:#94a3b8;font-size:12px;margin-bottom:8px">Message</p>
            <p style="font-size:14px;line-height:1.7;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      `,
    });

    // ── Auto-reply to the sender ───────────────────────────────────────────────
    await transporter.sendMail({
      from: `"Iheme Studio" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "We received your message — Iheme Studio",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Message Received — Iheme Studio</title>
        </head>
        <body style="margin:0;padding:0;background:#0D0F10;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D0F10;padding:48px 16px;">
            <tr>
              <td align="center">
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">

                  <!-- Header / Logo -->
                  <tr>
                    <td style="padding-bottom:32px;">
                        <table table cellpadding="0" cellspacing="0">
                            <tr>
                                <td>
                                <img
                                    src="https://ihemestudio.vercel.app/logo.png"
                                    alt="Iheme Studio"
                                    width="36"
                                    height="36"
                                    style="display:block;width:36px;height:36px;"
                                />
                                </td>
                                
                            </tr>
                        </table>    
                    </td>
                  </tr>

                  <!-- Main card -->
                  <tr>
                    <td style="background:#111316;border:1px solid rgba(255,255,255,0.07);padding:0;">

                      <!-- Teal accent bar -->
                      <div style="height:3px;background:linear-gradient(to right,#00D4AA,#00a88a);"></div>

                      <!-- Body -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:40px 40px 32px;">

                            <!-- Status pill -->
                            <div style="display:inline-block;padding:5px 14px;border:1px solid rgba(0,212,170,0.3);background:rgba(0,212,170,0.07);margin-bottom:28px;">
                              <span style="font-size:11px;font-family:monospace;color:#00D4AA;letter-spacing:0.15em;text-transform:uppercase;">
                                ● Message Received
                              </span>
                            </div>

                            <!-- Greeting -->
                            <h1 style="margin:0 0 16px;font-size:26px;font-weight:700;color:#ffffff;line-height:1.2;letter-spacing:-0.01em;">
                              Thanks for reaching out, ${name}.
                            </h1>
                            <p style="margin:0 0 28px;font-size:15px;color:#94a3b8;line-height:1.7;">
                              We've received your enquiry and will review it shortly.
                              Expect a reply from us within <span style="color:#ffffff;font-weight:500;">24 hours</span>.
                            </p>

                            <!-- Divider -->
                            <div style="height:1px;background:rgba(255,255,255,0.07);margin-bottom:28px;"></div>

                            <!-- Message preview label -->
                            <p style="margin:0 0 14px;font-size:11px;font-family:monospace;color:#00D4AA;letter-spacing:0.15em;text-transform:uppercase;">
                              Your Message
                            </p>

                            <!-- Message details table -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid rgba(255,255,255,0.07);margin-bottom:20px;">
                              <tr>
                                <td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.02);">
                                  <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td style="font-size:11px;font-family:monospace;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;width:90px;">From</td>
                                      <td style="font-size:13px;color:#e2e8f0;">${name}</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.07);">
                                  <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td style="font-size:11px;font-family:monospace;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;width:90px;">Email</td>
                                      <td style="font-size:13px;color:#e2e8f0;">${email}</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              ${
                                service
                                  ? `
                              <tr>
                                <td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.02);">
                                  <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td style="font-size:11px;font-family:monospace;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;width:90px;">Service</td>
                                      <td style="font-size:13px;color:#e2e8f0;">${service}</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>`
                                  : ""
                              }
                              ${
                                budget
                                  ? `
                              <tr>
                                <td style="padding:12px 16px;border-bottom:1px solid rgba(255,255,255,0.07);">
                                  <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td style="font-size:11px;font-family:monospace;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;width:90px;">Budget</td>
                                      <td style="font-size:13px;color:#e2e8f0;">${budget}</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>`
                                  : ""
                              }
                              <tr>
                                <td style="padding:16px;">
                                  <p style="margin:0 0 8px;font-size:11px;font-family:monospace;color:#64748b;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
                                  <p style="margin:0;font-size:13px;color:#94a3b8;line-height:1.75;white-space:pre-wrap;">${message}</p>
                                </td>
                              </tr>
                            </table>

                            <!-- What happens next -->
                            <div style="background:rgba(0,212,170,0.05);border:1px solid rgba(0,212,170,0.15);padding:20px;">
                              <p style="margin:0 0 10px;font-size:11px;font-family:monospace;color:#00D4AA;letter-spacing:0.15em;text-transform:uppercase;">What happens next</p>
                              <table cellpadding="0" cellspacing="0">
                                <tr>
                                  <td style="padding:4px 0;vertical-align:top;">
                                    <span style="display:inline-block;width:6px;height:6px;background:#00D4AA;margin-right:10px;margin-top:5px;"></span>
                                  </td>
                                  <td style="padding:4px 0;font-size:13px;color:#94a3b8;line-height:1.6;">We review your enquiry and assess scope.</td>
                                </tr>
                                <tr>
                                  <td style="padding:4px 0;vertical-align:top;">
                                    <span style="display:inline-block;width:6px;height:6px;background:#00D4AA;margin-right:10px;margin-top:5px;"></span>
                                  </td>
                                  <td style="padding:4px 0;font-size:13px;color:#94a3b8;line-height:1.6;">We'll reply within 24 hours with next steps or clarifying questions.</td>
                                </tr>
                                <tr>
                                  <td style="padding:4px 0;vertical-align:top;">
                                    <span style="display:inline-block;width:6px;height:6px;background:#00D4AA;margin-right:10px;margin-top:5px;"></span>
                                  </td>
                                  <td style="padding:4px 0;font-size:13px;color:#94a3b8;line-height:1.6;">We schedule a discovery call to align on goals and timeline.</td>
                                </tr>
                              </table>
                            </div>

                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding:28px 0 0;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td>
                                  <p style="margin:0;font-size:12px;color:#475569;font-family:monospace;">
                                    © ${new Date().getFullYear()} Iheme Studio · Lagos, Nigeria
                                  </p>
                                  <p style="margin:4px 0 0;font-size:12px;color:#475569;font-family:monospace;">
                                    <a href="mailto:ifeanyihm@gmail.com" style="color:#00D4AA;text-decoration:none;">ifeanyihm@gmail.com</a>
                                    &nbsp;·&nbsp;
                                    <a href="https://ihemestudio.vercel.app" style="color:#00D4AA;text-decoration:none;">ihemestudio.vercel.app</a>
                                  </p>
                                </td>
                                <td align="right">
                                  <p style="margin:0;font-size:11px;color:#334155;font-family:monospace;letter-spacing:0.05em;">
                                    BUILT WITH CARE
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
