import { redirect } from 'next/navigation';

/**
 * /our-work 페이지 리다이렉트
 * 
 * 이전에 존재했던 /our-work 페이지를 /service로 301 리다이렉트
 * 검색엔진과 사용자에게 올바른 페이지로 안내
 */
export default function OurWorkRedirect() {
  redirect('/service');
}
