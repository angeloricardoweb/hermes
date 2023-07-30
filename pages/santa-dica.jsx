export default function SantaDica() {
  return (
    <article className="container">
      <h1>Santa-Dica</h1>
      <hr />
      <h3>Categorias</h3>
      <a href="/api/santa-dica/categorias" target="_blank">
        /api/santa-dica/categorias
      </a>
      <h3>Categoria by id</h3>
      <a href="/api/santa-dica/categorias/123123" target="_blank">
        /api/santa-dica/categorias/[id da categoria]
      </a>
      <hr />
      <h3>Subcategorias</h3>
      <a href="/api/santa-dica/subcategorias" target="_blank">
        /api/santa-dica/subcategorias
      </a>
      <hr />
      <h3>Fornecedores</h3>
      <a href="/api/santa-dica/fornecedores" target="_blank">
        /api/santa-dica/fornecedores
      </a>
      <h3>Fornecedor by id</h3>
      <a href="/api/santa-dica/fornecedores/123123" target="_blank">
        /api/santa-dica/fornecedores/[id do fornecedor]
      </a>
      <hr />
      <h3>Favoritos</h3>
      <a href="/api/santa-dica/favoritos" target="_blank">
        /api/santa-dica/favoritos
      </a>
      <hr />
      <h3>Usuário</h3>
      <a href="/api/santa-dica/usuario" target="_blank">
        /api/santa-dica/usuario
      </a>
      <hr />
      <h3>Login - Post</h3>
      <a target="_blank">POST /api/santa-dica/login</a>
      <div>
        <code>
          {`{
            email: 'teste@teste.com',
            password: '123456'
          }`}
        </code>
        <div>
          <span>
            Obs: Testar também valores inválidos para verificar as formas de
            retorno
          </span>
        </div>
      </div>
    </article>
  );
}
