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
    results: [
      {
        id: 1,
        nome: 'Atila trip',
        logo: 'https://img.freepik.com/vetores-gratis/identidade-de-marca-corporativa-um-design-de-vetor-de-logotipo-modelo_460848-13935.jpg?w=740&t=st=1683144515~exp=1683145115~hmac=e81283585e3f149d6c8727046bd07f589e229be0a94574b05447a5fbd76dba28',
      },
      {
        id: 2,
        nome: 'Travolutionary',
        logo: 'https://img.freepik.com/vetores-gratis/vetor-de-design-de-gradiente-colorido-de-passaro_343694-2506.jpg?w=740&t=st=1683199802~exp=1683200402~hmac=a1f1c2a7a1de506748145f4a01bbdcb8a32c21e91684c9b93ddc8611ce791ec7',
      },
      {
        id: 3,
        nome: 'Alshamel',
        logo: 'https://img.freepik.com/vetores-premium/icone-de-logotipo-de-diamante-preto-e-azul_95164-3493.jpg?w=740',
      },
      {
        id: 4,
        nome: 'Lorem Ipsum',
        logo: 'https://img.freepik.com/vetores-gratis/logo-abstrato-moderno-do-hexagono_487879-577.jpg?w=740&t=st=1683202073~exp=1683202673~hmac=14d4000d8c2d32653af9d111e6251b6347dd976eb787893ff76d5b6fdc401061',
      },
    ],
  };

  res.status(200).json(data);
}
