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
      titulo: '10 Dicas de como viajar em grupo',
      img: 'https://plus.unsplash.com/premium_photo-1661270517324-f98477133f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
      data: '15-04-2023',
      text: "Phasellus pellentesque rhoncus consequat. Sed dapibus mattis vestibulum. Suspendisse vitae metus a leo dictum porttitor. Vivamus fringilla, nunc id eleifend euismod, neque velit efficitur arcu, volutpat fringilla felis libero vel felis. {'\n'}{'\n'}Mauris eleifend, neque ut commodo tristique, dolor eros ultrices massa, consectetur lacinia leo nisi in lorem. Duis viverra porta vestibulum. In maximus orci est, a aliquet risus cursus non. Fusce dignissim et dolor sit amet dignissim.",
    },
  };

  res.status(200).json(data);
}
