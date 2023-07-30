import NextCors from 'nextjs-cors';
import { randomUUID } from 'node:crypto';
export default async function handler(req, res) {
  const { slug } = req.query;

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (slug == 'sub-16') {
    const data = {
      error: false,
      message: 'Sem erros',
      classificacoes: {
        id: 1,
        titleGeral: 'Classificação do Geral',
        geral: [
          {
            tituloTurno: '1º Turno',
            atualizacao: '30 de setembro de 2022',
            times: [
              {
                id: 1,
                posicaoNoRaking: 1,
                logo: 'https://api-temp.vercel.app/assembleia-paraense/rosario.png',
                pontoPG: 19,
                pontoV: 6,
                pontoE: 1,
                pontoD: 2,
                pontoGP: 8,
                pontoGC: 2,
                potoSG: 4,
                time: 'Rosario',
              },
              {
                id: 2,
                posicaoNoRaking: 2,
                logo: 'https://api-temp.vercel.app/assembleia-paraense/gremio.png',
                pontoPG: 12,
                pontoV: 4,
                pontoE: 0,
                pontoD: 8,
                pontoGP: 2,
                pontoGC: 1,
                potoSG: 2,
                time: 'Grêmio',
              },
            ]
          },
          {
            tituloTurno: '2º Turno',
            atualizacao: '20 de outubro de 2022',
            times: [
              {
                id: 2,
                posicaoNoRaking: 2,
                logo: 'https://api-temp.vercel.app/assembleia-paraense/gremio.png',
                pontoPG: 12,
                pontoV: 4,
                pontoE: 0,
                pontoD: 8,
                pontoGP: 2,
                pontoGC: 1,
                potoSG: 2,
                time: 'Grêmio',
              },
              {
                id: 1,
                posicaoNoRaking: 1,
                logo: 'https://api-temp.vercel.app/assembleia-paraense/rosario.png',
                pontoPG: 19,
                pontoV: 6,
                pontoE: 1,
                pontoD: 2,
                pontoGP: 8,
                pontoGC: 2,
                potoSG: 4,
                time: 'Rosario',
              },
            ]
          },
        ],

        cartoes: [
          {
            id: 1,
            titleGeral: 'Cartões',
            atualizacao: '12 de outubro de 2022',
            times: [
              {
                id: 1,
                time: 'Rosario',
                posicaoNoRaking: 1,
                logo: 'https://api-temp.vercel.app/assembleia-paraense/rosario.png',
                pontoCA: 2,
                pontoCV: 1,
                eliminado: false
              },
              {
                id: 2,
                time: 'Grêmio',
                posicaoNoRaking: 2,
                logo: 'https://api-temp.vercel.app/assembleia-paraense/gremio.png',
                pontoCA: 20,
                pontoCV: 8,
                eliminado: true
              },
            ]
          },
        ],

        artilharia: [
          {
            id: 1,
            titleGeral: 'Artilharia',
            atualizacao: '11 de novembro de 2022',
            times: [
              {
                id: 1,
                time: 'Rosario',
                posicaoNoRaking: 1,
                logo: 'https://api-temp.vercel.app/assembleia-paraense/rosario.png',
                nomeArtilheiro: 'Leonardo Soares',
                pontoArtilheiro: 33,
              },
              {
                id: 2,
                time: 'Grêmio',
                posicaoNoRaking: 1,
                logo: 'https://api-temp.vercel.app/assembleia-paraense/gremio.png',
                nomeArtilheiro: 'Silva Soares',
                pontoArtilheiro: 12,
              },
            ]
          },
        ],
      },
    };
    res.status(200).json(data);
  }
  else {
    const data = {
      error: false,
      message: 'Sem erro',
      data: []
    }
    return res.status(200).json(data)
  }
}
