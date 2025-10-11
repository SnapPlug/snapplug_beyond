"use client";

import { useEffect, useRef } from 'react';
import SpaceXHeader from "@/components/SpaceXHeader";
import ContactButton from "@/components/ContactButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Service() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);

      // 순차 등장 애니메이션
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      });

      // 각 카드를 순차적으로 서서히 등장시키기
      cardRefs.current.forEach((ref, cardIndex) => {
        if (ref) {
          tl.fromTo(ref, 
            {
              scale: 0.95,
              opacity: 0,
              y: 40,
              transformOrigin: "center center"
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power1.inOut"
            },
            cardIndex * 0.2  // 0.2초 간격으로 순차 등장
          );
        }
      });
    };

    loadGSAP();
  }, []);


  return (
    <div>
      {/* SpaceX Header */}
      <SpaceXHeader />

      {/* Main Content - Section with Video */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.6 }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 pt-20 pb-12">
          {/* Section Title */}
          <div className="text-left mb-8 md:mb-16 px-4">
            <div className="text-2xl md:text-4xl font-black mb-4" style={{ 
              fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
              color: '#F0F0FA'
            }}>
              우리는 비즈니스 성장 시스템을 설계합니다.
            </div>
          </div>
     
          {/* Main Content */}
          <div className="text-left space-y-3 md:space-y-8 leading-relaxed mb-6 md:mb-8 text-xs md:text-base px-4" style={{ 
            fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, sans-serif',
            color: '#F0F0FA'
          }}>
            <p>
              SnapPlug의 서비스는 단순한 제작이 아닙니다.
              아이디어를 현실로, 시스템으로, 성장으로 연결하는 하나의 여정을 함께 만들어갑니다.
            </p>
          </div>

          {/* 6개 카드 레이아웃 */}
          <div className="relative" ref={containerRef}>
             {/* 첫 번째 행 - 3개 카드 */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-8 px-4">
               {/* Card 1 - 아이디어 */}
               <div ref={(el) => { cardRefs.current[0] = el; }} className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-[#F0F0FA]/20 text-left hover:border-[#F0F0FA]/40 hover:scale-105 transition-all duration-300 cursor-pointer group opacity-0">
                 {/* 아이콘 */}
                 <div className="mb-3 md:mb-4">
                   <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="#F0F0FA" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                   </svg>
                 </div>
                 {/* 제목 */}
                 <h3 className="mb-3 md:mb-4" style={{ color: '#F0F0FA' }}>
                   <span className="text-lg md:text-2xl font-bold block">1. 아이디어 (Idea)</span>
                   <span className="text-sm md:text-lg font-medium block">- 막연함을 명확하게</span>
                 </h3>
                 <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#F0F0FA' }}>
                    모든 비즈니스는 아이디어에서 시작됩니다. 
                    우리는 대표님의 막연한 아이디어를 듣고, 그 안에 숨겨진 핵심 가치를 찾아냅니다.
                    &quot;무엇을 만들고 싶은가&quot;보다 &quot;왜 그것이 필요한가&quot;를 함께 고민합니다.
                 </p>
               </div>

               {/* Card 2 - 방향 설정 */}
               <div ref={(el) => { cardRefs.current[1] = el; }} className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-[#F0F0FA]/20 text-left hover:border-[#F0F0FA]/40 hover:scale-105 transition-all duration-300 cursor-pointer group opacity-0">
                 {/* 아이콘 */}
                 <div className="mb-3 md:mb-4">
                   <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="#F0F0FA" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                 </div>
                 {/* 제목 */}
                 <h3 className="mb-3 md:mb-4" style={{ color: '#F0F0FA' }}>
                   <span className="text-lg md:text-2xl font-bold block">2. 방향 설정 (Direction)</span>
                   <span className="text-sm md:text-lg font-medium block">- 목표를 명확한 전략으로</span>
                 </h3>
                 <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#F0F0FA' }}>
                   아이디어를 구체적인 목표와 전략으로 전환합니다.
                   누구를 위한 서비스인지, 어떤 문제를 해결할 것인지, 어떻게 성장할 것인지를 명확히 정의합니다.
                   전략이 명확해지면 실행이 단순해집니다.
                 </p>
               </div>

               {/* Card 3 - 설계 */}
               <div ref={(el) => { cardRefs.current[2] = el; }} className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-[#F0F0FA]/20 text-left hover:border-[#F0F0FA]/40 hover:scale-105 transition-all duration-300 cursor-pointer group opacity-0">
                 {/* 아이콘 */}
                 <div className="mb-3 md:mb-4">
                   <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="#F0F0FA" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                   </svg>
                 </div>
                 {/* 제목 */}
                 <h3 className="mb-3 md:mb-4" style={{ color: '#F0F0FA' }}>
                   <span className="text-lg md:text-2xl font-bold block">3. 설계 (Design)</span>
                   <span className="text-sm md:text-lg font-medium block">- 비즈니스 구조를 체계적으로</span>
                 </h3>
                 <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#F0F0FA' }}>
                   전략을 실행 가능한 시스템으로 설계합니다.
                   사용자 경험, 비즈니스 로직, 데이터 흐름, 확장 가능성을 고려하여
                   지속 가능한 비즈니스 구조를 만듭니다.
                 </p>
               </div>
             </div>

             {/* 두 번째 행 - 3개 카드 */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 px-4">
               {/* Card 4 - 구현 */}
               <div ref={(el) => { cardRefs.current[3] = el; }} className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-[#F0F0FA]/20 text-left hover:border-[#F0F0FA]/40 hover:scale-105 transition-all duration-300 cursor-pointer group opacity-0">
                 {/* 아이콘 */}
                 <div className="mb-3 md:mb-4">
                   <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="#F0F0FA" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                   </svg>
                 </div>
                 {/* 제목 */}
                 <h3 className="mb-3 md:mb-4" style={{ color: '#F0F0FA' }}>
                   <span className="text-lg md:text-2xl font-bold block">4. 구현 (Build)</span>
                   <span className="text-sm md:text-lg font-medium block">- 설계를 실제 시스템으로</span>
                 </h3>
                 <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#F0F0FA' }}>
                   설계를 바탕으로 실제 시스템을 구축합니다.
                   최신 기술과 검증된 개발 방법론을 활용하여 안정적이고 확장 가능한 솔루션을 만들어냅니다.
                   코드 품질과 성능, 보안을 모두 고려한 완성도 높은 결과물을 제공합니다.
                 </p>
               </div>

               {/* Card 5 - 자동화 */}
               <div ref={(el) => { cardRefs.current[4] = el; }} className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-[#F0F0FA]/20 text-left hover:border-[#F0F0FA]/40 hover:scale-105 transition-all duration-300 cursor-pointer group opacity-0">
                 {/* 아이콘 */}
                 <div className="mb-3 md:mb-4">
                   <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="#F0F0FA" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                   </svg>
                 </div>
                 {/* 제목 */}
                 <h3 className="mb-3 md:mb-4" style={{ color: '#F0F0FA' }}>
                   <span className="text-lg md:text-2xl font-bold block">5. 자동화 (Automate)</span>
                   <span className="text-sm md:text-lg font-medium block">- 시스템이 스스로 일하게</span>
                 </h3>
                 <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#F0F0FA' }}>
                   반복적인 업무를 자동화하여 시스템이 스스로 운영되도록 만듭니다.
                   예약, 결제, 알림, 데이터 수집, 리포트 생성 등 사람의 개입 없이도
                   비즈니스가 24시간 돌아가는 구조를 구축합니다.
                 </p>
               </div>

               {/* Card 6 - 성장 */}
               <div ref={(el) => { cardRefs.current[5] = el; }} className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-[#F0F0FA]/20 text-left hover:border-[#F0F0FA]/40 hover:scale-105 transition-all duration-300 cursor-pointer group opacity-0">
                 {/* 아이콘 */}
                 <div className="mb-3 md:mb-4">
                   <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="#F0F0FA" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                   </svg>
                 </div>
                 {/* 제목 */}
                 <h3 className="mb-3 md:mb-4" style={{ color: '#F0F0FA' }}>
                   <span className="text-lg md:text-2xl font-bold block">6. 성장 (Growth)</span>
                   <span className="text-sm md:text-lg font-medium block">- 데이터로 지속적인 성장을</span>
                 </h3>
                 <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#F0F0FA' }}>
                   시스템 운영 데이터를 분석하여 개선점을 찾고, 지속적으로 최적화합니다.
                   사용자 행동, 매출 패턴, 시스템 성능을 모니터링하며
                   비즈니스가 성장할 수 있는 인사이트를 제공하고 함께 발전해나갑니다.
                 </p>
               </div>
             </div>
           </div>

          {/* 하단 CTA */}
          <div className="text-center mt-8 md:mt-12 px-4">
            <div className="text-base md:text-2xl mb-6 md:mb-8" style={{ color: '#F0F0FA' }}>
              단순하게 일하고, 진심으로 함께하며, 비즈니스의 그 너머까지 나아가겠습니다.
            </div>
            <ContactButton 
              text="함께하기"
              onClick={() => router.push('/contacts')}
            />
          </div>
        </div>
      </section>

      {/* Footer - 메인 페이지와 동일 */}
      <footer className="bg-[#000000] py-8" style={{ color: '#f0f0fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: 1줄 레이아웃 */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="text-sm">
              © 2025 SnapPlug. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-[#f0f0fa] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#f0f0fa] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#f0f0fa] transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile: 세로 레이아웃 */}
          <div className="lg:hidden text-center space-y-4">
            <div className="text-sm">
              © 2025 SnapPlug. All rights reserved.
            </div>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-[#f0f0fa] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#f0f0fa] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#f0f0fa] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
