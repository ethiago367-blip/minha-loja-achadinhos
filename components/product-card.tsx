'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const hasMultipleImages = product.images?.length > 1
  
  // Verifica se o vídeo existe e não é um texto vazio
  const hasVideo = product.videoUrl && product.videoUrl.trim() !== ""

  // Função para voltar a foto (usada no card e no zoom)
  const prevImage = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  // Função para avançar a foto (usada no card e no zoom)
  const nextImage = () => {
    setCurrentIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowVideo(false)
    prevImage()
  }

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowVideo(false)
    nextImage()
  }

  return (
    <>
      <article className="flex flex-col overflow-hidden rounded-[var(--radius)] border border-white/40 bg-card shadow-lg transition-transform duration-300 hover:-translate-y-1.5">
        {/* Container da imagem com carrossel ou vídeo */}
        <div className="relative w-full overflow-hidden">
          <div className="relative h-44 w-full bg-[#171421]">
            {showVideo && product.videoUrl ? (
              <video 
             src={product.videoUrl} 
              className="h-full w-full object-contain bg-black" // <-- Mudamos para object-contain e adicionamos um fundo preto elegante
             controls
             autoPlay
             muted
             />
            ) : (
              <div 
             onClick={() => setIsZoomOpen(true)}
             className="relative h-full w-full cursor-zoom-in bg-black" // <-- Adicionamos bg-black para o fundo das fotos
             title="Clique para ampliar"
             >
             <Image
             src={product.images?.[currentIndex] || '/placeholder.svg'}
             alt={product.title}
             fill
             className="object-contain" // <-- Mudamos para object-contain para a foto aparecer inteira
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
             />
             </div>
            )}
          </div>

          {/* Botão de alternar entre Foto e Vídeo */}
          {hasVideo && (
            <button
              onClick={(e) => {
                e.preventDefault()
                setShowVideo(!showVideo)
              }}
              className="absolute right-2 top-2 z-20 flex items-center gap-1 rounded-full border border-primary/40 bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-md transition-all hover:scale-105 hover:bg-primary hover:text-white"
            >
              {showVideo ? (
                <>
                  <span>📷</span> Ver Fotos
                </>
              ) : (
                <>
                  <span className="text-red-500">▶</span> Ver Vídeo
                </>
              )}
            </button>
          )}

          {!showVideo && hasMultipleImages && (
            <>
              {/* Botao anterior */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/70 text-xs text-foreground transition-all hover:scale-110 hover:border-[var(--primary-hover)] hover:bg-primary hover:text-white"
                aria-label="Imagem anterior"
              >
                &#10094;
              </button>

              {/* Botao proximo */}
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-background/70 text-xs text-foreground transition-all hover:scale-110 hover:border-[var(--primary-hover)] hover:bg-primary hover:text-white"
                aria-label="Proxima imagem"
              >
                &#10095;
              </button>

              {/* Indicadores (bolinhas) */}
              <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 rounded-full bg-background/50 px-2 py-1">
                {product.images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'scale-125 bg-[var(--primary-hover)]' 
                        : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Conteudo do card */}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="mb-2 text-base font-semibold text-foreground">
            {product.title}
          </h3>
          <p className="mb-3 flex-1 text-sm text-muted-foreground">
            {product.description}
          </p>
          <span className="mb-3 text-xl font-bold text-primary">
            {product.price}
          </span>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="flex w-full items-center justify-center rounded-xl bg-primary py-2.5 font-bold text-white transition-colors hover:bg-[var(--primary-hover)]"
          >
            Ver Oferta
          </a>
        </div>
      </article>

      {/* MODAL DE ZOOM COM SETAS DE NAVEGAÇÃO */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          {/* Botão de Fechar */}
          <button 
            onClick={() => setIsZoomOpen(false)}
            className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition-colors hover:bg-white/20"
          >
            ✕
          </button>
          
          {/* Seta Esquerda (Zoom) - Só aparece se tiver mais de uma foto */}
          {hasMultipleImages && (
            <button
              onClick={(e) => {
                e.stopPropagation() // Evita fechar a tela ao clicar na seta
                prevImage()
              }}
              className="absolute left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 md:left-8"
              aria-label="Imagem anterior"
            >
              &#10094;
            </button>
          )}

          {/* Imagem Ampliada */}
          <div 
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={product.images?.[currentIndex] || '/placeholder.svg'}
              alt={product.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Seta Direita (Zoom) - Só aparece se tiver mais de uma foto */}
          {hasMultipleImages && (
            <button
              onClick={(e) => {
                e.stopPropagation() // Evita fechar a tela ao clicar na seta
                nextImage()
              }}
              className="absolute right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 md:right-8"
              aria-label="Próxima imagem"
            >
              &#10095;
            </button>
          )}
        </div>
      )}
    </>
  )
}