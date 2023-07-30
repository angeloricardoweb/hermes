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
    results: {
      midia_social: {
        facebook: 'https://www.facebook.com/oficialamatcarajas',
        instagram: 'https://www.instagram.com/amatcarajas/',
        whatsapp: '(91) 980155448',
      },

      enderecos: [
        {
          id: 1,
          cidade: 'belém',
          endereco:
            ' Av. Conselheiro Furtado, 1440. Bairro Batista Campos CEP: 66.035-350 – Belém / PA',
          telefone: '(91) 4006-2350 / (91) 4006-2351',
          email: 'amatcarajas@amatcarajas.org.br',
        },
        {
          id: 2,
          cidade: 'Marabá',
          endereco:
            'Av. VP8 – Folha 26 – Quadra 14 – Lote 01 - Edifício Amazon Center Sala 605/606 – 6º andar. CEP: 68.504-120 – Nova Marabá',
          telefone: '(94) 3322-1957',
          email: 'maraba@amatcarajas.org.br',
        },
        {
          id: 3,
          cidade: 'Brasília',
          endereco:
            'Setor Rádio TV Sul -Edifício: Centro Empresarial Brasília Bloco B, Sala 425 CEP: 70.340-907 / Brasília - DF',
          telefone: '(61) 3225-0461/ (61) 3226-1121',
          email: 'brasilia@amatcarajas.org.br',
        },
      ],
    },
  };
  res.status(200).json(data);
}
