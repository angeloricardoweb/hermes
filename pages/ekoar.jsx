export default function Issaa() {
  return (
    <article className="container">
      <h1>Ekoar</h1>
      <hr />
      <h3>Dados da empresa</h3>
      <a href="/api/ekoar/empresa">/api/ekoar/empresa</a>
      <br />
      <a href="/api/ekoar/empresa/itens">/api/ekoar/empresa/itens</a>
      <hr />
      <h3>Lista as Notícias</h3>
      <a href="/api/ekoar/noticias">/api/ekoar/noticias</a>
      <hr />
      <h3>Retorna uma Notícia</h3>
      <a href="/api/ekoar/noticias/titulo-da-noticia">
        /api/ekoar/noticias/:slug
      </a>
      <hr />
      <h3>Lista os Serviços</h3>
      <a href="/api/ekoar/servicos">/api/ekoar/servicos</a>
      <hr />
      <h3>Retorna um Serviço</h3>
      <a href="/api/ekoar/servicos/titulo-do-servico">
        /api/ekoar/servicos/:slug
      </a>
    </article>
  );
}

