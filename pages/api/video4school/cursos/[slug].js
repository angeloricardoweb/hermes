import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { slug } = req.query;

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      id: null,
      slug: slug,
      title: null,
      image: null,
      materia: 'História',
      video_previa_url: 'https://www.youtube.com/watch?v=x0jPbnuZ3Rc',
      video_previa_imagem: null,
      resumo:
        '<p>Duis tincidunt <strong>malesuada</strong> mauris et ornare. Sed facilisis placerat purus quis laoreet. Maecenas in orci bibendum, pulvinar neque nec, <strong>AIduhiwau</strong> aliquet sapien. Donec commodo rutrum molestie. In non aliquam mi. Morbi sed dolor id arcu consequat ornare ut nec est. Nam convallis mauris eu ante ultricies, sit amet ultricies urna faucibus. Pellentesque faucibus lobortis lorem, in commodo justo dignissim ut.</p>',
      avaliacao: {
        media_estrelas: 2.8,
        qtd_votos: 100,
        estrelas: {
          5: 30,
          4: 30,
          3: 30,
          2: 0,
          1: 10,
        },
      },
      preco_antigo: 250.0,
      preco_atual: 150.0,
      encargos: 30.0,
      qtd_aulas: 20,
      carga_horaria: 50,
      series: [3, 2, 4],
      assuntos: [
        'Introdução',
        'A armada de Pedro Alvares Cabral',
        'A chegada a Vera Cruz',
        'Os povos nativos',
        'Data da Descoberta na historiografia',
        'Teorias acerca do descobrimento',
        'Referências biográficas',
        'Bibliografia complementar',
      ],
      requisitos: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien dui, elementum ac tempor nec, malesuada at purus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Etiam augue lorem, feugiat id ligula vel, tempus sagittis nisl. Nulla velit augue, hendrerit vel magna at, molestie sagittis enim.',
        'Pellentesque faucibus lobortis lorem, in commodo justo dignissim ut. Aliquam purus tellus, feugiat quis viverra vel, ullamcorper ut enim.',
      ],
      autor: {
        nome: null,
        avatar_url: null,
        bio: '<p>Duis tincidunt <strong>malesuada mauris</strong> et ornare. Sed facilisis placerat purus quis laoreet. Maecenas in orci bibendum, pulvinar neque nec, aliquet sapien. Donec commodo rutrum molestie. In non aliquam mi. Morbi sed dolor id arcu consequat ornare ut nec est. Nam convallis mauris eu ante ultricies, sit amet ultricies urna faucibus. Pellentesque faucibus lobortis lorem, in commodo justo dignissim ut.</p>',
        avaliacao: {
          media_estrelas: 4.2,
        },
        qtd_votos: 2500,
        qtd_cursos: 20,
        qtd_alunos: 23000,
      },
      conteudo: [
        {
          id: '1',
          title: 'Módulo 1',
          qtd_licoes: 3,
          tempo: '5h10m',
        },

        {
          id: '2',
          title: 'Módulo 2',
          qtd_licoes: 5,
          tempo: '3h20m',
        },

        {
          id: '3',
          title: 'Módulo 3',
          qtd_licoes: 15,
          tempo: '1h20m',
        },

        {
          id: '4',
          title: 'Módulo 4',
          qtd_licoes: 4,
          tempo: '4h20m',
        },
      ],
      meta: {
        duracao_total: '13h30m',
        qtd_arquivos: 10,
        qtd_quiz: 64,
        qtd_artigos: 42,
        qtd_audios: 25,
        recorrencia: 'Mensal',
      },

      mais_cursos_autor: [
        {
          id: '1',
          slug: 'o-descobrimento-do-brasil',
          title: 'O Descobrimento do Brasil',
          image: 'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
          materia: 'História',
          autor: {
            nome: 'Camila Barros',
            avatar_url:
              'https://api-temp.vercel.app/video4school/imgs/user.jpg',
            bio: '<p>Duis tincidunt <strong>malesuada mauris</strong> et ornare. Sed facilisis placerat purus quis laoreet. Maecenas in orci bibendum, pulvinar neque nec, aliquet sapien. Donec commodo rutrum molestie. In non aliquam mi. Morbi sed dolor id arcu consequat ornare ut nec est. Nam convallis mauris eu ante ultricies, sit amet ultricies urna faucibus. Pellentesque faucibus lobortis lorem, in commodo justo dignissim ut.</p>',
            avaliacao: {
              media_estrelas: 3.2,
            },
            qtd_votos: 2500,
            qtd_cursos: 20,
            qtd_alunos: 23000,
          },
          avaliacao: {
            media_estrelas: 2.2,
            qtd_votos: 100,
            estrelas: {
              5: 30,
              4: 30,
              3: 30,
              2: 0,
              1: 10,
            },
          },
          preco_antigo: 250.0,
          preco_atual: 150.0,
          encargos: 30.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [3, 2, 4],
        },

        {
          id: '2',
          slug: 'independencia-americana',
          title: 'Independência Americana',
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso001.png',
          materia: 'História',
          autor: {
            nome: 'Camila Barros',
            avatar_url:
              'https://api-temp.vercel.app/video4school/imgs/user.jpg',
            bio: '<p>Duis tincidunt <strong>malesuada mauris</strong> et ornare. Sed facilisis placerat purus quis laoreet. Maecenas in orci bibendum, pulvinar neque nec, aliquet sapien. Donec commodo rutrum molestie. In non aliquam mi. Morbi sed dolor id arcu consequat ornare ut nec est. Nam convallis mauris eu ante ultricies, sit amet ultricies urna faucibus. Pellentesque faucibus lobortis lorem, in commodo justo dignissim ut.</p>',
            avaliacao: {
              media_estrelas: 4.2,
            },
            qtd_votos: 2500,
            qtd_cursos: 20,
            qtd_alunos: 23000,
          },
          avaliacao: {
            media_estrelas: 3.2,
            qtd_votos: 100,
            estrelas: {
              5: 30,
              4: 30,
              3: 30,
              2: 0,
              1: 10,
            },
          },
          preco_antigo: 250.0,
          preco_atual: 150.0,
          encargos: 15.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [1, 2, 3, 4],
        },
      ],

      cursos_relacionados: [
        {
          id: '1',
          slug: 'o-descobrimento-do-brasil',
          title: 'O Descobrimento do Brasil',
          image: 'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png',
          materia: 'História',
          autor: {
            nome: 'Camila Barros',
            avatar_url:
              'https://api-temp.vercel.app/video4school/imgs/user.jpg',
            bio: '<p>Duis tincidunt <strong>malesuada mauris</strong> et ornare. Sed facilisis placerat purus quis laoreet. Maecenas in orci bibendum, pulvinar neque nec, aliquet sapien. Donec commodo rutrum molestie. In non aliquam mi. Morbi sed dolor id arcu consequat ornare ut nec est. Nam convallis mauris eu ante ultricies, sit amet ultricies urna faucibus. Pellentesque faucibus lobortis lorem, in commodo justo dignissim ut.</p>',
            avaliacao: {
              media_estrelas: 5,
            },
            qtd_votos: 2500,
            qtd_cursos: 20,
            qtd_alunos: 23000,
          },
          avaliacao: {
            media_estrelas: 4.5,
            qtd_votos: 100,
            estrelas: {
              5: 30,
              4: 30,
              3: 30,
              2: 0,
              1: 10,
            },
          },
          preco_antigo: 250.0,
          preco_atual: 150.0,
          encargos: 30.0,
          qtd_aulas: 20,
          carga_horaria: 50,
          series: [3, 2, 4],
        },

        {
          id: '2',
          slug: 'independencia-americana',
          title: 'Independência Americana',
          image:
            'https://api-temp.vercel.app/video4school/imgs/imgcurso001.png',
          materia: 'História',
          autor: {
            nome: 'Camila Barros',
            avatar_url:
              'https://api-temp.vercel.app/video4school/imgs/user.jpg',
            bio: '<p>Duis tincidunt <strong>malesuada mauris</strong> et ornare. Sed facilisis placerat purus quis laoreet. Maecenas in orci bibendum, pulvinar neque nec, aliquet sapien. Donec commodo rutrum molestie. In non aliquam mi. Morbi sed dolor id arcu consequat ornare ut nec est. Nam convallis mauris eu ante ultricies, sit amet ultricies urna faucibus. Pellentesque faucibus lobortis lorem, in commodo justo dignissim ut.</p>',
            avaliacao: {
              media_estrelas: 5,
            },
            qtd_votos: 2500,
            qtd_cursos: 20,
            qtd_alunos: 23000,
          },
          avaliacao: {
            media_estrelas: 4.4,
            qtd_votos: 100,
            estrelas: {
              5: 30,
              4: 30,
              3: 30,
              2: 0,
              1: 10,
            },
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
  };

  switch (slug) {
    case 'o-descobrimento-do-brasil':
      data.results.id = '1';
      data.results.title = 'O Descobrimento do Brasil';
      data.results.image =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png';
      data.results.video_previa_imagem =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso00.png';
      data.results.autor.nome = 'Camila Barros';
      data.results.autor.avatar_url =
        'https://api-temp.vercel.app/video4school/imgs/user.jpg';
      break;

    case 'independencia-americana':
      data.results.id = '2';
      data.results.title = 'Independência Americana';
      data.results.image =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso001.png';
      data.results.video_previa_imagem =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso001.png';
      data.results.autor.nome = 'Victor Ribeiro';
      data.results.autor.avatar_url =
        'https://api-temp.vercel.app/video4school/imgs/avatarRanking1.png';
      break;

    case 'primeira-guerra-mundial':
      data.results.id = '3';
      data.results.title = 'Primeira Guerra Mundial';
      data.results.image =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso003.png';
      data.results.video_previa_imagem =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso003.png';
      data.results.autor.nome = 'Márcio Santos';
      data.results.autor.avatar_url =
        'https://api-temp.vercel.app/video4school/imgs/avatarRanking2.png';
      break;

    case 'segunda-guerra-mundial':
      data.results.id = '4';
      data.results.title = 'Segunda Guerra Mundial';
      data.results.image =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso004.png';
      data.results.video_previa_imagem =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso004.png';
      data.results.autor.nome = 'Camila Barros';
      data.results.autor.avatar_url =
        'https://api-temp.vercel.app/video4school/imgs/user.jpg';
      break;

    case 'guerra-fria':
      data.results.id = '5';
      data.results.title = 'Guerra Fria';
      data.results.image =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso002.jpg';
      data.results.video_previa_imagem =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso002.jpg';
      data.results.autor.nome = 'Camila Barros';
      data.results.autor.avatar_url =
        'https://api-temp.vercel.app/video4school/imgs/user.jpg';
      break;

    case 'antiguidade-classica':
      data.results.id = '6';
      data.results.title = 'Antiguidade Clássica';
      data.results.image =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso005.jpg';
      data.results.video_previa_imagem =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso005.jpg';
      data.results.autor.nome = 'Camila Barros';
      data.results.autor.avatar_url =
        'https://api-temp.vercel.app/video4school/imgs/user.jpg';
      break;

    case 'feudalismo':
      data.results.id = '7';
      data.results.title = 'Feudalismo';
      data.results.image =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso006.webp';
      data.results.video_previa_imagem =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso006.webp';
      data.results.autor.nome = 'Camila Barros';
      data.results.autor.avatar_url =
        'https://api-temp.vercel.app/video4school/imgs/user.jpg';
      break;

    case 'absolutismo':
      data.results.id = '8';
      data.results.title = 'Absolutismo';
      data.results.image =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso007.jpg';
      data.results.video_previa_imagem =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso007.jpg';
      data.results.autor.nome = 'Camila Barros';
      data.results.autor.avatar_url =
        'https://api-temp.vercel.app/video4school/imgs/user.jpg';
      break;

    case 'colonizacao-mercantilista':
      data.results.id = '9';
      data.results.title = 'Colonização mercantilista';
      data.results.image =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso008.webp';
      data.results.video_previa_imagem =
        'https://api-temp.vercel.app/video4school/imgs/imgcurso008.webp';
      data.results.autor.nome = 'Camila Barros';
      data.results.autor.avatar_url =
        'https://api-temp.vercel.app/video4school/imgs/user.jpg';
      break;

    default:
      break;
  }

  switch (slug) {
    case 'o-descobrimento-do-brasil':
    case 'independencia-americana':
    case 'primeira-guerra-mundial':
    case 'segunda-guerra-mundial':
    case 'guerra-fria':
    case 'antiguidade-classica':
    case 'feudalismo':
    case 'absolutismo':
    case 'colonizacao-mercantilista':
      res.status(200).json(data);
      break;

    default:
      res.status(404).json({
        error: true,
        status: 404,
        message: 'Não encontrado.',
      });
      break;
  }
}
