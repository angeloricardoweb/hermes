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
    portfolio: [
      {
        id: 1,
        title: 'Notícia #1',
        endpoint: '/api/eduardo-mello/api/noticias/noticia-1',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
        tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
        category: 'sacra',
        created_at: '2020-07-10 15:00:00.000',
        edited_at: '2020-07-10 15:00:000',
        is_published: true,
      },

      {
        id: 2,
        title: 'Notícia #2',
        endpoint: '/api/eduardo-mello/api/noticias/noticia-2',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
        tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
        category: 'sacra',
        created_at: '2020-07-10 15:00:00.000',
        edited_at: '2020-07-10 15:00:000',
        is_published: true,
      },

      {
        id: 3,
        title: 'Notícia #3',
        endpoint: '/api/eduardo-mello/api/noticias/noticia-3',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
        tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
        category: 'sacra',
        created_at: '2020-07-10 15:00:00.000',
        edited_at: '2020-07-10 15:00:000',
        is_published: true,
      },

      {
        id: 4,
        title: 'Notícia #4',
        endpoint: '/api/eduardo-mello/api/noticias/noticia-4',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
        tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
        category: 'sacra',
        created_at: '2020-07-10 15:00:00.000',
        edited_at: '2020-07-10 15:00:000',
        is_published: true,
      },

      {
        id: 5,
        title: 'Notícia #5',
        endpoint: '/api/eduardo-mello/api/noticias/noticia-5',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
        tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
        category: 'sacra',
        created_at: '2020-07-10 15:00:00.000',
        edited_at: '2020-07-10 15:00:000',
        is_published: true,
      },

      {
        id: 6,
        title: 'Notícia #6',
        endpoint: '/api/eduardo-mello/api/noticias/noticia-6',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
        tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4'],
        category: 'sacra',
        created_at: '2020-07-10 15:00:00.000',
        edited_at: '2020-07-10 15:00:000',
        is_published: true,
      },
    ],
  }

  res.status(200).json(data)
}
