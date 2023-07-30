import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const unidades = {
    error: false,
    message: 'Sem erros',
    unidades: [
      {
        id: 1,
        nome: 'Atendimento ao cliente',
        email: '',
        contatos: [
          {
            id: 1,
            contato: '(91) 3012-1234',
          },
          {
            id: 2,
            contato: '(91) 9012-1234 (whatsapp)',
          },
        ],
      },

      {
        id: 2,
        nome: 'Unidade Jurunas',
        aberto: true,
        descricao:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',

        capa: '/unidade/jurunas.jpg',

        endereco:
          'R. Eng. Fernando Guilhon, 962 66033-315 - Jurunas - Belém - Pará',
        contatos: [
          // {
          //     id: 1,
          //     contato: "(91) 3012-1234"
          // },
          {
            id: 2,
            contato: '(91) 98393-8684 (whatsapp)', //registro de whatsapp unico encontrado no instagram
          },
        ],
        horario_funcionamento_resumo: [
          {
            id: 1,
            descricao: 'Segunda a Sábado: 7:00 às 21h',
          },
          {
            id: 2,
            descricao: 'Domingo: 7:00 às 14h',
          },
          {
            id: 3,
            descricao: 'Feriados:  7:00 às 14h',
          },
        ],
        horario_funcionamento: [
          {
            id: 1,
            descricao: 'Sábado: 7:00 às 21h',
          },
          {
            id: 2,
            descricao: 'Domingo: 7:00 às 14h',
          },
          {
            id: 3,
            descricao: 'segunda-feira:  7:00 às 21h',
          },
          {
            id: 4,
            descricao: 'terça-feira:  7:00 às 21h',
          },
          {
            id: 5,
            descricao: 'quarta-feira:  7:00 às 21h',
          },
          {
            id: 6,
            descricao: 'quinta-feira:  7:00 às 21h',
          },
          {
            id: 7,
            descricao: 'sexta-feira:  7:00 às 21h',
          },
        ],
      },
      {
        id: 3,
        nome: 'Unidade Umarizal',
        aberto: false,
        descricao:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        capa: '/unidade/umarizal.png',
        endereco:
          'Av. Pedro Álvares Cabral, 70 Marambaia, Belém - PA, 66050-400',
        contatos: [
          {
            id: 1,
            contato: '(91) 3120-3256',
          },
          {
            id: 2,
            contato: '(91) 98393-8684 (whatsapp)', //registro de whatsapp unico encontrado no instagram
          },
        ],
        horario_funcionamento_resumo: [
          {
            id: 1,
            descricao: 'Segunda a Sábado: 7:00 às 21h',
          },
          {
            id: 2,
            descricao: 'Domingo: 7:00 às 14h',
          },
          {
            id: 3,
            descricao: 'Feriados:  7:00 às 14h',
          },
        ],
        horario_funcionamento: [
          {
            id: 1,
            descricao: 'Sábado: 7:00 às 21h',
          },
          {
            id: 2,
            descricao: 'Domingo: 7:00 às 14h',
          },
          {
            id: 3,
            descricao: 'segunda-feira:  7:00 às 21h',
          },
          {
            id: 4,
            descricao: 'terça-feira:  7:00 às 21h',
          },
          {
            id: 5,
            descricao: 'quarta-feira:  7:00 às 21h',
          },
          {
            id: 6,
            descricao: 'quinta-feira:  7:00 às 21h',
          },
          {
            id: 7,
            descricao: 'sexta-feira:  7:00 às 21h',
          },
        ],
      },
      {
        id: 4,
        nome: 'Unidade Pedreira',
        aberto: true,
        descricao:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        capa: '/unidade/pedreira.jpg',
        endereco: 'Av. Pedro Miranda, 1021 Pedreira, Belém - PA, 66085-022',
        contatos: [
          //{
          //    id: 1,
          //    contato: "(91) 3012-1234"
          //},
          {
            id: 2,
            contato: '(91) 98393-8684 (whatsapp)', //registro de whatsapp unico encontrado no instagram
          },
        ],
        horario_funcionamento_resumo: [
          {
            id: 1,
            descricao: 'Segunda a Sábado: 7:00 às 21h',
          },
          {
            id: 2,
            descricao: 'Domingo: 7:00 às 14h',
          },
          {
            id: 3,
            descricao: 'Feriados:  7:00 às 14h',
          },
        ],
        horario_funcionamento: [
          {
            id: 1,
            descricao: 'Sábado: 7:00 às 21h',
          },
          {
            id: 2,
            descricao: 'Domingo: 7:00 às 14h',
          },
          {
            id: 3,
            descricao: 'segunda-feira:  7:00 às 21h',
          },
          {
            id: 4,
            descricao: 'terça-feira:  7:00 às 21h',
          },
          {
            id: 5,
            descricao: 'quarta-feira:  7:00 às 21h',
          },
          {
            id: 6,
            descricao: 'quinta-feira:  7:00 às 21h',
          },
          {
            id: 7,
            descricao: 'sexta-feira:  7:00 às 21h',
          },
        ],
      },
      {
        id: 5,
        nome: 'Unidade Coqueiro',
        aberto: false,
        descricao:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        capa: '/unidade/coqueiro.jpg',
        endereco: 'Rod. Mário Covas, 147 Coqueiro, Ananindeua - PA, 67113-330',
        contatos: [
          {
            id: 1,
            contato: '(91) 3237-3432',
          },
          {
            id: 2,
            contato: '(91) 98393-8684 (whatsapp)', //registro de whatsapp unico encontrado no instagram
          },
        ],
        horario_funcionamento_resumo: [
          {
            id: 1,
            descricao: 'Segunda a Sábado: 7:30 às 21h',
          },
          {
            id: 2,
            descricao: 'Domingo: 8:00 às 14h',
          },
          {
            id: 3,
            descricao: 'Feriados:  7:30 às 14h',
          },
        ],
        horario_funcionamento: [
          {
            id: 1,
            descricao: 'Sábado: 7:30 às 21h',
          },
          {
            id: 2,
            descricao: 'Domingo: 8:00 às 14h',
          },
          {
            id: 3,
            descricao: 'segunda-feira:  7:30 às 21h',
          },
          {
            id: 4,
            descricao: 'terça-feira:  7:30 às 21h',
          },
          {
            id: 5,
            descricao: 'quarta-feira:  7:30 às 21h',
          },
          {
            id: 6,
            descricao: 'quinta-feira:  7:30 às 21h',
          },
          {
            id: 7,
            descricao: 'sexta-feira:  7:30 às 21h',
          },
        ],
      },
      {
        id: 6,
        aberto: true,
        descricao:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        capa: '/unidade/castanheira.jpg',
        nome: 'Unidade Castanheira',
        endereco:
          'Passagem Boa Esperança, 39 Castanheira, Belém - PA, 66645-260',
        contatos: [
          //{
          //    id: 1,
          //    contato: "(91) 3012-1234"
          //},
          {
            id: 2,
            contato: '(91) 98393-8684 (whatsapp)', //registro de whatsapp unico encontrado no instagram
          },
        ],
        horario_funcionamento_resumo: [
          {
            id: 1,
            descricao: 'Segunda a Sábado: 7:00 às 21h',
          },
          {
            id: 2,
            descricao: 'Domingo: 7:00 às 14h',
          },
          {
            id: 3,
            descricao: 'Feriados:  7:00 às 14h',
          },
        ],
        horario_funcionamento: [
          {
            id: 1,
            descricao: 'Sábado: 7:00 às 21h',
          },
          {
            id: 2,
            descricao: 'Domingo: 7:00 às 14h',
          },
          {
            id: 3,
            descricao: 'segunda-feira:  7:00 às 21h',
          },
          {
            id: 4,
            descricao: 'terça-feira:  7:00 às 21h',
          },
          {
            id: 5,
            descricao: 'quarta-feira:  7:00 às 21h',
          },
          {
            id: 6,
            descricao: 'quinta-feira:  7:00 às 21h',
          },
          {
            id: 7,
            descricao: 'sexta-feira:  7:00 às 21h',
          },
        ],
      },
    ],
  };

  res.status(200).json(unidades);
}
