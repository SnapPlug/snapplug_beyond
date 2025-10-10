"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * SpaceX 스타일의 헤더 컴포넌트
 * 
 * 기능:
 * - 완전 투명 배경
 * - 미니멀한 디자인
 * - 반응형 네비게이션 (데스크톱/모바일)
 * - 모바일 햄버거 메뉴
 * - 활성 페이지 하이라이트
 * 
 * 폰트:
 * - 로고: Pirulen
 * - 네비게이션: Pretendard
 */
export default function SpaceXHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 네비게이션 메뉴 설정
  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/service", label: "SERVICE" },
    { href: "/showcases", label: "SHOWCASES" },
    { href: "/contacts", label: "CONTACTS" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div 
              className="text-xl lg:text-2xl font-black"
              style={{ 
                fontFamily: 'var(--font-pirulen), sans-serif', 
                letterSpacing: '-0.05em',
                fontWeight: '900',
                textShadow: '0 0 2px rgba(255,255,255,0.3)',
                color: '#F0F0FA'
              }}
            >
              SNAPPLUG
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-[#f0f0fa]' 
                      : 'text-[#f0f0fa]/60 hover:text-[#f0f0fa]/80'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden" 
            style={{ color: '#F0F0FA' }}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#121212]/95 backdrop-blur-sm border-t border-[#f0f0fa]/20">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive 
                        ? 'text-[#f0f0fa] bg-[#f0f0fa]/10' 
                        : 'text-[#f0f0fa]/70 hover:text-[#f0f0fa] hover:bg-[#f0f0fa]/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

