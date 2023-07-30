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
                id: 213421341,
                title: 'Tutorial: Como posso fazer a instalação da minha persiana?',
                resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at dictum lectus. Suspendisse in iaculis orci, sit amet rhoncus libero. Morbi fringilla commodo nibh, eu faucibus urna malesuada non.',
                main_banner: {
                    url: 'https://artmil-frontend.vercel.app/img/dica-1.png',
                    alt: 'Tutorial: Como posso fazer a instalação da minha persiana?'
                },
                body: '<h2>Cras vitae lobortis lectus. Proin enim lacus, tincidunt in dolor at, vehicula vulputate elit. Mauris elementum sapien arcu, at luctus sapien</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at dictum lectus. Suspendisse in iaculis orci, sit amet rhoncus libero. Morbi fringilla commodo nibh </p>',
                breadcrumb: {
                    path: 'Dicas',
                    nome: 'Confira as dicas de nossos especialistas',
                    categoria: 'Casa',
                }
            }
        ]
    }

    res.status(200).json(data)
}
