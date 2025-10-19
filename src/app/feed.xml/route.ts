import { MetadataRoute } from 'next'

export async function GET() {
  const baseUrl = 'https://snapplug.app'
  const now = new Date()

  // RSS 피드에 포함할 페이지들
  const pages = [
    {
      url: baseUrl,
      title: 'SNAPPPLUG - 아이디어를 현실로, 꿈을 이뤄드리는 디지털 솔루션',
      description: 'SNAPPPLUG는 고객의 시간과 돈을 벌어다주는 서비스를 만드는 전문 기업입니다. 아이디어를 현실로 만들고, 꿈을 이뤄드리는 혁신적인 웹/앱 개발, 디지털 마케팅 솔루션을 제공합니다.',
      lastModified: now,
    },
    {
      url: `${baseUrl}/about`,
      title: '회사소개 - SNAPPPLUG | 아이디어를 현실로 만드는 전문가들',
      description: 'SNAPPPLUG의 브랜드 철학과 창업 배경을 소개합니다. 고객의 시간과 돈을 벌어다주는 서비스를 만드는 전문가들이 아이디어를 현실로 만들고 꿈을 이뤄드리는 과정을 담았습니다.',
      lastModified: now,
    },
    {
      url: `${baseUrl}/service`,
      title: '서비스 - SNAPPPLUG | 시간과 돈을 벌어다주는 디지털 솔루션',
      description: 'SNAPPPLUG의 다양한 서비스를 확인하세요. 고객의 시간과 돈을 벌어다주는 웹 개발, 앱 개발, 디지털 마케팅, IT 컨설팅 등 전문적인 디지털 솔루션을 제공합니다.',
      lastModified: now,
    },
    {
      url: `${baseUrl}/contacts`,
      title: '문의하기 - SNAPPPLUG | 아이디어를 현실로 만들어드립니다',
      description: 'SNAPPPLUG에 문의하세요. 고객의 시간과 돈을 벌어다주는 웹 개발, 앱 개발, 디지털 마케팅 등 다양한 서비스에 대한 상담을 받으실 수 있습니다. 아이디어를 현실로 만들어드립니다.',
      lastModified: now,
    },
  ]

  const rssItems = pages.map((page) => {
    return `
    <item>
      <title><![CDATA[${page.title}]]></title>
      <description><![CDATA[${page.description}]]></description>
      <link>${page.url}</link>
      <guid isPermaLink="true">${page.url}</guid>
      <pubDate>${page.lastModified.toUTCString()}</pubDate>
      <lastBuildDate>${page.lastModified.toUTCString()}</lastBuildDate>
    </item>`
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[SNAPPPLUG - 아이디어를 현실로, 꿈을 이뤄드리는 디지털 솔루션]]></title>
    <description><![CDATA[SNAPPPLUG는 고객의 시간과 돈을 벌어다주는 서비스를 만드는 전문 기업입니다. 아이디어를 현실로 만들고, 꿈을 이뤄드리는 혁신적인 웹/앱 개발, 디지털 마케팅 솔루션을 제공합니다.]]></description>
    <link>${baseUrl}</link>
    <language>ko</language>
    <managingEditor>contact@snapplug.app (SNAPPPLUG)</managingEditor>
    <webMaster>contact@snapplug.app (SNAPPPLUG)</webMaster>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/icon</url>
      <title>SNAPPPLUG</title>
      <link>${baseUrl}</link>
      <width>32</width>
      <height>32</height>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
