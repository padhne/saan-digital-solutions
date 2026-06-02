import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot";
import CrispChat from "@/components/CrispChat";
import Cursor from "@/components/Cursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://saandigitalsolutions.com"),
  title: {
    default: "SAAN Digital Solutions | Web Development, SEO & Digital Marketing Nepal",
    template: "%s | SAAN Digital Solutions",
  },
  description: "SAAN Digital Solutions is Nepal's #1 full-stack digital agency. Expert web & app development, SEO, GEO optimization, Google & Meta ads, AI automation — all in one team. Based in Kathmandu, serving worldwide.",
  keywords: [
    "SAAN Digital Solutions", "SAAN Digital", "SAAN Solutions", "saandigitalsolutions.com",
    "digital agency Nepal", "digital agency Kathmandu", "web development Nepal",
    "web development Kathmandu", "SEO Nepal", "SEO Kathmandu", "digital marketing Nepal",
    "digital marketing Kathmandu", "app development Nepal", "GEO optimization Nepal",
    "Google ads Nepal", "Facebook ads Nepal", "Meta ads Nepal", "AI automation Nepal",
    "web design Nepal", "software development Nepal", "Nepal digital agency",
    "best digital agency Nepal", "top digital agency Kathmandu",
  ],
  authors: [{ name: "SAAN Digital Solutions", url: "https://saandigitalsolutions.com" }],
  creator: "SAAN Digital Solutions",
  publisher: "SAAN Digital Solutions",
  category: "Digital Marketing Agency",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "SAAN Digital Solutions | Web Development, SEO & Digital Marketing Nepal",
    description: "Nepal's #1 full-stack digital agency. Web development, SEO, GEO, paid ads & AI automation — one team, total execution. Based in Kathmandu.",
    url: "https://saandigitalsolutions.com",
    siteName: "SAAN Digital Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SAAN Digital Solutions — Nepal's #1 Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAAN Digital Solutions | Nepal's #1 Digital Agency",
    description: "Web development, SEO, GEO, paid ads & AI automation for Nepal businesses. Based in Kathmandu.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://saandigitalsolutions.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://saandigitalsolutions.com/#organization",
                  "name": "SAAN Digital Solutions",
                  "alternateName": ["SAAN Digital", "SAAN Solutions", "SAAN"],
                  "url": "https://saandigitalsolutions.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://saandigitalsolutions.com/logo.png",
                    "width": 200,
                    "height": 60,
                  },
                  "description": "Nepal's #1 full-stack digital agency offering web & app development, SEO, GEO optimization, paid ads, content creation, and AI automation.",
                  "foundingDate": "2020",
                  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 10 },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Kathmandu",
                    "addressLocality": "Kathmandu",
                    "addressRegion": "Bagmati Province",
                    "postalCode": "44600",
                    "addressCountry": "NP",
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "email": "hello@saandigitalsolutions.com",
                    "availableLanguage": ["English", "Nepali"],
                  },
                  "areaServed": ["Nepal", "India", "United States", "United Kingdom", "Australia"],
                  "knowsAbout": [
                    "Web Development", "App Development", "Search Engine Optimization",
                    "Generative Engine Optimization", "Digital Marketing", "Paid Advertising",
                    "Content Creation", "AI Automation", "Brand Design",
                  ],
                  "sameAs": [
                    "https://www.facebook.com/saandigitalsolutions",
                    "https://www.instagram.com/saandigitalsolutions",
                    "https://www.linkedin.com/company/saandigitalsolutions",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://saandigitalsolutions.com/#localbusiness",
                  "name": "SAAN Digital Solutions",
                  "image": "https://saandigitalsolutions.com/logo.png",
                  "url": "https://saandigitalsolutions.com",
                  "email": "hello@saandigitalsolutions.com",
                  "priceRange": "NPR 25,000+",
                  "currenciesAccepted": "NPR, USD",
                  "paymentAccepted": "Bank Transfer, eSewa, Khalti",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Kathmandu",
                    "addressRegion": "Bagmati Province",
                    "postalCode": "44600",
                    "addressCountry": "NP",
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 27.7172,
                    "longitude": 85.3240,
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00",
                  },
                  "servedArea": [
                    { "@type": "City", "name": "Kathmandu" },
                    { "@type": "City", "name": "Pokhara" },
                    { "@type": "City", "name": "Lalitpur" },
                    { "@type": "Country", "name": "Nepal" },
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web & App Development" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO & GEO Optimization" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paid Ads Campaigns" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Design & UI/UX" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Creation" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation" } },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://saandigitalsolutions.com/#website",
                  "url": "https://saandigitalsolutions.com",
                  "name": "SAAN Digital Solutions",
                  "description": "Nepal's #1 full-stack digital agency — web development, SEO, GEO, ads & AI automation.",
                  "inLanguage": "en-US",
                  "publisher": { "@id": "https://saandigitalsolutions.com/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": { "@type": "EntryPoint", "urlTemplate": "https://saandigitalsolutions.com/blog?q={search_term_string}" },
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
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
