'use client'

import { useState } from 'react'
import { SearchInput } from '@/components/search-input'
import { ProductGrid } from '@/components/product-grid'
import type { Product } from '@/lib/products'

interface HomeClientProps {
  initialProducts: Product[]
}

export function HomeClient({ initialProducts }: HomeClientProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts)

  const handleSearch = (term: string) => {
    if (!term) {
      setFilteredProducts(initialProducts)
      return
    }

    const filtered = initialProducts.filter((product) => {
      const title = product.title.toLowerCase()
      const description = product.description.toLowerCase()
      const price = product.price.toLowerCase()

      return (
        title.includes(term) ||
        description.includes(term) ||
        price.includes(term)
      )
    })

    setFilteredProducts(filtered)
  }

  return (
    <>
      {/* Secao de busca */}
      <section className="mb-10">
        <div className="mx-auto w-[90%] max-w-7xl">
          <SearchInput onSearch={handleSearch} />
        </div>
      </section>

      {/* Secao de produtos */}
      <section className="pb-20">
        <div className="mx-auto w-[90%] max-w-7xl">
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            Produtos em Destaque
          </h2>
          <ProductGrid products={filteredProducts} />
        </div>
      </section>
    </>
  )
}
