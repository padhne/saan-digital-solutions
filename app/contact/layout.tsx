import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact SAAN Digital Solutions | Free Digital Consultation Nepal",
  description: "Get a free strategy consultation with SAAN Digital Solutions. Reach our Kathmandu team via form, email, or WhatsApp. Web development, SEO & digital marketing experts ready to help.",
  keywords: [
    "contact SAAN Digital Solutions", "free consultation Nepal digital agency",
    "hire digital agency Nepal", "web development quote Nepal", "SEO consultation Nepal",
    "contact SAAN Digital Kathmandu", "digital agency contact Nepal",
  ],
  alternates: { canonical: "https://saandigitalsolutions.com/contact" },
  openGraph: {
    title: "Contact SAAN Digital Solutions | Free Digital Consultation",
    description: "Book a free strategy consultation with Nepal's #1 digital agency. We'll audit your digital presence and map the right growth strategy.",
    url: "https://saandigitalsolutions.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
