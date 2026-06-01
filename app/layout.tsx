import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot";
import CrispChat from "@/components/CrispChat";
import Cursor from "@/components/Cursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "SAAN Digital Solutions — From Development to Execution | Nepal's #1 Digital Growth Platform",
  description: "SAAN Digital Solutions is Nepal's leading full-stack digital platform — web & app development, SEO, GEO, AI marketing, ads campaigns, content creation, and growth analytics.",
  keywords: "digital agency Nepal, software development Nepal, SEO Nepal, web development Kathmandu, digital marketing Nepal",
  openGraph: {
    title: "SAAN Digital Solutions — From Development to Execution",
    description: "Nepal's #1 digital growth platform. Dev to execution in one team.",
    url: "https://saandigital.com",
    siteName: "SAAN Digital Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAAN Digital Solutions — Nepal's #1 Digital Growth Platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
        <CrispChat />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
