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
    results: [
      {
        id: 1,
        imagem: {
          url: 'https://api-temp.vercel.app/video4school/materias/historia.png',
        },
        origem: 'colegio',
        title: 'História',
        materia: 'historia'
      },
      {
        id: 2,
        imagem: {
          url: 'https://api-temp.vercel.app/video4school/materias/matematica.png',
        },
        origem: 'colegio',
        title: 'Matemática',
        materia: 'matematica'

      },
      {
        id: 3,
        imagem: {
          url: 'https://api-temp.vercel.app/video4school/materias/fisica.png',
        },
        origem: 'colegio',
        title: 'Física',
        materia: 'fisica'

      },
      {
        id: 4,
        imagem: {
          url: 'https://api-temp.vercel.app/video4school/materias/quimica.png',
        },
        origem: 'colegio',
        title: 'Quimica',
        materia: 'quimica'

      },
      {
        id: 5,
        imagem: {
          url: 'https://api-temp.vercel.app/video4school/materias/historia.png',
        },
        origem: 'colegio',
        title: 'História',
        materia: 'historia'

      },
      {
        id: 6,
        imagem: {
          url: 'https://api-temp.vercel.app/video4school/materias/matematica.png',
        },
        origem: 'colegio',
        title: 'Geografia',
        materia: 'geografia'

      },
    ],
  };

  res.status(200).json(data);
}
