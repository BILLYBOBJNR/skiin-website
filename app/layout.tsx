import type { Metadata } from "next";
import "./globals.css";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "SKiiN Laser & Aesthetics — Expert Medical-Grade Treatments",
    template: "%s | SKiiN Laser & Aesthetics",
  },
  description:
    "SKiiN Laser & Aesthetics in Hartley, Kent. Medical-grade Laser Hair Removal, PermaHYDRA Facials, Chemical Peels, Microneedling, Dermaplaning and LED Light Therapy. Expert care. Visible results.",
  keywords: [
    "laser hair removal Kent",
    "aesthetics clinic Hartley",
    "medical grade facials",
    "microneedling Kent",
    "chemical peel Longfield",
    "SKiiN Laser",
  ],
  openGraph: {
    title: "SKiiN Laser & Aesthetics",
    description: "Advanced medical-grade aesthetic treatments in Hartley, Kent.",
    type: "website",
    locale: "en_GB",
  },
};

const phorestSubdomain = process.env.NEXT_PUBLIC_PHOREST_SUBDOMAIN || "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head />
      <body>
        <AnnouncementBanner />
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Phorest Online Booking Widget */}
        {phorestSubdomain && (
          <>
            <Script
              src="https://booking-widget.phorestcdn.com/obwidget.bundle.js"
              strategy="afterInteractive"
            />
            <Script id="phorest-widget" strategy="afterInteractive">
              {`window.widget = new OBWidget('${phorestSubdomain}', { hide_widget_button: true })`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
