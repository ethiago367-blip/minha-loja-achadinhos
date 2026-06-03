import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HomeClient } from '@/components/home-client'
import { getAllProducts } from '@/lib/products'

export default function HomePage() {
  // Busca produtos no servidor - o JSON com comentarios NUNCA e enviado ao cliente
  const products = getAllProducts()

  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 text-center">
          <div className="mx-auto w-[90%] max-w-7xl">
            <h1 className="mb-5 text-balance text-4xl font-bold text-foreground drop-shadow-lg md:text-5xl">
              Produtos Selecionados Para Voce
            </h1>
            <p className="text-lg text-white drop-shadow-md">
              Descubra ofertas, produtos recomendados e oportunidades incriveis.
            </p>
          </div>
        </section>

        <HomeClient initialProducts={products} />
      </main>

      <Footer />
    </>
  )
}
