import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    error: false,
    message: 'Sem erros',
    results: [
      {
        id: uuidv4(),
        titulo: 'Restaurantes',
        icone: 'https://api-temp.vercel.app/assembleia-paraense/horarios/icons/restaurantes.png',
        horarios: [
          {
            id: uuidv4(),
            titulo: 'Restaurante Central',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Terça e Quarta:',
                horarios_descricao: '08h às 22h (com salgados e lanches, sem almoço).',
              },
              {
                id: uuidv4(),
                dias_semana: 'Quinta:',
                horarios_descricao: '08h às 02h (das 08h às 18h – somente com salgados e lanches, sem almoço. A partir das 18h, cardápio do Central). Quinta do Sushi – a partir das 19h.',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sexta:',
                horarios_descricao: '08h às 02h (das 08h às 18h – somente com salgados e lanches, sem almoço. A partir das 18h cardápio do Central). Happy Hour – 18h às 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '08h às 20h (Café da Manhã – 08h às 10h)',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '08h às 18h (Café da Manhã – 08h às 10h)',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Restaurante Toc Toc',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Terça e Quarta:',
                horarios_descricao: '18h à 01h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Quinta e Sexta:',
                horarios_descricao: '18h às 02h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '11h às 23h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '09h às 18h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Restô do Deck',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Quinta:',
                horarios_descricao: '18h às 01h - Quinta do Sushi – a partir das 19h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sexta:',
                horarios_descricao: '18h às 01h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '11h às 23h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '08h às 18h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Restô do Tênis',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda:',
                horarios_descricao: '07h às 22h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Terça e Quarta:',
                horarios_descricao: '07h à 00h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Quinta e Sexta:',
                horarios_descricao: '07h à 00h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '07h à 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '07h às 16h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Cozinha do Parquinho',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Sexta:',
                horarios_descricao: '18h à 00h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '08h à 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '08h às 18h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'L’Arena Cantina',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Terça a Sexta:',
                horarios_descricao: '09h às 18h – venda exclusiva de água, refrigerantes e cerveja - 18h à 01h – com atendimento de garçom',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '07h às 20h (com almoço a partir das 11h)',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '07h às 16h (com almoço a partir das 11h)',
              },
            ],
          },
        ],
      },

      {
        id: uuidv4(),
        titulo: 'Piscinas e Saunas',
        icone: 'https://api-temp.vercel.app/assembleia-paraense/horarios/icons/piscinas.png',
        horarios: [
          {
            id: uuidv4(),
            titulo: 'Piscinas - Adulta e Infantil',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda a Sábado:',
                horarios_descricao: '07h às 22h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '07h às 18h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Sauna - Restô',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda-feira:',
                horarios_descricao: '15h30 às 23h (07h às 15h30 – fechadas para manutenção)',
              },
              {
                id: uuidv4(),
                dias_semana: 'Terça a Sexta-feira:',
                horarios_descricao: '07h às 23h Sábado: 07h às 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '07h às 18h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Sauna - Tênis',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Interditadas para reforma.',
                horarios_descricao: '-',
              },
            ],
          },
        ],
      },

      {
        id: uuidv4(),
        titulo: 'Esportes e Hobbys',
        icone: 'https://api-temp.vercel.app/assembleia-paraense/horarios/icons/esportes.png',
        horarios: [
          {
            id: uuidv4(),
            titulo: 'Skate Park',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Sem Instrutor - Segunda-feira:',
                horarios_descricao: 'Fechado',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sem Instrutor - Terça a Sexta:',
                horarios_descricao: '09h às 21h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sem Instrutor - Sábado:',
                horarios_descricao: '09h às 19h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sem Instrutor - Domingo e feriado:',
                horarios_descricao: '09h às 18h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Com Instrutor - Segunda-feira:',
                horarios_descricao: 'Fechado',
              },
              {
                id: uuidv4(),
                dias_semana: 'Com Instrutor - Terça a Sexta:',
                horarios_descricao: '19h às 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Com Instrutor - Sábado, Domingo e feriado:',
                horarios_descricao: '09h às 14h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Obs: Para controle da entrada, o agente de segurança estará presente em todos os horários.',
                horarios_descricao: '',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Voleibol – Futevôlei',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda:',
                horarios_descricao: '08h às 21h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Terça a Sexta:',
                horarios_descricao: '08h às 23h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '08h às 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '08h às 18h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Tênis – Squash',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda a Sexta:',
                horarios_descricao: '06h às 22h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '07h às 19h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '07h às 13h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Quadras de Peteca',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda:',
                horarios_descricao: '08h às 21h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Terça a sexta:',
                horarios_descricao: '08h às 23h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '08h às 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '08h às 18h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Salão de Jogos',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Terça a Sexta:',
                horarios_descricao: '16h às 22h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado, Domingo e feriado:',
                horarios_descricao: '12h às 18h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Beach Tennis',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda a Sexta:',
                horarios_descricao: '06h às 21h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Terça, Quinta e Sexta:',
                horarios_descricao: '17h às 23h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado, Domingo e feriado:',
                horarios_descricao: '8h às 12h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'ACADEMIA AP',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda a Sexta:',
                horarios_descricao: '06h às 23h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '08h às 18h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo:',
                horarios_descricao: '08h às 14h - (Obs: Com intervalos de 30 minutos para desinfecção.)',
              },
              {
                id: uuidv4(),
                dias_semana: 'Horários de desinfecção',
                horarios_descricao: '',
              },
              {
                id: uuidv4(),
                dias_semana: 'Segunda-feira a Sexta-feira',
                horarios_descricao: '10h às 10h30 /  14h às 14h30 / 17h30 às 18h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado',
                horarios_descricao: '12h30 às 13h / 16h30 às 17h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado',
                horarios_descricao: '11h às 11h30',
              },
            ],
          },
        ],
      },

      {
        id: uuidv4(),
        titulo: 'Saúde e Beleza',
        icone: 'https://api-temp.vercel.app/assembleia-paraense/horarios/icons/saude-e-beleza.png',
        horarios: [
          {
            id: uuidv4(),
            titulo: 'Salão Espaço da Beleza',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Terça a Sábado:',
                horarios_descricao: '09h às 19h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo:',
                horarios_descricao: '10h às 16h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Encantos',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Terça a Sexta:',
                horarios_descricao: 'Das 09h às 20h (Último agendamento as 19h)',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado, Domingo e Feriado:',
                horarios_descricao: 'Das 09h às 16h (Último agendamento as 15h)',
              },
              {
                id: uuidv4(),
                dias_semana: 'Contato: (91) 99296-0582:',
                horarios_descricao: 'Obs.: Atendimento por agendamento.',
              },
            ],
          },
        ],
      },

      {
        id: uuidv4(),
        titulo: 'Fun Zone',
        icone: 'https://api-temp.vercel.app/assembleia-paraense/horarios/icons/full-zone.png',
        horarios: [
          {
            id: uuidv4(),
            titulo: 'Estação Alegria',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda-feira:',
                horarios_descricao: 'Fechada',
              },
              {
                id: uuidv4(),
                dias_semana: 'Terça e Quarta:',
                horarios_descricao: '14h às 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Quinta e Sexta:',
                horarios_descricao: '15h às 22h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Terça e Sexta:',
                horarios_descricao: '19h às 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '9h às 18h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '9h às 17h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Skate Park',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Sem Instrutor - Segunda-feira:',
                horarios_descricao: 'Fechada',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sem Instrutor - Terça a sexta:',
                horarios_descricao: '14h às 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sem Instrutor - Sábado:',
                horarios_descricao: '15h às 22h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sem Instrutor - Domingo e feriado:',
                horarios_descricao: '19h às 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Com Instrutor - Segunda-feira:',
                horarios_descricao: '9h às 18h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Com Instrutor - Terça a sexta:',
                horarios_descricao: '9h às 17h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Com Instrutor - Sábado, domingo e feriado:',
                horarios_descricao: '9h às 17h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Toboáguas',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda a Quarta:',
                horarios_descricao: 'Fechado',
              },
              {
                id: uuidv4(),
                dias_semana: 'Quinta e Sexta:',
                horarios_descricao: '10h às 18h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado, domingo e feriado:',
                horarios_descricao: '9h às 18h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Parquinho',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Terça a Sexta:',
                horarios_descricao: '9h às 22h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado, Domingo e Feriado:',
                horarios_descricao: '9h às 18h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Campo Sintético',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda:',
                horarios_descricao: '08h às 21h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Terça a Sexta:',
                horarios_descricao: '08h às 23h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '08h às 20h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingos e Feriado:',
                horarios_descricao: '08h às 18h',
              },
            ],
          },
        ],
      },

      {
        id: uuidv4(),
        titulo: 'Administrativo',
        icone: 'https://api-temp.vercel.app/assembleia-paraense/horarios/icons/administrativo.png',
        horarios: [
          {
            id: uuidv4(),
            titulo: 'Secretaria AP',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda a Sexta:',
                horarios_descricao: '09h às 19h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado, domingo e feriado:',
                horarios_descricao: '10h às 14h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Financeiro',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda a Sexta:',
                horarios_descricao: '09h às 19h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado, domingo e feriado:',
                horarios_descricao: '10h às 14h',
              },
            ],
          },
        ],
      },

      {
        id: uuidv4(),
        titulo: 'Ambulatório',
        icone: 'https://api-temp.vercel.app/assembleia-paraense/horarios/icons/ambulatorio.png',
        horarios: [
          {
            id: uuidv4(),
            titulo: 'Ambulatório',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda a sexta:',
                horarios_descricao: '07h às 01h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '07h às 21h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '07h às 18h',
              },
            ],
          },
        ],
      },

      {
        id: uuidv4(),
        titulo: 'Serviços',
        icone: 'https://api-temp.vercel.app/assembleia-paraense/horarios/icons/full-zone.png',
        horarios: [
          {
            id: uuidv4(),
            titulo: 'Salão Espaço da Beleza',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Terça a Sábado:',
                horarios_descricao: '09h às 19h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo:',
                horarios_descricao: '10h às 16h',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Encantos',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Terça a Sexta:',
                horarios_descricao: 'Das 09h às 20h (Último agendamento as 19h)',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado, Domingo e Feriado:',
                horarios_descricao: 'Das 09h às 16h (Último agendamento as 15h)',
              },
              {
                id: uuidv4(),
                dias_semana: 'Contato: (91) 99296-0582:',
                horarios_descricao: 'Obs.: Atendimento por agendamento.',
              },
            ],
          },
          {
            id: uuidv4(),
            titulo: 'Loja do Tênis – Tênis AVY Store',
            dias: [
              {
                id: uuidv4(),
                dias_semana: 'Segunda a Sexta:',
                horarios_descricao: '09h às 21h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Sábado:',
                horarios_descricao: '08h às 16h',
              },
              {
                id: uuidv4(),
                dias_semana: 'Domingo e feriado:',
                horarios_descricao: '08h às 14h',
              },
            ],
          },
        ],
      },

    ],
  };

  res.status(200).json(data);
}
