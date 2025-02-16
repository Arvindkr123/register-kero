import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactHeader from "@/components/headers/Contact.header";
import MainHeader from "@/components/headers/MainHeader";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import WhatsAppButton from "@/components/whats-appIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome to Online help 24X7",
  description:
    "We are the online helpers which can provide you the online service at home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Online Help 24X7</title>
        <meta name="description" content="we are online help to online work related form filling and ticket booking" />
        <meta name="keywords" content="form filling, ticket booking, school projects, html, css, javascript, reactjs, mern stack, fullStack, ebook, resume, jobs, flight booking, busbooking, private job, job posting" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Online help 24X7" />
        <meta property="og:description" content="A description for social media sharing." />
        <meta property="og:url" content="https://register-kero-pi.vercel.app" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden text-white`}
      >
        <ContactHeader />
        <MainHeader />
        {children}
        <WhatsAppButton />

        {/* <Footer /> */}
      </body>
    </html>
  );
}
