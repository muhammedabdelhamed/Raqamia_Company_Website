import type { Metadata, Viewport } from "next";
import "./globals.css";
import DeferredAnalytics from "@/components/DeferredAnalytics";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  colorScheme: "dark",
};

const SITE_INFO = {
  title: "رقمية | حلول احترافية لووردبريس وشوبيفاي",
  description: "نبتكر، نصمّم، ونطور مواقعك ومتاجرك على WordPress & Shopify. حلول احترافية لزيادة مبيعاتك وتواجدك الرقمي بأحدث التقنيات.",
  url: "https://raqamia.tech",
  image: "/home.webp", // تأكد من استخدامه كمسار داخلي إذا كان في public
};

export const metadata: Metadata = {
  title: {
    default: SITE_INFO.title,
    template: `%s | رقمية`,
  },
  description: SITE_INFO.description,
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  verification: {
    other: {
      "facebook-domain-verification": "h3qhy685bq6clotggcjiqc0rz4caqm",
    },
  },
  openGraph: {
    title: SITE_INFO.title,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    siteName: "رقمية - Raqamia",
    images: [{ url: SITE_INFO.image, width: 1200, height: 630, alt: "رقمية" }],
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="facebook-domain-verification" content="h3qhy685bq6clotggcjiqc0rz4caqm" />
        <link
          rel="preload"
          href="/White_on_black_dotted_world_map_vector-optimized.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "رقمية - Raqamia",
      "url": "https://raqamia.tech",
      "logo": "https://raqamia.tech/Raqamia.webp",
      "image": "https://raqamia.tech/Raqamia.webp",
      "description": "شركة رقمية متخصصة في تصميم مواقع WordPress وإنشاء متاجر Shopify وتحسين محركات البحث لزيادة المبيعات والتواجد الرقمي.",

      "sameAs": [
        "https://www.facebook.com/EslamGamalWordpress",
        "https://www.instagram.com/raqamia1",
        "https://www.linkedin.com/company/raqamia",
        "https://www.tiktok.com/@raqamia2"
      ],

      "telephone": "+201080404531",
      "areaServed": "EG",
      "availableLanguage": ["Arabic"],

      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+201080404531",
        "contactType": "customer service",
        "areaServed": "EG",
        "availableLanguage": ["Arabic"]
      },

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "خدمات رقمية",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تصميم مواقع WordPress",
              "description": "تصميم وتطوير مواقع احترافية باستخدام WordPress متوافقة مع السيو وسريعة الأداء."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "إنشاء متاجر Shopify",
              "description": "إنشاء متاجر Shopify احترافية وتحسين تجربة المستخدم وزيادة المبيعات."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "تحسين محركات البحث SEO",
              "description": "تحسين ظهور موقعك في نتائج البحث وزيادة الزيارات العضوية."
            }
          }
        ]
      }
    }),
  }}
/>
      </head>
      <body className="antialiased font-sans">
        <main>{children}</main>
        <DeferredAnalytics />
      </body>
    </html>
  );
}
