import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    const params = req.query;

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
            banners_carrossel: [
                {
                    id: 1,
                    imagem: {
                        url: 'https://atlanticamatapi.com.br/img/porto1.jpg',
                        alt: 'porto industrial de barcelona'
                    },
                    texto: {
                        subtitulo: 'ENCONTRANDO AS SOLUÇÕES PARA',
                        titulo: 'OS DESAFIOS LOGÍSTICOS DA AMAZÔNIA'
                    },
                    button: {
                        href: 'https://www.google.com.br',
                    },

                },
                {
                    id: 2,
                    imagem: {
                        url: 'https://atlantica-matapi-frontend.vercel.app/img/hero3.webp',
                        alt: 'foresta verde vista de cima'
                    },
                    texto: {
                        subtitulo: 'CUIDANDO DA AMAZÔNIA',
                        titulo: 'SUSTENTABILIDADE E PRESERVAÇÃO ESTÃO AQUI'
                    },
                    button: {
                        href: 'https://www.google.com.br',
                    },
                },
                {
                    id: 3,
                    imagem: {
                        url: 'https://atlanticamatapi.com.br/img/navio-liberator.png',
                        alt: 'porto mostrando equipamentos'
                    },
                    texto: {
                        subtitulo: 'DETERMINAÇÃO E TRABALHO',
                        titulo: 'EXCELÊNCIA EM LOGÍSTICA NO NORTE'
                    },
                    button: {
                        href: 'https://www.google.com.br',
                    },
                },
            ]
        }
    }

    res.status(200).json(data)
}
