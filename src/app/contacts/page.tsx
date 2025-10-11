"use client";

import SpaceXHeader from "@/components/SpaceXHeader";
import ContactButton from "@/components/ContactButton";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // API 호출하여 Make.com 웹훅으로 데이터 전송
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || '문의 전송에 실패했습니다.');
      }

      // 성공 상태로 변경
      setSubmitStatus('success');
      
      // 폼 초기화
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('문의 전송 중 오류 발생:', error);
      setSubmitStatus('error');
      
      // 오류 메시지도 일정 시간 후 초기화
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Head>
        <title>문의하기 - SNAPPPLUG</title>
        <meta name="description" content="SNAPPPLUG에 문의하세요. 웹 개발, 앱 개발, 디지털 마케팅 등 다양한 서비스에 대한 상담을 받으실 수 있습니다." />
        <meta name="keywords" content="SNAPPPLUG 문의, 웹개발 상담, 앱개발 문의, 디지털솔루션 상담, IT컨설팅" />
        <meta property="og:title" content="문의하기 - SNAPPPLUG" />
        <meta property="og:description" content="SNAPPPLUG에 문의하세요. 웹 개발, 앱 개발, 디지털 마케팅 등 다양한 서비스에 대한 상담을 받으실 수 있습니다." />
        <meta property="og:url" content="https://snapplug.app/contacts" />
        <meta property="og:type" content="website" />
      </Head>
      {/* SpaceX Header */}
      <SpaceXHeader />



      {/* Booking Section */}
      <section className="pt-20 pb-12 md:py-20 bg-black">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-16 px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'D-DIN, sans-serif', color: '#F0F0FA' }}>
              대표님의 이야기를 들려주세요.
            </h2>
            <p className="text-xs md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              <span className="md:hidden">모든 비즈니스는 다릅니다. SnapPlug는 대표님의 상황에 딱 맞는 솔루션을 설계합니다.<br />상담을 통해 필요한 기능과 범위를 정확히 파악한 후, 투명하고 합리적인 견적을 제안합니다.</span>
              <span className="hidden md:inline">모든 비즈니스는 다릅니다. SnapPlug는 대표님의 상황에 딱 맞는 솔루션을 설계합니다.<br />상담을 통해 필요한 기능과 범위를 정확히 파악한 후, 투명하고 합리적인 견적을 제안합니다.</span>
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center text-xs md:text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-#f0f0fa" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>무료 상담</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-#f0f0fa" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>맞춤형 솔루션 제안</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-#f0f0fa" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>투명한 견적 안내</span>
              </div>
            </div>
          </div>

          {/* Cal.com Embed Container */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded p-4 md:p-8 border border-[#F0F0FA]/20 mb-8 md:mb-16">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center space-x-3 mb-3 md:mb-4">
                <div className="text-xs font-black" style={{ 
                  fontFamily: 'Pirulen, sans-serif', 
                  letterSpacing: '-0.05em',
                  fontWeight: '900',
                  textShadow: '0 0 2px rgba(255,255,255,0.3)',
                  color: '#F0F0FA'
                }}>
                  SNAPPLUG
                </div>
               
              </div>
              
              <div className="space-y-2">
                
                <h3 className="text-base md:text-xl font-semibold" style={{ color: '#F0F0FA' }}>
                  심층 진단컨설팅
                </h3>
                <div className="flex justify-center items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-300">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    기본 1시간
                  </span>
                  <span className="flex items-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Google Meet
                  </span>
                </div>
              </div>
            </div>

            {/* Cal.com Embed */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <iframe
                src="https://cal.com/snap-plug/60분-진단컨설팅?language=ko"
                width="100%"
                height="500"
                frameBorder="0"
                title="SnapPlug 상담 예약"
                className="w-full md:h-[600px]"
                style={{ fontSize: '16px' }}
              />
            </div>

            <div className="mt-4 md:mt-6 text-center">
              <p className="text-xs md:text-sm text-gray-400 px-2">
                예약이 어려우시다면 아래 연락처로 직접 문의해주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-8 md:mb-16 px-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight" style={{ fontFamily: 'D-DIN, sans-serif', color: '#F0F0FA' }}>
              Contact Us
            </h2>
            <p className="text-xs md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
              <span className="md:hidden">프로젝트에 대한 아이디어나 궁금한 점이 있으시다면 언제든 연락주세요.<br />24시간 내에 답변드리겠습니다.</span>
              <span className="hidden md:inline">프로젝트에 대한 아이디어나 궁금한 점이 있으시다면 언제든 연락주세요.<br />24시간 내에 답변드리겠습니다.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded p-4 md:p-8 border border-[#F0F0FA]/20">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2" style={{ color: '#F0F0FA' }}>
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/50 border border-[#F0F0FA]/30 rounded text-white placeholder-gray-400 focus:border-[#F0F0FA]/60 focus:outline-none focus:ring-1 focus:ring-[#F0F0FA]/30 transition-all duration-300 text-base"
                    placeholder="이름을 입력해주세요"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2" style={{ color: '#F0F0FA' }}>
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/50 border border-[#F0F0FA]/30 rounded text-white placeholder-gray-400 focus:border-[#F0F0FA]/60 focus:outline-none focus:ring-1 focus:ring-[#F0F0FA]/30 transition-all duration-300 text-base"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>

            

              

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2" style={{ color: '#F0F0FA' }}>
                    문의 내용 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-black/50 border border-[#F0F0FA]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#F0F0FA]/60 focus:outline-none focus:ring-1 focus:ring-[#F0F0FA]/30 transition-all duration-300 resize-none text-base"
                    placeholder="프로젝트에 대한 아이디어나 궁금한 점을 자유롭게 작성해주세요"
                  />
                </div>

                {/* Status Message */}
                {submitStatus === 'success' && (
                  <div className="p-3 md:p-4 bg-green-500/20 border border-green-500/30 rounded text-green-400 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs md:text-sm">
                        문의가 성공적으로 전송되었습니다! 24시간 내에 답변드리겠습니다.
                      </span>
                    </div>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 md:p-4 bg-red-500/20 border border-red-500/30 rounded text-red-400 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs md:text-sm">
                        오류가 발생했습니다. 잠시 후 다시 시도해주세요.
                      </span>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="w-full flex justify-center">
                  <ContactButton 
                    type="submit"
                    text={isSubmitting ? "전송 중..." : "문의하기"}
                    className={`w-full sm:w-auto ${isSubmitting ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                  />
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer - SpaceX Style */}
      <footer className="bg-black py-8" style={{ color: '#F0F0FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: 1줄 레이아웃 */}
          <div className="hidden md:flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="text-xs font-black" style={{ 
                  fontFamily: 'Pirulen, sans-serif', 
                  letterSpacing: '-0.05em',
                  fontWeight: '900',
                  textShadow: '0 0 2px rgba(255,255,255,0.3)',
                  color: '#F0F0FA'
                }}>
                  SNAPPLUG
                </div>
              </Link>
            </div>
            
            {/* Center: Links */}
            <div className="flex-1 flex justify-center space-x-8">
              <div className="relative">
                <button 
                  onClick={() => setShowCompanyInfo(!showCompanyInfo)}
                  className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors"
                  style={{ fontFamily: 'D-DIN, sans-serif' }}
                >
                  COMPANY
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
              <a href="https://elegant-sand-f36.notion.site/24f2b9ca10c380c6b295d0fa5e23633c" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors" style={{ fontFamily: 'D-DIN, sans-serif' }}>
                TERMS OF SERVICE
              </a>
              <a href="https://elegant-sand-f36.notion.site/24f2b9ca10c38009b496fca952cac1d4" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors" style={{ fontFamily: 'D-DIN, sans-serif' }}>
                PRIVACY POLICY
              </a>
              <a href="/contacts" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors" style={{ fontFamily: 'D-DIN, sans-serif' }}>
                CONTACTS
            </a>
          </div>
            
            {/* Right: Copyright */}
            <div className="flex-shrink-0">
              <p className="text-sm uppercase tracking-wider" style={{ fontFamily: 'D-DIN, sans-serif' }}>
                @2025 SNAPPLUG
              </p>
            </div>
          </div>

          {/* Mobile: 3줄 레이아웃 */}
          <div className="md:hidden space-y-4">
            {/* 1줄: Center Links */}
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors" style={{ fontFamily: 'D-DIN, sans-serif' }}>
                SNAPPLUG
              </a>
              <a href="https://elegant-sand-f36.notion.site/24f2b9ca10c380c6b295d0fa5e23633c" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors" style={{ fontFamily: 'D-DIN, sans-serif' }}>
                TERMS
              </a>
              <a href="https://elegant-sand-f36.notion.site/24f2b9ca10c38009b496fca952cac1d4" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors" style={{ fontFamily: 'D-DIN, sans-serif' }}>
                PRIVACY
              </a>
              <a href="/contacts" className="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors" style={{ fontFamily: 'D-DIN, sans-serif' }}>
                CONTACTS
              </a>
            </div>
            
            {/* 2줄: Right Copyright */}
            <div className="flex justify-center">
              <p className="text-sm uppercase tracking-wider" style={{ fontFamily: 'D-DIN, sans-serif' }}>
                @2025 SNAPPLUG
              </p>
            </div>
            
            {/* 3줄: Left Logo */}
            <div className="flex justify-center">
              <Link href="/" className="flex items-center">
                <div className="text-xs font-black" style={{ 
                  fontFamily: 'Pirulen, sans-serif', 
                  letterSpacing: '-0.05em',
                  fontWeight: '900',
                  textShadow: '0 0 2px rgba(255,255,255,0.3)',
                  color: '#F0F0FA'
                }}>
                  SNAPPLUG
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
