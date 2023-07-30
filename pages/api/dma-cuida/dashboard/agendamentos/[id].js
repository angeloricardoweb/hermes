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
    results: {
      id: uuidv4(),
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
      local: {
        nome: 'Hospital São José',
        endereco: 'Rua São José, 123',
      },
      status_pagamento: 'Aguardando pagamento',
      contatos: [
        {
          label: 'Telefone',
          value: '(11) 99999-9999',
        },
        {
          label: 'E-mail',
          value: 'medico@email.com',
        },
        {
          label: 'Site',
          value: 'www.medico.com.br',
        },
        {
          label: 'whatsapp',
          value: '(11) 99999-9999',
        },
      ],
    },
  };

  res.status(200).json(data);
}
