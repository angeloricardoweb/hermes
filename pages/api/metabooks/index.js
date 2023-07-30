import NextCors from 'nextjs-cors'

export default async function handler(req, res) {

  const search = req.query.search

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  function buscarLivros() {
    fetch(`https://www.metabooks.com/api/v2/products?search=${search}&size=500`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer d739b262-9f6b-4af9-99c5-c318ed63d835',
      },
    })
      .then(response => response.text())
      .then(result => {
        res.status(200).json(JSON.parse(result))
      })
      .catch(error => res.status(200).json({ error: error.message }))
  }
  buscarLivros()
}
