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
        id: '1',
        media: {
          url: 'https://picsum.photos/seed/picsum/200/300',
          title: 'banner-image-2.png',
          size: '529kb',
        },
        updated_at: '12/08/2023 às 12:55',
        active: true,
        type: 'image',
        editable: true,
        delete_endpoint: '/teste/delete',
      },
      {
        id: '3',
        media: {
          url: 'https://picsum.photos/seed/picsum/200/300',
          title: 'banner-9347201971235.png',
          size: '339kb',
        },
        updated_at: '14/08/2023 às 12:00',
        active: false,
        type: 'image',
        editable: false,
        delete_endpoint: '/teste/delete',
      },
      {
        id: '4',
        description: {
          title: 'Como funciona o sistema de pontos?',
          description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam ultricies, nunc nisl aliquam lorem, eget aliquam nisl lorem eu nunc. Donec auctor, nisl eget aliquam ultricies, nunc nisl aliquam lorem, eget aliquam nisl lorem eu nunc.',
        },
        page_url: 'https://www.google.com.br',
        updated_at: '12/08/2023 às 15:32',
        active: true,
        type: 'description',
        editable: true,
        delete_endpoint: '/teste/delete',
      },
      {
        id: '5',
        media: {
          url: 'https://picsum.photos/seed/picsum/200/300',
          title: 'document-9347201971235.pdf',
          size: '239kb',
        },
        page_url: 'https://www.google.com.br',
        updated_at: '12/08/2023 às 15:32',
        active: true,
        type: 'doc',
        editable: true,
        delete_endpoint: '/teste/delete',
      },
      {
        id: '5',
        media: {
          url: 'https://picsum.photos/seed/picsum/200/300',
          title: 'document-9347201971235.pdf',
          size: '239kb',
        },
        page_url: 'https://www.google.com.br',
        updated_at: '12/08/2023 às 15:32',
        active: true,
        type: 'doc',
        editable: true,
        delete_endpoint: '/teste/delete',
      },
      {
        id: '6',
        media: {
          url: 'https://picsum.photos/seed/picsum/200/300',
          title: 'document-9347201971235.pdf',
          size: '239kb',
        },
        page_url: 'https://www.google.com.br',
        updated_at: '12/08/2023 às 15:32',
        active: true,
        type: 'doc',
        editable: true,
        delete_endpoint: '/teste/delete',
      },
      {
        id: '6',
        media: {
          title: 'document-9347201971235.mp4',
          size: '20mb',
        },
        updated_at: '12/08/2023 às 15:32',
        active: false,
        type: 'video',
        editable: true,
        delete_endpoint: '/teste/delete',
      },
      {
        id: '7',
        media: {
          title: 'document-9347201971235.mp4',
          size: '20mb',
        },
        updated_at: '12/08/2023 às 15:32',
        active: false,
        type: 'video',
        editable: true,
        delete_endpoint: '/teste/delete',
      },
      {
        id: '8',
        media: {
          title: 'document-9347201971235.mp4',
          size: '20mb',
        },
        updated_at: '12/08/2023 às 15:32',
        active: false,
        type: 'video',
        editable: true,
      },
    ],
  };

  res.status(200).json(data);
}
