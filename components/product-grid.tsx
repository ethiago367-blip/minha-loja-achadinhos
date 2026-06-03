'use client'

import { ProductCard } from './product-card'
import type { Product } from '@/lib/products'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        Nenhum produto encontrado.
      </p>
    )
  }

  return (
    <div 
      className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
      aria-live="polite"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
