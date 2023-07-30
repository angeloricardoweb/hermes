export default function Viena() {
    return (
      <article className="container">
        <h1>Viena</h1>
        <hr />
        <h3>Listar notícias</h3>
        <a href="/api/viena/noticias" target='_blank'>/api/viena/noticias</a>
        <hr />
        <h3>Exibir uma notícia</h3>
        <a href="/api/viena/noticia/noticia-1" target='_blank'>/api/viena/noticia/:slug</a>
        <hr />
        <h3>Listar Depoimentos</h3>
        <a href="/api/viena/depoimentos" target='_blank'>/api/viena/depoimentos</a>
        <hr />
        <h3>Quem Somos</h3>
        <a href="/api/viena/quem-somos" target='_blank'>/api/viena/quem-somos</a>
        <hr />
        <h3>Empresa</h3>
        <a href="/api/viena/empresa" target='_blank'>/api/viena/empresa</a>
        <hr />
        <h3>Hero</h3>
        <a href="/api/viena/hero" target='_blank'>/api/viena/hero</a>
        <hr />
      </article>
    )
  }