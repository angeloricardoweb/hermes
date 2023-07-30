import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug) {
    res.status(404).json({ error: true, message: 'Not found' });
    return;
  }

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
      slug: slug,
      data: '31/08/2022',
      autor: 'Victor Ribeiro',
      imagem: {
        url: 'https://dol.com.br/img/Artigo-Destaque/670000/onibus-ver-o-peso_00673570_0_.jpg?xid=1616509',
        alt: null,
      },
      titulo: 'Título da notícia de exemplo',
      conteudo:
        '<p>Programação também terá discussões sobre a mobilidade urbana e o meio ambiente Ascom SMTT20/09/2022 às 11:22</p><br/><br/><p>Dia 22 de setembro é considerado Dia Mundial sem Carro e como forma de conscientização sobre o uso excessivo de automóveis nas vias e a importância do cuidado com o meio ambiente, a Superintendência Municipal de Transportes e Trânsito (SMTT) de Maceió preparou uma programação especial que visa estimular formas alternativas de mobilidade para se locomover na capital. Na próxima quinta-feira (22), durante todo o dia, os cidadãos poderão se deslocar gratuitamente nos transportes coletivos do Sistema Integrado de Mobilidade de Maceió (SIMM). Para embarcar, é necessário que os passageiros utilizem o cartão VAMU na modalidade Cidadão.</p>',
    },
  };

  res.status(200).json(data);
}
