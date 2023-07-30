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
      logo: {
        alt: 'Logo Aqualand',
        url: '/img/logo-horizontal.png',
      },

      navbar_links: [
        {
          id: '0',
          name: 'Home',
          link: '/#top',
        },

        {
          id: '1',
          name: 'Park',
          link: 'https://sofalta.eu/meuingresso/no/aqualand/#/',
        },

        /* {
          id: '2',
          name: 'Resort',
          link: '/#resort',
        }, */

        /* {
          id: '3',
          name: 'Park',
          link: '/#park',
        }, */

        {
          id: '4',
          name: 'Resort',
          link: 'https://book.omnibees.com/hotel/17827',
        },

        /* {
          id: '5',
          name: 'Mapas',
          link: '#',
        }, */

        {
          id: '6',
          name: 'Grupo BR',
          link: 'https://book.omnibees.com/hotel/17827',
        },

        /* {
          id: '7',
          name: 'Contato',
          link: '#',
        }, */
      ],
    },
  };

  res.status(200).json(data);
}
