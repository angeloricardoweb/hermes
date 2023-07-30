import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    res.status(404).json({ error: true, message: 'Not found' });
    return;
  }

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
      icone: 'qualidade-ar',
      descricao:
        'Amostragem ambiental do ar nas proximidades dos empreendimentos e atividades com potencial poluidor (CONAMA 491/2018)',
      slug: 'Qualidade do ar',
      imagem: {
        url: 'https://hraeng.com.br/wp-content/uploads/2020/03/hidrometria_topobatimetria3.jpg',
        alt: 'Qualidade do ar',
      },
    },
  };
  res.status(200).json(data);
}
