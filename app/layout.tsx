import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import ChatWidget from "./components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OG_IMAGE = "https://opengraph.b-cdn.net/production/images/f52c8273-3f88-45dd-9aa3-b2ac122b7ee5.png?token=y2X_mrAmcrxqA-CQ51dmskTKc3q39MDY0xlCLA92Vsc&height=612&width=1200&expires=33281173115"

export const metadata: Metadata = {
  metadataBase: new URL("https://astromaya.neuralcodelab.com"),
  title: {
    default: "Astro Maya — Aprende los Idiomas Mayas de Guatemala",
    template: "%s | Astro Maya",
  },
  description: "Aprende K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil gratis. La plataforma educativa líder para preservar y enseñar las lenguas mayas de Guatemala.",
  keywords: [
    "idiomas mayas guatemala",
    "aprender kiche",
    "aprender qeqchi",
    "aprender kaqchikel",
    "aprender mam",
    "aprender tzutujil",
    "lenguas mayas",
    "maya language learning",
    "guatemalan indigenous languages",
    "lecciones mayas gratis",
    "cursos idiomas mayas",
    "plataforma educativa mayas",
    "idiomas indigenas guatemala",
    "kiche lessons",
    "learn maya language",
    "ALMG",
    "MINEDUC idiomas mayas",
  ],
  authors: [{ name: "Astro Maya", url: "https://astromaya.neuralcodelab.com" }],
  creator: "Astro Maya",
  publisher: "Astro Maya",
  category: "education",
  openGraph: {
    title: "Astro Maya — Aprende los Idiomas Mayas de Guatemala",
    description: "Aprende K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil gratis. La plataforma educativa líder para preservar y enseñar las lenguas mayas de Guatemala.",
    url: "https://astromaya.neuralcodelab.com/",
    siteName: "Astro Maya",
    images: [{ url: OG_IMAGE, width: 1200, height: 612, alt: "Astro Maya — Aprende los Idiomas Mayas de Guatemala" }],
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astro Maya — Aprende los Idiomas Mayas de Guatemala",
    description: "Aprende K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil gratis.",
    images: [OG_IMAGE],
    site: "@astromaya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  alternates: {
    canonical: "https://astromaya.neuralcodelab.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Astro Maya",
              url: "https://astromaya.neuralcodelab.com",
              logo: "https://astromaya.neuralcodelab.com/astromaya-logo.svg",
              description: "Plataforma educativa para aprender y preservar los idiomas mayas de Guatemala: K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil.",
              areaServed: [
                { "@type": "Country", name: "Guatemala" },
                { "@type": "Country", name: "Mexico" },
                { "@type": "Country", name: "United States" },
              ],
              knowsAbout: ["K'iche'", "Q'eqchi'", "Kaqchikel", "Mam", "Tz'utujil", "Maya languages", "Guatemalan indigenous languages"],
              inLanguage: "es",
              sameAs: [],
            }),
          }}
        />
        {children}
        <ScrollToTop />
        <CookieBanner />
        <ChatWidget />
      </body>
    </html>
  );
}
