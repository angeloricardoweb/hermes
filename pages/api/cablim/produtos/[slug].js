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
        results: {
            "error": false,
            "message": "Ação realizada com sucesso!",
            "data": {
                "detalhes": null,
                "banners": [
                    {
                        "id": 3,
                        "nome": "Móveis",
                        "url": "/produto/moveis",
                        "ativo": 1,
                        "imagem": "https://manuella-mello.sitebeta.com.br/img-render/banners/original/banners1_ea960aa7d8992e7acffb3a6735d0df4c.jpg",
                        "link": "/produto/conjunto-vivian"
                    },
                    {
                        "id": 6,
                        "nome": "Luminárias",
                        "url": "produto/luminarias",
                        "ativo": 1,
                        "imagem": "https://manuella-mello.sitebeta.com.br/img-render/banners/original/banners2_8c93780389be23e060aadba6b48c1d46.jpg",
                        "link": "https://manuella-melo-frontend.vercel.app/produto/conjunto-zoe"
                    }
                ]
            }
        }
    }

    res.status(200).json(data)
}
