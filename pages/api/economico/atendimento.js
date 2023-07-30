import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    error: false,
    message: 'Sem erros',
    atendimento: [
      {
        id: 1,
        email: 'atendimento@economico.com.br',
        telefone: '91983938684',
        whatsapp: '91983938684',
        link_facebook: 'https://www.facebook.com/sejaeconomico',
        link_instagram: 'https://www.instagram.com/sejaeconomico/',
        link_youtube: 'https://youtube.com/',
        link_linkedin: 'https://www.linkedin.com/company/sejaeconomico/',
        unidades: {
          unidade_nome: 'Unidade Jurunas',
          unidade_telefone: '(91) 3012-1234',
          unidade_whatsapp: '(91) 3012-1234',
        },
        formulario: {
          cliente_nome: 'Orivaldo Silva',
          cliente_telefone: '99999999',
          cliente_email: 'teste@gmail.com',
          cliente_assunto: 'Contato',
          cliente_mensagem: 'Teste Contato',
        },
      },
    ],
  };

  res.status(200).json(data);
}
