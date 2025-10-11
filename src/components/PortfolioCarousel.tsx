'use client';

import { useState, useRef, useEffect } from 'react';

/**
 * 포트폴리오 캐러셀 컴포넌트
 * 
 * 테슬라 스타일의 슬라이딩/스와이프가 가능한 포트폴리오 디스플레이
 * - 터치/마우스 드래그로 슬라이딩 가능
 * - 페이지네이션 인디케이터
 * - 자동 재생 기능
 * - 상세 스토리 스크롤 기능
 */

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  isVideo?: boolean;
  metrics: {
    label: string;
    value: string;
    improvement?: string;
  }[];
  story: {
    challenge: string;
    solution: string;
    result: string;
  };
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "센터 운영 관리 서비스",
    category: "카카오톡 기반으로 별도의 앱 없이. 회원•수업•예약•회원권 관리를 가장 쉽게 할 수 있는 센터 운영 혁신 솔루션.",
    image: "/SNAPCLUB DEMO.mp4",
    isVideo: true,
    metrics: [
      { label: "관리시간 절감", value: "70%", improvement: "감소" },
      { label: "운영 효율 향상", value: "2.3배", improvement: "증가" },
      { label: "예약 누락", value: "0건", improvement: "완전 해결" },
      { label: "강사 및 회원 만족도", value: "98%", improvement: "유지" }
    ],
    story: {
      challenge: "기존에 사용하던 예약 및 센터 운영 관리 시스템에 불필요한 기능이 많고 복잡하게 설계되어 있어서 원하는 정보를 보기 위해 복잡한 단계를 거쳐야만 했고, 회원권 잔여 기간 모니터링이 되지 않아 회원권 관리가 되지 않고 있었습니다.",
      solution: "불필요한 기능과 복잡한 인터페이스를 없애고 꼭 필요한 기능만 남겨서 전체 시스템을 재설계했습니다. 회원들은 별도 앱 없이 카카오톡으로 모든 예약을 처리할 수 있게 되었고, 예약, 수업, 회원권 관리까지 하나의 시스템으로 통합했습니다.",
      result: "불필요한 부분이 완벽히 사라진 사용자 중심의 운영 시스템으로 전환되어, 회원•수업•예약•회원권 관리가 자동화되어 수강연장률이 크게 개선되었고 매출이 2배로 늘었습니다."
    }
  },
  {
    id: 2,
    title: "병원 예약 관리 솔루션",
    category: "병원 예약부터 예진, 문진까지 완전 자동화. 환자, 간호사, 의사 모두가 만족하는 예약 관리 솔루션.",
    image: "/hosipital.png",
    isVideo: false,
    metrics: [
      { label: "월 평균 업무 시간", value: "43.5시간", improvement: "단축" },
      { label: "환자 대기시간", value: "60%", improvement: "감소" },
      { label: "예약 누락/중복", value: "0건", improvement: "완전 해결" },
      { label: "환자 및 의료진 만족도", value: "95%", improvement: "향상" }
    ],
    story: {
      challenge: "산부인과 병원에서 기존에는 다른 업체의 애플리케이션을 이용해 환자 예약을 관리하고 있었습니다. 하지만 환자들이 전화로 예약을 확인하거나 변경하는 경우가 중복으로 발생하면서 기존 시스템을 사용하지 않게 되었고, 결국 예전처럼 전화로 직접 예약을 받고 관리하게 되었습니다. 예약 부분은 어느 정도 개선되었지만 여전히 중복이나 누락 오류가 발생했고, 더 큰 문제는 환자가 병원에 와서 의사에게 진료 및 치료를 받기까지의 과정 중 예진/문진/상담 부분이었습니다. 매번 똑같은 질문지를 환자들에게 나눠주고 응답을 기다린 후, 그 결과를 간호사가 읽어서 의사에게 전달하는 모든 과정이 비효율적이었고, 환자 1명당 간호사가 매번 5~10분씩 전담으로 붙어야 하는 부담이 있었습니다.",
      solution: "예진, 문진, 상담 과정을 완전히 자동화했습니다. 환자들은 미리 온라인으로 예진/문진을 완료할 수 있고, 병원에 도착하면 바로 의사와 상담할 수 있게 되었습니다. 간호사들은 이제 환자별로 5~10분씩 붙어있을 필요 없이, 정말 필요한 상담과 치료에만 집중할 수 있게 되었습니다. 예약 관리도 자동화되어 중복이나 누락 문제가 완전히 해결되었습니다.",
      result: "환자들의 대기시간이 획기적으로 감소했고, 간호사들의 업무 부담이 현저히 줄어들었습니다. 환자들은 '이렇게 빨리 진료받을 수 있다니'라며 만족해하고, 간호사들도 '이제 정말 중요한 일에만 집중할 수 있다'고 합니다. 환자와 간호사들의 만족도가 대폭 향상되었고, 병원의 전체적인 운영 효율이 크게 개선되었습니다."
    }
  },
  {
    id: 3,
    title: "종합학원 상담 자동화 시스템",
    category: "상담부터 진단, 로드맵까지 자동으로. 교육의 본질에 집중할 수 있는 자동화 시스템",
    image: "/rootnroute.png",
    isVideo: false,
    metrics: [
      { label: "AI 상담 자동화율", value: "98%", improvement: "향상" },
      { label: "상담 효율", value: "3배", improvement: "향상" },
      { label: "학생 및 학부모 만족도", value: "96%", improvement: "향상" },
      { label: "재등록률", value: "67%", improvement: "향상" }
    ],
    story: {
      challenge: "수강생 80명, 원장과 강사 단 2명이 운영하는 종합학원. 대입, 검정고시, 토익 등 다양한 과목을 매일 아침 10시부터 밤 12시까지 강도 높은 스케줄로 진행하고 있었습니다. 학생 수를 늘리고 매출을 높이기 위해서는 학생과 학부모 상담이 필수였지만, 단순한 상담이 아니었습니다. 학생별 맞춤형 상담, 개별 진단 테스트를 통한 상황 점검, 목표 학교나 성적을 위한 로드맵 제시까지... 모든 과정이 수기로 이루어졌고 한 학생당 평균 1시간씩 소요되면서 업무 피로도가 극심했습니다. 수업 준비할 시간이 부족했지만 상담을 포기할 수도 없었고, 수업과 상담을 병행하다 보니 상담이 늦은 밤이나 새벽으로 밀려났습니다. 학부모와 스케줄이 맞지 않아 잠재 고객을 놓치는 경우가 많았습니다.",
      solution: "상담 프로세스를 AI 자동화 시스템으로 구현하고 모든 과정을 디지털화했습니다. 학생별 맞춤형 상담, 진단 테스트, 로드맵 제시까지 AI가 자동으로 처리하면서도 높은 품질을 유지했습니다. 원장님과 강사님은 AI가 먼저 처리한 상담 내용을 바탕으로 정말 중요한 부분에만 집중할 수 있게 되었고, 시간에 구애받지 않고 24시간 상담이 가능해져 잠재 고객을 놓치는 일이 사라졌습니다.",
      result: "상담 및 학생 진단 프로세스의 만족도가 대폭 상승했고, 재등록률과 신규 학생 수가 크게 늘었습니다. 원장님은 '이제 교육자로서 수업에 집중하고 학생들에게 더 많은 관심을 쏟을 수 있게 되어 좋고, 학생 수가 늘어나서 더 좋다'고 하셨습니다. 학부모들은 '언제든 상담할 수 있어서 편리하고, 맞춤형 로드맵이 정확하다'며 만족해하고, 학생들도 '내 상황에 맞는 공부법을 알려줘서 효과적이다'고 합니다."
    }
  }
];

