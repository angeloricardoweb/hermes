import NextCors from 'nextjs-cors';
import { v4 as uuidv4 } from 'uuid';
export default async function handler(req, res) {
  await NextCors(req, res, {
    origin: '*',
    optionsSuccessStatus: 200,
  });
  try {
    if (req.method === 'POST') {
      const data = {
        error: false,
        message: 'Cadastro realizado com sucesso',
        payload: req.body,
        results: {
          id: 2,
          nome: 'John Doe',
          email: 'joao@email.com',
          token: uuidv4(),
        },
      };

      res.status(200).json(data);
    } else {
      throw 'Método não permitido';
    }
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error,
    });
  }
}
