import SpaceXHeader from "@/components/SpaceXHeader";
import FullScreenSection from "@/components/FullScreenSection";
import ContactButton from "@/components/ContactButton";
import AnimatedCounter from "../components/AnimatedCounter";

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
            className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6" 
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
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">
                  <AnimatedCounter end={60} duration={2000} />
                </span>
                <span className="text-lg sm:text-xl ml-1">분 이상</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">초기 상담 시간</div>
              <div className="text-xs text-[#f0f0fa]/50">충분한 시간으로 정확한 파악</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">
                  <AnimatedCounter end={99} duration={2200} />
                </span>
                <span className="text-lg sm:text-xl ml-1">%</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">프로젝트 목표 달성률</div>
              <div className="text-xs text-[#f0f0fa]/50">약속한 결과를 확실히 전달</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">
                  <AnimatedCounter end={87} duration={2500} />
                </span>
                <span className="text-lg sm:text-xl ml-1">%</span>
              </div>
              <div className="text-xs sm:text-sm text-[#f0f0fa]/70">재계약/소개율</div>
              <div className="text-xs text-[#f0f0fa]/50">만족한 고객들의 지속적 선택</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#f0f0fa] mb-2 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">
                  <AnimatedCounter end={2.0} duration={2000} />
                </span>
                <span className="text-lg sm:text-xl ml-1">시간</span>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
              {/* Left Content */}
              <div className="text-left">
                <h2 
                  className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight" 
                  style={{ 
                    fontFamily: 'var(--font-pirulen), sans-serif',
                    color: '#f0f0fa'
                  }}
                >
                  비즈니스, 그 이상을 만드는 여정
                </h2>
                <div className="space-y-6 text-lg sm:text-xl text-[#f0f0fa] leading-relaxed">
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
                <div className="mt-12">
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
        <FullScreenSection 
          backgroundVideo="/service.mp4"
          overlay={true}
          overlayOpacity={0.4}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8" 
                style={{ 
                  fontFamily: 'var(--font-pirulen), sans-serif',
                  color: '#f0f0fa'
                }}
              >
                OUR SERVICES
              </h2>
              <p className="text-lg sm:text-xl text-[#f0f0fa]/80 max-w-3xl mx-auto mb-16">
                아이디어부터 완성까지, 단계별 맞춤 솔루션을 제공합니다
              </p>
              
              {/* 서비스 카드 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#121212]/60 backdrop-blur-sm border border-[#f0f0fa]/20 rounded-lg p-8 text-left">
                  <div className="text-2xl font-bold text-[#f0f0fa] mb-4">랜딩페이지</div>
                  <p className="text-[#f0f0fa]/70 text-sm mb-6">
                    첫 단계부터 완벽한 시작. 아이디어를 소개하고 고객을 유치하는 전문적인 랜딩페이지를 제작합니다.
                  </p>
                  <div className="text-xs text-[#f0f0fa]/50">
                    • 반응형 디자인 • SEO 최적화 • 빠른 로딩
                  </div>
                </div>
                
                <div className="bg-[#121212]/60 backdrop-blur-sm border border-[#f0f0fa]/20 rounded-lg p-8 text-left">
                  <div className="text-2xl font-bold text-[#f0f0fa] mb-4">웹서비스</div>
                  <p className="text-[#f0f0fa]/70 text-sm mb-6">
                    본격적인 비즈니스 운영을 위한 완전한 웹서비스. 사용자 관리부터 결제까지 모든 기능을 구현합니다.
                  </p>
                  <div className="text-xs text-[#f0f0fa]/50">
                    • 사용자 인증 • 데이터베이스 • API 연동
                  </div>
                </div>
                
                <div className="bg-[#121212]/60 backdrop-blur-sm border border-[#f0f0fa]/20 rounded-lg p-8 text-left">
                  <div className="text-2xl font-bold text-[#f0f0fa] mb-4">자동화 솔루션</div>
                  <p className="text-[#f0f0fa]/70 text-sm mb-6">
                    반복 업무를 자동화하여 효율성을 극대화. 비즈니스 성장에 집중할 수 있도록 뒷받침합니다.
                  </p>
                  <div className="text-xs text-[#f0f0fa]/50">
                    • 업무 자동화 • 통합 관리 • 실시간 모니터링
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FullScreenSection>

        {/* Portfolio Section */}
        <section className="py-20 bg-[#121212]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8" 
                style={{ 
                  fontFamily: 'var(--font-pirulen), sans-serif',
                  color: '#f0f0fa'
                }}
              >
                PORTFOLIO
              </h2>
              <p className="text-lg sm:text-xl text-[#f0f0fa]/70 max-w-3xl mx-auto">
                다양한 분야에서 검증된 자동화 솔루션들
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* 1. 센터 운영 관리 서비스 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Mock UI Header */}
                <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs">
                  <span className="text-gray-600">AI 자동화</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">5:36</span>
                    <span className="text-gray-500">5G 100</span>
                  </div>
                </div>
                
                {/* Mock App Interface */}
                <div className="p-4 bg-gray-50">
                  <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
                    <div className="text-sm font-medium text-gray-800">SnapClub - 가장 간단하고 확...</div>
                    <div className="text-xs text-gray-500">www.snapclub.app</div>
                    <div className="mt-2 text-sm text-gray-700">스냅클럽</div>
                    <div className="text-xs text-gray-600">수업 예약</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white rounded p-2">
                      <div className="text-gray-600">Dashboard</div>
                      <div className="text-gray-600">수업시간표</div>
                      <div className="text-gray-600">회원정보</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="text-gray-600">강사정보</div>
                      <div className="text-gray-600">센터관리</div>
                      <div className="text-gray-600">Settings</div>
                    </div>
                  </div>
                </div>
                
                {/* Portfolio Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">센터 운영 관리 서비스</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    카카오톡 기반 자동화 시스템으로 예약·회원·스케줄 관리까지. 별도의 앱 없이, 누구나 바로 사용할 수 있는 운영 혁신 솔루션.
                  </p>
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                    자세히 보기 →
                  </button>
                  <div className="text-xs text-gray-400 mt-2">김원장</div>
                </div>
              </div>

              {/* 2. 스케줄/대시보드 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Mock UI Header */}
                <div className="bg-gray-100 px-4 py-2">
                  <span className="text-lg font-medium text-gray-800">2025년 10월</span>
                </div>
                
                {/* Mock Schedule Interface */}
                <div className="p-4 bg-gray-50">
                  <div className="space-y-2">
                    <div className="bg-orange-100 border-l-4 border-orange-500 p-2 rounded text-xs">
                      <div className="font-medium">김강사 (0/1)</div>
                      <div className="text-gray-600">오전 10시</div>
                    </div>
                    <div className="bg-blue-100 border-l-4 border-blue-500 p-2 rounded text-xs">
                      <div className="font-medium">박강사 (1/3)</div>
                      <div className="text-gray-600">오전 10시 · 정회원</div>
                    </div>
                    <div className="bg-purple-100 border-l-4 border-purple-500 p-2 rounded text-xs">
                      <div className="font-medium">박강사 (0/3)</div>
                      <div className="text-gray-600">오후 12시</div>
                    </div>
                  </div>
                </div>
                
                {/* Portfolio Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">운영 효율성 분석</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">-70%</div>
                      <div className="text-xs text-gray-600">관리시간 절감</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">+2.3배</div>
                      <div className="text-xs text-gray-600">운영 효율 향상</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">0건</div>
                      <div className="text-xs text-gray-600">예약 누락 및 오류</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">98%</div>
                      <div className="text-xs text-gray-600">강사 및 회원 만족도</div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-1 mb-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* 3. 병원 예약 관리 솔루션 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Mock UI Header */}
                <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs">
                  <span className="text-gray-600">AI 자동화</span>
                </div>
                
                {/* Mock Hospital Interface */}
                <div className="p-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-medium text-gray-800">모든 할당된 검사</h4>
                    <button className="bg-green-500 text-white px-3 py-1 rounded text-xs">+ 검사 만들기</button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white p-2 rounded text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600">In progress</span>
                      </div>
                      <span className="text-gray-800">혈압 측정</span>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2 rounded text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <span className="text-gray-600">Not started</span>
                      </div>
                      <span className="text-gray-800">체온 측정</span>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2 rounded text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Completed</span>
                      </div>
                      <span className="text-gray-800">신체 검사</span>
                    </div>
                  </div>
                </div>
                
                {/* Portfolio Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">병원 예약 관리 솔루션</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    병원 예약부터 예진, 문진까지 완전 자동화로 의료진의 시간을 되찾았습니다.
                  </p>
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-[#000000]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8" 
                style={{ 
                  fontFamily: 'var(--font-pirulen), sans-serif',
                  color: '#f0f0fa'
                }}
              >
                TESTIMONIALS
              </h2>
              <p className="text-lg sm:text-xl text-[#f0f0fa]/70 max-w-3xl mx-auto">
                성공한 고객들의 진짜 이야기
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Testimonial 1 */}
              <div className="bg-[#121212] border border-[#f0f0fa]/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f0f0fa]/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#f0f0fa] font-bold text-lg">김</span>
                  </div>
                  <div>
                    <div className="text-[#f0f0fa] font-medium">김원장</div>
                    <div className="text-[#f0f0fa]/60 text-sm">필라테스 센터 운영</div>
                  </div>
                </div>
                <div className="text-[#f0f0fa]/80 text-sm leading-relaxed mb-4">
                  &quot;예약 관리가 이렇게 쉬울 줄 몰랐어요. 카카오톡으로 모든 게 자동화되니까 회원들도 편하고 저도 편해요. 매출이 2배로 늘었습니다!&quot;
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-[#121212] border border-[#f0f0fa]/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f0f0fa]/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#f0f0fa] font-bold text-lg">박</span>
                  </div>
                  <div>
                    <div className="text-[#f0f0fa] font-medium">박대표</div>
                    <div className="text-[#f0f0fa]/60 text-sm">헬스케어 스타트업</div>
                  </div>
                </div>
                <div className="text-[#f0f0fa]/80 text-sm leading-relaxed mb-4">
                  &quot;아이디어만 있었는데 SnapPlug에서 완전한 웹서비스로 만들어줬어요. 사용자들이 정말 좋아하고, 지금은 월 매출 500만원을 달성했어요.&quot;
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-[#121212] border border-[#f0f0fa]/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f0f0fa]/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#f0f0fa] font-bold text-lg">이</span>
                  </div>
                  <div>
                    <div className="text-[#f0f0fa] font-medium">이원장</div>
                    <div className="text-[#f0f0fa]/60 text-sm">치과 병원 운영</div>
                  </div>
                </div>
                <div className="text-[#f0f0fa]/80 text-sm leading-relaxed mb-4">
                  &quot;예약 누락이 완전히 사라졌어요. 환자들도 온라인으로 편하게 예약하고, 저희는 진료에만 집중할 수 있게 되었습니다. 정말 감사해요.&quot;
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-[#121212] border border-[#f0f0fa]/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f0f0fa]/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#f0f0fa] font-bold text-lg">정</span>
                  </div>
                  <div>
                    <div className="text-[#f0f0fa] font-medium">정대표</div>
                    <div className="text-[#f0f0fa]/60 text-sm">교육 사업</div>
                  </div>
                </div>
                <div className="text-[#f0f0fa]/80 text-sm leading-relaxed mb-4">
                  &quot;학생 관리가 자동화되니까 정말 편해요. 출석 체크, 과제 관리까지 모든 게 시스템으로 돌아가서 수업 준비에만 집중할 수 있어요.&quot;
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="bg-[#121212] border border-[#f0f0fa]/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f0f0fa]/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#f0f0fa] font-bold text-lg">최</span>
                  </div>
                  <div>
                    <div className="text-[#f0f0fa] font-medium">최사장</div>
                    <div className="text-[#f0f0fa]/60 text-sm">미용실 운영</div>
                  </div>
                </div>
                <div className="text-[#f0f0fa]/80 text-sm leading-relaxed mb-4">
                  &quot;고객 예약 관리가 완전히 바뀌었어요. 더블부킹이나 누락이 전혀 없고, 고객들도 편리해해서 재방문율이 높아졌어요.&quot;
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="bg-[#121212] border border-[#f0f0fa]/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#f0f0fa]/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#f0f0fa] font-bold text-lg">한</span>
                  </div>
                  <div>
                    <div className="text-[#f0f0fa] font-medium">한대표</div>
                    <div className="text-[#f0f0fa]/60 text-sm">온라인 쇼핑몰</div>
                  </div>
                </div>
                <div className="text-[#f0f0fa]/80 text-sm leading-relaxed mb-4">
                  &quot;주문부터 배송까지 모든 프로세스가 자동화되니까 정말 놀라워요. 인력 비용도 절약되고 고객 만족도도 높아졌습니다.&quot;
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-[#121212] border border-[#f0f0fa]/10 rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-[#f0f0fa] mb-4">
                  당신도 성공 스토리의 주인공이 되어보세요
                </h3>
                <p className="text-[#f0f0fa]/70 mb-6">
                  아이디어만 있으면 충분합니다. 나머지는 SnapPlug가 해드릴게요.
                </p>
                <ContactButton text="무료 상담 받기" />
              </div>
            </div>
          </div>
        </section>

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
