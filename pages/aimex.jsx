export default function Aimex() {
  return (
    <article className="container">
      <h1>Aimex</h1>
      <hr />
      <h3>Biblioteca Florestal</h3>
      <ul>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/videos" target='_blank'> /api/aimex/biblioteca-florestal/videos </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/fotos" target='_blank'> /api/aimex/biblioteca-florestal/fotos </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/publicacoes" target='_blank'> /api/aimex/biblioteca-florestal/publicacoes </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/documentos" target='_blank'> /api/aimex/biblioteca-florestal/documentos </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/news" target='_blank'> /api/aimex/biblioteca-florestal/news </a>
        </li>
      </ul>

      <h4>Página de Detalhes (Biblioteca Florestal)</h4>
      <ul>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/videos/como-acontece-o-processo-de-producao-da-madeira" target='_blank'> /api/aimex/biblioteca-florestal/videos/[slug] </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/fotos/manejo-florestal-colheita-das-arvores-maduras" target='_blank'> /api/aimex/biblioteca-florestal/fotos/[slug] </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/publicacoes/manejo-florestal-colheita-das-arvores-maduras" target='_blank'> /api/aimex/biblioteca-florestal/publicacoes/[slug] </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/documentos/leis-de-diretrizes-sustentaveis-2019" target='_blank'> /api/aimex/biblioteca-florestal/documentos/[slug] </a>
        </li>
      </ul>

      <h4>Página de Busca</h4>
      <ul>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/busca-biblioteca/" target='_blank'> /api/aimex/biblioteca-florestal/busca-biblioteca/ </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/busca-biblioteca?search=madeira" target='_blank'> /api/aimex/biblioteca-florestal/busca-biblioteca/[search] </a>
        </li>
      </ul>

      <h4>Página Fornecedores</h4>
      <ul>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/fornecedores" target='_blank'> /api/aimex/biblioteca-florestal/fornecedores </a>
        </li>
      </ul>

      <h4>News</h4>
      <ul>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/biblioteca-florestal/news/exportacao-em-alta-no-para" target='_blank'> /api/aimex/biblioteca-florestal/news/[slug] </a>
        </li>
      </ul>

      <h4>Exportações</h4>
      <ul>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/exportacoes" target='_blank'> /api/aimex/exportacoes </a>
        </li>
      </ul>

      
      <h4>Legislação</h4>
      <ul>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/legislacao" target='_blank'> /api/aimex/legislacao </a>
        </li>
      </ul>

      <h4>Newlestter</h4>
      <ul>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/newlestter/" target='_blank'> /api/aimex/newlestter/ </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a href="/api/aimex/newlestter/ipes-sao-temas-de-estudo-inedito-no-para" target='_blank'> /api/aimex/newlestter/[slug] </a>
        </li>
      </ul>
    </article>
  )
}