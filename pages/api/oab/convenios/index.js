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
            convenios:
                [
                    {
                        id: 1,
                        logo: 'https://logodownload.org/wp-content/uploads/2020/02/netshoes-logo.png',
                        title: 'Netshoes',
                        discount: '10%',
                        link: 'https://www.netshoes.com.br/',
                        cupom: 'OAB10'
                    },
                    {
                        id: 2,
                        logo: 'https://logodownload.org/wp-content/uploads/2017/08/centauro-logo-01.png',
                        title: 'Centauro',
                        discount: '5%',
                        link: 'https://www.centauro.com.br/',
                        cupom: 'OAB05'
                    },
                ]
        }
    }

    res.status(200).json(data)
}
