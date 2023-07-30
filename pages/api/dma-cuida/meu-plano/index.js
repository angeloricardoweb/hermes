import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await NextCors(req, res, {
    origin: '*',
    optionsSuccessStatus: 200, 
  });

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      status: 'Ativo',
      plano: 'Individual',
      valor: 'R$ 25,00',
      card_cadastrado: '**** **** **** 1234',
      vencimento: '10/2024',
      detalhes: [
        'Desconto Recorrente no Cartão',
        'Cobertura para 1 Adulto ou 1 menor de 21 anos',
        'Sem Limite de Idade para Adultos',
        'Intransferível ',
      ],
    },
  };

  res.status(200).json(data);
}
