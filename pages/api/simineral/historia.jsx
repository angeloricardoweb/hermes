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
        results: [
            {
                id: 1,
                texto: 'Fundação do Simineral',
                data: '02/01/2007',
                video: 'https://www.youtube.com/embed/1Q8fG0TtVAY',
                imagem_url: 'https://simineral.org.br/simineralon/img/47/lamina-05.png',

            },
            {
                id: 2,
                texto: 'Simineral ganha sede própria, com a inauguração da Casa da Mineração',
                data: '09/05/2012',
                video: null,
                imagem_url: 'https://lh3.googleusercontent.com/p/AF1QipOaUyHRzBwtNDZ4Ecj3SG5PUUtdSB9PnXvgmSbU=s680-w680-h510',

            },
            {
                id: 3,
                texto: 'Lançamento do 1º Anuário Mineral do Pará',
                data: '02/03/2012',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia3.png',

            },
            {
                id: 4,
                texto: 'Realização do 1º Concurso de Redação',
                data: '12/08/2012',
                video: null,
                imagem_url: 'https://static.preparaenem.com/conteudo_legenda/359932c1ae123804fa421e31c1b69858.jpg',

            },
            {
                id: 5,
                texto: 'Lançamento do Anuarinho',
                data: '02/01/2012',
                video: 'https://www.youtube.com/embed/1Q8fG0TtVAY',
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia3.png',

            },
            {
                id: 6,
                texto: 'Instituição do Dia Estadual da Mineração',
                data: '09/05/2012',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia2.png',

            },
            {
                id: 7,
                texto: 'Simineral participa pela 1º vez da Exposibram',
                data: '01/03/2013',
                video: 'https://www.youtube.com/embed/1Q8fG0TtVAY',
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia3.png',

            },
            {
                id: 8,
                texto: 'Prêmio Simineral de Comunicação',
                data: '01/08/2013',
                video: null,
                imagem_url: 'https://simineral-frontend.vercel.app/img/siminera-premiacao.webp',

            },
            {
                id: 9,
                texto: 'Conquista do Prêmio Top de Marketing ADVB',
                data: '01/08/2013',
                video: null,
                imagem_url: 'https://www.rbsdirect.com.br/imagesrc/35610816.jpg?w=700',

            },
            {
                id: 10,
                texto: 'Apoio ao projeto “Turismo na Escola: descobrir, entender e cuidar de Belém”, desenvolvido pela Coordenadoria Municipal de Turismo (Belemtur)',
                data: '01/08/2014',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 11,
                texto: 'Conquista do Prêmio Top Sociambiental ADVB',
                data: '01/08/2015',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 12,
                texto: 'Homenagem com LAMPA (Latin American Marketing Personality Awards) ',
                data: '01/08/2015',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 13,
                texto: 'Reconhecimento, pela Câmara Municipal de Belém, com o diploma e medalha Brasão D’armas',
                data: '01/08/2016',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 14,
                texto: 'Apoio ao Congresso Mundial de Mineração',
                data: '01/08/2016',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 15,
                texto: 'Homenagem com LASPA (Latin American Sales Personality Award), na Argentina',
                data: '01/08/2016',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 16,
                texto: 'Lançamento do selo de 10 anos do Simineral, em parceria com os Correiros',
                data: '01/08/2017',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 17,
                texto: 'Realização da exposição ´Mineração – Presente na nossa evolução',
                data: '01/08/2017',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 18,
                texto: 'Realização do Prêmio Estadual de Inovação na Indústria Mineral, em parceria com a Sedeme, Sectet, Fapespa e Fiepa',
                data: '01/08/2017',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 19,
                texto: 'Lançamento do Prêmio Simineral de Comunicação',
                data: '01/08/2017',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 20,
                texto: 'Homenagem da Associação Pan-Amazônia com a Medalha “Grandes Amazônidas”',
                data: '01/08/2017',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 21,
                texto: 'Realização do evento ´O Melhor Feat do Digital',
                data: '01/08/2017',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },
            {
                id: 22,
                texto: 'Criação do Simineral ON',
                data: '01/08/2017',
                video: null,
                imagem_url: 'https://simineral-frontend-4pdytesh5-bredi-team.vercel.app/img/noticia1.png',

            },

        ]
    }

    res.status(200).json(data)
}
