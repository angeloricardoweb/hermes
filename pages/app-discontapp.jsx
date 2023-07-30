export default function Viena() {
  return (
    <article className="container" style={{ marginLeft: 20, marginRight: 20 }}>
      <h1>APP Discontapp</h1>
      <hr />
      <h3>Login - POST</h3>
      <a href="/api/app-discontapp/login" target='_blank'>/api/app-discontapp/login</a>
      <div>
        <code>
          {`{ 
            "nome": 'Teste',
            "sobrenome": 'Bredi',          
            "password": '123456',
            "tipo_usuario": 'cliente',
            "email": 'teste@teste.com',
            "token": '5a2Vfg6NwMxjqGHSXHGWywyVU8QckGi9ERHoaDciX69IDuuGYJj63ada411f10df'
          }`}
        </code>
      </div>
      <hr />
      <h3>Cupons - GET</h3>
      <a href="/api/app-discontapp/cupons/get" target='_blank'>/api/app-discontapp/cupons/get</a>

      <h3>Cupons - POST</h3>
      <a href="/api/app-discontapp/cupons/post" target='_blank'>/api/app-discontapp/cupons/post</a>
      <div>
        <code>
          {`{ 
            "codigo": '7B23YUIA98',
            "validade": '28/07/2024',          
            "valor_desconto": 'teste@teste.com',
            "nome_cupom": 'Cachorro Feliz LTDA',
            "imagem_capa": 'https://api-temp.vercel.app/app-discontapp/produto-capa.png',
            "resumo": 'Cinco marmitas com refeições naturais de carne, frango, carne moída, legumes e vegetais, tudo 100% natural.',
            "descricao_completa": 'I - nome empresarial e número de inscrição do fornecedor, quando houver, no Cadastro Nacional de Pessoas Físicas ou no Cadastro Nacional de Pessoas Jurídicas do Ministério da Fazenda; II - endereço físico e eletrônico, e demais informações necessárias para sua localização e contato; III - características essenciais do produto ou do serviço, incluídos os riscos à saúde e à segurança dos consumidores; IV - discriminação, no preço, de quaisquer despesas adicionais ou acessórias, tais como as de entrega ou seguros; V - condições integrais da oferta, incluídas modalidades de pagamento, disponibilidade, forma e prazo da execução do serviço ou da entrega ou disponibilização do produto; e VI - informações claras e ostensivas a respeito de quaisquer restrições à fruição da oferta. VII - prazo para utilização da oferta pelo consumidor;',
          }`}
        </code>
      </div>

      <hr />
      <h3>Categorias - GET</h3>
      <a href="/api/app-discontapp/categorias" target='_blank'>/api/app-discontapp/categorias</a>

      <hr />
      <h3>Documentos - GET</h3>
      <a href="/api/app-discontapp/documentos" target='_blank'>/api/app-discontapp/documentos</a>

      <hr />
      <h3>Pacotes - GET</h3>
      <a href="/api/app-discontapp/pacotes" target='_blank'>/api/app-discontapp/pacotes</a>

      <hr />
      <h3>Contato - GET</h3>
      <a href="/api/app-discontapp/contato" target='_blank'>/api/app-discontapp/contato</a>

      <hr />
      <h3>Filtro Melhores Avaliações - GET</h3>
      <a href="/api/app-discontapp/filtros/avaliacoes" target='_blank'>/api/app-discontapp/filtros/avaliacoes</a>

      <hr />
      <h3>Filtro Melhores Ofertas - GET</h3>
      <a href="/api/app-discontapp/filtros/ofertas" target='_blank'>/api/app-discontapp/filtros/ofertas</a>

      <hr />
      <h3>Filtro Cupons Vigentes - GET</h3>
      <a href="/api/app-discontapp/filtros/vigentes" target='_blank'>/api/app-discontapp/filtros/vigentes</a>
    </article>
  )
}