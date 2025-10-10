"use client";

interface ContactButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * SpaceX 스타일의 Contact 버튼 컴포넌트
 * 
 * 기능:
 * - 투명 배경에 흰색 테두리
 * - 텍스트와 화살표 아이콘
 * - 호버 효과
 * - 커스터마이징 가능한 텍스트
 */
export default function ContactButton({ 
  text = "WATCH", 
  onClick,
  className = ""
}: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        bg-transparent
        border border-[#f0f0fa]
        text-[#f0f0fa]
        cursor-pointer
        transition-all duration-200
        hover:bg-[#f0f0fa]/10
        hover:border-[#f0f0fa]/80
        active:bg-[#f0f0fa]/20
        mt-8
        ${className}
      `}
      style={{ 
        fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
        padding: '0 20px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: 'normal',
        letterSpacing: '0.5px',
        height: '48px'
      }}
    >
      <span>{text}</span>
      <span className="ml-1">→</span>
    </button>
  );
}
