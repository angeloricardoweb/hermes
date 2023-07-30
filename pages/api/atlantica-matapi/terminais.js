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
            terminais: [
                {
                    id: 1,
                    imagem: {
                        url: 'https://atlantica-matapi-frontend.vercel.app/img/foto_balsa_carvao_terminal.webp',
                        alt: 'foto da balsa sobre o rio'
                    },
                    titulo: 'Terminal Portuário de Icoaraci (Belém/PA)',
                    descricao: 'Localizado às margens do Furo do Maguari possui nítida vocação fluvial devido excelentes condiçõese profundidade para atracação de embarcações de grande calado, contando hoje com:',
                    lista: [
                        {
                            id: 1,

                            descricao: '100.000m2 de area',

                        },
                        {
                            id: 2,

                            descricao: 'Estrutura administrativa de salas'
                        },
                        {
                            id: 3,

                            descricao: 'Pátio para armazenagem'
                        },
                        {
                            id: 4,

                            descricao: 'Área destinada para a construção de galpóes'
                        },
                    ]
                },
                {
                    id: 2,
                    imagem: {
                        url: 'https://atlantica-matapi-frontend.vercel.app/img/foto_balsa_terminal.webp',
                        alt: 'foto da balsa sobre o rio'
                    },
                    titulo: 'SMC - Sistema de Movimentação de Carga (Barcarena/PA)',
                    descricao: 'O Sistema de Movimentação de Carga (SMC) é a janela para o Porto de Vila do Conde, em Barcarena. Pelas plataformas, é possível embarcar e desembarcarcargas e veículos pesados, tornando as operações mais rápidas, seguras e eficientes.',
                    lista: []
                },
                {
                    id: 3,
                    imagem: {
                        url: 'https://atlantica-matapi-frontend.vercel.app/img/naviocinza.webp',
                        alt: 'foto da balsa sobre o rio'
                    },
                    titulo: 'Terminal Portuário (Santana/AP)',
                    descricao: 'Localizado às margens do Rio Matapi possuiexcelentes condições operacionais para a atracaçãode comboios, contado hoje com:',
                    lista: [
                        {
                            id: 1,

                            descricao: '5.000m2 de area'
                        },
                        {
                            id: 2,

                            descricao: '1000m2 em galpões'
                        },
                        {
                            id: 3,

                            descricao: 'Estrutura administrativa de salas'
                        },
                        {
                            id: 4,

                            descricao: 'Pátio para armagenagem'
                        },
                    ]
                }
            ]
        }
    }

    res.status(200).json(data)
}
