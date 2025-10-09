"use client";

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

/**
 * 페이지 로드 시 숫자가 카운팅되면서 올라가는 애니메이션 컴포넌트
 */
export default function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = "", 
  prefix = "" 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const animateCounter = () => {
    const startTime = Date.now();
    const start = 0;

    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutQuart easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    // Intersection Observer로 요소가 화면에 보일 때 애니메이션 시작
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounter();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${end}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, isVisible]);

  return (
    <span id={`counter-${end}`}>
      {prefix}{end % 1 === 0 ? Math.round(count).toString() : count.toFixed(1)}{suffix}
    </span>
  );
}
