import NextCors from 'nextjs-cors';

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
      descricao: `Conta Adicionada com sucesso!`,
    },
  };

  res.status(200).json(data);
}
