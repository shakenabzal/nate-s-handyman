import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nate's Handyman Service | Reliable Home Repairs in Chicago",
  description: "Nate's Handyman Service provides plumbing, electrical, painting, and general home repairs in Chicago. Trusted, licensed, and reliable.",
  keywords: [
    "Chicago handyman service",
    "Handyman near me Chicago",
    "Home repair Chicago",
    "Plumbing repair Chicago",
    "Electrical repair Chicago",
    "Painting services Chicago"
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Nate's Handyman Service",
              "image": "https://yourdomain.com/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main St",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "postalCode": "60601",
                "addressCountry": "US"
              },
              "telephone": "+1-630-259-6403",
              "priceRange": "$$",
              "url": "https://nateshandyman.org",
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourpage"
              ],
              "description": "Nate's Handyman Service provides plumbing, electrical, painting, and general home repairs in Chicago. Trusted, licensed, and reliable."
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
