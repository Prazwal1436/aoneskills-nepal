import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import PerformanceMonitor from "../components/PerformanceMonitor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aoneskill.com.np"),
  title: {
    default: "AOne Skills International - Leading IT Company Nepal | Web Development, Mobile Apps, Software Solutions",
    template: "%s | AOne Skills International Nepal",
  },
  description:
    "Leading IT services company in Nepal providing professional web development, mobile app development, e-commerce solutions, digital marketing, custom software development, and IT training. Serving businesses across Kathmandu, Pokhara, Chitwan, and all Nepal with local expertise and international standards.",
  keywords: [
    "IT services Nepal",
    "web development Nepal", 
    "mobile app development Nepal",
    "software development Nepal",
    "website development Kathmandu",
    "e-commerce development Nepal",
    "digital marketing Nepal",
    "IT company Nepal",
    "software company Nepal",
    "web design Nepal",
    "mobile app Nepal",
    "IT training Nepal",
    "custom software Nepal",
    "business website Nepal",
    "online store Nepal",
    "IT consulting Nepal",
    "technology services Nepal",
    "professional website Nepal",
    "Nepali IT company",
    "Kathmandu IT services",
    "Pokhara web development",
    "Nepal software solutions",
    "IT services Kathmandu",
    "web development company Nepal",
    "mobile app development company Nepal",
    "Laravel development Nepal",
    "React development Nepal",
    "WordPress development Nepal",
    "Flutter app development Nepal",
    "PHP development Nepal",
    "MySQL development Nepal",
    "eSewa integration Nepal",
    "Khalti integration Nepal",
    "Nepal payment gateway integration"
  ],
  authors: [{ name: "AOne Skills International Nepal" }],
  creator: "AOne Skills International",
  publisher: "AOne Skills International Nepal",
  category: "Technology",
  classification: "IT Services and Software Development",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://aoneskill.com.np",
    languages: {
      'en': 'https://aoneskill.com.np',
      'ne': 'https://aoneskill.com.np/ne',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ne_NP"],
    url: "https://aoneskill.com.np",
    title: "AOne Skills International - Leading IT Company Nepal | Web Development, Mobile Apps",
    description:
      "Professional IT services in Nepal. Web development, mobile apps, e-commerce solutions, digital marketing, and custom software development for Nepali businesses. Expert team, local support, international standards.",
    siteName: "AOne Skills International Nepal",
    images: [
      {
        url: "/og-website.png",
        width: 1200,
        height: 630,
        alt: "AOne Skills International - Leading IT Company Nepal",
        type: "image/png",
      },
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "AOne Skills International Nepal Logo",
        type: "image/png",
      },
    ],
    countryName: "Nepal",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aoneskillnepal",
    creator: "@aoneskillnepal",
    title: "AOne Skills International - Leading IT Company Nepal",
    description:
      "Professional IT services in Nepal. Web development, mobile apps, e-commerce, digital marketing, and software solutions for Nepali businesses.",
    images: {
      url: "/twitter-website.jpg",
      alt: "AOne Skills International - IT Services Nepal",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large", 
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo.png", type: "image/png", sizes: "500x500" },
    ],
    apple: [
      { url: "/logo.png", sizes: "500x500" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-search-console-verification-code",
    yandex: "your-yandex-verification-code", 
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-webmaster-verification-code",
      "facebook-domain-verification": "your-facebook-domain-verification-code",
      "pinterest-site-verification": "your-pinterest-verification-code",
      "yandex-verification": "your-yandex-verification-code",
      "baidu-site-verification": "your-baidu-verification-code",
      "naver-site-verification": "your-naver-verification-code",
    },
  },
  other: {
    "geo.region": "NP",
    "geo.placename": "Kathmandu, Nepal",
    "geo.position": "27.7172;85.3240",
    "ICBM": "27.7172, 85.3240",
    "language": "en, ne",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "7 days",
    "theme-color": "#3B82F6",
    "msapplication-TileColor": "#3B82F6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="application-name" content="AOne Skills International" />
        <meta name="msapplication-tooltip" content="Leading IT Company Nepal" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
        
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5Y2T9CWNX4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5Y2T9CWNX4');
            `,
          }}
        />
        
        {/* Hotjar Tracking Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:XXXXXXX,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
        
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1283005036962428');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1283005036962428&ev=PageView&noscript=1"
          />
        </noscript>
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://aoneskill.com.np/#localbusiness",
              "name": "AOne Skills International",
              "image": "https://aoneskill.com.np/images/aone-skills-office.jpg",
              "telephone": "+977-1-4567890",
              "email": "info@aoneskill.com.np",
              "url": "https://aoneskill.com.np",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Putalisadak, New Baneshwor",
                "addressLocality": "Kathmandu",
                "addressRegion": "Bagmati Province",
                "postalCode": "44600",
                "addressCountry": "NP"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.7172,
                "longitude": 85.3240
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/aoneskillnepal",
                "https://www.linkedin.com/company/aoneskillnepal",
                "https://twitter.com/aoneskillnepal"
              ],
              "priceRange": "NPR 35000 - NPR 450000",
              "paymentAccepted": ["Cash", "Bank Transfer", "eSewa", "Khalti", "IME Pay"],
              "currenciesAccepted": "NPR"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        <Navigation />
        <PerformanceMonitor />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