export default function PortfolioCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (containerRef.current) {
      const slideWidth = containerRef.current.clientWidth * 0.90 + 12; // 90% width + margin
      containerRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  // 스크롤 이벤트 감지하여 currentSlide 업데이트
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const slideWidth = container.clientWidth * 0.90 + 24; // 90% width + margin
        const scrollLeft = container.scrollLeft;
        const newSlide = Math.round(scrollLeft / slideWidth);
        setCurrentSlide(newSlide);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative">
      {/* 캐러셀 컨테이너 */}
      <div 
        ref={containerRef}
        className="flex overflow-x-hidden scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ 
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth'
        }}
      >
        {portfolioData.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-[90%] h-[450px] sm:h-[500px] lg:h-[600px] relative mr-6 rounded-lg overflow-hidden"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* 배경 비디오/이미지 */}
            {item.isVideo ? (
              <video 
                className="absolute inset-0 w-full h-full object-cover object-left"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src={item.image} type="video/mp4" />
              </video>
            ) : (
              <div 
                className="absolute inset-0 bg-cover bg-left bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            )}
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              expandedCard === item.id ? 'bg-black/80' : 'bg-black/60'
            }`}></div>

            {/* 콘텐츠 오버레이 */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12">
                <div style={{ color: '#f0f0fa' }}>
                  {expandedCard === item.id ? (
                    /* 상세 스토리 - 스크롤 가능 */
                    <div className="space-y-3 sm:space-y-4 lg:space-y-6 max-h-[320px] sm:max-h-[380px] lg:max-h-[450px] overflow-y-auto pr-2">
                      <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black mb-3 sm:mb-4 lg:mb-6 leading-tight" style={{ color: '#f0f0fa' }}>
                        {item.title} 스토리
                      </h3>
                      
                      <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                        <div>
                          <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2" style={{ color: '#f0f0fa' }}>Before</h4>
                          <p className="leading-relaxed text-xs sm:text-sm lg:text-base" style={{ color: '#f0f0fa' }}>
                            {item.story.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2" style={{ color: '#f0f0fa' }}>Solution</h4>
                          <p className="leading-relaxed text-xs sm:text-sm lg:text-base" style={{ color: '#f0f0fa' }}>
                            {item.story.solution}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2" style={{ color: '#f0f0fa' }}>After</h4>
                          <p className="leading-relaxed text-xs sm:text-sm lg:text-base" style={{ color: '#f0f0fa' }}>
                            {item.story.result}
                          </p>
                        </div>
                      </div>

                      <button 
                        onClick={() => setExpandedCard(null)}
                        className="bg-transparent border px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded text-xs sm:text-sm lg:text-base font-medium transition-colors"
                        style={{ 
                          borderColor: '#f0f0fa', 
                          color: '#f0f0fa' 
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#f0f0fa';
                          e.currentTarget.style.color = '#000000';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#f0f0fa';
                        }}
                      >
                        뒤로 가기
                      </button>
                    </div>
                  ) : (
                    /* 기본 콘텐츠 */
                    <>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 sm:mb-3 leading-tight" style={{ color: '#f0f0fa' }}>
                        {item.title}
                      </h3>
                      <div className="text-xs sm:text-sm lg:text-base font-medium mb-4 sm:mb-6 leading-relaxed" style={{ color: '#f0f0fa' }}>
                        {item.category.split('. ').map((line, index, array) => (
                          <span key={index}>
                            {line}{index < array.length - 1 ? '.' : ''}
                            {index < array.length - 1 && <br />}
                          </span>
                        ))}
                      </div>

                      {/* 태블릿 이상에서만 표시되는 핵심지표와 버튼 */}
                      <div className="hidden sm:block">
                        {/* 핵심지표 */}
                        <div className="bg-black/40 rounded-lg p-4 lg:p-6 mb-8 lg:mb-12 text-center max-w-sm">
                          <div className="grid grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-3">
                            {item.metrics.map((metric, idx) => (
                              <div key={idx} className="text-center">
                                <div className="text-xl lg:text-2xl xl:text-3xl font-bold mb-1 flex items-center justify-center" style={{ color: '#f0f0fa' }}>
                                  <span>{metric.value}</span>
                                  {metric.improvement && (
                                    <span className="text-sm lg:text-base ml-1" style={{ color: '#f0f0fa' }}>
                                      {metric.improvement === '감소' || metric.improvement === '단축' ? '↓' : '↑'}
                                    </span>
                                  )}
                                </div>
                                <div className="text-sm lg:text-base leading-tight" style={{ color: '#f0f0fa' }}>{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA 버튼 */}
                        <div className="flex gap-4">
                          <button 
                            onClick={() => setExpandedCard(item.id)}
                            className="bg-transparent border px-8 lg:px-10 py-3 lg:py-4 rounded text-base lg:text-lg font-medium transition-colors"
                            style={{ 
                              borderColor: '#f0f0fa', 
                              color: '#f0f0fa' 
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f0f0fa';
                              e.currentTarget.style.color = '#000000';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#f0f0fa';
                            }}
                          >
                            자세히 보기
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* 모바일에서만 카드 아래에 표시되는 핵심지표와 버튼 */}
              <div className="sm:hidden mt-4 px-4">
                <div className="bg-black/60 rounded-lg p-4 mb-4 text-center">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold mb-1 flex items-center justify-center" style={{ color: '#f0f0fa' }}>
                          <span>{metric.value}</span>
                          {metric.improvement && (
                            <span className="text-xs ml-1" style={{ color: '#f0f0fa' }}>
                              {metric.improvement === '감소' || metric.improvement === '단축' ? '↓' : '↑'}
                            </span>
                          )}
                        </div>
                        <div className="text-xs leading-tight" style={{ color: '#f0f0fa' }}>{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-start">
                  <button 
                    onClick={() => setExpandedCard(item.id)}
                    className="bg-transparent border px-6 py-2 mb-4 rounded text-sm font-medium transition-colors"
                    style={{ 
                      borderColor: '#f0f0fa', 
                      color: '#f0f0fa' 
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f0f0fa';
                      e.currentTarget.style.color = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#f0f0fa';
                    }}
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 페이지네이션 인디케이터 */}
      <div className="flex justify-center mt-6 sm:mt-8 lg:mt-12 space-x-2 sm:space-x-3">
        {portfolioData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-6 sm:w-8 h-2' 
                : 'bg-white/40 hover:bg-white/60 w-2 h-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}