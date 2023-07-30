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
        data: {
            id: req.query.id,
            endereco_entrega: 'Rua Domingos Marreiros, n° 49 ANANINDEUA - PA Umarizal - 66055-210 sala 1308',
            status: 'Entregue',
            data: '2022-07-27T11:50:48.709Z',
            total: 'R$ 498,00',
            tipo_entrega: 'pac',
            forma_pagament: 'pix',
            produtos: [
                {
                    id: 63456,
                    nome: 'Persiana a',
                    quantidade: 1,
                    valor: 'R$ 299,00',
                    detalhe: {
                        cor: 'branca',
                        largura: '200cm',
                        altura: '100cm',
                        lado_cortina: 'direito'

                    }

                },
                {
                    id: 63452,
                    nome: 'Persiana b',
                    quantidade: 1,
                    valor: 'R$ 199,00',
                    detalhe: {
                        cor: 'rosa',
                        largura: '200cm',
                        altura: '100cm',
                        lado_cortina: 'direito'

                    }

                },
            ]

        }

    }

    res.status(200).json(data)
}
