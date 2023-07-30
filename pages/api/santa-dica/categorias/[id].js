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
      id: 1,
      title: 'Casa',
      icone: 'https://api-temp.vercel.app/santa-dica/categorias/casa.png',
      background: '#FDA398',
      subcategorias: [
        {
          id: 1,
          title: 'sub-casa 1',
        },
        {
          id: 2,
          title: 'sub-casa 2',
        },
      ],
      fornecedores: [
        {
          id: 1,
          nome: 'MitiGarden',
          logo: 'https://api-temp.vercel.app/santa-dica/fornecedores/teste.png',
          categoria: 'Casa',
          nicho: 'Paisagismo',
          avaliação: 4,
          subcategorias: [
            {
              id: 1,
              title: 'sub-casa 1',
            },
            {
              id: 2,
              title: 'sub-casa 2',
            },
          ],
          descrição:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sapien ac ipsum tempor tempor in eget mi. Praesent lacinia ante sit amet mattis congue. Aenean ullamcorper venenatis neque.',
          contatos: {
            whatsapp: '9999999999',
            facebook: 'https://pt-br.facebook.com/',
            instagram: 'https://www.instagram.com/',
          },
        },
      ],
    },
  };

  res.status(200).json(data);
}
