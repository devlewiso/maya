import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import ChatWidget from "./components/ChatWidget";
import ReferralBanner from "./components/ReferralBanner";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astromaya.neuralcodelab.com"),
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
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
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astro Maya — Aprende los Idiomas Mayas de Guatemala",
    description: "Aprende K'iche', Q'eqchi', Kaqchikel, Mam y Tz'utujil gratis.",
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
    <html lang="es" className={`${jakarta.variable} ${plexMono.variable}`} suppressHydrationWarning>
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
      <body className="antialiased" suppressHydrationWarning>
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
        <ReferralBanner />
        {children}
        <ScrollToTop />
        <CookieBanner />
        <ChatWidget />
      </body>
    </html>
  );
}
