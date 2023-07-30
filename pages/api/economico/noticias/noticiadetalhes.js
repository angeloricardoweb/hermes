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
        noticiadetalhes: [
            {
                id: 1,
                titulo: 'Novidades no horti da unidade Umarizalw',    
                data_post: '10/06/2022', 
                img_detaque: '/img/carrosel/img1.jpg',   
                conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ultrices odio. Nam quis tempor tortor, in egestas nunc. Suspendisse tempus non augue tristique fermentum. In sagittis nunc arcu, nec consectetur ex dapibus nec. Fusce vel venenatis dolor. Donec ullamcorper molestie ipsum, vel consectetur eros aliquet nec. Morbi massa velit, feugiat a turpis a, molestie sodales tellus. Fusce viverra porttitor ipsum. Vestibulum placerat vehicula arcu non blandit. Aenean eu mauris massa. Praesent suscipit malesuada mauris ac finibus. Suspendisse ut sagittis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ultrices odio. Nam quis tempor tortor, in egestas nunc. Suspendisse tempus non augue tristique fermentum. In sagittis nunc arcu, nec consectetur ex dapibus nec. Fusce vel venenatis dolor. Donec ullamcorper molestie ipsum, vel consectetur eros aliquet nec. Morbi massa velit, feugiat a turpis a, molestie sodales tellus. Fusce viverra porttitor ipsum. Vestibulum placerat vehicula arcu non blandit. Aenean eu mauris massa. Praesent suscipit malesuada mauris ac finibus. Suspendisse ut sagittis mi.',
            },
        ]
    }

    res.status(200).json(data)
}
