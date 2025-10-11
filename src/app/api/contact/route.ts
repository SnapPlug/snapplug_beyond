import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact Form API Route
 * 
 * 문의 폼 데이터를 받아서 처리하는 API 엔드포인트
 * 실제 프로덕션에서는 이메일 전송 서비스(예: SendGrid, Resend 등)와 연동
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // 필수 필드 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: '이름, 이메일, 문의 내용은 필수 입력 항목입니다.' 
        },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: '올바른 이메일 형식이 아닙니다.' 
        },
        { status: 400 }
      );
    }

    // Make.com 웹훅으로 데이터 전송
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('MAKE_WEBHOOK_URL 환경 변수가 설정되지 않았습니다.');
      throw new Error('웹훅 URL이 설정되지 않았습니다.');
    }
    
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || '',
        company: company || '',
        message,
        timestamp: new Date().toISOString(),
        source: 'SnapPlug Contact Form'
      }),
    });

    if (!webhookResponse.ok) {
      throw new Error('웹훅 전송 실패');
    }

    console.log('문의 접수 및 웹훅 전송 완료:', {
      name,
      email,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: '문의 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      },
      { status: 500 }
    );
  }
}

