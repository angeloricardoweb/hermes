export default function Artmil() {
    return (
      <article className="container">
        <h1>Artmil</h1>
        <hr />
        <h3>Listar Produtos por categoria</h3>
        <a href="/api/artmil/produtos/rolo" target='_blank'>/api/artmil/produtos/:categoria</a>
        <hr />
        <h3>Exibir um produto</h3>
        <a href="/api/artmil/produto/41234124" target='_blank'>/api/artmil/produto/:id</a>
        <hr />
        <h3>Listar Dicas</h3>
        <a href="/api/artmil/dicas/" target='_blank'>/api/artmil/dicas</a>
        <hr />
        <h3>Detalhes da Dica</h3>
        <a href="/api/artmil/dicas/2345235" target='_blank'>/api/artmil/dicas/:id</a>
        <hr />
        <h3>Listar Pedidos</h3>
        <a href="/api/artmil/pedidos/" target='_blank'>/api/artmil/pedidos</a>
        <hr />
        <h3>Detalhes do Pedido</h3>
        <a href="/api/artmil/pedidos/421341234" target='_blank'>/api/artmil/pedidos/:id</a>
        <hr />
      </article>
    )
  }