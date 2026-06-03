/**
 * BANCO DE DADOS DOS PRODUTOS
 * 
 * Este arquivo fica NO SERVIDOR - os comentarios e dicas NAO sao enviados ao navegador.
 * Voce pode manter suas anotacoes aqui sem preocupacao!
 * 
 * DICAS DE EDICAO:
 * - id: numero unico do produto (1, 2, 3...)
 * - title: nome do produto que aparece no card
 * - description: texto explicativo do produto
 * - price: valor com R$ (ex: "R$ 500,00")
 * - images: lista de fotos do produto (array)
 * - affiliateLink: seu link de afiliado para comissao
 * - category: categoria do produto (deve bater com os filtros)
 */

import { Description } from "@radix-ui/react-toast"
import { Images } from "lucide-react"

export interface Product {
  id: number
  title: string
  description: string
  price: string
  images: string[]
  videoUrl: string
  affiliateLink: string
  category: string
}

// =====================================================
// SEUS PRODUTOS - EDITE AQUI!
// =====================================================

const products: Product[] = [
  {
    // DICA: ID e o numero unico do produto. O proximo deve ser 2, depois 3...
    id: 1,
    
    // DICA: TITLE e o nome que aparece no cartao do site
    title: "Camisa do Brasil",
    
    // DICA: DESCRIPTION e o texto explicativo. Escreva os detalhes aqui
    description: "Camiseta do Brasil Seleção Brasileira Torcida Brasil Amarela Patriota Torcedor.",
    
    // DICA: PRICE e o valor. Mantenha o R$ e as aspas
    price: "R$ 44,90",
    
    // DICA: IMAGES aceita varias fotos. Coloque entre colchetes separadas por virgula
    images: [
      "/images/camisafutbrasil.jpg",
      "/images/camisafutbrasil2.jpg",
      "/images/camisafutbrasil3.jpg",
      "/images/camisafutbrasil4.jpg",
      "/images/camisafutbrasil5.jpg"
    ],

    videoUrl: "/videos/camisadefutebool.mp4",
    
    // DICA: AFFILIATELINK e seu link de comissao. Cole o link aqui
    affiliateLink: "https://s.shopee.com.br/9fI6BqMSrG",
    
    // DICA: CATEGORY deve ser igual ao botao de filtro (minuscula, sem acento)
    category: "vestuario masculino"
  },
  
  {
    id: 2,
    title: "Jogo de Panela Antiaderente.",
    description: "Jogo de Panelas Indução Conjunto de Panelas Antiaderente Hauskraft.",
    price: "R$ 305,90",
    images: [
      "/images/jogodepanela.jpg",
      "/images/jogodepanela2.jpg",
      "/images/jogodepanela3.jpg",
      "/images/jogodepanela4.jpg",
      "/images/jogodepanela5.jpg",
      "/images/jogodepanela6.jpg",
      "/images/jogodepanela7.jpg",
      "/images/jogodepanela8.jpg"
    ],
    videoUrl: "/videos/jogodepanela.mp4",
    affiliateLink: "https://s.shopee.com.br/80A0e6Cad1",
    category: "casa e decoracao"
  },
  
  {
    id: 3,
    title: "Macacao Feminino",
    description: "Decotado Alcinha 2 Fendas Pantalona.",
    price: "R$ 49,99",
    images: [
      "/images/macacaofeminino.jpg",
      "/images/macacaofeminino2.jpg",
      "/images/macacaofeminino3.jpg",
      "/images/macacaofeminino4.jpg",
      "/images/macacaofeminino5.jpg"
    ],
    videoUrl: "/videos/macacaofeminino.mp4",
    affiliateLink: "https://s.shopee.com.br/AUrDGZ0S2c",
    category: "vestuario feminino"
  },
  
  {
    id: 4,
    title: "Blusa Feminina Brasil",
    description: "T-shirt Verão Algodão.",
    price: "R$31,96",
    images: [
      "/images/blusafeminina.jpg",
      "/images/blusafeminina2.jpg",
      "/images/blusafeminina3.jpg",
      "/images/blusafeminina4.jpg",
      "/images/blusafeminina5.jpg",
      "/images/blusafeminina6.jpg",
      "/images/blusafeminina7.jpg",
      "/images/blusafeminina8.jpg",
      "/images/blusafeminina9.jpg"
    ],
    videoUrl: "/videos/blusafeminina.mp4",
    affiliateLink: "https://s.shopee.com.br/4ftQNW9klF",
    category: "vestuario feminino"
  },

  {
    id: 5,
    title: "Kit Moletom Brasil Unissex",
    description: "Casaco Flanelado Algodão Premium.",
    price: "R$71,96",
    images: [
      "/images/casacomasculino.jpg",
      "/images/casacomasculino2.jpg",
      "/images/casacomasculino3.jpg",
      "/images/casacomasculino4.jpg",
      "/images/casacomasculino5.jpg",
      "/images/casacomasculino6.jpg",
      "/images/casacomasculino7.jpg",
      "/images/casacomasculino8.jpg"
    ],
    videoUrl: "/videos/casacomasculino.mp4",
    affiliateLink: "https://s.shopee.com.br/6AiIlMCZk6",
    category: "vestuario masculino"
  },

  {
    id: 6,
    title: "Camiseta do Brasil Infantil Unissex",
    description: "Personalizada Minha Copa Malha 100% Algodão Estampa Em DTF.",
    price: "R$49,45",
    images: [
      "/images/camisetainfantil.jpg",
      "/images/camisetainfantil2.jpg",
      "/images/camisetainfantil3.jpg",
      "/images/camisetainfantil4.jpg",
      "/images/camisetainfantil5.jpg",
      "/images/camisetainfantil6.jpg",
      "/images/camisetainfantil7.jpg"
    ],
    videoUrl: "",
    affiliateLink: "https://s.shopee.com.br/4Va4nvEHVz",
    category: "vestuario infantil feminina"
  },

  {
    id: 7,
    title: "Camiseta Brasil Infantil Menino Menina",
    description: "Copa 2026 Seleção Unissex.",
    price: "R$22,90",
    images: [
      "/images/camisainfantilm.jpg",
      "/images/camisainfantilm2.jpg",
      "/images/camisainfantilm3.jpg",
      "/images/camisainfantilm4.jpg",
      "/images/camisainfantilm5.jpg",
      "/images/camisainfantilm6.jpg",
      "/images/camisainfantilm7.jpg",
      "/images/camisainfantilm8.jpg"
    ],
    videoUrl: "",
    affiliateLink: "https://s.shopee.com.br/AUrHzBNxrq",
    category: "vestuario infantil masculino"
  },

  {
    id: 8,
    title: "Jogo de Lençol 400 Fios",
    description: "Micropercal Com Fronha em Ponto Palito.",
    price: "R$13,90",
    images: [
      "/images/jogolencol.jpg",
      "/images/jogolencol2.jpg",
      "/images/jogolencol3.jpg",
      "/images/jogolencol4.jpg",
      "/images/jogolencol5.jpg",
      "/images/jogolencol6.jpg",
      "/images/jogolencol7.jpg",
      "/images/jogolencol8.jpg"
    ],
    videoUrl: "",
    affiliateLink: "https://s.shopee.com.br/4AxFlY94du",
    category: "casa e decoracao"
  },

  {
    id: 9,
    title: "Jogo de Lençol 400 Fios Extra Macio com fronhas",
    description: "ponto palito Berço Solteiro Casal Queen King 02 e 03 Peças.",
    price: "R$14,50",
    images: [
      "/images/jogolencolum.jpg",
      "/images/jogolencolum2.jpg",
      "/images/jogolencolum3.jpg",
      "/images/jogolencolum4.jpg",
      "/images/jogolencolum5.jpg",
      "/images/jogolencolum6.jpg",
      "/images/jogolencolum7.jpg",
      "/images/jogolencolum8.jpg",
      "/images/jogolencolum9.jpg"
    ],
    videoUrl: "/videos/jogolencolum.mp4",
    affiliateLink: "https://s.shopee.com.br/6feamN9o4q",
    category: "casa e decoracao"
  },

  {
    id: 10,
    title: "Kit 6/12/18/24 Panos De Limpeza Aço Premium",
    description: "Arear Panela Fogão Toalha Louça Tira Gordura Reutilizável.",
    price: "R$10,00",
    images: [
      "/images/panodelimpesa.jpg",
      "/images/panodelimpesa2.jpg",
      "/images/panodelimpesa3.jpg",
      "/images/panodelimpesa4.jpg",
      "/images/panodelimpesa5.jpg",
      "/images/panodelimpesa6.jpg",
      "/images/panodelimpesa7.jpg",
      "/images/panodelimpesa8.jpg",
      "/images/panodelimpesa9.jpg"
    ],
    videoUrl: "/videos/panodelimpar.mp4",
    affiliateLink: "https://s.shopee.com.br/3qKPPJh54M",
    category: "casa e decoracao"
  },

  {
    id: 11,
    title: "Jogo de Lençol 400 Fios Cama Solteiro Casal",
    description: "Queen King E Berço Micropercal Ponto Palito.",
    price: "R$27,23",
    images: [
      "/images/jogolencoldois.jpg",
      "/images/jogolencoldois2.jpg",
      "/images/jogolencoldois3.jpg",
      "/images/jogolencoldois4.jpg",
      "/images/jogolencoldois5.jpg",
      "/images/jogolencoldois6.jpg",
      "/images/jogolencoldois7.jpg",
      "/images/jogolencoldois8.jpg",
      "/images/jogolencoldois9.jpg"
    ],
    videoUrl: "/videos/jogolencoldois.mp4",
    affiliateLink: "https://s.shopee.com.br/9fICMqiwrZ",
    category: "casa e decoracao"
  },

  {
    id: 12,
    title: "Percarbonato de Sódio 100% Puro",
    description: "Limpeza Em Geral Tira Manchas Roupas Brancas 500g/1kg /2kg.",
    price: "R$10,00",
    images: [
      "/images/percarbonato.jpg",
      "/images/percarbonato2.jpg",
      "/images/percarbonato3.jpg",
      "/images/percarbonato4.jpg",
      "/images/percarbonato5.jpg",
      "/images/percarbonato6.jpg",
      "/images/percarbonato7.jpg"
    ],
    videoUrl: "",
    affiliateLink: "https://s.shopee.com.br/5q5ToVeWzt",
    category: "casa e decoracao"
  },

  {
    id: 13,
    title: "Mesa de Cabeceira Retrô",
    description: "Compacta com Nicho para Quarto Sala Casal ou Solteiro Palma.",
    price: "R$28,89",
    images: [
      "/images/mesacabeceira.jpg",
      "/images/mesacabeceira2.jpg",
      "/images/mesacabeceira3.jpg",
      "/images/mesacabeceira4.jpg",
      "/images/mesacabeceira5.jpg",
      "/images/mesacabeceira6.jpg",
      "/images/mesacabeceira7.jpg",
      "/images/mesacabeceira8.jpg",
      "/images/mesacabeceira9.jpg"
    ],
    videoUrl: "/videos/mesacabeceira.mp4",
    affiliateLink: "https://s.shopee.com.br/gNNfXH29o",
    category: "casa e decoracao"
  }
]

// =====================================================
// FUNCOES DE ACESSO (NAO MEXER AQUI)
// =====================================================

/**
 * Retorna todos os produtos
 */
export function getAllProducts(): Product[] {
  return products
}

/**
 * Retorna produtos filtrados por categoria
 */
export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase())
}

/**
 * Busca produtos por termo
 */
export function searchProducts(term: string): Product[] {
  const searchTerm = term.toLowerCase().trim()
  if (!searchTerm) return products
  
  return products.filter(p => 
    p.title.toLowerCase().includes(searchTerm) ||
    p.description.toLowerCase().includes(searchTerm) ||
    p.price.toLowerCase().includes(searchTerm)
  )
}

/**
 * Retorna todas as categorias unicas
 */
export function getCategories(): string[] {
  const categories = new Set(products.map(p => p.category))
  return ['all', ...Array.from(categories)]
}
