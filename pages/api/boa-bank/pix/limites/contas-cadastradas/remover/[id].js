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
      titulo: 'Sucesso!',
      descricao: `Conta removida com sucesso!`,
    },
  };

  res.status(200).json(data);
}
