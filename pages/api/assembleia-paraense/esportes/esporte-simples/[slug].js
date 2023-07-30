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



  if (slug == 'corrida') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'corrida',
          title: 'Corrida',
          button_link: 'https://www.assembleiaparaense.com.br/eventos/agenda/ranking-de-corridas/',
          button_nome: 'Ranking de Corridas',
          button_ativa: true,
          sobre: null,
          horarios: null,

        },
      ],
    };
    return res.status(200).json(data)
  }
  if (slug == 'voleibol') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'voleibol',
          title: 'Voleibol',
          button_link: '',
          button_nome: '',
          button_ativa: false,
          sobre: null,
          horarios: [
            {
              id: 1,
              dia_semana: 'Segunda a Sexta-Feira',
              horario_semana: '08:00 - 22:00h',
            },
            {
              id: 2,
              dia_semana: 'Sábado',
              horario_semana: '08:00 - 20:00h',
            },
            {
              id: 3,
              dia_semana: 'Domingo e Feriado',
              horario_semana: '08:00 - 17:00h',
            },
            {
              id: 4,
              dia_semana: 'Segunda a Sexta-Feira (Vôlei de Areia)',
              horario_semana: '08:00 - 22:00h',
            },
            {
              id: 5,
              dia_semana: 'Sábado (Vôlei de Areia)',
              horario_semana: '08:00 - 20:00h',
            },
            {
              id: 6,
              dia_semana: 'Domingo e Feriado (Vôlei de Areia)',
              horario_semana: '08:00 - 17:00h',
            },
          ],

        },
      ],
    };
    return res.status(200).json(data)
  }
  if (slug == 'basquetebol') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'basquetebol',
          title: 'Basquetebol',
          button_link: 'https://www.assembleiaparaense.com.br/esportes/campeonato-de-basquetebol/',
          button_nome: 'Campeonato de Basquete',
          button_ativa: true,
          sobre: null,
          horarios: [
            {
              id: 1,
              dia_semana: 'Segunda a Sexta',
              horario_semana: '08:00 às 22:00h',
            },
            {
              id: 2,
              dia_semana: 'Sábado',
              horario_semana: '08:00 às 20:00h',
            },
            {
              id: 3,
              dia_semana: 'Domingo e Feriado',
              horario_semana: '08:00 às 17:00h',
            },
          ],

        },
      ],
    };
    return res.status(200).json(data)
  }
  if (slug == 'natacao') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'natacao',
          title: 'Natação',
          button_link: 'tel:9131819986',
          button_nome: '(91)3181-9986',
          button_ativa: true,
          sobre: null,
          horarios: null,
        },
      ],
    };
    return res.status(200).json(data)
  }
  if (slug == 'tenis-de-mesa') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'tenis-de-mesa',
          title: 'Tênis de Mesa',
          button_link: '',
          button_nome: '',
          button_ativa: false,
          sobre: null,
          horarios: [
            {
              id: 1,
              dia_semana: 'Terça a Sexta',
              horario_semana: '14:00 às 16:00h',
            },
            {
              id: 2,
              dia_semana: 'Sábado e Domingos',
              horario_semana: '08:00 às 17:00h',
            },
          ],
        },
      ],
    };
    return res.status(200).json(data)
  }
  if (slug == 'squash') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'squash',
          title: 'Squash',
          button_link: 'https://www.assembleiaparaense.com.br/esportes/squash/ranking-de-squash-2022/',
          button_nome: 'Ranking de Squash',
          button_ativa: true,
          sobre: null,
          horarios: [
            {
              id: 1,
              dia_semana: 'Segunda a Sexta',
              horario_semana: '08:00 às 22:00h',
            },
            {
              id: 2,
              dia_semana: 'Sábado',
              horario_semana: '08:00 às 20:00h',
            },
            {
              id: 3,
              dia_semana: 'Domingo',
              horario_semana: '08:00 às 18:00h',
            },
          ],
        },
      ],
    };
    return res.status(200).json(data)
  }
  if (slug == 'carate') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'carate',
          title: 'Caratê',
          button_link: '',
          button_nome: '',
          button_ativa: false,
          sobre: null,
          horarios: [
            {
              id: 1,
              dia_semana: 'Quarta',
              horario_semana: '19:00 às 20:00h',
            },
            {
              id: 2,
              dia_semana: 'Sexta',
              horario_semana: '20:00 às 21:00h',
            },
          ],
        },
      ],
    };
    return res.status(200).json(data)
  }
  if (slug == 'judo') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'judo',
          title: 'Judô',
          button_link: '',
          button_nome: '',
          button_ativa: false,
          sobre: null,
          horarios: [
            {
              id: 1,
              dia_semana: 'Terça e Quinta (de 3 a 4 anos)',
              horario_semana: '17:30 às 18:30h',
            },
            {
              id: 2,
              dia_semana: 'Terça e Quinta (de 5 a 9 anos)',
              horario_semana: '18:30 às 19:30h',
            },
            {
              id: 3,
              dia_semana: 'Terça e Quinta (de 10 a 12 anos)',
              horario_semana: '19:30 às 20:30h',
            },
            {
              id: 4,
              dia_semana: 'Terça e Quinta (a partir de 13 anos)',
              horario_semana: '20:30 às 21:30h',
            },
          ],
        },
      ],
    };
    return res.status(200).json(data)
  }
  if (slug == 'sinuca') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'sinuca',
          title: 'Sinuca',
          button_link: '',
          button_nome: '',
          button_ativa: false,
          sobre: null,
          horarios: [
            {
              id: 1,
              dia_semana: 'Quinta-feira',
              horario_semana: '16:00 às 22:00h',
            },
            {
              id: 2,
              dia_semana: 'Sabádo',
              horario_semana: '10:00 às 20:00h',
            },
            {
              id: 3,
              dia_semana: 'Domingo e Feriado',
              horario_semana: '10:00 às 18:00h',
            },
           
          ],
        },
      ],
    };
    return res.status(200).json(data)
  }
  if (slug == 'peteca') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'peteca',
          title: 'Peteca',
          button_link: '',
          button_nome: '',
          button_ativa: false,
          sobre: null,
          horarios: [
            {
              id: 1,
              dia_semana: 'Segunda a Sexta-feira',
              horario_semana: '08:00 às 22:00h',
            },
            {
              id: 2,
              dia_semana: 'Sabádo',
              horario_semana: '08:00 às 20:00h',
            },
            {
              id: 3,
              dia_semana: 'Domingo e Feriado',
              horario_semana: '08:00 às 17:00h',
            },
           
          ],
        },
      ],
    };
    return res.status(200).json(data)
  }
  if (slug == 'futevolei') {
    const data = {
      error: false,
      message: 'Sem erros',
      lista: [
        {
          id: 1,
          slug: 'futevolei',
          title: 'Futevôlei',
          button_link: 'https://www.assembleiaparaense.com.br/',
          button_nome: 'Ranking de Futevôlei',
          button_ativa: true,
          sobre: null,
          horarios: [
            {
              id: 1,
              dia_semana: 'Segunda a Quarta-feira',
              horario_semana: '08:00 às 22:00h',
            },
            {
              id: 2,
              dia_semana: 'Quinta a Sexta-feira',
              horario_semana: '08:00 às 23:00h',
            },
            {
              id: 3,
              dia_semana: 'Sabádo',
              horario_semana: '08:00 às 20:00h',
            },
            {
              id: 4,
              dia_semana: 'Domingo e Feriado',
              horario_semana: '08:00 às 17:00h',
            },
           
          ],
        },
      ],
    };
    return res.status(200).json(data)
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
