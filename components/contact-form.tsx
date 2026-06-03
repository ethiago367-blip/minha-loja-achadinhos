'use client'

import { useState, useRef, useEffect } from 'react'

interface FormState {
  status: 'idle' | 'submitting' | 'success' | 'error'
  message: string
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({ status: 'idle', message: '' })
  const [formStartTime, setFormStartTime] = useState<number>(0)
  const honeypotRef = useRef<HTMLInputElement>(null)

  // Marca o tempo quando o formulario e carregado (protecao anti-bot)
  useEffect(() => {
    setFormStartTime(Date.now())
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)

    // SEGURANCA 1: Verifica honeypot (bots preenchem campos ocultos)
    if (honeypotRef.current && honeypotRef.current.value) {
      // Bot detectado - simula sucesso mas nao envia
      setFormState({ status: 'success', message: 'Mensagem enviada com sucesso!' })
      return
    }

    // SEGURANCA 2: Verifica tempo minimo (humanos levam pelo menos 3 segundos)
    const timeSpent = Date.now() - formStartTime
    if (timeSpent < 3000) {
      // Muito rapido - provavelmente bot
      setFormState({ status: 'success', message: 'Mensagem enviada com sucesso!' })
      return
    }

    setFormState({ status: 'submitting', message: '' })

    try {
      // Envia para Formspree (substitua pelo seu ID)
      const response = await fetch('https://formspree.io/f/xrevzyvw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormState({ status: 'success', message: 'Mensagem enviada com sucesso!' })
        form.reset()
        setFormStartTime(Date.now())
      } else {
        throw new Error('Erro ao enviar')
      }
    } catch {
      setFormState({ 
        status: 'error', 
        message: 'Erro ao enviar mensagem. Tente novamente.' 
      })
    }
  }

  return (
    <div className="mx-auto max-w-2xl rounded-[var(--radius)] bg-card p-10 shadow-lg">
      <form 
        className="flex flex-col gap-6" 
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {/* Honeypot - campo invisivel para pegar bots */}
        <div className="honeypot-field" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input 
            type="text" 
            id="website" 
            name="website" 
            ref={honeypotRef}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="name" className="font-semibold text-foreground">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            required
            minLength={3}
            maxLength={80}
            autoComplete="name"
            className="w-full rounded-[14px] border border-border bg-card px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 valid:border-[var(--success)] invalid:border-destructive"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="email" className="font-semibold text-foreground">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
            maxLength={120}
            autoComplete="email"
            className="w-full rounded-[14px] border border-border bg-card px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 valid:border-[var(--success)] invalid:border-destructive"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="subject" className="font-semibold text-foreground">
            Assunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Digite o assunto"
            required
            minLength={3}
            maxLength={120}
            className="w-full rounded-[14px] border border-border bg-card px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 valid:border-[var(--success)] invalid:border-destructive"
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label htmlFor="message" className="font-semibold text-foreground">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Digite sua mensagem"
            required
            minLength={10}
            maxLength={1000}
            rows={6}
            className="w-full resize-y rounded-[14px] border border-border bg-card px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 valid:border-[var(--success)] invalid:border-destructive"
          />
        </div>

        <button
          type="submit"
          disabled={formState.status === 'submitting'}
          className="w-full rounded-[14px] bg-primary py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {formState.status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {formState.status === 'success' && (
          <p className="text-center font-medium text-[var(--success)]">
            {formState.message}
          </p>
        )}

        {formState.status === 'error' && (
          <p className="text-center font-medium text-destructive">
            {formState.message}
          </p>
        )}
      </form>
    </div>
  )
}
