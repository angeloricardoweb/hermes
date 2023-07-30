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
        nome: 'Ricardo Pedreiro',
        ultima_mensagem: 'Olá, tudo bem?',
        online: true,
        visto: false,
        foto: 'https://api-temp.vercel.app/avatar/2.png',
      },
      {
        id: uuidv4(),
        nome: 'Antonio Encanador',
        ultima_mensagem: 'Quando posso ir aí?',
        online: false,
        visto: true,
        foto: 'https://api-temp.vercel.app/avatar/3.png',
      },
      {
        id: uuidv4(),
        nome: 'Maria Eletricista',
        ultima_mensagem: 'Obrigado pela confiança!',
        online: true,
        visto: false,
        foto: 'https://api-temp.vercel.app/avatar/1.png',
      },
    ],
  };

  res.status(200).json(data);
}
