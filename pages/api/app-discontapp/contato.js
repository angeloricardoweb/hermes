import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    origin: '*',
    optionsSuccessStatus: 200, 
  });

  const data = {
    error: false,
    message: 'Sem erros',
    results: [
      {
        id: 1,
        status: 1,
        nome_empresa: 'Discontapp Soluções LTDA',
        cnpj: '50.912.097/0001-87',
        telefone: '992662319',
        email: 'contato@discontapp.com.br',
        email_dpo: 'dpo@discontapp.com.br',
        telefone_whatsapp: 'https://api.whatsapp.com/send/?phone=5591998260317',
      },
    ]
  };

  return res.status(200).json(data);
}