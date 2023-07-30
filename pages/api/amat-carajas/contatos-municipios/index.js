import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const { cidade } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {};

  if (cidade === 'abel figueiredo') {
    data.id = Math.round(Math.random() * 1000);
    data.nome = 'abel figueiredo';
    data.site = 'amat-carajas-frontend.vercel.app/';
    data.email = 'prefeitura@contato.com.br';
    data.instagram = 'prefeitura_abelfigueiredo';
    data.facebook = 'prefeitura_abelfigueiredo';
    data.localizacao = 'Av. Lago Azul, s/n - Centro, Água Azul do Norte - PA';

    return res.status(200).json(data);
  }

  if (cidade === 'carajas') {
    data.id = Math.round(Math.random() * 1000);
    data.nome = 'carajas';
    data.site = 'amat-carajas-frontend.vercel.app/';
    data.email = 'prefeitura@contato.com.br';
    data.instagram = 'prefeitura_carajas';
    data.facebook = 'prefeitura_carajas';
    data.localizacao = 'Av. Lago Azul, s/n - Centro, Água Azul do Norte - PA';

    return res.status(200).json(data);
  }

  if (cidade === 'bom jesus') {
    data.id = Math.round(Math.random() * 1000);
    data.nome = 'bom jesus';
    data.site = 'amat-carajas-frontend.vercel.app/';
    data.email = 'prefeitura@contato.com.br';
    data.instagram = 'prefeitura_bomjesus';
    data.facebook = 'prefeitura_bom jesus';
    data.localizacao = 'Av. Lago Azul, s/n - Centro, Água Azul do Norte - PA';

    return res.status(200).json(data);
  } else {
    return res.status(404).json({ message: 'cidade não encontrada' });
  }
}
