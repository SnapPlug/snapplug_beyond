import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

/**
 * Apple Touch Icon 생성
 * 
 * 사양:
 * - 크기: 180x180 (Apple 표준)
 * - 배경: #000000 (검은색)
 * - 폰트: Pirulen
 * - 텍스트: "S"
 * - 색상: #F0F0FA
 */
export const runtime = 'nodejs';
export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default async function Icon() {
  // Pirulen 폰트 로드
  const pirulenFont = await readFile(
    join(process.cwd(), 'public', 'pirulen.regular.otf')
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Pirulen',
          fontSize: 80,
          color: '#F0F0FA',
          fontWeight: 'normal',
        }}
      >
        S
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
