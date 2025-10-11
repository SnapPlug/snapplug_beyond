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
  title: "SNAPPPLUG - 혁신적인 디지털 솔루션",
  description: "SNAPPPLUG는 창의적이고 혁신적인 디지털 솔루션을 제공하는 전문 기업입니다. 웹 개발, 앱 개발, 디지털 마케팅 등 다양한 서비스로 고객의 비즈니스 성장을 지원합니다.",
  keywords: ["SNAPPPLUG", "웹개발", "앱개발", "디지털솔루션", "웹사이트제작", "모바일앱", "디지털마케팅", "IT컨설팅"],
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
    title: "SNAPPPLUG - 혁신적인 디지털 솔루션",
    description: "SNAPPPLUG는 창의적이고 혁신적인 디지털 솔루션을 제공하는 전문 기업입니다. 웹 개발, 앱 개발, 디지털 마케팅 등 다양한 서비스로 고객의 비즈니스 성장을 지원합니다.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SNAPPPLUG - 혁신적인 디지털 솔루션",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNAPPPLUG - 혁신적인 디지털 솔루션",
    description: "SNAPPPLUG는 창의적이고 혁신적인 디지털 솔루션을 제공하는 전문 기업입니다.",
    images: ["/og-image.jpg"],
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.7/dist/web/static/pretendard.css"
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
