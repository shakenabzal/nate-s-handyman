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
  title: "Nate's Handyman Service | Chicago Reliable Repairs",
  description:
    "Nate's Handyman Service offers plumbing, electrical, painting, and general home repairs in Chicago. Fast, honest, and reliable service.",
  keywords:
    "Chicago handyman, home repairs Chicago, plumbing Chicago, electrical repairs, painting service, Nate's Handyman",
  authors: [{ name: "Nate's Handyman Service" }],
  openGraph: {
    title: "Nate's Handyman Service | Chicago Reliable Repairs",
    description:
      "Trusted handyman services in Chicago. Plumbing, electrical, painting, and general repairs.",
    type: "website",
    url: "https://www.yourdomain.com",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
  metadataBase: new URL("https://www.yourdomain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD LocalBusiness schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Handyman",
              name: "Nate's Handyman Service",
              image: "https://www.yourdomain.com/images/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Chicago",
                addressRegion: "IL",
                postalCode: "60601",
                addressCountry: "US",
              },
              telephone: "+1 630-259-6403",
              url: "https://www.yourdomain.com",
              priceRange: "$$",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
