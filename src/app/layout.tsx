import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMenu Technology — Digital Menus & Smart Ordering for Restaurants",
  description:
    "QR digital menus, smart table ordering, and a live kitchen dashboard for independent restaurants. Now onboarding founding partner restaurants.",
  keywords: [
    "digital menu",
    "QR menu",
    "restaurant ordering system",
    "table ordering",
    "restaurant technology",
    "menu software",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://emenutechnology.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EMenu Technology — Digital Menus & Smart Ordering for Restaurants",
    description:
      "QR digital menus, smart table ordering, and a live kitchen dashboard for independent restaurants.",
    type: "website",
    url: "https://emenutechnology.com",
    siteName: "EMenu Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMenu Technology — Digital Menus & Smart Ordering for Restaurants",
    description:
      "QR digital menus, smart table ordering, and a live kitchen dashboard for independent restaurants.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EMenu Technology",
  url: "https://emenutechnology.com",
  description:
    "Digital menus, smart table ordering, and kitchen dashboards for restaurants.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "kshitij@emenutechnology.com",
    telephone: "+27-67-409-8289",
    contactType: "sales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
