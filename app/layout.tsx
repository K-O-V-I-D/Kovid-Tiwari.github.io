import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScrolling from "./components/ui/SmoothScrolling";
import "./globals.css";

const aeonikRegular = localFont({
  src: "./fonts/Aeonik-Regular.ttf",
  variable: "--font-aeonik-sans",
  weight: "100, 700",
  display: "swap",
});

const sofiaProRegular = localFont({
  src: "./fonts/Sofia-Pro-Regular.otf",
  variable: "--font-sofiaPro-sans",
  weight: "200, 600",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kovid Tiwari | Portfolio",
  description:
    "Greetings! Final year Integrated MTech Computer Science Engineering student at Vellore Institute of Technology, Bhopal specialization in Cyber Security & Digital Forensics. Driven by a deep passion for Secured Software Development.Always wants to deep dive into the tech world to learn, improve and develop new skills everyday.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aeonikRegular.variable} ${sofiaProRegular.variable}  antialiased`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
