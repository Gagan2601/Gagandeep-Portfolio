import { NextRequest, NextResponse } from "next/server";
import nodemailer, { SendMailOptions, Transporter } from "nodemailer";

interface RequestBody {
  email: string;
  subject: string;
  message: string;
}

const transporter: Transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest, res: NextResponse) {
  const bodyText = await req.text();
  const body = JSON.parse(bodyText);
  console.log("Server-side body:", body);
  console.log("Server-side body:", body);
  const { email, subject, message } = body as RequestBody;
  try {
    const mailOptions: SendMailOptions = {
      from: `${email}`,
      to: `${process.env.SMTP_MAIL}`,
      subject: `${email}, ${subject}`,
      text: `${message}`,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json(mailOptions);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
