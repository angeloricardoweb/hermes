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
      CourseAuthorData: {
        img: {
          url: 'https://api-temp.vercel.app/video4school/imgs/author.png',
        },
        date: '2023-01-10T14:15:00.000Z',
        name: 'Paulo Santos',
        email: 'email@email.com.br',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dolore culpa consectetur aut quaerat reiciendis dolor officia quam minus saepe aperiam explicabo natus optio ad cumque. Dolorum illum neque distinctio Mauris viverra, ex id tincidunt malesuada, dui orci volutpat augue, eu ornare ipsum orci id arcu. Maecenas enim orci, feugiat gravida placerat sed, posuere eget diam. Curabitur quis urna vel nisl hendrerit placerat ac vel sapien. Aenean fringilla id lectus vel pharetra. Phasellus dolor mauris, aliquam id mollis vitae, condimentum vel est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        star: 5,
        rating: 1500,
        courses: 20,
        topRated: true,
        series: [1, 2, 4],
        cursos: [
          {
            id: 1,
            title: 'O Descobrimento do Brasil',
            image:
              'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
            materia: 'História',
            autor: 'Camila Barros',
            autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
            avaliacao: {
              media_estrelas: 5,
            },
            preco_antigo: 250.0,
            preco_atual: 150.0,
            encargos: 30.0,
            qtd_aulas: 20,
            carga_horaria: 50,
            series: [3, 2, 4],
          },
          {
            id: 2,
            title: 'Independência Americana',
            image:
              'https://api-temp.vercel.app/video4school/imgs/imgcurso001.png',
            materia: 'História',
            autor: 'Camila Barros',
            autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
            avaliacao: {
              media_estrelas: 4,
            },
            preco_antigo: 250.0,
            preco_atual: 150.0,
            encargos: 15.0,
            qtd_aulas: 20,
            carga_horaria: 50,
            series: [1, 2, 3, 4],
          },
        ],
      },

      socialLinks: [
        {
          id: 1,
          type: 'facebook',
          link: 'https://www.facebook.com/',
        },
        {
          id: 2,
          type: 'instagram',
          link: 'https://www.instagram.com/',
        },
        {
          id: 3,
          type: 'youtube',
          link: 'https://www.youtube.com/',
        },
        {
          id: 4,
          type: 'linkedin',
          link: 'https://www.linkedin.com/',
        },
        {
          id: 5,
          type: 'twitter',
          link: 'https://www.twitter.com/',
        },
      ],
    },
  };

  res.status(200).json(data);
}
