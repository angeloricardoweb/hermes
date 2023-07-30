import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })

    const data = {
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
                    "imagem": "https://i.imgur.com/K4A0TfQ.png",
                    "link": "/produto/conjunto-vivian"
                },
                {
                    "id": 6,
                    "nome": "Luminárias",
                    "url": "produto/luminarias",
                    "ativo": 1,
                    "imagem": "https://i.imgur.com/IXdO2Oa.png",
                    "link": "produto/luminarias-test"
                }
            ]
        }
    }

    res.status(200).json(data)
}
