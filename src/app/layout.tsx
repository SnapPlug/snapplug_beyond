import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pirulen = localFont({
  src: "../../public/pirulen.regular.otf",
  variable: "--font-pirulen",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://snapplug.app'),
  title: "SNAPPPLUG - 아이디어를 현실로, 꿈을 이뤄드리는 디지털 솔루션",
  description: "SNAPPPLUG는 고객의 시간과 돈을 벌어다주는 서비스를 만드는 전문 기업입니다. 아이디어를 현실로 만들고, 꿈을 이뤄드리는 혁신적인 웹/앱 개발, 디지털 마케팅 솔루션을 제공합니다.",
  keywords: ["SNAPPPLUG", "스냅플러그", "snapplug", "아이디어 현실화", "꿈 실현", "시간 절약", "수익 창출", "웹개발", "앱개발", "디지털솔루션", "비즈니스 성장", "디지털마케팅", "IT컨설팅", "창업 지원"],
  authors: [{ name: "SNAPPPLUG" }],
  creator: "SNAPPPLUG",
  publisher: "SNAPPPLUG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://snapplug.app",
    siteName: "SNAPPPLUG",
    title: "SNAPPPLUG - 아이디어를 현실로, 꿈을 이뤄드리는 디지털 솔루션",
    description: "SNAPPPLUG는 고객의 시간과 돈을 벌어다주는 서비스를 만드는 전문 기업입니다. 아이디어를 현실로 만들고, 꿈을 이뤄드리는 혁신적인 웹/앱 개발, 디지털 마케팅 솔루션을 제공합니다.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SNAPPPLUG - 아이디어를 현실로, 꿈을 이뤄드리는 디지털 솔루션",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNAPPPLUG - 아이디어를 현실로, 꿈을 이뤄드리는 디지털 솔루션",
    description: "SNAPPPLUG는 고객의 시간과 돈을 벌어다주는 서비스를 만드는 전문 기업입니다. 아이디어를 현실로 만들고, 꿈을 이뤄드리는 혁신적인 솔루션을 제공합니다.",
    images: ["/opengraph-image"],
  },
  verification: {
    google: "your-google-verification-code", // Google Search Console에서 받은 코드로 교체
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="theme-color" content="#121212" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SNAPPPLUG" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.7/dist/web/static/pretendard.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SNAPPPLUG",
              "alternateName": ["스냅플러그", "snapplug"],
              "description": "고객의 시간과 돈을 벌어다주는 서비스를 만드는 전문 기업입니다. 아이디어를 현실로 만들고, 꿈을 이뤄드리는 혁신적인 웹/앱 개발, 디지털 마케팅 솔루션을 제공합니다.",
              "url": "https://snapplug.app",
              "logo": "https://snapplug.app/icon",
              "sameAs": [],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "url": "https://snapplug.app/contacts"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KR"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "웹 개발",
                  "description": "고객의 시간과 돈을 벌어다주는 웹사이트 개발 서비스"
                },
                {
                  "@type": "Service", 
                  "name": "앱 개발",
                  "description": "모바일 앱 개발을 통한 비즈니스 성장 지원"
                },
                {
                  "@type": "Service",
                  "name": "디지털 마케팅",
                  "description": "효과적인 디지털 마케팅 솔루션 제공"
                },
                {
                  "@type": "Service",
                  "name": "IT 컨설팅",
                  "description": "비즈니스 성장을 위한 IT 전략 컨설팅"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${pirulen.variable} antialiased`}
        style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
