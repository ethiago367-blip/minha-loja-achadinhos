"use client"

import { useState, useEffect } from "react"
import { X, ShieldCheck, Sparkles, MessageCircle } from "lucide-react"

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Verifica se o usuário já fechou o aviso nesta sessão
    const hasSeenModal = sessionStorage.getItem("hasSeenWelcomeModal")
    if (!hasSeenModal) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Salva na sessão para não incomodar o cliente a cada clique em páginas
    sessionStorage.setItem("hasSeenWelcomeModal", "true")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Card do Modal */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-purple-500/30 bg-zinc-950 p-6 text-zinc-100 shadow-2xl md:p-8 animate-in scale-in-95 duration-300">
        
        {/* Botão X Superior */}
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
          aria-label="Fechar aviso"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Cabeçalho */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            🔥 Central de Atualizações
          </h2>
          <p className="mt-1 text-xs text-purple-400 font-medium uppercase tracking-wider">
            Novidades da Loja
          </p>
        </div>

        {/* Conteúdo Informativo */}
        <div className="space-y-4 text-sm sm:text-base">
          
          {/* Caixa de Segurança */}
          <div className="flex gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-zinc-300">
            <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-400" />
            <div>
              <p className="font-semibold text-emerald-400 text-sm sm:text-base">Compra 100% Segura</p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Todos os nossos links direcionam você direto para as lojas oficiais (como Shopee). Garanta descontos exclusivos com total segurança!
              </p>
            </div>
          </div>

          {/* O que entrou de novo */}
          <div className="space-y-2 rounded-xl bg-zinc-900/50 p-4 border border-zinc-800">
            <p className="font-semibold text-purple-300 flex items-center gap-2 text-sm sm:text-base">
              📦 Recém Chegados:
            </p>
            <ul className="list-inside list-disc space-y-1.5 text-xs sm:text-sm text-zinc-400 pl-1">
            <li>Novas <span className="text-white font-medium">Camisas Seleção e Kit Moletom</span> na categoria <span className="text-purple-400 font-medium">Vestuário Masculino</span>.</li>
            <li>Novos <span className="text-white font-medium">Croppeds, Macacões e Blusas do Brasil</span> na categoria <span className="text-purple-400 font-medium">Vestuário Feminino</span>.</li>
            <li>Novidades infantis como <span className="text-white font-medium">Camisetas da Copa</span> nas categorias <span className="text-purple-400 font-medium">Infantil Masculino e Feminino</span>.</li>
            <li>🔥 Nova Categoria Adicionada: <span className="text-white font-medium">Jogos de Lençol 400 Fios, Itens de Limpeza e Mesas Retrô</span> na categoria <span className="text-purple-400 font-medium">Casa e Decoração</span>!</li>
            <li>Ajustes de zoom e vídeos aplicados para você conferir a qualidade de cada item!</li>
         </ul>
          </div>

          {/* Chamada para o Contato */}
          <div className="flex gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-3.5 text-zinc-300">
            <MessageCircle className="h-6 w-6 shrink-0 text-blue-400" />
            <div>
              <p className="font-semibold text-blue-400 text-sm sm:text-base">Não achou o que queria?</p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Vá até a nossa aba <span className="text-white font-medium">"Contato"</span> e mande uma mensagem dizendo o produto que você quer comprar. Nós encontraremos o melhor preço e adicionaremos aqui para você!
              </p>
            </div>
          </div>

        </div>

        {/* Botão de Fechar Inferior */}
        <button
          onClick={handleClose}
          className="mt-6 w-full rounded-xl bg-purple-600 py-3 font-medium text-white shadow-lg shadow-purple-600/20 hover:bg-purple-500 active:scale-[0.98] transition-all text-sm sm:text-base"
        >
          Entrar na Loja e Ver Ofertas
        </button>

      </div>
    </div>
  )
}
