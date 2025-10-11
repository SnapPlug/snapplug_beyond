'use client';

import { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar: string;
  avatarColor: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "김*성 대표",
    title: "대표",
    company: "필라테스 센터",
    content: "회원들이 예약을 취소하거나 변경할 때마다 연락하고, 스케줄을 다시 조정하는 과정이 너무 번거로웠어요. 그리고 기존에 사둉하던 시스템은 복잡하고 불편했죠. 스냅플러그와 함께 카카오톡 기반 자동화 시스템을 도입한 후 완전히 달라졌습니다. 수업관리, 회원관리가 전부 자동으로 돌아가요. 스냅플러그는 진짜 대표의 시간을 돌려주는 팀이에요.",
    avatar: "김",
    avatarColor: "bg-teal-300"
  },
  {
    id: 2,
    name: "박*름 원장",
    title: "원장",
    company: "영어학원",
    content: "학생들의 학습 진도 관리와 학부모 상담이 가장 큰 고민이었습니다. 매번 수기로 진도표를 작성하고, 학부모님들과 개별 상담을 진행하는데 시간이 너무 많이 걸렸어요. 스냅플러그의 상담은 매우 전문적이었고 진심으로 상황을 들어주고 방향을 제시해주셨어요. 상담 한 번으로 내가 뭘 해야 하는지가 명확해졌습니다.",
    avatar: "박",
    avatarColor: "bg-purple-300"
  },
  {
    id: 3,
    name: "이*종 대표",
    title: "대표",
    company: "온라인 쇼핑몰",
    content: "스냅플러그는 믿을 수 있었어요. 기존 개발팀은 응답이 늦고 수정사항 반영도 오래 걸렸는데, 스냅플러그와 함께 일하면서 완전히 다른 경험을 했습니다. 연락이 빠르다 못해 실시간입니다. 밤에도 바로 응답을 받았고, 그게 단순한 피드백이 아니라 해결책이었어요.",
    avatar: "이",
    avatarColor: "bg-red-300"
  },
  {
    id: 4,
    name: "정*희 대표",
    title: "대표",
    company: "커피 수입 브랜드",
    content: "개발에 문외한이라 외주 개발에 막연한 두려움이 있었어요. 예전에 5개의 서비스에 3천만원 이상을 지출하며 비용과 시간에 대한 걱정이 컸죠. 하지만 스냅플러그를 통해 개발을 시작한 후, 예상보다 훨씬 합리적인 비용과 놀라운 속도에 감탄했습니다. 이제 비즈니스 성장에만 집중할 수 있게 되었어요!",
    avatar: "정",
    avatarColor: "bg-lime-300"
  },
  {
    id: 5,
    name: "오*정 원장",
    title: "원장",
    company: "산부인과",
    content: "간호사와 환자들이 계속 불만을 토로했었어요. 근데 뭐가 문제인지 몰랐고, 어디서부터 해결해야할지 막막했어요. 스냅플러그와의 상담을 통해서 문제되는 포인트를 정확히 찾았고, 해결방법을 함께 찾아갔습니다. 소통이 너무 잘됐고 스냅플러그와 함께 만들어낸 서비스로 간호사와 환자들이 정말 만족하고 좋아했어요.",
    avatar: "오",
    avatarColor: "bg-blue-300"
  },
  {
    id: 6,
    name: "손*구 대표",
    title: "대표",
    company: "교육 플랫폼 스타트업",
    content: "이런 투명한 팀은 처음 봤습니다. 피드백도 빨랐고 주기적으로 진행상황을 자세히 알려주셔서 너무 좋았어요. 스냅플러그와 함께 일하면서 완전히 다른 경험을 했습니다. 수정사항도 스스로 먼저 제안을 해주셨고, 원하는 기능과 디자인을 빠르게 적용해주셨어요.",
    avatar: "손",
    avatarColor: "bg-indigo-300"
  },
  {
    id: 7,
    name: "최*라 대표",
    title: "대표",
    company: "마케팅 에이전시",
    content: "우리의 요구사항을 100%, 아니 그 이상을 반영해줬어요. 요구사항을 말씀드리면 안된다는 말보다 함께 방법을 찾으려고 노력해주셨고, 우리 서비스를 저보다 더 이해한 느낌이었어요. 결과물이 우리가 원하는 대로 나왔습니다. 그리고 처음부터 마지막까지 소통이 완벽했어요.",
    avatar: "최",
    avatarColor: "bg-pink-300"
  },
  {
    id: 8,
    name: "윤*종 대표",
    title: "대표",
    company: "프리랜서 컨설턴트",
    content: "기존에는 프로젝트가 끝나면 연락이 끊어지는 경우가 많았어요. 특히 사이트 운영 중 문제가 생기거나 수정이 필요할 때 연락이 닿지 않아 스트레스가 심했습니다. 또한 초기 기획 단계에서도 제대로 된 상담 없이 바로 개발에 들어가서 원하는 결과물이 나오지 않는 경우가 많았는데, 스냅플러그는 개발자가 아니라 '파트너'에 가까웠습니다. 결과가 나올 때까지 끝까지 책임감 갖고 일해주셨어요.",
    avatar: "윤",
    avatarColor: "bg-orange-300"
  },
  {
    id: 9,
    name: "장*민 대표",
    title: "대표",
    company: "지역 광고 대행사",
    content: "개발 의뢰를 하고 진행을 하면서 제가 의뢰인이 아니라 팀원이 된 느낌을 받았어요. 결과보다 과정에서 더 감동했습니다. 요구한 내용보다 더 해주시려는 모습이 많아서 감동했고, 디자인과 기능적으로 변경이 잦았는데 빠르게 반영해주셔서 너무 좋았습니다. 주위에 추천을 많이 하고 다니고 있어요. 강추합니다.",
    avatar: "장",
    avatarColor: "bg-cyan-300"
  },
  {
    id: 10,
    name: "이*규 사장",
    title: "사장",
    company: "교육 재단",
    content: "처음에 상담을 받았을 때 제가 원하는 서비스를 들으시더니, 정말 필요한 기능만 개발하자고 먼저 제안을 해주셨어요. 다른 곳에 견적을 문의했을 때에 비해서 상당히 합리적이라고 느꼈습니다. 주도적으로 아이디어도 많이 주시고 무엇보다 함께 고민하고 방법을 찾아가는 과정이 좋았습니다.",
    avatar: "이",
    avatarColor: "bg-emerald-300"
  }
];

