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
                resumo: 'Consig/Log - Margens Atualizadas Servidores da Prefeitura de Belém',
                doc: '',
            },
            {
                id: 2,
                data: '2022-07-27T11:50:48.709Z',
                resumo: 'Consig/Log - Margens Atualizadas Servidores da Prefeitura de Belém',
                doc: 'https://api-temp.vercel.app/temp/doc/example.pdf'
            },
            {
                id: 3,
                data: '2022-07-27T11:50:48.709Z',
                resumo: 'Consig/Log - Margens Atualizadas Servidores da Prefeitura de Belém',
                doc: 'https://api-temp.vercel.app/temp/doc/example.pdf'
            },]
    }

    res.status(200).json(data)
}
