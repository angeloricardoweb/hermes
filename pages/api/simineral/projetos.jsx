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
                nome: 'Complexo S11D Eliezer Batista',
                imagem_url: 'https://simineral-frontend.vercel.app/img/mineracao/caminhaobarro.webp',
                texto: '<p>Localizado no município de Canaã dos Carajás, no sudeste do Pará, o Projeto S11D é o maior complexo minerador em atividade no Pará e um dos maiores em todo o mundo. Os altos investimentos em inovação, tecnologia e inteligência ambiental, permitem ao projeto uma série de soluções modernas e sustentáveis, como a redução no consumo de diesel e o beneficiamento à umidade natural, que elimina a necessidade de barragens de rejeitos. Os valores já investidos no complexo ultrapassam os U$14 bilhões.</p>'

            },
            {
                id: 2,
                nome: 'Salobo',
                imagem_url: 'https://simineral-frontend.vercel.app/img/mineracao/mineracao.webp',
                texto: '<p>Salobo é o maior projeto de cobre do Brasil e é desenvolvido pela Vale, no município de Marabá, no sudeste paraense. Entrou em operação, em novembro de 2012 e mantém uma produção de mais de 50 mil toneladas de minério por ano. Um dos grandes diferenciais tecnológicos do projeto, que agrega mais eficiência à operação e um menor consumo de energia e de água, é a tecnologia roller press, capaz de resistir ao grande esforço no beneficiamento de um minério tão resistente como o cobre. A planta do Salobo permite ainda o reaproveitamento de aproximadamente 98% de toda a água utilizada no processo de beneficiamento.</p>'

            },
            {
                id: 3,
                nome: 'Cadeia do Alumínio',
                imagem_url: 'https://simineral-frontend.vercel.app/img/foto-tartaruga.webp',
                texto: '<p>Fica localizada no Pará, uma das maiores cadeias produtivas de alumínio do mundo, desenvolvida pelas empresas Hydro, Albras e Alunorte. O grupo mantém desde a mineração da bauxita até os produtos acabados de alumínio extrudado e cabos para geração de energia. Em Paragominas, por exemplo, está uma das maiores minas de bauxita do mundo, com capacidade nominal de 9,9 milhões de toneladas por ano. Já em Barcarena, está a maior refinaria de alumina do mundo fora da China. </p>'

            },
            {
                id: 4,
                nome: 'Projeto Juruti',
                imagem_url: 'https://simineral-frontend.vercel.app/img/mineracao/mineracao.webp',
                texto: '<p>Em Juruti, no Pará, a Alcoa realiza a mineração, a lavra e o beneficiamento de bauxita. O projeto Juruti é responsável por um dos maiores depósitos de bauxita de qualidade no mundo. A mina de Juruti possui uma reserva potencial de bauxita de 700 milhões de toneladas métricas. Sua taxa operacional atual é de 7,5 milhões de toneladas por ano (6,5 milhões de toneladas métricas secas) de bauxita de alta qualidade. </p><p>A planta de beneficiamento é composta por plantas de britagem e lavagem, bacias de rejeitos associadas e pátios de estocagem de bauxita. Está localizada a 55 quilômetros sul-sudoeste do município de Juruti</p>'
            },
            {
                id: 5,
                nome: 'Rio Capim Caulim',
                imagem_url: 'https://simineral-frontend.vercel.app/img/mineracao/caminhaobarro.webp',
                texto: '<p>No município paraense de Ipixuna, na região nordeste do Estado, fica a maior planta de beneficiamento de caulim do mundo. Conduzido pela Imerys, empresa que detém 71% de participação na produção de caulim do Brasil e que possui duas minas no município paraense. Toda a produção é feita internamente e enviada para todo o mundo, através do porto de Barcarena. </p>'

            },
            {
                id: 6,
                nome: 'Projeto trombetas',
                imagem_url: 'https://simineral-frontend.vercel.app/img/mineracao/mineracao.webp',
                texto: '<p>Uma das maiores instalações de produção de bauxita do mundo, o Projeto Trombetas é formado pelas minas Monte Branco, Teófilo, Cipó e Bela Cruz, na região do município paraense de Porto Trombetas. Possui uma capacidade instalada de produção de 18 milhões de toneladas por ano e é mantido pela Mineração Rio do Norte (MRN), que atua na extração, beneficiamento, transporte, secagem e embarque do minério bauxita, no distrito de Porto Trombetas (Oriximiná/PA). </p> '

            },
            {
                id: 7,
                nome: 'Projeto Araguaia',
                imagem_url: 'https://simineral-frontend.vercel.app/img/mineracao/caminhaobarro.webp',
                texto: '<p>Projeto Araguaia Níquel (Araguaia) está sendo instalada na região sul do distrito mineiro de Carajás, no Pará, com expectativa de se tornar a próxima grande mina de ferroníquel do Brasil. A área possui infraestrutura bem desenvolvida, incluindo estradas, ferrovias e energia hidrelétrica, como resultado da atividade de mineração em Carajás. É conduzido pela empresa Horizonte Mineral.</p>'
            }

        ]
    }

    res.status(200).json(data)
}
