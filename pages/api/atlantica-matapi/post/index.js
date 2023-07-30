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

            posts: [
                {
                    id: 3,
                    titulo: 'Grupo Atlântica Matapi e Oléa/Cevital abrem nova rota para o Mediterrâneo',
                    slug: 'grupo-atlantica-matapi-e-oleacevital-abrem-nova-rota-para-o-mediterraneo',
                    data: '2023-04-18',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://i.imgur.com/0hDHGTL.jpeg'
                    }
                },
                {
                    id: 2,
                    titulo: 'Matapi conclui primeiro embarque de teca de 2023',
                    slug: 'matapi-conclui-primeiro-embarque-de-teca-de-2023',
                    data: '2023-03-17',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://i.imgur.com/kibb70c.jpg'
                    }
                },
                {
                    id: 1,
                    titulo: 'Matapi amplia exportações para novos mercados internacionais',
                    slug: 'matapi-amplia-exportacoes-para-novos-mercados-internacionais',
                    data: '2022-12-01',
                    thumbnail: {
                        alt: 'default image alt',
                        url: 'https://www.gov.br/dnit/pt-br/assuntos/aquaviario/intervencao-em-hidrovias/hidrovias-1/hidroviamadeira2.jpg'
                    }
                },



            ]

        }

    }
    res.status(200).json(data)
}
