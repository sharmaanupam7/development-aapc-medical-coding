import "server-only";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.EMAIL_FROM || "Development AAPC Medical Coding <onboarding@resend.dev>";

export async function sendPasswordResetEmail({
  to,
  resetUrl,
  firstName,
}: {
  to: string;
  resetUrl: string;
  firstName?: string | null;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const displayName = firstName?.trim() || "Student";

  const { data, error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [to],
    subject: "Reset Your Password - Development AAPC Medical Coding",

    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Password Reset</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 0;
            background-color: #f8fafc;
            font-family: Arial, Helvetica, sans-serif;
            color: #334155;
          "
        >
          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="padding: 40px 16px;"
          >
            <tr>
              <td align="center">

                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="
                    max-width: 560px;
                    background-color: #ffffff;
                    border: 1px solid #e2e8f0;
                  "
                >

                  <!-- Header -->
                  <tr>
                    <td
                      style="
                        padding: 28px 32px;
                        background-color: #0f766e;
                        text-align: center;
                      "
                    >
                      <h1
                        style="
                          margin: 0;
                          color: #ffffff;
                          font-size: 22px;
                          font-weight: 700;
                        "
                      >
                        Development AAPC Medical Coding
                      </h1>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 32px;">

                      <p
                        style="
                          margin: 0 0 16px;
                          font-size: 16px;
                          line-height: 1.6;
                        "
                      >
                        Hello ${escapeHtml(displayName)},
                      </p>

                      <p
                        style="
                          margin: 0 0 16px;
                          font-size: 15px;
                          line-height: 1.6;
                        "
                      >
                        We received a request to reset the password for your
                        Development AAPC Medical Coding account.
                      </p>

                      <p
                        style="
                          margin: 0 0 24px;
                          font-size: 15px;
                          line-height: 1.6;
                        "
                      >
                        Click the button below to create a new password.
                      </p>

                      <!-- Button -->
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="margin: 0 auto 28px;"
                      >
                        <tr>
                          <td
                            align="center"
                            style="
                              background-color: #0f766e;
                              border-radius: 4px;
                            "
                          >
                            <a
                              href="${escapeHtml(resetUrl)}"
                              style="
                                display: inline-block;
                                padding: 13px 24px;
                                color: #ffffff;
                                text-decoration: none;
                                font-size: 14px;
                                font-weight: 700;
                              "
                            >
                              Reset Password
                            </a>
                          </td>
                        </tr>
                      </table>

                      <p
                        style="
                          margin: 0 0 12px;
                          font-size: 13px;
                          line-height: 1.6;
                          color: #64748b;
                        "
                      >
                        If the button does not work, copy and paste the
                        following link into your browser:
                      </p>

                      <p
                        style="
                          margin: 0 0 24px;
                          font-size: 12px;
                          line-height: 1.6;
                          word-break: break-all;
                          color: #0f766e;
                        "
                      >
                        ${escapeHtml(resetUrl)}
                      </p>

                      <p
                        style="
                          margin: 0 0 12px;
                          font-size: 13px;
                          line-height: 1.6;
                          color: #64748b;
                        "
                      >
                        If you did not request a password reset, you can safely
                        ignore this email. Your password will remain unchanged.
                      </p>

                      <p
                        style="
                          margin: 0;
                          font-size: 13px;
                          line-height: 1.6;
                          color: #64748b;
                        "
                      >
                        For security reasons, this password-reset link will
                        expire according to the reset-token expiry configured
                        in your application.
                      </p>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td
                      style="
                        padding: 20px 32px;
                        background-color: #f8fafc;
                        border-top: 1px solid #e2e8f0;
                        text-align: center;
                      "
                    >
                      <p
                        style="
                          margin: 0;
                          font-size: 12px;
                          color: #94a3b8;
                        "
                      >
                        © Development AAPC Medical Coding
                      </p>
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

  if (error) {
    console.error("Password reset email error:", error);

    throw new Error("Unable to send password reset email.");
  }

  return data;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
