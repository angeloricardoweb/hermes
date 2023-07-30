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
        id: 0,
        title: 'Segurança',
        subtitle: 'Maecenas quis ipsum tincidunt accumsan neque ut',
        content: `Donec cursus ligula leo. Sed gravida porta erat, nec vulputate lorem suscipit sed.
          Aliquam eu diam leo. Donec non felis id orci volutpat tincidunt. Vivamus dui lectus, porttitor at rhoncus porttitor,
          ullamcorper eget nisl. Sed vel massa lacus. Sed venenatis odio massa, vel mattis lorem malesuada suscipit.`,
        big_icon_name: 'seguranca',
        little_icon_name: 'gear-seguranca',
      },

      {
        id: 1,
        title: 'Qualidade',
        subtitle: 'Maecenas quis ipsum tincidunt accumsan neque ut',
        content: `Donec cursus ligula leo. Sed gravida porta erat, nec vulputate lorem suscipit sed.
          Aliquam eu diam leo. Donec non felis id orci volutpat tincidunt. Vivamus dui lectus, porttitor at rhoncus porttitor,
          ullamcorper eget nisl. Sed vel massa lacus. Sed venenatis odio massa, vel mattis lorem malesuada suscipit.`,
        big_icon_name: 'qualidade',
        little_icon_name: 'gear-qualidade',
      },

      {
        id: 2,
        title: 'Equipe Ekoar',
        subtitle: 'Maecenas quis ipsum tincidunt accumsan neque ut',
        content: `Donec cursus ligula leo. Sed gravida porta erat, nec vulputate lorem suscipit sed.
          Aliquam eu diam leo. Donec non felis id orci volutpat tincidunt. Vivamus dui lectus, porttitor at rhoncus porttitor,
          ullamcorper eget nisl. Sed vel massa lacus. Sed venenatis odio massa, vel mattis lorem malesuada suscipit.`,
        big_icon_name: 'equipe-ekoar',
        little_icon_name: 'gear-equipe',
      },

      {
        id: 3,
        title: 'Estrutura',
        subtitle: 'Maecenas quis ipsum tincidunt accumsan neque ut',
        content: `Donec cursus ligula leo. Sed gravida porta erat, nec vulputate lorem suscipit sed.
          Aliquam eu diam leo. Donec non felis id orci volutpat tincidunt. Vivamus dui lectus, porttitor at rhoncus porttitor,
          ullamcorper eget nisl. Sed vel massa lacus. Sed venenatis odio massa, vel mattis lorem malesuada suscipit.`,
        big_icon_name: 'estrutura',
        little_icon_name: 'gear-estrutura',
      },

      {
        id: 4,
        title: 'Técnica',
        subtitle: 'Maecenas quis ipsum tincidunt accumsan neque ut',
        content: `Donec cursus ligula leo. Sed gravida porta erat, nec vulputate lorem suscipit sed.
          Aliquam eu diam leo. Donec non felis id orci volutpat tincidunt. Vivamus dui lectus, porttitor at rhoncus porttitor,
          ullamcorper eget nisl. Sed vel massa lacus. Sed venenatis odio massa, vel mattis lorem malesuada suscipit.`,
        big_icon_name: 'tecnica',
        little_icon_name: 'gear-tecnica',
      },

      {
        id: 5,
        title: 'Tecnologia',
        subtitle: 'Maecenas quis ipsum tincidunt accumsan neque ut',
        content: `Donec cursus ligula leo. Sed gravida porta erat, nec vulputate lorem suscipit sed.
          Aliquam eu diam leo. Donec non felis id orci volutpat tincidunt. Vivamus dui lectus, porttitor at rhoncus porttitor,
          ullamcorper eget nisl. Sed vel massa lacus. Sed venenatis odio massa, vel mattis lorem malesuada suscipit.`,
        big_icon_name: 'tecnologia',
        little_icon_name: 'gear-tecnologia',
      },

      {
        id: 6,
        title: 'Sustentabilidade',
        subtitle: 'Maecenas quis ipsum tincidunt accumsan neque ut',
        content: `Donec cursus ligula leo. Sed gravida porta erat, nec vulputate lorem suscipit sed.
          Aliquam eu diam leo. Donec non felis id orci volutpat tincidunt. Vivamus dui lectus, porttitor at rhoncus porttitor,
          ullamcorper eget nisl. Sed vel massa lacus. Sed venenatis odio massa, vel mattis lorem malesuada suscipit.`,
        big_icon_name: 'sustentabilidade',
        little_icon_name: 'gear-sustentabilidade',
      },

      {
        id: 7,
        title: 'Transparência',
        subtitle: 'Maecenas quis ipsum tincidunt accumsan neque ut',
        content: `Donec cursus ligula leo. Sed gravida porta erat, nec vulputate lorem suscipit sed.
          Aliquam eu diam leo. Donec non felis id orci volutpat tincidunt. Vivamus dui lectus, porttitor at rhoncus porttitor,
          ullamcorper eget nisl. Sed vel massa lacus. Sed venenatis odio massa, vel mattis lorem malesuada suscipit.`,
        big_icon_name: 'transparencia',
        little_icon_name: 'gear-transparencia',
      },
    ],
  };
  res.status(200).json(data);
}
