import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Cairo } from "next/font/google";
import Header from '@/components/Header'; // Import the Header component
import Footer from "@/components/Footer";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "فريق خادم ضيف الرحمن التطوعي",
  description: "الموقع الرسمي لفريق خادم ضيف الرحمن التطوعي. نعمل بشغف لخدمة ضيوف الرحمن من خلال مبادرات متنوعة. تعرف على قيمنا، أهدافنا، وكيف يمكنك أن تكون جزءًا من هذا العمل النبيل.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
