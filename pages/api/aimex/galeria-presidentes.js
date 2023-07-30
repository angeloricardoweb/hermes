import NextCors from 'nextjs-cors';

export default async function handler(req, res) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const galeria_ex_presidentes = {
        error: false,
        message: 'Sem erros',
        description_page: 'A história da AIMEX foi e continua sendo escrita por muitas mãos. Funcionários, parceiros, colaboradores e diretores ajudaram a construir, ao longo dos anos e no dia a dia, essa trajetória de sucesso da mais antiga entidade de classe do setor florestal madeireiro da Amazônia. E tudo isso liderados por pessoas comprometidas com o fortalecimento de uma produção legal e sustentável na Amazônia e com o desenvolvimento econômico e social da região, aliado a preservação de suas riquezas naturais.',
        ex_presidentes: [
            {
                id: 1,
                nome: 'Eduardo Leão',
                periodo: '2022',
                image: '/temp/expresidentes/eduardo-leao.png',
            },
            {
                id: 2,
                nome: 'Leandro Raul Rymsza',
                periodo: 'Abril de 2021 a novembro de 2021',
                image: 'https://aimex-frontend.vercel.app/temp/expresidentes/leandro-raul.png',
            },
            {
                id: 3,
                nome: 'Roberto Vergueiro Pupo',
                periodo: 'Biênio 2014 a 2016 • 2016 a 2018 • 2018 a abril de 2021',
                image: 'https://aimex-frontend.vercel.app/temp/expresidentes/roberto-vergueiro-2.png',
            },
            {
                id: 4,
                nome: 'Idacir Peracchi',
                periodo: 'Biênio 2009 a 2011 • 2011 a dezembro de 2013',
                image: 'https://aimex-frontend.vercel.app/temp/expresidentes/idacir-peracchi.png',
            },
            {
                id: 5,
                nome: 'Manoel Pereira Dias',
                periodo: 'Biênio 2005 a 2007 • 2007 a 2009',
                image: 'https://aimex-frontend.vercel.app/temp/expresidentes/manoel-dias.png',
            },
            {
                id: 5,
                nome: 'Elias Salame',
                periodo: 'Biênio 1999 a 2001 • 2001 a 2003 • 2003 a 2005',
                image: 'https://aimex-frontend.vercel.app/temp/expresidentes/elias-salame.png',
            },
            {
                id: 6,
                nome: 'Danilo Remor',
                periodo: 'Biênio 1983 a 1985 • 1985 a 1987 1987 a 1989 • 1989 a 1991 • 1991 a 1993 • 1993 a 1995 • 1995 a 1997',
                image: 'https://aimex-frontend.vercel.app/temp/expresidentes/danilo-remor.png',
            },
            {
                id: 7,
                nome: 'Paulo Gomes Correia',
                periodo: 'Biênio 1981 a 1982',
                image: 'https://aimex-frontend.vercel.app/temp/expresidentes/paulo-gomes.png',
            },
        ]
    }

    res.status(200).json(galeria_ex_presidentes)
}
