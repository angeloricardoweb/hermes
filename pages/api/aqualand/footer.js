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
      nav_links: [
        /* {
          id: '0',
          name: 'Resort',
          items: [
            {
              id: '0',
              name: 'Hotel',
              link: '#',
            },

            {
              id: '1',
              name: 'Aqua Shop',
              link: '#',
            },

            {
              id: '2',
              name: 'Massamare',
              link: '#',
            },

            {
              id: '3',
              name: 'Nautilus',
              link: '#',
            },

            {
              id: '4',
              name: 'Swell',
              link: '#',
            },
          ],
        }, */

        /* {
          id: '1',
          name: 'Park',
          items: [
            {
              id: '0',
              name: 'Montanha Pai D’égua',
              link: '#',
            },

            {
              id: '1',
              name: 'Piscina de Ondas',
              link: '#',
            },

            {
              id: '2',
              name: 'El Loco',
              link: '#',
            },
          ],
        }, */

        /* {
          id: '2',
          name: 'Grupo BR',
          items: [
            {
              id: '0',
              name: 'Equipe RCI',
              link: '#',
            },

            {
              id: '1',
              name: 'História',
              link: '#',
            },

            {
              id: '2',
              name: 'Trabalhe conosco',
              link: '#',
            },
          ],
        }, */

        /* {
          id: '3',
          name: 'Vendas',
          items: [
            {
              id: '0',
              name: 'Pontos de Venda',
              link: '#',
            },

            {
              id: '1',
              name: 'Venda Online',
              link: '#',
            },
          ],
        }, */

        {
          id: '4',
          name: 'Localização',
          items: [
            {
              id: '0',
              name: 'Rodovia PA-444 - Salinópolis - Pará',
              link: 'https://www.google.com/maps/place/Aqualand+Park+e+Resort/@-0.6178726,-47.3020887,17z/data=!3m1!4b1!4m6!3m5!1s0x92a899134cfc52c3:0x45e46ac72a5479ab!8m2!3d-0.617878!4d-47.2999!16s%2Fg%2F11f760s4_1',
            },
          ],
        },
      ],

      social_links: [
        {
          id: '0',
          name: 'facebook',
          link: 'https://facebook.com/aqualand.oficial',
        },

        {
          id: '1',
          name: 'instagram',
          link: 'https://instagram.com/aqualand.oficial',
        },

        /* {
          id: '2',
          name: 'youtube',
          link: 'https://youtube.com/',
        }, */
      ],
    },
  };

  res.status(200).json(data);
}
