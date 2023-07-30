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
        revistas: [
            {
                id: 1,
                titulo: 'Pré Lançamento',
                img: 'http://paysandu.com.br/data/revista/default/01.jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 2,
                titulo: 'Edição 001',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01.jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 3,
                titulo: 'Edição 002',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01(2).jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 4,
                titulo: 'Edição 003',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01(3).jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 5,
                titulo: 'Edição 004',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01(4).jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 6,
                titulo: 'Edição 005',
                img: 'http://paysandu.com.br/data/revista/default/PAGINA-01.jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 7,
                titulo: 'Edição 006',
                img: 'http://paysandu.com.br/data/revista/default/01.jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 8,
                titulo: 'Edição 007',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01.jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 9,
                titulo: 'Edição 008',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01(2).jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 10,
                titulo: 'Edição 009',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01(3).jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 11,
                titulo: 'Edição 0010',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01(4).jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 12,
                titulo: 'Edição 011',
                img: 'http://paysandu.com.br/data/revista/default/PAGINA-01.jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 13,
                titulo: 'Edição 012',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01.jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 14,
                titulo: 'Edição 013',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01(2).jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 15,
                titulo: 'Edição 0014',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01(3).jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 16,
                titulo: 'Edição 0015',
                img: 'http://paysandu.com.br/data/revista/default/PGINA-01(4).jpg',
                arquivo: '/historia7x0.pdf',
              },
              {
                id: 17,
                titulo: 'Edição 016',
                img: 'http://paysandu.com.br/data/revista/default/PAGINA-01.jpg',
                arquivo: '/historia7x0.pdf',
              },           
          ],
    },
  };

  res.status(200).json(data);
}
