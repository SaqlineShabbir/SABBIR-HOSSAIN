import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_USER_PASSWORD,
  },
});

export const POST = async (req) => {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "sabbir0911hossain@gmail.com",
      subject: `${subject}`,
      text: `You have a new message from ${name} (His email is ${email},and Phone: ${phone}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Send successful" }, { status: 200 });
  } catch (error) {
    console.error("Mail sending error:", error);
    return NextResponse.json(
      {
        message: "There was an error sending the email.",
      },
      { status: 500 }
    );
  }
};
