import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const params = req.query;

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
      banners: [
        {
          id: 3,
          url_image:
            ' https://www.estrutura-engenharia.sitebeta.com.br/img-render/venture-banners/g/imagem-001_aa89f03618fbf9465afc08cfc8766c8a.png',
          alt: 'descrição do banner hero',
          titulo: 'FORT BOULEVARD BEACH',
          slug: 'fort-boulevard',
          subtitulo: 'REQUINTE E MODERNIDADE',
          logo_empreendimento:
            'https://www.estruturaengenharia.eng.br/icons/logo_boulevar.svg',
        },

        {
          id: 4,
          url_image:
            'https://www.estrutura-engenharia.sitebeta.com.br/storage/banners/g/fachada-4_63a62af025e53ecd85b63f13b52bc986.webp',
          alt: 'descrição do banner hero',
          titulo: 'FORT DO FAROL',
          slug: 'fort-do-farol',
          subtitulo: 'SUA CASA DE PRAIA COM PÉ NA AREIA',
          logo_empreendimento:
            'https://www.estruturaengenharia.eng.br/icons/logo-fort-do-farol.svg',
        },
        {
          id: 2,
          url_image:
            ' https://www.estrutura-engenharia.sitebeta.com.br/img-render/venture-banners/g/fort-noite-0-2-1_a9b4602f783425eb31180df9279ab94e.jpg',
          alt: 'descrição do banner hero',
          slug: 'fort-exclusive-2',
          titulo: 'FORT EXCLUSIVE DO FAROL 2',
          subtitulo: 'LUXO E CONFORTO PARA VOCÊ E SUA FAMÍLIA',
          logo_empreendimento:
            'https://www.estruturaengenharia.eng.br/icons/logo_fort_exclusive2.svg',
        },
        {
          id: 1,
          url_image:
            'https://estrutura-engenharia-frontend.vercel.app/img/bg-boulevar-lg.webp',
          alt: 'descrição do banner hero',
          titulo: 'FORT EXCLUSIVE DO FAROL',
          subtitulo: 'EXCLUSIVIDADE É A SUA PRAIA',
          slug: 'fort-exclusive-1',
          logo_empreendimento:
            'https://www.estruturaengenharia.eng.br/img/logo-fort-exclusive-do-farol-negativo.png',
        },
      ],
    },
  };

  res.status(200).json(data);
}
