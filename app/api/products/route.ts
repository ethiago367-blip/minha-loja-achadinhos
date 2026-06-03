import { NextResponse } from 'next/server'
import { getAllProducts, searchProducts, getProductsByCategory } from '@/lib/products'

/**
 * API de Produtos - SEGURA
 * 
 * Esta rota serve os produtos SEM os comentarios e dicas do arquivo fonte.
 * O cliente so recebe os dados limpos necessarios para renderizar.
 */

// Rate limiting simples em memoria (para producao usar o Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 100 // requisicoes
const RATE_WINDOW = 60 * 1000 // por minuto

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count++
  return true
}

function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  return forwarded?.split(',')[0]?.trim() || realIP || 'unknown'
}

/**
 * Sanitiza parametro de busca
 */
function sanitizeParam(value: string | null): string {
  if (!value || typeof value !== 'string') return ''
  return value
    .trim()
    .replace(/[<>/"'`;(){}]/g, '')
    .toLowerCase()
    .slice(0, 100) // limita tamanho
}

export async function GET(request: Request) {
  // Verifica rate limit
  const clientIP = getClientIP(request)
  if (!checkRateLimit(clientIP)) {
    return NextResponse.json(
      { error: 'Muitas requisicoes. Tente novamente em alguns segundos.' },
      { status: 429 }
    )
  }

  try {
    const { searchParams } = new URL(request.url)
    const search = sanitizeParam(searchParams.get('search'))
    const category = sanitizeParam(searchParams.get('category'))

    let products

    if (search) {
      products = searchProducts(search)
    } else if (category) {
      products = getProductsByCategory(category)
    } else {
      products = getAllProducts()
    }

    // Retorna apenas os campos necessarios (sem comentarios internos)
    const cleanProducts = products.map(({ id, title, description, price, images, affiliateLink, category }) => ({
      id,
      title,
      description,
      price,
      images,
      affiliateLink,
      category
    }))

    return NextResponse.json(cleanProducts, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      }
    })
  } catch {
    return NextResponse.json(
      { error: 'Erro ao carregar produtos.' },
      { status: 500 }
    )
  }
}
