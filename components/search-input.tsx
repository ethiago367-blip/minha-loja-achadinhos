'use client'

import { useState, useTransition } from 'react'

interface SearchInputProps {
  onSearch: (term: string) => void
  placeholder?: string
}

/**
 * Sanitiza texto de busca removendo caracteres perigosos
 */
function sanitizeSearch(text: string): string {
  if (typeof text !== 'string') return ''
  return text
    .trim()
    .replace(/[<>/"'`;(){}]/g, '')
    .toLowerCase()
}

export function SearchInput({ onSearch, placeholder = 'Pesquisar produtos...' }: SearchInputProps) {
  const [value, setValue] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value
    setValue(rawValue)
    
    const cleanValue = sanitizeSearch(rawValue)
    
    startTransition(() => {
      onSearch(cleanValue)
    })
  }

  return (
    <div className="relative">
      <label htmlFor="search-input" className="sr-only">
        Pesquisar produtos
      </label>
      <input
        type="text"
        id="search-input"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck="false"
        className="w-full rounded-[14px] border border-border bg-card px-5 py-4 text-base text-foreground shadow-lg transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
      {isPending && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
    </div>
  )
}
