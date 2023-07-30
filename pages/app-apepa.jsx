export default function AppProVer() {
  return (
    <article className="container">
      <h1>Aplicativo APEPA</h1>
      <hr />
      <h3>LOGIN - POST</h3>
      <a target="_blank" href="/api/app-apepa/login">/api/app-apepa/login</a>
      <div>
        <code>
          {`{ 
            "nome": 'Teste',
            "sobrenome": 'Bredi',          
            "email": 'teste@teste.com',
            "password": '123456'
          }`}
        </code>
      </div>
      <hr />
      <h3>CARTEIRA DIGITAL - GET</h3>
      <a target="_blank" href="/api/app-apepa/carteira-digital/1">/api/app-apepa/carteira-digital/[id]</a>
      <hr />
      <h3>CONTATOS DOS PROCURADORES - GET</h3>
      <a target="_blank" href="/api/app-apepa/contatos-procuradores/">/api/app-apepa/contatos-procuradores</a>
      <hr />
      <h3>DOCUMENTOS - GET</h3>
      <a target="_blank" href="/api/app-apepa/lista-documentos">/api/app-apepa/lista-documentos</a>
      <hr />
      <h3>DOCUMENTOS DETALHES - GET</h3>
      <a target="_blank" href="/api/app-apepa/documentos/atas">/api/app-apepa/documentos/[slug]</a>
      <hr />
      <h3>PONTOS FACULTATIVOS (ANO) - GET</h3>
      <a target="_blank" href="/api/app-apepa/lista-pontos-facultativos/">/api/app-apepa/lista-pontos-facultativos</a>
      <hr />
      <h3>PONTOS FACULTATIVOS (MÊS) - GET</h3>
      <a target="_blank" href="/api/app-apepa/pontos-facultativos/lista-meses/2023">/api/app-apepa/pontos-facultativos/lista-meses/[slug]</a>
      <hr />
      <h3>PONTOS FACULTATIVOS (DIAS) - GET</h3>
      <a target="_blank" href="/api/app-apepa/pontos-facultativos/lista-dias/janeiro">/api/app-apepa/pontos-facultativos/lista-dias/[slug]</a>
      <hr />
      <h3>CONVÊNIOS - GET</h3>
      <a target="_blank" href="/api/app-apepa/lista-convenios">/api/app-apepa/lista-convenios/[slug]</a>
      <hr />
      <h3>CONVÊNIOS (Detalhes) - GET</h3>
      <a target="_blank" href="/api/app-apepa/convenios/unimed">/api/app-apepa/convenios/[slug]</a>
      <hr />
      <h3>Notícias - GET</h3>
      <a target="_blank" href="/api/app-apepa/lista-noticias">/api/app-apepa/lista-noticias</a>
      <hr />
      <h3>Votação On-line - POST</h3>
      <a target="_blank" href="/api/app-apepa/votacao">/api/app-apepa/votacao</a>
      <div>
        <code>
          {`{ 
            "opcaomarcada": 'Salão de Festas da APEPA',
            "datetime": '16/05/2023 - 15:17'        
          }`}
        </code>
      </div>
      <hr />
      <h3>Votação On-line Histórico  - GET</h3>
      <a target="_blank" href="/api/app-apepa/historico-votacao">/api/app-apepa/historico-votacao</a>
      <hr />
      <h3>Galeria de Fotos - GET</h3>
      <a target="_blank" href="/api/app-apepa/lista-galeria">/api/app-apepa/lista-galeria</a>
      <hr />
      <h3>Notificações - GET</h3>
      <a target="_blank" href="/api/app-apepa/lista-notificacoes">/api/app-apepa/lista-notificacoes</a>
      <hr />
      <h3>Legislação - GET</h3>
      <a target="_blank" href="/api/app-apepa/lista-legislacao">/api/app-apepa/lista-legislacao</a>
      <hr />
      <h3>Ex-Presidentes - GET</h3>
      <a target="_blank" href="/api/app-apepa/lista-ex-presidentes">/api/app-apepa/lista-ex-presidentes</a>
      <hr />
      <h3>Lista Voucher - GET</h3>
      <a target="_blank" href="/api/app-apepa/lista-voucher">/api/app-apepa/lista-voucher</a>
    </article>
  );
}
