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
      membros: [
        {
          id: '1',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/membros/membro-1.png',
          nome: 'André',
          cargo: 'CEO',
          facebook: 'https://www.facebook.com/',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
        {
          id: '12',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/membros/membro-2.png',
          nome: 'André',
          cargo: 'CEO',
          facebook: 'https://www.facebook.com/',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
        {
          id: '13',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/membros/membro-3.png',
          nome: 'André',
          cargo: 'CEO',
          facebook: 'https://www.facebook.com/',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
        {
          id: '14',
          imagem:
            'https://oxus-consultoria-frontend.vercel.app/membros/membro-4.png',
          nome: 'André',
          cargo: 'CEO',
          facebook: 'https://www.facebook.com/',
          instagram: 'https://www.instagram.com/',
          linkedin: 'https://www.linkedin.com/',
        },
      ],
      conselheiros: [
        {
          id: '1',
          foto:
            'https://oxus-consultoria-frontend.vercel.app/conselheiros/conselheiro-1.png',
          nome: 'Nome',
          cargo: 'conselheiro',
        },
        {
          id: '1',
          foto:
            'https://oxus-consultoria-frontend.vercel.app/conselheiros/conselheiro-2.png',
          nome: 'Nome',
          cargo: 'conselheiro',
        },
        {
          id: '1',
          foto:
            'https://oxus-consultoria-frontend.vercel.app/conselheiros/conselheiro-3.png',
          nome: 'Nome',
          cargo: 'conselheiro',
        },
        {
          id: '1',
          foto:
            'https://oxus-consultoria-frontend.vercel.app/conselheiros/conselheiro-4.png',
          nome: 'Nome',
          cargo: 'conselheiro',
        },
        {
          id: '12',
          foto:
            'https://oxus-consultoria-frontend.vercel.app/conselheiros/conselheiro-5.png',
          nome: 'Nome',
          cargo: 'conselheiro',
        },
        {
          id: '13',
          foto:
            'https://oxus-consultoria-frontend.vercel.app/conselheiros/conselheiro-6.png',
          nome: 'Nome',
          cargo: 'conselheiro',
        },
        {
          id: '14',
          foto:
            'https://oxus-consultoria-frontend.vercel.app/conselheiros/conselheiro-7.png',
          nome: 'Nome',
          cargo: 'conselheiro',
        },
        {
          id: '15',
          foto:
            'https://oxus-consultoria-frontend.vercel.app/conselheiros/conselheiro-8.png',
          nome: 'Nome',
          cargo: 'conselheiro',
        },
      ],
    },
  };
  res.status(200).json(data);
}
