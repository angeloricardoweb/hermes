import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const data = {
    error: false,
    message: 'Cartão de pagamento alterado com sucesso!',
    payload: req.body,
  
  };

  res.status(200).json(data);
}
