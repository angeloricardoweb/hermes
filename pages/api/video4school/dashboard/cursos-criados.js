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
      cursos: [
        {
          id: '1',
          slug: 'o-descobrimento-do-brasil',
          title: 'O Descobrimento do Brasil',
          image: 'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
          materia: 'História',
          progresso: 0.5,
          concluido: false,
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          ultima_aula_vista: 2,
          avaliacao: {
            media_estrelas: 2.8,
          },
          resumo:
            'Vivamus molestie luctus libero semper fringilla. Etiam a velit ac tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
        {
          id: '2',
          slug: 'independencia-americana',
          title: 'Independência Americana',
          progresso: 1,
          concluido: true,
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso001.png',
          materia: 'História',
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          ultima_aula_vista: 1, // retorna a primeira caso n tenha assistido nada
          avaliacao: {
            media_estrelas: 3.7,
          },
          resumo:
            'Etiam a velit ac tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
      ],
    },
  };

  res.status(200).json(data);
}
