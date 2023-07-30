import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const { slug } = req.query;

  const img_url =
    'https://1.bp.blogspot.com/-_gfkOu8jPCQ/X2Pzt7AIBUI/AAAAAAAADVw/7WvJBZSQHKEVU96PEHfdfEXq7nSJkKIFACLcBGAsYHQ/w1200-h630-p-k-no-nu/197%2B-%2B2.jpg';

  const progress_img_url =
    'https://www.estrutura-engenharia.sitebeta.com.br/storage/status-pictures/p/group-1_4d015eba5ab9c3e6afec8072a596c8e1.svg';

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const galerias = [
    {
      id: Math.floor(Math.random() * 100),
      mes: 'Maio',
      ano: '2023',
      fotos: [
        {
          id: 1,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 2,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 3,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 4,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 5,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 6,
          url: img_url,
          legenda: 'alguma legenda',
        },
      ],
    },
    {
      id: Math.floor(Math.random() * 100),
      mes: 'Junho',
      ano: '2023',
      fotos: [
        {
          id: 1,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 2,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 3,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 4,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 5,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 6,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 9,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 11,
          url: img_url,
          legenda: 'alguma legenda',
        },
        {
          id: 22,
          url: img_url,
          legenda: 'alguma legenda',
        },
      ],
    },
  ];

  const data = {
    error: false,
    message: 'Sem erro',
    results: {
      obra_status: [
        {
          id: 1,
          nome: 'Torre 1',
          galerias: galerias,
          progresso: [
            {
              icon: progress_img_url,
              id: 3,
              prog_statuses_id: 2,
              progress: 36,
              text: 'Status da Obra',
              venture_id: 1,
            },
            {
              icon: progress_img_url,
              id: 1,
              prog_statuses_id: 2,
              progress: 66,
              text: 'Fundação ou Infra-Estrutura',
              venture_id: 1,
            },
            {
              icon: progress_img_url,
              id: 2,
              prog_statuses_id: 2,
              progress: 99,
              text: 'Alvenarias e Vedações',
              venture_id: 1,
            },
          ],
        },
        {
          id: 2,
          nome: 'Torre 2',
          galerias: galerias,
          progresso: [
            {
              icon: progress_img_url,
              id: 3,
              prog_statuses_id: 2,
              progress: 36,
              text: 'Status da Obra',
              venture_id: 1,
            },
            {
              icon: progress_img_url,
              id: 1,
              prog_statuses_id: 2,
              progress: 66,
              text: 'Fundação ou Infra-Estrutura',
              venture_id: 1,
            },
            {
              icon: progress_img_url,
              id: 2,
              prog_statuses_id: 2,
              progress: 99,
              text: 'Alvenarias e Vedações',
              venture_id: 1,
            },
            {
              icon: progress_img_url,
              id: 5,
              prog_statuses_id: 2,
              progress: 66,
              text: 'Fundação ou Infra-Estrutura',
              venture_id: 1,
            },
            {
              icon: progress_img_url,
              id: 8,
              prog_statuses_id: 2,
              progress: 99,
              text: 'Alvenarias e Vedações',
              venture_id: 1,
            },
          ],
        },
      ],
    },
  };

  return res.status(200).json(data);
}
