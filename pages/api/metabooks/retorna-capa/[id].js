import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const id = req.query.id;

  console.log(id);

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
// return media
  function buscarCapa() {
    fetch(`https://api.metabooks.com/api/v1/cover/${id}/m`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 62cd6446-8b00-4498-aeb2-e2759cd62c86',
      },
    })

      .then(response => response.text())
      .then(result => {
        res.status(200)
      })
  }
  buscarCapa();
}

const token = '62cd6446-8b00-4498-aeb2-e2759cd62c86';

const imageBearerToken = `https://api.metabooks.com/api/v1/cover/9788575220000/m?Authorization=Bearer${token}`;
