import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다 - SNAPPPLUG',
  description: '요청하신 페이지를 찾을 수 없습니다. SNAPPPLUG의 다른 서비스를 확인해보세요.',
  robots: {
    index: false,
    follow: true,
  },
};

/**
 * 커스텀 404 페이지
 * 
 * 존재하지 않는 페이지에 접근했을 때 표시되는 페이지
 * 사용자를 유용한 페이지로 안내
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] text-[#f0f0fa] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 아이콘 */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-[#f0f0fa]/20 mb-4">404</div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f0f0fa] to-transparent mx-auto"></div>
        </div>
        
        {/* 메인 메시지 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          페이지를 찾을 수 없습니다
        </h1>
        
        <p className="text-lg text-[#f0f0fa]/70 mb-8 leading-relaxed">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.<br />
          SNAPPPLUG의 다른 서비스를 확인해보세요.
        </p>
        
        {/* 네비게이션 링크들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link 
            href="/" 
            className="block p-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors"
          >
            <div className="font-semibold mb-2">🏠 홈페이지</div>
            <div className="text-sm text-[#f0f0fa]/60">메인 페이지로 이동</div>
          </Link>
          
          <Link 
            href="/service" 
            className="block p-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors"
          >
            <div className="font-semibold mb-2">⚡ 서비스</div>
            <div className="text-sm text-[#f0f0fa]/60">우리의 서비스 확인</div>
          </Link>
          
          <Link 
            href="/about" 
            className="block p-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors"
          >
            <div className="font-semibold mb-2">👥 회사소개</div>
            <div className="text-sm text-[#f0f0fa]/60">SNAPPPLUG 소개</div>
          </Link>
          
          <Link 
            href="/contacts" 
            className="block p-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg transition-colors"
          >
            <div className="font-semibold mb-2">📞 문의하기</div>
            <div className="text-sm text-[#f0f0fa]/60">상담 및 문의</div>
          </Link>
        </div>
        
        {/* 홈으로 돌아가기 버튼 */}
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#f0f0fa] text-[#121212] font-semibold rounded-lg hover:bg-[#e0e0e0] transition-colors"
        >
          🚀 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
