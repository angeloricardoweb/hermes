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
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          avaliacao: {
            media_estrelas: 2.8,
          },
          resumo:
            'Vivamus molestie luctus libero semper fringilla. Etiam a velit ac tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          preco_antigo: 250.0,
          preco_atual: 150.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
        {
          id: '2',
          slug: 'independencia-americana',
          title: 'Independência Americana',
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso001.png',
          materia: 'História',
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          avaliacao: {
            media_estrelas: 3.7,
          },
          resumo:
            'Etiam a velit ac tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          preco_antigo: 250.0,
          preco_atual: 150.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
        {
          id: '3',
          slug: 'primeira-guerra-mundial',
          title: 'Primeira Guerra Mundial',
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso003.png',
          materia: 'História',
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          avaliacao: {
            media_estrelas: 4.2,
          },
          resumo:
            'Vivamus molestie luctus tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          preco_antigo: 250.0,
          preco_atual: 150.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
        {
          id: '4',
          slug: 'segunda-guerra-mundial',
          title: 'Segunda Guerra Mundial',
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso004.png',
          materia: 'História',
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          avaliacao: {
            media_estrelas: 3.4,
          },
          resumo:
            'Vivamus molestie luctus libero semper fringilla. Etiam a velit ac tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          preco_antigo: 250.0,
          preco_atual: 150.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
        {
          id: '5',
          slug: 'guerra-fria',
          title: 'Guerra Fria',
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso002.jpg',
          materia: 'História',
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          avaliacao: {
            media_estrelas: 4.8,
          },
          resumo:
            'Vivamus molestie luctus libero semper fringilla. Etiam a velit ac tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          preco_antigo: 250.0,
          preco_atual: 150.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
        {
          id: '6',
          slug: 'antiguidade-classica',
          title: 'Antiguidade Clássica',
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso005.jpg',
          materia: 'História',
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          avaliacao: {
            media_estrelas: 4.4,
          },
          resumo:
            'molestie luctus libero semper fringilla. Etiam a velit ac tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          preco_antigo: 250.0,
          preco_atual: 500.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
        {
          id: '7',
          slug: 'feudalismo',
          title: 'Feudalismo',
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso006.webp',
          materia: 'História',
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          avaliacao: {
            media_estrelas: 5.0,
          },
          resumo:
            'Vivamus molestie luctus libero semper fringilla. Etiam a velit ac tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          preco_antigo: 250.0,
          preco_atual: 150.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
        {
          id: '8',
          slug: 'absolutismo',
          title: 'Absolutismo',
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso007.jpg',
          materia: 'História',
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          avaliacao: {
            media_estrelas: 4.1,
          },
          resumo:
            'Vivamus molestie tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          preco_antigo: 250.0,
          preco_atual: 150.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
        {
          id: '9',
          slug: 'colonizacao-mercantilista',
          title: 'Colonização mercantilista',
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso008.webp',
          materia: 'História',
          autor: 'Camila Barros',
          autor_img: 'https://api-temp.vercel.app/video4school/imgs/user.jpg',
          avaliacao: {
            media_estrelas: 3.5,
          },
          resumo:
            'Vivamus molestie luctus libero semper fringilla. Etiam a velit ac tellus tempor bibendum sit amet ac odio. Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim. Curabitur eget erat vestibulum, porttitor augue nec, mattis sem.',
          preco_antigo: 250.0,
          preco_atual: 150.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
      ],
    },
  };

  res.status(200).json(data);
}
