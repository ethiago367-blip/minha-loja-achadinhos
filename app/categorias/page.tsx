import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CategoryFilters } from '@/components/category-filters'
import { getAllProducts, getCategories } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Categorias | Minha Loja',
  description: 'Explore produtos por categoria.',
}

export default function CategoriasPage() {
  const products = getAllProducts()
  const categories = getCategories()

  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 text-center">
          <div className="mx-auto w-[90%] max-w-7xl">
            <h1 className="mb-5 text-balance text-4xl font-bold text-foreground drop-shadow-lg md:text-5xl">
              Categorias
            </h1>
            <p className="text-lg text-white drop-shadow-md">
              Navegue pelos produtos filtrando por categoria.
            </p>
          </div>
        </section>

        <CategoryFilters categories={categories} products={products} />
      </main>

      <Footer />
    </>
  )
}
