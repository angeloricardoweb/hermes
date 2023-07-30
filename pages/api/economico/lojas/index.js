import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const { id } = req.query;
  console.log(id);

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (id == 1) {
    const data = {
      error: true,
      message: 'Sem erro',
      loja: [
        {
          id: 1,
          nome: 'Unidade Jurunas',
          aberto: true,

          descricao:
            'Opções de serviço: Compras na loja · Retirada na loja · Entrega',
          capa: '/unidade/jurunas.jpg',
          endereco:
            'R. Eng. Fernando Guilhon, 962 - Jurunas, Belém - PA, 66033-315',
          contatos: [
            {
              id: 2,
              contato: '(91) 98393-8684 (whatsapp)', //registro de whatsapp unico encontrado no instagram
            },
          ],

          ifood:
            'https://www.ifood.com.br/delivery/belem-pa/supermercado-economico---jurunas-jurunas/53481b44-a580-4e8b-ac81-b5ca13ec8f5f',

          horario_funcionamento_resumo: [
            {
              id: 1,
              descricao: 'Segunda a Sábado: 7:00 às 21h',
            },
            {
              id: 2,
              descricao: 'Domingo: 8:00 às 14h',
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
              descricao: 'Domingo: 8:00 às 14h',
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
    return res.status(200).json(data);
  }
  if (id == 2) {
    const data = {
      error: true,
      message: 'Sem erro',
      loja: [
        {
          id: 2,
          nome: 'Unidade Umarizal',
          aberto: true,
          descricao:
            'Opções de serviço: Compras na loja · Retirada na loja · Entrega',
          capa: '/unidade/umarizal.png',
          endereco:
            'Av. Pedro Álvares Cabral, 70 Marambaia, Belém - PA, 66050-400',

          ifood:
            'https://www.ifood.com.br/delivery/belem-pa/supermercado-economico---umarizal-umarizal/71797683-cd14-4bbb-8e86-7c16d8e81de2',
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
              descricao: 'Domingo: 7:00 às 13h',
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
              descricao: 'Domingo: 7:00 às 13h',
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
    return res.status(200).json(data);
  }
  if (id == 3) {
    const data = {
      error: true,
      message: 'Sem erro',
      loja: [
        {
          id: 3,
          nome: 'Unidade Pedreira',
          aberto: true,
          descricao: 'Opções de serviço: Compras na loja',
          capa: '/unidade/pedreira.jpg',
          endereco: 'Av. Pedro Miranda, 1101 - Pedreira, Belém - PA, 68447-000',
          ifood: '',
          contatos: [
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
              descricao: 'Domingo: 8:00 às 14h',
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
              descricao: 'Domingo: 8:00 às 14h',
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
    return res.status(200).json(data);
  }
  if (id == 4) {
    const data = {
      error: true,
      message: 'Sem erro',
      loja: [
        {
          id: 4,
          nome: 'Unidade Coqueiro',
          aberto: true,
          descricao: 'Opções de serviço: Compras na loja · Entrega',
          capa: '/unidade/coqueiro.jpg',
          endereco:
            'Rod. Mário Covas, 147 Coqueiro, Ananindeua - PA, 67113-330',

          ifood: '',
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
      ],
    };
    return res.status(200).json(data);
  }
  if (id == 5) {
    const data = {
      error: true,
      message: 'Sem erro',
      loja: [
        {
          id: 5,
          aberto: true,
          descricao: 'Opções de serviço: Compras na loja · Entrega',
          capa: '/unidade/castanheira.jpg',
          nome: 'Unidade Castanheira',
          endereco:
            'Passagem Boa Esperança, 39 Castanheira, Belém - PA, 66645-260',

          ifood: '',
          contatos: [
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
    return res.status(200).json(data);
  }

  const data = {
    error: true,
    message: 'Sem erro',
    loja: [
      {
        id: 1,
        nome: 'Unidade Jurunas',
        aberto: true,
        descricao:
          'Opções de serviço: Compras na loja · Retirada na loja · Entrega',
        capa: '/unidade/jurunas.jpg',
        endereco:
          'R. Eng. Fernando Guilhon, 962 - Jurunas, Belém - PA, 66033-315',

        ifood:
          'https://www.ifood.com.br/delivery/belem-pa/supermercado-economico---jurunas-jurunas/53481b44-a580-4e8b-ac81-b5ca13ec8f5f',
        contatos: [
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
            descricao: 'Domingo: 8:00 às 14h',
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
            descricao: 'Domingo: 8:00 às 14h',
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
        id: 2,
        nome: 'Unidade Umarizal',
        aberto: true,
        descricao:
          'Opções de serviço: Compras na loja · Retirada na loja · Entrega',
        capa: '/unidade/umarizal.png',
        endereco:
          'Av. Pedro Álvares Cabral, 70 Marambaia, Belém - PA, 66050-400',

        ifood:
          'https://www.ifood.com.br/delivery/belem-pa/supermercado-economico---jurunas-jurunas/53481b44-a580-4e8b-ac81-b5ca13ec8f5f',
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
            descricao: 'Domingo: 7:00 às 13h',
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
            descricao: 'Domingo: 7:00 às 13h',
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
        nome: 'Unidade Pedreira',
        aberto: true,
        descricao: 'Opções de serviço: Compras na loja',
        capa: '/unidade/pedreira.jpg',
        endereco: 'Av. Pedro Miranda, 1101 - Pedreira, Belém - PA, 68447-000',

        ifood: '',
        contatos: [
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
            descricao: 'Domingo: 8:00 às 14h',
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
            descricao: 'Domingo: 8:00 às 14h',
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
        nome: 'Unidade Coqueiro',
        aberto: true,
        descricao: 'Opções de serviço: Compras na loja · Entrega',
        capa: '/unidade/coqueiro.jpg',
        endereco: 'Rod. Mário Covas, 147 Coqueiro, Ananindeua - PA, 67113-330',

        ifood: '',
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
        id: 5,
        aberto: true,
        descricao: 'Opções de serviço: Compras na loja · Entrega',
        capa: '/unidade/castanheira.jpg',
        nome: 'Unidade Castanheira',
        endereco:
          'Passagem Boa Esperança, 39 Castanheira, Belém - PA, 66645-260',

        ifood: '',
        contatos: [
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
  return res.status(200).json(data);
}
