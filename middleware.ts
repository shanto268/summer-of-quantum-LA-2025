import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es'];  // your supported locales

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
 
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/_next/static')
  ) {
    return NextResponse.next();
  }

  let cookieLocale = request.cookies.get('NEXT_LOCALE')?.value || 'en';

  // Validate locale - fallback if invalid
  if (!locales.includes(cookieLocale)) {
    cookieLocale = 'en';
  }

  // This will now be safe
  request.nextUrl.locale = cookieLocale;

  return NextResponse.next();
}
