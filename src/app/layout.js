import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactHeader from "@/components/headers/Contact.header";
import MainHeader from "@/components/headers/MainHeader";
import Footer from "@/components/footer/Footer";

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
  description: "We are the online helpers which can provide you the online service at home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden text-white`}
      >
        <ContactHeader />
        <MainHeader />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
