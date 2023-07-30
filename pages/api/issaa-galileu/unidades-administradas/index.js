import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const data = {
    error: false,
    message: 'Sem erros',
    "results": [
      {
        "id": 2,
        "slug": "poli-metropolitana-policlinicas-do-para",
        "banner_primario": {
          "url": "https://issaa.sitebeta.com.br/img/projects/ame.jpg"
        },
        "banner_secundario": {
          "url": "https://issaa.sitebeta.com.br/img/projects/ame.jpg"
        },
        "titulo": "Poli Metropolitana – Policlínicas do Pará",
        "descricao": "A Poli Metropolitana - Policlínicas do Pará - é um centro de média e alta complexidade que atende uma demanda na saúde do Estado do Pará."
      },
      {
        "id": 5,
        "slug": "policlinica-natea-tucurui",
        "banner_primario": {
          "url": "https://issaa.sitebeta.com.br/img/projects/second-natea.jpg"
        },
        "banner_secundario": {
          "url": "https://issaa.sitebeta.com.br/img/projects/second-natea.jpg"
        },
        "titulo": "Policlínica/NATEA Tucuruí",
        "descricao": "A Policlínica/Natea - Tucuruí é um centro de média e alta complexidade que atende uma demanda na saúde do sudeste do Estado do Pará."
      },
      {
        "id": 4,
        "slug": "hospital-publico-estadual-galileu",
        "banner_primario": {
          "url": "https://issaa.sitebeta.com.br/img/projects/novo-galileu.jpg"
        },
        "banner_secundario": {
          "url": "https://issaa.sitebeta.com.br/img/projects/novo-galileu.jpg"
        },
        "titulo": "Hospital Público Estadual Galileu",
        "descricao": "O Hospital Público Estadual Galileu (HPEG) é referência na rede Estadual do Pará em atendimentos de traumas ortopédicos."
      }
    ],
  }

  res.status(200).json(data)
}
