import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SNAPPPLUG - 아이디어를 현실로, 꿈을 이뤄드리는 디지털 솔루션',
    short_name: '스냅플러그',
    description: '고객의 시간과 돈을 벌어다주는 서비스를 만드는 전문 기업입니다. 아이디어를 현실로 만들고, 꿈을 이뤄드리는 혁신적인 웹/앱 개발, 디지털 마케팅 솔루션을 제공합니다.',
    start_url: '/',
    display: 'standalone',
    background_color: '#121212',
    theme_color: '#121212',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'ko',
    scope: '/',
    prefer_related_applications: false
  }
}
