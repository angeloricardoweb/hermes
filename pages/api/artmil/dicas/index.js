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
        message: 'Sem erros - Avisos da area da empresa',
        data: [
            {
                id: 1,
                data: '2022-07-27T11:50:48.709Z',
                resumo: 'Tutorial: Como posso fazer a instalação da minha persiana?',
                image: {
                    url: 'https://artmil-frontend.vercel.app/img/dica-1.png',
                    alt: 'Tutorial: Como posso fazer a instalação da minha persiana?'
                },
            },           
            {
                id: 2,
                data: '2022-07-27T11:50:48.709Z',
                resumo: 'Tutorial: Como posso fazer a instalação da minha persiana?',
                image: {
                    url: 'https://artmil-frontend.vercel.app/img/dica-1.png',
                    alt: 'Tutorial: Como posso fazer a instalação da minha persiana?'
                },
            },           
            {
                id: 3,
                data: '2022-07-27T11:50:48.709Z',
                resumo: 'Tutorial: Como posso fazer a instalação da minha persiana?',
                image: {
                    url: 'https://artmil-frontend.vercel.app/img/dica-1.png',
                    alt: 'Tutorial: Como posso fazer a instalação da minha persiana?'
                },
            },           
            {
                id: 4,
                data: '2022-07-27T11:50:48.709Z',
                resumo: 'Tutorial: Como posso fazer a instalação da minha persiana?',
                image: {
                    url: 'https://artmil-frontend.vercel.app/img/dica-1.png',
                    alt: 'Tutorial: Como posso fazer a instalação da minha persiana?'
                },
            },           
            {
                id: 5,
                data: '2022-07-27T11:50:48.709Z',
                resumo: 'Tutorial: Como posso fazer a instalação da minha persiana?',
                image: {
                    url: 'https://artmil-frontend.vercel.app/img/dica-1.png',
                    alt: 'Tutorial: Como posso fazer a instalação da minha persiana?'
                },
            },           
        ]
    }

    res.status(200).json(data)
}
