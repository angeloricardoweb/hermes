import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = {
    perguntas: [
      {
        pergunta: 'Qual é o maior animal terrestre do mundo?',
        respostas: [
          {
            id: '1',
            resposta: 'Elefante africano',
          },
          {
            id: '2',
            resposta: 'Rinoceronte branco',
          },
          {
            id: '3',
            resposta: 'Girafa',
          },
          {
            id: '4',
            resposta: 'Hipopótamo',
          },
          {
            id: '5',
            resposta: 'Urso polar',
          },
        ],
      },
      {
        pergunta:
          'Qual é o nome da unidade básica de tempo do Sistema Internacional de Unidades?',
        respostas: [
          {
            id: '1',
            resposta: 'Segundo',
          },
          {
            id: '2',
            resposta: 'Minuto',
          },
          {
            id: '3',
            resposta: 'Hora',
          },
          {
            id: '4',
            resposta: 'Dia',
          },
          {
            id: '5',
            resposta: 'Ano',
          },
        ],
      },
      {
        pergunta: 'Qual é a capital da Austrália?',
        respostas: [
          {
            id: '1',
            resposta: 'Camberra',
          },
          {
            id: '2',
            resposta: 'Sydney',
          },
          {
            id: '3',
            resposta: 'Melbourne',
          },
          {
            id: '4',
            resposta: 'Brisbane',
          },
          {
            id: '5',
            resposta: 'Adelaide',
          },
        ],
      },
      {
        pergunta: 'Qual é o maior órgão interno do corpo humano?',
        respostas: [
          {
            id: '1',
            resposta: 'Pele',
          },
          {
            id: '2',
            resposta: 'Fígado',
          },
          {
            id: '3',
            resposta: 'Pâncreas',
          },
          {
            id: '4',
            resposta: 'Intestino',
          },
          {
            id: '5',
            resposta: 'Estômago',
          },
        ],
      },
      {
        pergunta: "Qual é o autor de '1984' e 'A Revolução dos Bichos'?",
        respostas: [
          {
            id: '1',
            resposta: 'George Orwell',
          },
          {
            id: '2',
            resposta: 'Aldous Huxley',
          },
          {
            id: '3',
            resposta: 'Ernest Hemingway',
          },
          {
            id: '4',
            resposta: 'F. Scott Fitzgerald',
          },
          {
            id: '5',
            resposta: 'J. D. Salinger',
          },
        ],
      },
    ],
  };

  res.status(200).json(data);
}
