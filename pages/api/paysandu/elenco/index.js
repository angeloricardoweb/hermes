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
      elenco: {
        ataque: Array.from({ length: 3 }).map((_, i) => {
          return {
            id: (i + 1).toString(),
            nome: 'Nome do jogador',
            posicao: 'Atacante',
            foto: 'http://psc.sitebeta.com.br/img/site/elements/players/placeholder.jpg',
          };
        }),
        defesa: Array.from({ length: 4 }).map((_, i) => {
          return {
            id: (i + 1).toString(),
            nome: 'Nome do jogador',
            posicao: 'Zaqueiro',
            foto: 'http://psc.sitebeta.com.br/img/site/elements/players/placeholder.jpg',
          };
        }),
        meio_campo: Array.from({ length: 5 }).map((_, i) => {
          return {
            id: (i + 1).toString(),
            nome: 'Nome do jogador',
            posicao: 'Meia',
            foto: 'http://psc.sitebeta.com.br/img/site/elements/players/placeholder.jpg',
          };
        }),
        laterais: Array.from({ length: 7 }).map((_, i) => {
          return {
            id: (i + 1).toString(),
            nome: 'Nome do jogador',
            posicao: 'Lateral esquerda',
            foto: 'http://psc.sitebeta.com.br/img/site/elements/players/placeholder.jpg',
          };
        }),
        comissao_tecnica: Array.from({ length: 5 }).map((_, i) => {
          return {
            id: (i + 1).toString(),
            nome: 'Nome',
            posicao: 'Técnico',
            foto: 'http://psc.sitebeta.com.br/img/site/elements/players/placeholder.jpg',
          };
        }),
      },
    },
  };
  res.status(200).json(data);
}
