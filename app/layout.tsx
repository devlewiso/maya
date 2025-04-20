
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astro Maya",
  description: "Uniendo culturas a través del idioma",
  openGraph: {
    title: "Astro Maya",
    description: "Uniendo culturas a través del idioma",
    url: "https://astromaya.neuralcodelab.com/",
    siteName: "Astro Maya",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/f52c8273-3f88-45dd-9aa3-b2ac122b7ee5.png?token=y2X_mrAmcrxqA-CQ51dmskTKc3q39MDY0xlCLA92Vsc&height=612&width=1200&expires=33281173115",
        width: 1200,
        height: 612,
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astro Maya",
    description: "Uniendo culturas a través del idioma",
    images: ["https://opengraph.b-cdn.net/production/images/f52c8273-3f88-45dd-9aa3-b2ac122b7ee5.png?token=y2X_mrAmcrxqA-CQ51dmskTKc3q39MDY0xlCLA92Vsc&height=612&width=1200&expires=33281173115"],
  },
  metadataBase: new URL("https://astromaya.neuralcodelab.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1Q9GZKZF0V" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Q9GZKZF0V');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
