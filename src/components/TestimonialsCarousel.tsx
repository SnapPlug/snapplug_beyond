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
    content: "이제 제 하루에 '관리 시간'이 사라졌습니다. 스케줄, 회원, 결제 — 전부 자동으로 돌아가요. SnapPlug는 진짜 대표의 시간을 돌려주는 팀이에요.",
    avatar: "김",
    avatarColor: "bg-teal-500"
  },
  {
    id: 2,
    name: "박*름 원장",
    title: "원장",
    company: "영어학원",
    content: "이 팀은 상담이 다릅니다. 제 이야기를 끝까지 듣고, 정리하고, 방향까지 제시해줬어요. 상담 한 번으로 '내가 뭘 해야 하는지'가 명확해졌습니다.",
    avatar: "박",
    avatarColor: "bg-purple-500"
  },
  {
    id: 3,
    name: "이*종 대표",
    title: "대표",
    company: "온라인 쇼핑몰",
    content: "연락이 빠르다 못해 '실시간'입니다. 밤 11시에도 바로 응답을 받았고, 그게 단순한 피드백이 아니라 해결책이었어요.",
    avatar: "이",
    avatarColor: "bg-red-500"
  },
  {
    id: 4,
    name: "정*희 대표",
    title: "대표",
    company: "커피 수입 브랜드",
    content: "SnapPlug는 대화가 통합니다. 기술용어로 벽을 세우지 않고, '우리 브랜드가 어떤 느낌이어야 하는지'를 함께 정의해줬어요.",
    avatar: "정",
    avatarColor: "bg-green-500"
  },
  {
    id: 5,
    name: "오*정 원장",
    title: "원장",
    company: "산부인과",
    content: "이제 환자 예진부터 문진까지 시스템이 다 알아서 처리합니다. 매일 반복되던 수작업이 사라지고, 의료진은 환자에게 더 집중할 수 있게 됐어요.",
    avatar: "오",
    avatarColor: "bg-blue-500"
  },
  {
    id: 6,
    name: "손*구 대표",
    title: "대표",
    company: "교육 플랫폼 스타트업",
    content: "저는 이런 투명한 팀은 처음 봤어요. 모든 진행상황을 리포트로 공유하고, 수정사항도 스스로 먼저 제안합니다. '믿음'이 생깁니다.",
    avatar: "손",
    avatarColor: "bg-indigo-500"
  },
  {
    id: 7,
    name: "최*라 대표",
    title: "대표",
    company: "마케팅 에이전시",
    content: "요구사항을 100% 반영해줬다는 말이 부족할 정도입니다. 오히려 저보다 더 우리 서비스를 잘 이해한 느낌이었어요. 결과물이 처음부터 끝까지 완벽했습니다.",
    avatar: "최",
    avatarColor: "bg-pink-500"
  },
  {
    id: 8,
    name: "윤*종 대표",
    title: "대표",
    company: "프리랜서 컨설턴트",
    content: "SnapPlug는 개발자가 아니라 '파트너'에 가깝습니다. 끝까지 책임지고, 결과가 나올 때까지 절대 느슨해지지 않아요. 같이 일하면 마음이 편합니다.",
    avatar: "윤",
    avatarColor: "bg-orange-500"
  },
  {
    id: 9,
    name: "장*민 대표",
    title: "대표",
    company: "지역 광고 대행사",
    content: "지속적으로 피드백을 주고받으니까 제가 '의뢰인'이 아니라 '팀원'이 된 느낌이었어요. 결과보다 과정에서 더 감동했습니다.",
    avatar: "장",
    avatarColor: "bg-cyan-500"
  },
  {
    id: 10,
    name: "이*규 사장",
    title: "사장",
    company: "교육 재단",
    content: "결국은 사람이더군요. 기술보다 태도가, 결과보다 책임이 기억에 남습니다. SnapPlug는 단순한 서비스 업체가 아니라 신뢰로 움직이는 사람들의 팀입니다.",
    avatar: "이",
    avatarColor: "bg-emerald-500"
  }
];

export default function TestimonialsCarousel() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 끊김없는 자동 슬라이딩
  useEffect(() => {
    if (isAutoPlaying && containerRef.current) {
      intervalRef.current = setInterval(() => {
        if (containerRef.current) {
          const currentScrollLeft = containerRef.current.scrollLeft;
          const cardWidth = 270; // 250px 카드 + 20px 간격
          
          containerRef.current.scrollTo({
            left: currentScrollLeft + cardWidth,
            behavior: 'smooth'
          });

          // 마지막 카드에 도달하면 처음으로 돌아가기
          if (currentScrollLeft >= (testimonialsData.length - 1) * cardWidth) {
            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.scrollTo({
                  left: 0,
                  behavior: 'auto'
                });
              }
            }, 500);
          }
        }
      }, 3000); // 3초마다 슬라이드 변경
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

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
        className="flex overflow-x-auto scrollbar-hide"
        style={{ 
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth'
        }}
      >
        {testimonialsData.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="flex-shrink-0 w-[250px] px-2"
          >
            <div className="bg-[#121212] border border-[#f0f0fa]/10 rounded-lg p-6 h-full flex flex-col">
              {/* 별점 */}
              <div className="flex text-yellow-400 mb-4">
                {'★'.repeat(5)}
              </div>
              
              {/* 후기 내용 */}
              <div className="text-[#f0f0fa]/80 text-sm leading-relaxed mb-6 flex-grow">
                {testimonial.content}
              </div>
              
              {/* 작성자 정보 - 카드 하단에 고정 */}
              <div className="flex items-center mt-auto">
                <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-lg flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-[#f0f0fa] font-medium">{testimonial.name}</div>
                  <div className="text-[#f0f0fa]/60 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
