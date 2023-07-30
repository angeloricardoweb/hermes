import NextCors from 'nextjs-cors';
import { randomAvatar } from '../../../../utils/randomAvatar';

export default async function handler(req, res) {
  const { ranking_id } = req.query;
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  let ranking_type = '';
  if (ranking_id === '1') {
    ranking_type = 'quiz';
  } else if (ranking_id === '2') {
    ranking_type = 'cursos';
  }

  const data = {
    error: false,
    message: 'Sem erros',
    ranking_id,
    results: {
      type: ranking_type,
      name: 'Nome do usuário',
      points: 999,
      image: {
        url: randomAvatar(192),
      },
      social_links: {
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
      },
    },
  };

  res.status(200).json(data);
}
