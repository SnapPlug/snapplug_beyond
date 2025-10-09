"use client";

import { ReactNode } from "react";

interface FullScreenSectionProps {
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children: ReactNode;
  className?: string;
}

/**
 * SpaceX 스타일의 풀스크린 섹션 컴포넌트
 * 
 * 기능:
 * - 화면 전체를 차지하는 배경 이미지/비디오
 * - 콘텐츠 오버레이
 * - 반응형 디자인
 * - 스크롤 인디케이터
 */
export default function FullScreenSection({
  backgroundImage,
  backgroundVideo,
  overlay = true,
  overlayOpacity = 0.3,
  children,
  className = ""
}: FullScreenSectionProps) {
  return (
    <section className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      {/* Background Video */}
      {backgroundVideo && (
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-[#121212]"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-[#f0f0fa] px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
          {children}
        </div>
      </div>

     
    </section>
  );
}

