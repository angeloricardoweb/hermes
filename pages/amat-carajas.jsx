export default function Issaa() {
  return (
    <article className="container">
      <h1>AMAT - Carajás</h1>
      <h3>Notícias</h3>
      <a href="/api/amat-carajas/noticias">/noticias</a>
      <hr />
      <h3>Filtrar Notícias dos monicípios da Região AMAT Carajas</h3>
      <a href="/api/amat-carajas/noticias?regiao=amat-carajas">
        /noticias?regiao=amat-carajas
      </a>
      <hr />
      <h3>Notícias detalhes</h3>
      <a href="/api/amat-carajas/noticias/slug-da-noticia">
        /api/amat-carajas/noticias/slug-da-noticia
      </a>
      <hr />
      <h3>Contatos municipios</h3>
      <a href="/api/amat-carajas/contatos-municipios?cidade=bom%20jesus">
        /api/amat-carajas/contatos-municipios?cidade=bom%20jesus
      </a>
      <hr />
      <h3>Hero</h3>
      <a href="/api/amat-carajas/hero">/hero </a>
      <hr />

      <h3>Diretoria</h3>
      <a href="/api/amat-carajas/diretoria">/diretoria</a>
      <hr />

      <h3>Empresa</h3>
      <a href="/api/amat-carajas/empresa">/empresa</a>
      <hr />
    </article>
  );
}
