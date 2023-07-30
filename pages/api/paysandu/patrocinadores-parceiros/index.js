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
      patrocinadores_master: [
        {
          id: 1,
          logo: '/img/patrocinadores/patrocinadoresMaster/logo-banpara.png',
          url: 'https://www.banpara.b.br/',
          alt: 'logo Banpará'
        },
        {
          id: 2,
          logo: '/img/patrocinadores/patrocinadoresMaster/logo-internacional.png',
          url: 'https://betnacional.com/',
          alt: 'logo Internacional'
        },
      ],

      patrocinadores: [
        {
          id: 1,
          logo: '/img/patrocinadores/patrocinadores/sankhya.jpg',
          url: 'https://www.sankhya.com.br/',
          alt: 'logo Sankhya'
        },
        {
          id: 2,
          logo: '/img/patrocinadores/patrocinadores/gav.jpg',
          url: 'https://gavresorts.com.br/',
          alt: 'logo GAV'
        },
        {
          id: 3,
          logo: '/img/patrocinadores/patrocinadores/alubar.png',
          url: 'https://alubar.net.br/',
          alt: 'logo Alubar'
        },
        {
          id: 4,
          logo: '/img/patrocinadores/patrocinadores/unimed.png',
          url: 'https://www.unimed.coop.br/site/web/unimedbelem',
          alt: 'logo UNIMED'
        },
        {
          id: 5,
          logo: '/img/patrocinadores/patrocinadores/cerpa.png',
          url: 'http://www.cerpa.com.br/',
          alt: 'logo CERPA'
        },
        {
          id: 6,
          logo: '/img/patrocinadores/patrocinadores/zilmar-logo.png',
          url: 'http://zilmar.com.br/',
          alt: 'logo Zilmar'
        },
        {
          id: 7,
          logo: '/img/patrocinadores/patrocinadores/dimagem.jpg',
          url: 'https://dimagemonline.com.br/',
          alt: 'logo DIMAAGEM'
        },
        {
          id: 8,
          logo: '/img/patrocinadores/patrocinadores/print.png',
          url: 'https://www.printsolution.net.br/',
          alt: 'logo Print'
        },
        {
          id: 9,
          logo: '/img/patrocinadores/patrocinadores/trigolino-v3.png',
          url: 'https://ocrim.com.br/',
          alt: 'logo Trigolino'
        },
        {
          id: 10,
          logo: '/img/patrocinadores/patrocinadores/mirella-v4.png',
          url: 'https://ocrim.com.br/',
          alt: 'logo Mirella'
        },
        {
          id: 11,
          logo: '/img/patrocinadores/patrocinadores/oncologica.png',
          url: 'https://www.oncologicadobrasil.com.br/',
          alt: 'logo Oncológica do Brasil'
        },
        {
          id: 12,
          logo: '/img/patrocinadores/patrocinadores/oh-a-agua.png',
          url: 'https://www.ohaagua.com/',
          alt: 'logo oh a agua'
        },
        {
          id: 13,
          logo: '/img/patrocinadores/patrocinadores/tijuca2.png',
          url: 'https://www.cerpa.com.br/',
          alt: 'tijuca cerpa cerveja pilse'
        },

      ],

      parceiros: [
        {
          id: 1,
          logo: '/img/patrocinadores/parceiros/equatorial.png',
          url: 'https://www.equatorialenergia.com.br/',
          alt: 'logo Equatorial'
        },
        {
          id: 2,
          logo: '/img/patrocinadores/parceiros/logo-porto-dias-saude.jpg',
          url: 'https://www.portodiassaude.com.br/',
          alt: 'logo Porto Dias Saúde'
        },
        {
          id: 3,
          logo: '/img/patrocinadores/parceiros/logo-amaral-costa.webp',
          url: 'https://www.amaralcosta.com.br/',
          alt: 'logo Amaral Costa'
        },
        {
          id: 4,
          logo: '/img/patrocinadores/parceiros/cci.png',
          url: 'https://ccibelem.com.br/',
          alt: 'logo CCI'
        },
        {
          id: 5,
          logo: '/img/patrocinadores/parceiros/sky.png',
          url: 'https://www.sky.com.br/',
          alt: 'logo SKY'
        },
      ],

      material_esportivo: [
        {
          id: 1,
          logo: '/img/patrocinadores/materialEsportivo/logo-lobo.png',
          url: 'https://www.lojaslobo.com.br/',
          alt: 'logo Lobo Azul'
        },
      ],

      formacao_de_atletas: [
        {
          id: 1,
          logo: '/img/patrocinadores/formacaoDeAtletas/selo-formador.jpg',
          url: '',
          alt: 'logo Selo Formador'
        },
      ],

      outros_parceiros: [
        {
          id: 1,
          logo: '/img/patrocinadores/outrosParceiros/fenaclubes.png',
          url: '',
          alt: 'logo Fenaclubes'
        },
        {
          id: 2,
          logo: '/img/patrocinadores/outrosParceiros/SINDICLUBES-NOVA-LOGO-MENOR.png',
          url: '',
          alt: 'logo Sind'
        },
      ],

      oferecimento_site: [
        {
          id: 1,
          logo: '/img/patrocinadores/pinheiro-sereni.png',
          url: '',
          alt: 'logo Pinheiro Sereni',
          descricao: 'ESTE SITE É UM OFERECIMENTO'
        },
      ]
    },
  };

  res.status(200).json(data);
}
