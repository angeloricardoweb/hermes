import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    });

    const search = req.query.search;
    // console.log(search);

    if (search == "projeto") {
        const data = {
            error: false,
            message: 'Sem erro',
            results: [
              {
                id: 1,
                titulo_lista: "Edições Anteriores",
                slug: "projeto-ambientalizar-traz-dados-atualizados-sobre-a-industria-madeireira",
                titulo: "Projeto Ambientalizar traz dados atualizados sobre a indústria madeireira",
                numero_edicao: "1",
                data: "27/09/2022",
                img_capa: "/img/biblioteca-florestal/news1.jpg",
                resumo: "Levar informação para a sociedade sobre as etapas essenciais de produção da indústria madeireira foi um dos objetivos do projeto Ambientalizar, realizado pela Aimex em parceria com o jornal O Liberal. Ao todo três edições estão disponíveis no site de O Liberal.",
              },
            ]
          }
        return res.status(200).json(data)
    } 
    if (search == "madeira") {
        const data = {
            error: false,
            message: 'Sem erros',
            results: [
                {
                    id: 2,
                    titulo_lista: "Edições Anteriores",
                    slug: "pesquisa-inedita-traz-os-primeiros-resultados-sobre-as-populacoes-de-ipes-no-para",
                    titulo: "Pesquisa inédita traz os primeiros resultados sobre as populações de Ipês no Pará",
                    numero_edicao: "2",
                    data: "26/09/2022",
                    img_capa: "/img/biblioteca-florestal/news2.jpg",
                    resumo: "Com o apoio da Associação das Indústrias Exportadoras de Madeira do Estado do Pará (Aimex) e desenvolvido pela Embrapa Amazônia Oriental, o projeto Ipê, já apresenta os primeiros resultados.  A pesquisa, que estuda as populações de ipê-amarelo (handroanthus serratifolius) e ipê-roxo (handroanthus impetiginosus) nas áreas de manejo florestal avaliadas no Pará, foram mantidas após a exploração florestal.",
                },
            ],
        }
        return res.status(200).json(data)

    }
    if (search == "alta") {
        const data = {
            error: false,
            message: 'Sem erros',
            results: [
                {
                    id: 3,
                    titulo_lista: "Edições Anteriores",
                    slug: "exportacoes-despontam-na-balanca-comercial-paraense-com-alta-de-97",
                    titulo: "Exportações despontam na balança comercial paraense com alta de 97%",
                    numero_edicao: "3",
                    data: "10/06/2018",
                    img_capa: "/img/biblioteca-florestal/news3.jpg",
                    resumo: "Em um novo balanço das exportações de madeira, realizado pela Associação das Indústrias Exportadoras de Madeira do Estado do Pará (Aimex), acumulado de janeiro a agosto deste ano, o comércio internacional do produto registrou alta de cerca de 97% no valor (US$ 273,9 milhões) e 19,5% na quantidade (189 mil toneladas) exportada.",
                },
            ],
        }
        return res.status(200).json(data)
        
    }
    else {
        const data = {
            error: false,
            message: 'Sem erros',
            results: [],
        }
        return res.status(200).json(data)
    }


}
