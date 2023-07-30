export function Aimex() {
  return (
    <article>
      <h2>Aimex</h2>
      <hr />

      <h3>Associados</h3>
      <a href="/api/aimex/associados" target='_blank'>/api/aimex/associados</a>

      <h3>Diretoria</h3>
      <a href="/api/aimex/diretoria" target='_blank'>/api/aimex/diretoria</a>

      <h3>Histórico</h3>
      <a href="/api/aimex/historico" target='_blank'>/api/aimex/historico</a>

      <h3>Fornecedores</h3>
      <h4>Listar</h4>
      <a href="/api/aimex/fornecedores" target='_blank'>/api/aimex/fornecedores</a>
      <h4>Buscar - Encontrado</h4>
      <a href="/api/aimex/fornecedores?search=qualquercoisa" target='_blank'>/api/aimex/fornecedores?search=qualquercoisa</a>
      <h4>Buscar - Não encontrado</h4>
      <a href="/api/aimex/fornecedores?search=erro" target='_blank'>/api/aimex/fornecedores?search=erro</a>
      <h4>Galeria de Ex-presidentes</h4>
      <a href="/api/aimex/galeria-presidentes" target='_blank'>/api/aimex/galeria-presidentes</a>

    </article>
  )
}