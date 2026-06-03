'use client'

import { useState } from 'react'
import { ProductGrid } from '@/components/product-grid'
import type { Product } from '@/lib/products'

interface CategoryFiltersProps {
  categories: string[]
  products: Product[]
}

const categoryLabels: Record<string, string> = {
  all: 'Todos',
  tecnologia: 'Tecnologia',
  moda: 'Moda',
}

/**
 * Sanitiza categoria removendo caracteres perigosos
 */
function sanitizeCategory(value: string): string {
  if (typeof value !== 'string') return ''
  return value
    .trim()
    .replace(/[<>/"'`;(){}]/g, '')
    .toLowerCase()
}

export function CategoryFilters({ categories, products }: CategoryFiltersProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  const handleFilter = (category: string) => {
    const cleanCategory = sanitizeCategory(category)
    setActiveCategory(cleanCategory)

    if (cleanCategory === 'all') {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(
        (product) => sanitizeCategory(product.category) === cleanCategory
      )
      setFilteredProducts(filtered)
    }
  }

  return (
    <>
      {/* Botoes de filtro */}
      <section className="mb-10">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4" id="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleFilter(category)}
                className={`rounded-full border px-6 py-3.5 font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary ${
                  activeCategory === category
                    ? 'border-primary bg-primary text-white'
                    : 'border-border bg-card text-foreground'
                }`}
              >
                {categoryLabels[category] || category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de produtos */}
      <section className="pb-20">
        <div className="mx-auto w-[90%] max-w-7xl">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  )
}
