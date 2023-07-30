import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const params = req.query.params;

  const data = {
    error: false,
    message: 'Sem erro',
    results: {
      id: '8',
      titulo: 'Curso de PHP',
      descricao: 'Curso de Inglês Básico para iniciantes',
      porcentagem_atual: 50,
      instrutor: {
        nome: 'John Doe',
        imagem: 'https://api-temp.vercel.app/avatar/3.png',
        descricao: 'Curso de PHP',
      },
      modulos: [
        {
          id: '1',
          titulo: 'Módulo 1 - O que é PHP',
          conteudos: [
            {
              id: '1',
              titulo: '01 - Quem criou o PHP',
              tempo: '20 min',
              completo: true,
            },
            {
              id: '2',
              titulo: '02 - Para que serve o PHP',
              tempo: '10 min',
              completo: false,
            },
          ],
        },
        {
          id: '2',
          titulo: 'Módulo 2 - Primeiros passos com PHP',
          conteudos: [
            {
              id: '3',
              titulo: '03 - Instalando o PHP',
              tempo: '12 min',
              completo: false,
            },
            {
              id: '4',
              titulo: '04 - Primeiro script PHP',
              tempo: '5 min',
              completo: false,
            },
          ],
        },
      ],
    },
  };

  res.status(200).json(data);
}
