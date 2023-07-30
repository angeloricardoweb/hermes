import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === 'POST'){
    
    const data = {
        error: false,
        message: 'Anúncio cadastrado com sucesso!',
    }
    res.status(200).json(data);
  }else{
    res.status(403).json({message: 'Método não permitido.'})
  }
}