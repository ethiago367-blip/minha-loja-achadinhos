import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * MIDDLEWARE DE SEGURANCA
 * 
 * Adiciona headers de seguranca em todas as respostas e
 * implementa protecoes basicas contra ataques comuns.
 */

export function middleware(request: NextRequest) {
  // Cria a resposta
  const response = NextResponse.next()

  // ===== HEADERS DE SEGURANCA =====

  // Previne clickjacking
  response.headers.set('X-Frame-Options', 'DENY')

  // Previne MIME type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // Habilita protecao XSS do navegador
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Controla informacoes enviadas no header Referer
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Previne que o site seja indexado em motores de busca sensiveis
  // (remova se quiser aparecer no Google)
  // response.headers.set('X-Robots-Tag', 'noindex, nofollow')

  // Permissions Policy - controla recursos do navegador
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  )

  // Content Security Policy - MELHORADO (sem unsafe-inline para scripts)
  // Nota: Tailwind pode precisar de 'unsafe-inline' para styles
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js precisa disso
      "style-src 'self' 'unsafe-inline'", // Tailwind precisa disso
      "img-src 'self' https: data: blob:",
      "font-src 'self' https: data:",
      "connect-src 'self' https://formspree.io https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://formspree.io",
      "object-src 'none'",
      "upgrade-insecure-requests"
    ].join('; ')
  )

  // Strict Transport Security (HSTS) - forca HTTPS
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )

  return response
}

// Aplica middleware em todas as rotas exceto arquivos estaticos
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
