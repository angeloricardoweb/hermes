export default function AppProVer() {
  return (
    <article className="container">
      <h1>Aplicativo Pro.Ver</h1>
      <hr />
      <h3>Cadastro de Usuário - POST</h3>
      <a target="_blank">POST /api/app-pro-ver/cadastro-usuario</a>
      <div>
        <code>
          {`{ 
            "nome": 'Leonardo',
            "sobrenome": 'Soares',          
            "email": 'teste@teste.com',
            "password": '12345678'
          }`}
        </code>
      </div>
      <hr />
      <h3>Recuperação de Senha - POST</h3>
      <a target="_blank">POST /api/app-pro-ver/recupera-senha</a>
      <div>
        <code>
          {`{ email: 'teste@teste.com' }`}
        </code>
      </div>
      <hr />
      <h3>Login - POST</h3>
      <a target="_blank">POST /api/app-pro-ver/login</a>
      <div>
        <code>
          {`{
            email: 'teste@teste.com',
            password: '123456'
          }`}
        </code>
      </div>
      <hr />
      <h3>[Aguardar] - Usuário - GET</h3>
      <a href="/api/app-pro-ver/usuario" target="_blank">Dados do Usuário: /api/app-pro-ver/usuario</a>
      <hr />
      <h3>[Aguardar] - Medicamentos - GET</h3>
      <a href="/api/app-pro-ver/medicamentos" target="_blank"><b>Lista:</b> /api/app-pro-ver/medicamentos</a>
      <br/><br />
      <a href="/api/app-pro-ver/medicamentos/medicamento-1" target="_blank"><b>Detalhes:</b> /api/app-pro-ver/medicamentos/medicamento-1</a>
      <hr />
      <h3>[Aguardar] - Exames - GET</h3>
      <a href="/api/app-pro-ver/exames" target="_blank"><b>Lista:</b> /api/app-pro-ver/exames</a>
      <br /><br />
      <a href="/api/app-pro-ver/exames/exame-1" target="_blank"><b>Detalhes:</b> /api/app-pro-ver/exames/exame-1</a>
      <hr />
      <h3>[Aguardar] - Médicos (mapa) - GET</h3>
      <a href="/api/app-pro-ver/medicos" target="_blank"><b>Lista:</b> /api/app-pro-ver/medicos</a>
      <br /><br />
      <a href="/api/app-pro-ver/medicos/paula-silva" target="_blank"><b>Detalhes:</b> /api/app-pro-ver/medicos/paula-silva</a>
      <hr />
      <h3>[Aguardar] Formulário [Chat] - POST</h3>
      <a target="_blank">POST /api/app-pro-ver/perguntas</a>
      <div>
        <code>
          {`{
            "pergunta1": "45 a 54 anos",
            "pergunta2": "Abaixo de 25 Kg/m",
            "pergunta3": "Menos de 95 cm",
            "pergunta4": "Sim",
            "pergunta5": "Todos os dias",
            "pergunta6": "Não",
            "pergunta7": "Não",
            "pergunta8": "Não"
          }`}
        </code>
      </div>
    </article>
  );
}
