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
      title: 'Conheça o Aqualand',
      content:
        'O Aqualand é sinônimo de família, por isso nossas atrações foram pensadas para atender todos os gostos, sejam mais radicais ou familiares. Em plena PA-444, com área total de 70.000m2 e com a Maior Piscina de Ondas da América Latina, o Aqualand ainda terá muitas novidades para os sócios e frequentadores.',
      video_url: 'https://www.youtube.com/watch?v=JruEj3eh88k',
    },
  };

  res.status(200).json(data);
}
