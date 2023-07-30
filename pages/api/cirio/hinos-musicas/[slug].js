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
        diretoria: [
            {
                id: 1,
                ativo: '1',
                slug: 'virgem-de-nazare',
                nome: 'Virgem de Nazaré',
                audio: 'https://www.ciriodenazare.com.br/hinos-musicas/mae-de-nazare.mp3',
                descricao: 'Virgem de Nazaré, Mãe de concórdia, derrama sobre nós misericórdia! Refrão: Virgem de Nazaré, luz que nos guia, Ave Maria! Ave Maria! Virgem de Nazaré, Mãe carinhosa, oscula nossa fronte, generosa! Virgem de Nazaré, graça e poder, livra o nosso mundo do sofrer! Virgem de Nazaré, força e esperança, alcança-nos de Deus paz e bonança!',
            },

        ]
    }

    res.status(200).json(data)
}
