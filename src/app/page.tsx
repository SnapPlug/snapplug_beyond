import SpaceXHeader from "@/components/SpaceXHeader";
import FullScreenSection from "@/components/FullScreenSection";
import ContactButton from "@/components/ContactButton";
import AnimatedCounter from "../components/AnimatedCounter";
import PortfolioCarousel from "../components/PortfolioCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

/**
 * 홈 페이지 컴포넌트
 * 
 * SpaceXHeader와 FullScreenSection을 포함한 메인 랜딩 페이지
 */
export default function Home() {
  return (
    <div className="font-sans bg-[#121212] text-[#f0f0fa]">
      <SpaceXHeader />
      
      {/* Hero Section - FullScreenSection 사용 */}
      <main>
        <FullScreenSection 
          backgroundVideo="/hero.mp4"
          overlay={true}
          overlayOpacity={0.4}
        >
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6" 
            style={{ 
            
              color: '#F0F0FA'
            }}
          >
            BUSINESS & BEYOND
          </h1>
          <p className="text-lg sm:text-xl text-[#f0f0fa]/70 max-w-2xl mb-8 mx-auto">
            아이디어가 현실이 되고, 꿈이 이루어지는 곳
          </p>
          <ContactButton text="시작하기" />

          {/* 통계 지표 섹션 */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-lg sm:text-2xl lg:text-3xl">
                  <AnimatedCounter end={60} duration={2000} />
                </span>
                <span className="text-sm sm:text-lg lg:text-xl ml-1">분 이상</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">초기 상담 시간</div>
              <div className="text-xs text-[#f0f0fa]/50">충분한 시간으로 정확한 파악</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-lg sm:text-2xl lg:text-3xl">
                  <AnimatedCounter end={99} duration={2200} />
                </span>
                <span className="text-sm sm:text-lg lg:text-xl ml-1">%</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">프로젝트 목표 달성률</div>
              <div className="text-xs text-[#f0f0fa]/50">약속한 결과를 확실히 전달</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-lg sm:text-2xl lg:text-3xl">
                  <AnimatedCounter end={87} duration={2500} />
                </span>
                <span className="text-sm sm:text-lg lg:text-xl ml-1">%</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">재계약/소개율</div>
              <div className="text-xs text-[#f0f0fa]/50">만족한 고객들의 지속적 선택</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-lg sm:text-2xl lg:text-3xl">
                  <AnimatedCounter end={2.0} duration={2000} />
                </span>
                <span className="text-sm sm:text-lg lg:text-xl ml-1">시간</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">평균 응답 시간</div>
              <div className="text-xs text-[#f0f0fa]/50">빠른 소통으로 안심</div>
            </div>
        </div>

        </FullScreenSection>

        {/* About Section */}
        <FullScreenSection 
          backgroundImage="/about.jpg"
          overlay={true}
          overlayOpacity={0.5}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-1 items-center min-h-screen py-12 sm:py-16 lg:py-20">
              {/* Left Content */}
              <div className="text-left">
                <h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black mb-6 sm:mb-8 leading-tight" 
                  style={{ 
                    fontFamily: 'var(--font-pirulen), sans-serif',
                    color: '#f0f0fa'
                  }}
                >
                  비즈니스,<br className="sm:hidden" /> 그 이상을 만드는 여정
                </h2>
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-[16px] text-[#f0f0fa] leading-relaxed">
                  <p>
                    모든 위대한 사업은, 막연한 생각 하나에서 시작됩니다.
                  </p>
                  <p>
                    대부분의 대표님들은 &apos;무엇을 해야 할지&apos;보다, &apos;어떻게 시작해야 할지&apos;를 더 막막해합니다.
                  </p>
                  <p>
                    SnapPlug는 그 모호함 속에서 핵심을 발견하고,
                  </p>
                  <p>
                    대표님의 생각을 현실로 구현하는 팀입니다.
                  </p>
                  <p className="font-medium">
                    이제 대표님의 아이디어는 하나의 서비스로, 하나의 성장으로, 하나의 이야기가 됩니다.
                  </p>
                </div>
                <div className="mt-8 sm:mt-12">
                  <ContactButton text="자세히 알아보기" />
                </div>
              </div>
              
              {/* Right Side - Background Image will show here */}
              <div className="hidden lg:block">
                {/* Background image will be visible on the right side */}
              </div>
            </div>
          </div>
        </FullScreenSection>

        {/* Service Section */}
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
            <div className="text-center">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black mb-6 sm:mb-8" 
                style={{ 
                  fontFamily: 'var(--font-pirulen), sans-serif',
                  color: '#f0f0fa'
                }}
              >
                비즈니스가 스스로 성장하는<br className="sm:hidden" /> 세상을 만듭니다.
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/80 max-w-3xl mx-auto mb-12 sm:mb-16">
                신뢰가 매출로 이어지고, 시간이 성장으로 유기적으로 연결되는 하나의 완벽한 비즈니스 솔루션을 제공합니다.
              </p>
              
              {/* 서비스 카드 그리드 */}
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
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#f0f0fa] mb-6 sm:mb-8">신뢰를 만드는 첫인상</div>
                    <p className="text-[#f0f0fa]/80 text-sm sm:text-base lg:text-[16px] mb-4 leading-relaxed">
                      첫인상은 3초 안에 결정됩니다.<br />
                      SnapPlug는 디자인보다 느낌을 설계합니다.<br />
                      보는 순간 “이 회사, 믿을 수 있겠다”는 <br />
                      인상을 남기고, 브랜드의 진정성과 가치를 <br />
                      명확히 전달합니다.<br />
                      고객의 마음이 머무는, <br />
                      신뢰의 시작점을 만듭니다
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
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#f0f0fa] mb-6 sm:mb-8">매출로 이어지는 경험</div>
                    <p className="text-[#f0f0fa]/80 text-sm sm:text-base lg:text-[16px] mb-4 leading-relaxed">
                      고객이 찾아왔는데 구매로 이어지지 않는다면,<br />
                      문제는 디자인이 아니라 ‘흐름’에 있습니다.<br />
                      SnapPlug는 방문 → 참여 → 구매 → 재방문의<br />
                      자연스러운 고객 여정을 설계해,<br />
                      매출이 스스로 움직이는 구조를 만듭니다.<br />
                      클릭이 매출로, 고객이 팬으로 변하는 순간을 <br />
                      설계합니다.
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
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#f0f0fa] mb-6 sm:mb-8">시간을 버는 솔루션</div>
                    <p className="text-[#f0f0fa]/80 text-sm sm:text-base lg:text-[16px] mb-4 leading-relaxed">
                      반복되는 관리와 업무에 시간을 잃고 계신가요?<br />
                      SnapPlug는 예약, 결제, 마케팅, 보고까지<br />
                      대표님이 매일 하는 루틴을 자동화합니다.<br />
                      일은 저절로 돌아가고,<br />
                      대표님은 ‘일하는 시간’ 대신 <br/>
                      ‘성장하는 시간’을 갖게 됩니다.<br />
                      기술이 아닌 ‘시간 회복’을 설계합니다.
                    </p>
                  </div>
                
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="mt-8 sm:mt-12">
                <ContactButton text="자세히 보기" />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="showcases" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
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
          
          <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black mb-4 sm:mb-6 lg:mb-8" 
                style={{ 
                  
                  color: '#f0f0fa'
                }}
              >
                SHOWCASES
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/70 max-w-3xl mx-auto">
                아이디어가 현실이 되고, 비즈니스가 스스로 성장한 스토리를 살펴보세요.
              </p>
            </div>

            {/* Portfolio Carousel */}
            <PortfolioCarousel />
          </div>
        </section>

        {/* Testimonials Section */}
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
            <div className="text-center mb-16">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-black mb-4 sm:mb-6 lg:mb-8" 
                style={{ 
                  color: '#f0f0fa'
                }}
              >
                결과로 말합니다.
              </h2>
              <p className="text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/70 max-w-3xl mx-auto">
              Snapplug의 시스템은 단순한 개발이 아니라, 대표님들의 시간, 매출, 그리고 성장의 변화를 만들어냅니다.
              <br />실제 고객들이 경험한 &apos;비즈니스가 스스로 움직이는 순간&apos;을 들어보세요.
              </p>
            </div>

            {/* Testimonials Carousel */}
            <TestimonialsCarousel />

            
                  </div>
        </section>
        {/* CTA Section */}
        <div className="relative rounded-lg overflow-hidden">
              {/* 배경 비디오 */}
              <video 
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/cta.mp4" type="video/mp4" />
              </video>
              
              {/* 오버레이 */}
              <div className="absolute inset-0 bg-black/60"></div>
              
              {/* 콘텐츠 */}
              <div className="relative z-10 text-center mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16 px-6 sm:px-10 lg:px-12 py-6 sm:py-8 max-w-full mx-auto">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold text-[#f0f0fa] mb-3 sm:mb-4">
                  지금, 성공 스토리의<br className="sm:hidden" /> 주인공이 되어보세요
                </h3>
                <p className="text-sm sm:text-base lg:text-[16px] text-[#f0f0fa]/70 mb-4 sm:mb-6">
                  아이디어만 있으면 충분합니다.<br className="sm:hidden" /> 나머지는 SnapPlug와 함께 만들어봐요.
                </p>
                <ContactButton text="무료 상담 받기" />
              </div>
            </div>

      </main>

      {/* Footer - SpaceX Style */}
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
