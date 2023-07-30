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
      id: 1,
      titulo: 'Passeio de Jipe',
      img: 'https://images.unsplash.com/photo-1467489904517-075c242c2b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1318&q=80',
      descricao:
        "Phasellus pellentesque rhoncus consequat. Sed dapibus mattis vestibulum. Suspendisse vitae metus a leo dictum porttitor. Vivamus fringilla, nunc id eleifend euismod, neque velit efficitur arcu, volutpat fringilla felis libero vel felis. {'\n'}{'\n'}Mauris eleifend, neque ut commodo tristique, dolor eros ultrices massa, consectetur lacinia leo nisi in lorem. Duis viverra porta vestibulum. In maximus orci est, a aliquet risus cursus non. Fusce dignissim et dolor sit amet dignissim.",
      avaliacao: 4.3,
      midias: [
        {
          id: 1,
          img: 'https://images.unsplash.com/photo-1639419376220-270790e997af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          id: 2,
          img: 'https://images.unsplash.com/photo-1639419373099-9c306eb6807b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1639419373577-17f613ba2771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
          id: 4,
          img: 'https://images.unsplash.com/photo-1639419375955-2741a335818b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
      ],
    },
  };

  res.status(200).json(data);
}
