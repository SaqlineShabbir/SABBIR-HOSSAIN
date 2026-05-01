import localFont from "next/font/local";
import CustomCursor from "../v1/components/CustomCursor";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Sabbir Hossain | Software Developer",
  description:
    "Full Stack Developer specialising in React, Next.js, Node.js and MongoDB. Building exceptional digital experiences.",
  keywords: [
    "Sabbir Hossain", "Software Developer", "Next.js Developer",
    "React Developer", "Full Stack Developer", "Bangladesh",
  ],
  icons: {
    icon:        "/favicon.png",
    shortcut:    "/favicon.png",
    apple:       "/favicon.png",
  },
  openGraph: {
    title:       "Sabbir Hossain | Software Developer",
    description: "Full Stack Developer specialising in React, Next.js, Node.js and MongoDB.",
    type:        "website",
    images:      [{ url: "/favicon.png", width: 400, height: 400, alt: "Sabbir Hossain" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050816]`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
