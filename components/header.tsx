'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/categorias', label: 'Categorias' },
  { href: '/contato', label: 'Contato' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card backdrop-blur-header">
      <div className="mx-auto flex w-[90%] max-w-7xl items-center justify-between py-5">
        <Link 
          href="/" 
          className="text-2xl font-bold text-primary transition-colors hover:text-[var(--primary-hover)]"
          aria-label="Pagina inicial"
        >
          Multi Ofertas
        </Link>

        <nav aria-label="Menu principal">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    pathname === item.href ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