export default function TestimonialsCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [cardWidth, setCardWidth] = useState(254); // 기본값: 데스크톱
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // 클라이언트 마운트 및 화면 크기 감지
  useEffect(() => {
    setIsMounted(true);
    
    const updateCardWidth = () => {
      setCardWidth(window.innerWidth < 640 ? 222 : 254);
    };
    
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    
    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  // 기차처럼 연속적인 슬라이딩
  useEffect(() => {
    if (isAutoPlaying && isMounted) {
      const animate = () => {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + 1.2; // 매 프레임마다 1.2px씩 이동
          const maxScroll = testimonialsData.length * cardWidth;
          
          // 마지막에 도달하면 처음으로 리셋
          if (newPosition >= maxScroll) {
            return 0;
          }
          
          return newPosition;
        });
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoPlaying, isMounted, cardWidth]);

  // 마우스 호버 시 자동 재생 일시정지
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 카드 컨테이너 */}
      <div 
        ref={containerRef}
        className="flex"
        style={{ 
          transform: `translateX(-${scrollPosition.toFixed(0)}px)`,
          width: `${testimonialsData.length * cardWidth}px`
        }}
      >
        {testimonialsData.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="flex-shrink-0 w-[220px] sm:w-[250px] px-1 sm:px-2"
          >
            <div className="bg-[#121212]/80 border border-[#f0f0fa]/10 rounded-lg p-4 sm:p-6 h-full flex flex-col">
              {/* 별점 */}
              <div className="flex text-yellow-400 mb-3 sm:mb-4">
                <span className="text-sm sm:text-base">{'★'.repeat(5)}</span>
              </div>
              
              {/* 후기 내용 */}
              <div className="text-[#f0f0fa]/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                {testimonial.content}
              </div>
              
              {/* 작성자 정보 - 카드 하단에 고정 */}
              <div className="flex items-center mt-auto">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${testimonial.avatarColor} rounded-lg flex items-center justify-center mr-3 sm:mr-4`}>
                  <span className="text-black/60 font-bold text-sm sm:text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-[#f0f0fa] font-medium text-xs sm:text-sm">{testimonial.name}</div>
                  <div className="text-[#f0f0fa]/60 text-xs sm:text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}