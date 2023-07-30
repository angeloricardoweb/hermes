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
    agendamentos: [
      {
        id: 1,
        tipo: 'Consulta',
        data: '01 de Agosto de 2023',
        hora: '08h00',
        status: 'agendado',
        medico: {
          nome: 'Dr. João da Silva',
          especialidade: 'Clínico Geral',
        },
        paciente: {
          nome: 'Maria da Silva',
        },
      },
      {
        id: 2,
        tipo: 'Exame',
        data: '01 de Agosto de 2023',
        hora: '08h00',
        status: 'cancelado',
        medico: {
          nome: 'Dr. João da Silva',
          especialidade: 'Clínico Geral',
        },
        paciente: {
          nome: 'Maria da Silva',
        },
      },
      {
        id: 3,
        tipo: 'Consulta',
        data: '01 de Agosto de 2023',
        hora: '08h00',
        status: 'realizado',
        medico: {
          nome: 'Dr. João da Silva',
          especialidade: 'Clínico Geral',
        },
        paciente: {
          nome: 'Maria da Silva',
        },
      },
      {
        id: 4,
        tipo: 'Consulta',
        data: '01 de Agosto de 2023',
        hora: '08h00',
        status: 'realizado',
        medico: {
          nome: 'Dr. João da Silva',
          especialidade: 'Clínico Geral',
        },
        paciente: {
          nome: 'Maria da Silva',
        },
      },
      {
        id: 5,
        tipo: 'Consulta',
        data: '01 de Agosto de 2023',
        hora: '08h00',
        status: 'realizado',
        medico: {
          nome: 'Dr. João da Silva',
          especialidade: 'Clínico Geral',
        },
        paciente: {
          nome: 'Maria da Silva',
        },
      },
    ],
  };

  res.status(200).json(data);
}
