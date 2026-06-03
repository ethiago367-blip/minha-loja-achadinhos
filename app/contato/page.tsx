import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contato | Minha Loja',
  description: 'Entre em contato com nossa equipe.',
}

export default function ContatoPage() {
  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 text-center">
          <div className="mx-auto w-[90%] max-w-7xl">
            <h1 className="mb-5 text-balance text-4xl font-bold text-foreground drop-shadow-lg md:text-5xl">
              Entre em Contato
            </h1>
            <p className="text-lg text-white drop-shadow-md">
              Ficou com duvidas, sugestoes ou deseja falar conosco?
            </p>
          </div>
        </section>

        {/* Formulario */}
        <section className="pb-20">
          <div className="mx-auto w-[90%] max-w-7xl">
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
