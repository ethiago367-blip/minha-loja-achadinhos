import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { WelcomeModal } from "@/components/welcome-modal"

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist'
})

export const metadata: Metadata = {
  title: 'Multi Ofertas',
  description: 'Encontre os melhores produtos selecionados com seguranca e qualidade.',
  keywords: ['afiliados', 'produtos', 'ofertas', 'tecnologia', 'loja virtual'],
  authors: [{ name: 'Eric Thiago' }],
  openGraph: {
    title: 'Multi Ofertas',
    description: 'Produtos selecionados para voce.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0813',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
return (
    <html lang="pt-BR" className="bg-background" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <WelcomeModal />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
