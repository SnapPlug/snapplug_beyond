"use client";

import { ReactNode, useRef, useEffect } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (backgroundVideo && videoRef.current) {
      const video = videoRef.current;
      
      // 모바일에서 자동 재생을 위한 강제 설정
      const playVideo = async () => {
        try {
          video.muted = true;
          video.playsInline = true;
          video.loop = true;
          video.autoplay = true;
          
          // 모바일에서 자동 재생을 위한 추가 설정
          video.setAttribute('webkit-playsinline', 'true');
          video.setAttribute('playsinline', 'true');
          video.setAttribute('muted', 'true');
          video.setAttribute('autoplay', 'true');
          video.setAttribute('loop', 'true');
          
          await video.play();
        } catch (error) {
          console.log('Video autoplay failed:', error);
          // 자동 재생 실패 시 사용자 상호작용 후 재생
          const handleUserInteraction = async () => {
            try {
              await video.play();
              document.removeEventListener('touchstart', handleUserInteraction);
              document.removeEventListener('click', handleUserInteraction);
            } catch (e) {
              console.log('Video play after interaction failed:', e);
            }
          };
          
          document.addEventListener('touchstart', handleUserInteraction);
          document.addEventListener('click', handleUserInteraction);
        }
      };

      playVideo();
    }
  }, [backgroundVideo]);

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
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            webkit-playsinline="true"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
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

