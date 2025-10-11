import SpaceXHeader from "@/components/SpaceXHeader";
import FullScreenSection from "@/components/FullScreenSection";
import ContactButton from "@/components/ContactButton";
import AnimatedCounter from "../../components/AnimatedCounter";

/**
 * Service 페이지 컴포넌트
 * 
 * SnapPlug의 주요 서비스들을 소개하는 페이지
 * 회원•수업•예약•회원권 관리에 특화된 솔루션 중심
 */
export default function Service() {
  return (
    <div className="font-sans bg-[#121212] text-[#f0f0fa]">
      <SpaceXHeader />
      
      {/* Hero Section */}
      <main>
        <FullScreenSection 
          backgroundVideo="/service.mp4"
          overlay={true}
          overlayOpacity={0.4}
        >
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6" 
            style={{ 
              color: '#F0F0FA'
            }}
          >
            OUR SERVICES
          </h1>
          <p className="text-lg sm:text-xl text-[#f0f0fa]/70 max-w-2xl mb-8 mx-auto">
            비즈니스가 스스로 성장하는 완벽한 솔루션
          </p>
          <ContactButton text="서비스 문의" />

          {/* 핵심 서비스 지표 */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-lg sm:text-2xl lg:text-3xl">
                  <AnimatedCounter end={100} duration={2000} />
                </span>
                <span className="text-sm sm:text-lg lg:text-xl ml-1">%</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">자동화 커버리지</div>
              <div className="text-xs text-[#f0f0fa]/50">모든 업무 프로세스 자동화</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-lg sm:text-2xl lg:text-3xl">
                  <AnimatedCounter end={70} duration={2200} />
                </span>
                <span className="text-sm sm:text-lg lg:text-xl ml-1">%</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">운영시간 절감</div>
              <div className="text-xs text-[#f0f0fa]/50">반복 업무 자동화로 효율 극대화</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-lg sm:text-2xl lg:text-3xl">
                  <AnimatedCounter end={98} duration={2500} />
                </span>
                <span className="text-sm sm:text-lg lg:text-xl ml-1">%</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">고객 만족도</div>
              <div className="text-xs text-[#f0f0fa]/50">사용자 친화적 인터페이스</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-lg sm:text-2xl lg:text-3xl">
                  <AnimatedCounter end={24} duration={2000} />
                </span>
                <span className="text-sm sm:text-lg lg:text-xl ml-1">시간</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">실시간 모니터링</div>
              <div className="text-xs text-[#f0f0fa]/50">언제든 상태 확인 가능</div>
            </div>
          </div>
        </FullScreenSection>

        {/* Core Services Section */}
        <FullScreenSection 
          backgroundImage="/about.jpg"
          overlay={true}
          overlayOpacity={0.5}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="text-center mb-12 sm:mb-16">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black mb-6 sm:mb-8 leading-tight" 
                style={{ 
                  fontFamily: 'var(--font-pirulen), sans-serif',
                  color: '#f0f0fa'
                }}
              >
                핵심 서비스
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/80 max-w-3xl mx-auto">
                비즈니스 운영의 핵심 요소들을 완벽하게 통합한 솔루션
              </p>
            </div>

            {/* 4개 핵심 서비스 카드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* 회원 관리 */}
              <div className="bg-[#121212]/60 border border-[#f0f0fa]/20 rounded-lg p-6 sm:p-8 text-center relative overflow-hidden group hover:border-[#f0f0fa]/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#f0f0fa] mb-4">회원 관리</h3>
                  <p className="text-[#f0f0fa]/80 text-sm sm:text-base leading-relaxed">
                    회원 정보, 등급, 이력까지 체계적으로 관리하고 
                    개인별 맞춤 서비스를 제공합니다.
                  </p>
                  <div className="mt-4 text-xs text-[#f0f0fa]/60">
                    • 회원 정보 통합 관리<br />
                    • 등급별 차별화 서비스<br />
                    • 이용 이력 추적 분석
                  </div>
                </div>
              </div>

              {/* 수업 관리 */}
              <div className="bg-[#121212]/60 border border-[#f0f0fa]/20 rounded-lg p-6 sm:p-8 text-center relative overflow-hidden group hover:border-[#f0f0fa]/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#f0f0fa] mb-4">수업 관리</h3>
                  <p className="text-[#f0f0fa]/80 text-sm sm:text-base leading-relaxed">
                    강사별, 시간별, 수준별 수업을 효율적으로 관리하고 
                    최적의 커리큘럼을 제공합니다.
                  </p>
                  <div className="mt-4 text-xs text-[#f0f0fa]/60">
                    • 스케줄 자동 관리<br />
                    • 강사별 수업 배정<br />
                    • 진도 및 성과 추적
                  </div>
                </div>
              </div>

              {/* 예약 관리 */}
              <div className="bg-[#121212]/60 border border-[#f0f0fa]/20 rounded-lg p-6 sm:p-8 text-center relative overflow-hidden group hover:border-[#f0f0fa]/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#f0f0fa] mb-4">예약 관리</h3>
                  <p className="text-[#f0f0fa]/80 text-sm sm:text-base leading-relaxed">
                    실시간 예약 현황을 확인하고 중복, 충돌 없이 
                    완벽한 예약 시스템을 운영합니다.
                  </p>
                  <div className="mt-4 text-xs text-[#f0f0fa]/60">
                    • 실시간 예약 현황<br />
                    • 자동 중복 방지<br />
                    • 알림 및 리마인더
                  </div>
                </div>
              </div>

              {/* 회원권 관리 */}
              <div className="bg-[#121212]/60 border border-[#f0f0fa]/20 rounded-lg p-6 sm:p-8 text-center relative overflow-hidden group hover:border-[#f0f0fa]/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🎫</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#f0f0fa] mb-4">회원권 관리</h3>
                  <p className="text-[#f0f0fa]/80 text-sm sm:text-base leading-relaxed">
                    회원권 발급, 사용, 연장까지 전 과정을 자동화하고 
                    수익성을 극대화합니다.
                  </p>
                  <div className="mt-4 text-xs text-[#f0f0fa]/60">
                    • 자동 회원권 발급<br />
                    • 잔여 횟수 실시간 추적<br />
                    • 만료 알림 및 연장 안내
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FullScreenSection>

        {/* Integration Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          {/* 배경 비디오 */}
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black mb-6 sm:mb-8" 
                style={{ 
                  fontFamily: 'var(--font-pirulen), sans-serif',
                  color: '#f0f0fa'
                }}
              >
                통합의 힘
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/80 max-w-3xl mx-auto">
                모든 시스템이 하나로 연결되어 비즈니스가 스스로 성장합니다
              </p>
            </div>
            
            {/* 통합 혜택 카드 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div 
                className="bg-[#121212]/60 border border-[#f0f0fa] rounded-lg p-6 sm:p-8 text-left relative overflow-hidden min-h-[300px] sm:min-h-[400px]"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-[#121212]/70"></div>
                <div className="relative z-10">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#f0f0fa] mb-6 sm:mb-8">완벽한 데이터 연동</div>
                  <p className="text-[#f0f0fa]/80 text-sm sm:text-base lg:text-[16px] mb-4 leading-relaxed">
                    회원 정보가 예약으로, 예약이 수업으로, 수업이 회원권으로 자연스럽게 연결됩니다.
                    <br /><br />
                    중복 입력 없이, 실수 없이, 누락 없이 모든 데이터가 실시간으로 동기화되어 
                    완벽한 비즈니스 운영이 가능합니다.
                  </p>
                </div>
              </div>
              
              <div 
                className="bg-[#121212]/60 border border-[#f0f0fa] rounded-lg p-6 sm:p-8 text-left relative overflow-hidden min-h-[300px] sm:min-h-[400px]"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-[#121212]/70"></div>
                <div className="relative z-10">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#f0f0fa] mb-6 sm:mb-8">자동화된 운영</div>
                  <p className="text-[#f0f0fa]/80 text-sm sm:text-base lg:text-[16px] mb-4 leading-relaxed">
                    예약 확인, 회원권 만료 알림, 수업 준비까지 모든 것이 자동으로 처리됩니다.
                    <br /><br />
                    대표님은 이제 반복적인 업무에서 해방되어 진정한 비즈니스 성장에만 
                    집중할 수 있습니다.
                  </p>
                </div>
              </div>
              
              <div 
                className="bg-[#121212]/60 border border-[#f0f0fa] rounded-lg p-6 sm:p-8 text-left relative overflow-hidden min-h-[300px] sm:min-h-[400px]"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-[#121212]/70"></div>
                <div className="relative z-10">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#f0f0fa] mb-6 sm:mb-8">스마트한 분석</div>
                  <p className="text-[#f0f0fa]/80 text-sm sm:text-base lg:text-[16px] mb-4 leading-relaxed">
                    모든 운영 데이터가 하나의 대시보드에서 실시간으로 확인됩니다.
                    <br /><br />
                    매출, 회원 증가율, 인기 수업, 회원권 판매 현황까지 
                    한눈에 파악하여 데이터 기반의 의사결정을 내릴 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process Section */}
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          {/* 배경 비디오 */}
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/service.mp4" type="video/mp4" />
          </video>
          
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black mb-6 sm:mb-8" 
                style={{ 
                  color: '#f0f0fa'
                }}
              >
                서비스 프로세스
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/70 max-w-3xl mx-auto">
                체계적이고 투명한 프로세스로 완벽한 솔루션을 제공합니다
              </p>
            </div>

            {/* 프로세스 단계 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-[#121212]/60 border border-[#f0f0fa]/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#f0f0fa]">1</span>
                </div>
                <h3 className="text-lg font-bold text-[#f0f0fa] mb-2">상담 및 분석</h3>
                <p className="text-[#f0f0fa]/70 text-sm">
                  현재 운영 상황을 정확히 파악하고 
                  최적의 솔루션을 설계합니다.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#121212]/60 border border-[#f0f0fa]/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#f0f0fa]">2</span>
                </div>
                <h3 className="text-lg font-bold text-[#f0f0fa] mb-2">맞춤 설계</h3>
                <p className="text-[#f0f0fa]/70 text-sm">
                  비즈니스 특성에 맞는 
                  개별화된 시스템을 설계합니다.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#121212]/60 border border-[#f0f0fa]/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#f0f0fa]">3</span>
                </div>
                <h3 className="text-lg font-bold text-[#f0f0fa] mb-2">개발 및 구현</h3>
                <p className="text-[#f0f0fa]/70 text-sm">
                  최신 기술로 안정적이고 
                  확장 가능한 시스템을 구축합니다.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#121212]/60 border border-[#f0f0fa]/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#f0f0fa]">4</span>
                </div>
                <h3 className="text-lg font-bold text-[#f0f0fa] mb-2">운영 지원</h3>
                <p className="text-[#f0f0fa]/70 text-sm">
                  지속적인 모니터링과 
                  업데이트로 완벽한 운영을 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="py-20 relative"
          style={{
            backgroundImage: 'url(/testimonials.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            <div className="text-center">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black mb-4 sm:mb-6 lg:mb-8" 
                style={{ 
                  color: '#f0f0fa'
                }}
              >
                지금 시작하세요
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/70 max-w-3xl mx-auto mb-8 sm:mb-12">
                회원•수업•예약•회원권 관리를 완벽하게 통합한 솔루션으로 
                비즈니스를 한 단계 더 성장시켜보세요.
              </p>
              <ContactButton text="무료 상담 받기" />
            </div>
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
