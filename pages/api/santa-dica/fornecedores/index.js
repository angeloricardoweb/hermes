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
      fornecedores: [
        {
          id: 1,
          nome: 'MitiGarden',
          logo: 'https://api-temp.vercel.app/santa-dica/fornecedores/teste.png',
          categoria: 'Casa',
          favorito: true,
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

        {
          id: 2,
          nome: 'KidStock',
          logo: 'https://api-temp.vercel.app/santa-dica/fornecedores/teste.png',
          categoria: 'kids',
          favorito: false,
          nicho: 'Artigos para festa',
          avaliação: 4,
          subcategorias: [
            {
              id: 3,
              title: 'sub-kids 1',
            },
            {
              id: 4,
              title: 'sub-kids 2',
            },
          ],
          descrição:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae sapien ac ipsum tempor tempor in eget mi. Praesent lacinia ante sit amet mattis congue. Aenean ullamcorper venenatis neque.',
          contatos: {
            whatsapp: '9999999999',
            facebook: {
              title: '@kidStock',
              url: 'https://pt-br.facebook.com/',
            },
            instagram: {
              title: '@kidStock',
              url: 'https://www.instagram.com/',
            },
          },
        },

        {
          id: 3,
          nome: 'Trelelê',
          logo: 'https://api-temp.vercel.app/santa-dica/fornecedores/teste.png',
          categoria: 'Moda',
          favorito: false,
          nicho: 'Moda Infantil',
          avaliação: 4,
          subcategorias: [
            {
              id: 7,
              title: 'sub-moda 1',
            },
            {
              id: 8,
              title: 'sub-moda 2',
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

        {
          id: 4,
          nome: 'Berinbelo',
          logo: 'https://api-temp.vercel.app/santa-dica/fornecedores/teste.png',
          categoria: 'Moda',
          favorito: true,
          nicho: 'Bujuteria',
          avaliação: 2,
          subcategorias: [
            {
              id: 7,
              title: 'sub-moda 1',
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
        
        {
          id: 5,
          nome: 'Faça Festa',
          logo: 'https://api-temp.vercel.app/santa-dica/fornecedores/teste.png',
          categoria: 'Festa',
          nicho: 'Roupas Infantis',
          avaliação: 4,
          favorito: false,
          subcategorias: [
            {
              id: 11,
              title: 'sub-festa 1',
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
