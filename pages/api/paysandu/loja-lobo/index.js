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
    results: {
      produtos: [
        {
          id: '1',
          nome: 'CAMISA OFICIAL I 2023 (A AGUERRIDA) - MASCULINA',
          preco: 259.99,
          foto: 'https://www.lojaslobo.com.br/arquivos/PRODUTOS/2601670954017724858/277_G_CAMISA-OFICIAL-I-2023-A-AGUERRIDA--MASCULINA_22.jpg',
          link: 'https://www.lojaslobo.com.br/camisa-oficial-i-2023-a-aguerrida-masculina-1/p'
        },
        {
          id: '2',
          nome: 'CAMISA OFICIAL II FEMININA (INVICTA) 2023',
          preco: 249.99,
          foto: 'https://www.lojaslobo.com.br/arquivos/PRODUTOS/6621675369018759873/295_G_CAMISA-OFICIAL-II-FEMININA-INVICTA-2023_84.jpg',
          link: 'https://www.lojaslobo.com.br/camisa-oficial-ii-feminina-invicta-2023/p'
        },

      ],
    },
  };
  res.status(200).json(data);
}
