import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const body = req.body;
  const id = req.query.id;

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      especialidade: id,
      data: body.data,
      prestadores: [
        {
          id: uuidv4(),
          servico_id: uuidv4(),
          nome: 'Clínica Saudável',
          servico: 'Exame de Sangue',
          crm: '123456',
          avaliacao: 4.5,
          valor: 95.0,
          local: {
            logo: 'https://api-temp.vercel.app/temp/logo.png',
            nome: 'Hospital São José',
            endereco: 'Rua São José, 123',
          },
          horarios: [
            {
              id: uuidv4(),
              hora: '09:00',
            },
            {
              id: uuidv4(),
              hora: '10:00',
            },
          ],
        },
        {
          id: uuidv4(),
          servico_id: uuidv4(),
          nome: 'Clínica Vida e Saúde',
          servico: 'Consulta com Cardiologista',
          crm: '123456',
          avaliacao: 4.5,
          valor: 35.0,

          local: {
            logo: 'https://api-temp.vercel.app/temp/logo.png',
            nome: 'Hospital São José',
            endereco: 'Rua São José, 123',
          },
          horarios: [
            {
              id: uuidv4(),
              hora: '09:00',
            },
            {
              id: uuidv4(),
              hora: '10:00',
            },
          ],
        },
        {
          id: uuidv4(),
          servico_id: uuidv4(),
          nome: 'Dra. Maria da Silva',
          servico: 'Exame de Sangue',
          crm: '123456',
          avaliacao: 4.5,
          valor: 50.0,

          local: {
            logo: 'https://api-temp.vercel.app/temp/logo.png',
            nome: 'Hospital São José',
            endereco: 'Rua São José, 123',
          },
          horarios: [
            {
              id: uuidv4(),
              hora: '09:00',
            },
            {
              id: uuidv4(),
              hora: '10:00',
            },
          ],
        },
        {
          id: uuidv4(),
          servico_id: uuidv4(),
          nome: 'Dr. João da Silva',
          servico: 'Exame de Sangue',
          crm: '123456',
          avaliacao: 4.5,
          valor: 100.0,

          local: {
            logo: 'https://api-temp.vercel.app/temp/logo.png',
            nome: 'Hospital São José',
            endereco: 'Rua São José, 123',
          },
          horarios: [
            {
              id: uuidv4(),
              hora: '10:00',
            },
            {
              id: uuidv4(),
              hora: '11:00',
            },
            {
              id: uuidv4(),
              hora: '13:00',
            },
            {
              id: uuidv4(),
              hora: '17:00',
            },
          ],
        },
        {
          id: uuidv4(),
          servico_id: uuidv4(),
          nome: 'Dr. Erickson Monteiro',
          servico: 'Exame de Sangue',
          crm: '123456',
          avaliacao: 4.5,
          valor: 45.0,

          local: {
            logo: 'https://api-temp.vercel.app/temp/logo.png',
            nome: 'Hospital São José',
            endereco: 'Rua São José, 123',
          },
          horarios: [
            {
              id: uuidv4(),
              hora: '10:00',
            },
            {
              id: uuidv4(),
              hora: '11:00',
            },
            {
              id: uuidv4(),
              hora: '13:00',
            },
            {
              id: uuidv4(),
              hora: '17:00',
            },
          ],
        },
      ],
    },
  };

  res.status(200).json(data);
}
