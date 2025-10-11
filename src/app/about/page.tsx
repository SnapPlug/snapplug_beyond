"use client";

import SpaceXHeader from "@/components/SpaceXHeader";
import ContactButton from "@/components/ContactButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * About 페이지 컴포넌트 - Ethos Page
 * 
 * 브랜드 철학 + 창업 배경 + 가치체계를 감성적으로 풀어낸 내러티브 구조
 * "나의 이야기 → 우리가 믿는 가치 → 우리가 만드는 세상" 순서
 */
export default function About() {
  const router = useRouter();
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);
  return (
    <div className="font-sans bg-[#121212] text-[#f0f0fa]">
      <SpaceXHeader />
      
      <main>
        {/* 1️⃣ Hero Section — Why We Started */}
        <section className="relative py-20 sm:py-24 lg:py-32" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' }}>
          {/* 네트워크 라인 배경 */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
              <defs>
                <pattern id="network" patternUnits="userSpaceOnUse" width="100" height="100">
                  <path d="M0 0 L100 100 M0 100 L100 0" stroke="#f0f0fa" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#network)"/>
            </svg>
          </div>
          
          <div className="mt-30 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 text-center ">
            <h1 
              className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black mb-6 sm:mb-8 leading-tight"
            
            >
              우리가 SnapPlug를 시작한 이유
            </h1>
            
            <p className="text-left text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/70 mx-auto mb-12">
              SnapPlug는 막연한 아이디어를 명확한 방향과 시스템으로 연결해, 비즈니스가 스스로 성장하도록 만드는 팀입니다.
            </p>

            {/* 감정 중심점 - Jason의 한 문장 */}
            <div className="bg-[#f0f0fa]/5 border border-[#f0f0fa]/20 rounded-lg p-6 sm:p-8 mx-auto mb-12">
              <p className="text-xl sm:text-2xl font-medium text-[#f0f0fa] italic leading-relaxed">
                누군가는 같이 고민해줬으면 좋겠다
              </p>
              <p className="text-sm text-[#f0f0fa]/60 mt-4">— Jason, SnapPlug Founder</p>
            </div>

            <div className="text-left space-y-8 sm:space-y-10 text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/90 leading-relaxed">
              <div>
                <p>
                 퇴사 후 창업을 하면 금방 부자가 될 줄 알았습니다. 하지만 현실을 달랐습니다.<br/>
                 그저 막막했습니다. 무엇을 해야할지, 어떻게 해야할지, 이게 맞는 방향인지 전혀 몰랐습니다.<br/>

                 줄어드는 잔고, 반복되는 실패와 좌절 속에서 죽음의 문턱까지 갔습니다.<br/>
                 그러다 저의 이야기를 들어주고 고민을 함께 해주는 사람들이 하나둘 생겨났고, 다시 살아갈 용기를 얻었습니다.<br/>

                 이 경험들이 SnapPlug의 시작이 되었습니다.<br/>
                 같이 고민하고 함께 성장해서 상생하는 팀이 되고 싶어서 시작했습니다.

                </p>
              </div>

            </div>

          </div>
        </section>


        {/* 3️⃣ Our Ethos — What We Believe */}
        <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
          {/* 우주적 톤의 파티클 배경 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#000000] to-[#121212]"></div>
            {/* 파티클 효과를 위한 점들 */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(50)].map((_, i) => {
                // 정수 기반의 결정적 위치 생성 (부동소수점 오차 방지)
                const left = (i * 7 + 13) % 100;
                const top = (i * 11 + 17) % 100;
                const delay = (i % 3);
                const duration = 2 + (i % 2);
                
                return (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#f0f0fa] rounded-full animate-pulse"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      animationDelay: `${delay}s`,
                      animationDuration: `${duration}s`
                    }}
                  />
                );
              })}
            </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <h2 
              className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black mb-6 sm:mb-8 leading-tight"
              
            >
              우리가 믿는 3 가지 원칙
            </h2>
            <p className="text-center text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/70 max-w-3xl mx-auto mb-12">
                우리의 목표는 단순한 성공이 아닙니다. 대표님의 철학과 꿈이 시스템으로 살아 움직이는 것입니다.
            </p>

            {/* 3-column 원칙 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {/* 원칙 1 */}
              <div className="text-center group">
                <div className="bg-[#f0f0fa]/5 border border-[#f0f0fa]/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:border-[#f0f0fa]/40 transition-all duration-300">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#f0f0fa] mb-4">공감에서 출발한다</h3>
                <div className="mt-4 mb-4 text-xs text-[#f0f0fa]/60 italic">
                  우리가 만든 모든 구조는, 누군가의 고민에서 시작됐습니다.
                </div>
                
                <p className="text-[#f0f0fa]/80 text-sm sm:text-base leading-relaxed">
                  모든 프로젝트는 이해에서 시작됩니다.<br />
                  SnapPlug는 기술보다 사람의 이야기를 먼저 듣습니다.<br />
                  막연한 아이디어 속에서 진짜 문제를 찾아내고,<br />
                  그 안에서 해결의 실마리를 함께 만들어 갑니다.
                </p>
               
              </div>

              {/* 원칙 2 */}
              <div className="text-center group">
                <div className="bg-[#f0f0fa]/5 border border-[#f0f0fa]/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:border-[#f0f0fa]/40 transition-all duration-300">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#f0f0fa] mb-4">실행으로 증명한다</h3>
                <div className="mt-4 mb-4 text-xs text-[#f0f0fa]/60 italic">
                  계획보다 행동이 빠른 팀, 그게 우리의 강점입니다.
                </div>
                <p className="text-[#f0f0fa]/80 text-sm sm:text-base leading-relaxed">
                  우리는 단순히 컨설팅하지 않습니다.<br />
                  함께 구체화하고, 테스트하고, 바로 실행합니다.<br />
                  SnapPlug는 생각을 현실로 옮기는 팀으로서<br />
                  아이디어가 실제 매출과 성장으로 이어지도록 설계합니다.
                </p>
               
              </div>

              {/* 원칙 3 */}
              <div className="text-center group">
                <div className="bg-[#f0f0fa]/5 border border-[#f0f0fa]/20 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:border-[#f0f0fa]/40 transition-all duration-300">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#f0f0fa] mb-4">함께 성장한다</h3>
                <div className="mt-4 mb-4 text-xs text-[#f0f0fa]/60 italic">
                  우리가 성장할 때, 고객도 함께 성장합니다.
                </div>
                <p className="text-[#f0f0fa]/80 text-sm sm:text-base leading-relaxed">
                  한 번의 프로젝트로 끝내지 않습니다.<br />
                  SnapPlug는 고객의 비즈니스가 자생력 있게 성장하도록<br />
                  지속 가능한 구조를 함께 만듭니다.<br />
                  단순한 외주가 아닌, 함께 고민하고 성장하는 파트너입니다.
                </p>
                
              </div>
            </div>
            
          </div>
        </section>

       

        {/* 5️⃣ Closing — A Promise We Keep */}
        <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 sm:opacity-40"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/90 sm:from-black/80 sm:via-black/60 sm:to-black/80"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            {/* Quote Section */}
            <div className="mb-10 sm:mb-12 lg:mb-16">
              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-[#f0f0fa] italic leading-relaxed mb-6 sm:mb-8 px-2">
                막연한 아이디어도,<br />
                방향과 시스템이 만나면<br className="sm:hidden" /> 현실이 됩니다.
              </blockquote>
              
              <p className="text-base sm:text-lg lg:text-xl text-[#f0f0fa]/80 px-2">
                비즈니스, 그 이상을 만드는 여정에<br className="sm:hidden" /> 함께 해보세요.
              </p>
            </div>

            {/* CTA Button */}
            <ContactButton 
              text="지금 함께 시작하기" 
              onClick={() => router.push('/contacts')}
            />
          </div>
        </section>
      </main>

      {/* Footer - 메인 페이지와 동일 */}
      <footer className="bg-[#000000] py-8" style={{ color: '#f0f0fa' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: 1줄 레이아웃 */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="text-sm">
              © 2025 SnapPlug. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="https://elegant-sand-f36.notion.site/24f2b9ca10c38009b496fca952cac1d4" target="_blank" rel="noopener noreferrer" className="hover:text-[#f0f0fa] transition-colors">Privacy Policy</a>
              <a href="https://elegant-sand-f36.notion.site/24f2b9ca10c380c6b295d0fa5e23633c" target="_blank" rel="noopener noreferrer" className="hover:text-[#f0f0fa] transition-colors">Terms of Service</a>
              <div className="relative">
                <button 
                  onClick={() => setShowCompanyInfo(!showCompanyInfo)}
                  className="hover:text-[#f0f0fa] transition-colors"
                >
                  Company
                </button>
                {showCompanyInfo && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/90 backdrop-blur-sm border border-[#f0f0fa]/20 rounded-lg p-4 text-xs whitespace-nowrap z-50">
                    <div className="text-left space-y-1">
                      <div className="font-bold">(주) 스냅플러그 (SnapPlug)</div>
                      <div className="text-xs opacity-80">사업자등록번호: 551-10-02859</div>
                      <div className="text-xs opacity-80">대표자: 정해성</div>
                      <div className="text-xs opacity-80">Email: hello@snapplug.app</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#f0f0fa]/20"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile: 세로 레이아웃 */}
          <div className="lg:hidden text-center space-y-4">
            <div className="text-sm">
              © 2025 SnapPlug. All rights reserved.
            </div>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="https://elegant-sand-f36.notion.site/24f2b9ca10c38009b496fca952cac1d4" target="_blank" rel="noopener noreferrer" className="hover:text-[#f0f0fa] transition-colors">Privacy</a>
              <a href="https://elegant-sand-f36.notion.site/24f2b9ca10c380c6b295d0fa5e23633c" target="_blank" rel="noopener noreferrer" className="hover:text-[#f0f0fa] transition-colors">Terms</a>
              <div className="relative">
                <button 
                  onClick={() => setShowCompanyInfo(!showCompanyInfo)}
                  className="hover:text-[#f0f0fa] transition-colors"
                >
                  Company
                </button>
                {showCompanyInfo && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/90 backdrop-blur-sm border border-[#f0f0fa]/20 rounded-lg p-4 text-xs whitespace-nowrap z-50">
                    <div className="text-left space-y-1">
                      <div className="font-bold">(주) 스냅플러그 (SnapPlug)</div>
                      <div className="text-xs opacity-80">사업자등록번호: 551-10-02859</div>
                      <div className="text-xs opacity-80">대표자: 정해성</div>
                      <div className="text-xs opacity-80">Email: hello@snapplug.app</div>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#f0f0fa]/20"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
