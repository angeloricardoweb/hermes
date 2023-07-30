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
        id: '0',
        image: 'https://api-temp.vercel.app/aqualand/1.jpg',
        image_sm: 'https://api-temp.vercel.app/aqualand/1-sm.jpg',
        alt: 'Sala do apartamento',
        legend: 'Sala do apartamento',
      },

      {
        id: '1',
        image: 'https://api-temp.vercel.app/aqualand/2.jpg',
        image_sm: 'https://api-temp.vercel.app/aqualand/2-sm.jpg',
        alt: 'Sala do apartamento',
        legend: 'Sala do apartamento',
      },

      {
        id: '2',
        image: 'https://api-temp.vercel.app/aqualand/3.jpg',
        image_sm: 'https://api-temp.vercel.app/aqualand/3-sm.jpg',
        alt: 'Parque aquático',
        legend: 'Parque aquático',
      },

      {
        id: '3',
        image: 'https://api-temp.vercel.app/aqualand/4.jpg',
        image_sm: 'https://api-temp.vercel.app/aqualand/4-sm.jpg',
        alt: 'Parque aquático',
        legend: 'Parque aquático',
      },

      {
        id: '4',
        image: 'https://api-temp.vercel.app/aqualand/5.jpg',
        image_sm: 'https://api-temp.vercel.app/aqualand/5-sm.jpg',
        alt: 'Parque aquático',
        legend: 'Parque aquático',
      },

      {
        id: '5',
        image: 'https://api-temp.vercel.app/aqualand/6.jpg',
        image_sm: 'https://api-temp.vercel.app/aqualand/6-sm.jpg',
        alt: 'Piscina de ondas',
        legend: 'Piscina de ondas',
      },

      {
        id: '6',
        image: 'https://api-temp.vercel.app/aqualand/7.jpg',
        image_sm: 'https://api-temp.vercel.app/aqualand/7-sm.jpg',
        alt: 'Parque aquático',
        legend: 'Parque aquático',
      },

      {
        id: '7',
        image: 'https://api-temp.vercel.app/aqualand/8.jpg',
        image_sm: 'https://api-temp.vercel.app/aqualand/8-sm.jpg',
        alt: 'Parque aquático',
        legend: 'Parque aquático',
      },

      {
        id: '8',
        image: 'https://api-temp.vercel.app/aqualand/9.jpg',
        image_sm: 'https://api-temp.vercel.app/aqualand/9-sm.jpg',
        alt: 'Parque aquático',
        legend: 'Parque aquático',
      },

      {
        id: '9',
        image: 'https://api-temp.vercel.app/aqualand/10.jpg',
        image_sm: 'https://api-temp.vercel.app/aqualand/10-sm.jpg',
        alt: 'Parque aquático',
        legend: 'Parque aquático',
      },
    ],
  };

  res.status(200).json(data);
}
