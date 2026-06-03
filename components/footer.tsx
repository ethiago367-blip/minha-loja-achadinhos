export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-card py-8 text-center text-muted-foreground">
      <div className="mx-auto w-[90%] max-w-7xl">
        <p>
          &copy; {currentYear} Multi Ofertas. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-sm">
          Alguns links deste site podem gerar comissao de afiliado.
        </p>
      </div>
    </footer>
  )
}
