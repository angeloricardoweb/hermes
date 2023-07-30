import NextCors from 'nextjs-cors';
import { randomUUID } from 'node:crypto';
export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (slug == 'sub-16') {
    const data = {
      error: false,
      message: 'Sem erros',
      tabelas: [
        {
          id: 1,
          titleGeral: '1º Turno',
          atualizacao: '30 de setembro de 2022',
          jogos: [
            {
              id: 1,
              timeVisitante: 'Penarol',
              timeMandante: 'Rosario',
              logoVisitante: 'https://api-temp.vercel.app/assembleia-paraense/penarol.png',
              logoMandante: 'https://api-temp.vercel.app/assembleia-paraense/rosario.png',
              golsVisitante: 1,
              golsMandante: 3,
              data: '01/02/2023',
              diaSemana: 'Quinta',
              hora: '17:00',
              local: 'Curuzú',
              linkLocal: '#'
            },
            {
              id: 2,
              timeVisitante: 'Rosario',
              timeMandante: 'Penarol',
              logoVisitante: 'https://api-temp.vercel.app/assembleia-paraense/rosario.png',
              logoMandante: 'https://api-temp.vercel.app/assembleia-paraense/penarol.png',
              golsVisitante: 5,
              golsMandante: 4,
              data: '04/03/2023',
              diaSemana: 'Quarta',
              hora: '12:00',
              local: 'Mangueirão',
              linkLocal: '#'
            }
          ],
        },
        {
          id: 2,
          titleGeral: '2º Turno',
          atualizacao: '12 de janeiro de 2023',
          jogos: [
            {
              id: 1,
              timeVisitante: 'Penarol',
              timeMandante: 'Rosario',
              logoVisitante: 'https://api-temp.vercel.app/assembleia-paraense/penarol.png',
              logoMandante: 'https://api-temp.vercel.app/assembleia-paraense/rosario.png',
              golsVisitante: 1,
              golsMandante: 3,
              data: '01/02/2023',
              diaSemana: 'Quinta',
              hora: '17:00',
              local: 'Curuzú',
              linkLocal: '#'
            },
            {
              id: 2,
              timeVisitante: 'Rosario',
              timeMandante: 'Penarol',
              logoVisitante: 'https://api-temp.vercel.app/assembleia-paraense/rosario.png',
              logoMandante: 'https://api-temp.vercel.app/assembleia-paraense/penarol.png',
              golsVisitante: 5,
              golsMandante: 4,
              data: '04/03/2023',
              diaSemana: 'Quarta',
              hora: '12:00',
              local: 'Mangueirão',
              linkLocal: '#'
            }
          ],
        },
      ]
    };
    res.status(200).json(data);
  }
  else {
    const data = {
      error: false,
      message: 'Sem erro',
      data: []
    }
    return res.status(200).json(data)
  }
}
