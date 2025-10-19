import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

/**
 * Open Graph 이미지 생성
 * 
 * 사양:
 * - 크기: 1200x630 (Facebook, Twitter 표준)
 * - 배경: 그라데이션 (#000000 → #1a1a1a)
 * - 폰트: Pirulen
 * - 메인 텍스트: "SNAPPPLUG"
 * - 서브 텍스트: "아이디어를 현실로, 꿈을 이뤄드리는"
 * - 색상: #F0F0FA (흰색)
 */
export const runtime = 'nodejs';
export const alt = 'SNAPPPLUG - 아이디어를 현실로, 꿈을 이뤄드리는 디지털 솔루션';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Pirulen 폰트 로드
  const pirulenFont = await readFile(
    join(process.cwd(), 'public', 'pirulen.regular.otf')
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Pirulen',
          color: '#F0F0FA',
          position: 'relative',
        }}
      >
        {/* 배경 패턴 */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 20%, rgba(240, 240, 250, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(240, 240, 250, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(240, 240, 250, 0.08) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* 메인 브랜드명 */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          SNAPPPLUG
        </div>
        
        {/* 서브 타이틀 */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 'normal',
            textAlign: 'center',
            marginBottom: 40,
            opacity: 0.9,
            maxWidth: '800px',
            lineHeight: 1.2,
          }}
        >
          아이디어를 현실로, 꿈을 이뤄드리는
        </div>
        
        {/* 태그라인 */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 'normal',
            textAlign: 'center',
            opacity: 0.7,
            maxWidth: '600px',
            lineHeight: 1.3,
          }}
        >
          고객의 시간과 돈을 벌어다주는 디지털 솔루션
        </div>
        
        {/* 하단 장식 라인 */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #F0F0FA 50%, transparent 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Pirulen',
          data: pirulenFont,
          style: 'normal',
        },
      ],
    }
  );
}
