export default function Cablim() {
    return (
        <article className="container">
            <h1>Cablim</h1>
            <h3>Banner</h3>
            <a href="/api/cablim/banner">
                /api/cablim/banner
            </a>

            <h3>categoria</h3>
            <a href="/api/cablim/categoria">
                /api/cablim/categoria
            </a>
            <hr />
            <h3>Produtos</h3>
            <a href="/api/cablim/produtos">
                /api/cablim/produtos
            </a>
            <hr />
            <h3>Produto Detalhe</h3>
            <a href="/api/cablim/produtos/produto-teste">
                /api/cablim/produtos/:slug
            </a>



        </article>
    )
}