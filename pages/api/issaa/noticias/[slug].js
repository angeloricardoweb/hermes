import NextCors from 'nextjs-cors';

export default async function handler(req, res) {

    const { slug } = req.query;
    console.log(slug);

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    if (slug == 'policlinica-atendera-ate-2-2-mil-pessoas-por-dia') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                id: 8,
                banner: "https://issaa.sitebeta.com.br/img/noticias/policlinica-2.2-mil-atendimentos.jpg",
                titulo: "Policlínica atenderá até 2,2 mil pessoas por dia",
                subtitulo: 'O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará',
                slug: "policlinica-atendera-ate-2-2-mil-pessoas-por-dia",
                editoria: 'Nome da Unidade Policlinica',
                data: "2020-07-28",
                body: "<p>O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará, o grupo quer consolidar embarques mensaispara o Porto de Quetzo, na Guatemala, via Canal do Panamá. “Os produtores da nossa região estão crescendo muito a ponto de conseguir uma produção de 30 mil toneladas de gergelim ao ano. É um número muito expressivo. Nossa missão foi encontrar uma solução logística, já que praticamente toda a produção estava sendo exportada pelo Porto de Paranaguá (PR)”, afirma Carlos Pinto Jr., diretor de operações da Matapi.</p><p>As soluções apresentadas aos representantes da empresa guatemalteca Sezam Zaad, uma das maiores agroexportadoras de gergelim, agradaram e Victor Makucheff e José Francisco, a convite do vice-presidente do Grupo Atlântica Matapi, Tiago Pinto, foram conhecer a estrutura de armazenagem do porto. Na ocasião, foram recebidos pelos servidores da Companhia Docas do Pará, Amiraldo Júnior, supervisor de operações, e Pedro Paulo, fiel de carga do porto.</p><p>O primeiro navio break bulk previsto para deixar Belém rumo a Quetzo em agosto. Nesta modalidade, diferentemente dos conteiners, é possível armazenar a carga individualmente no porão do navio. Apesar de exigir mais tempo de operação, reduz custos diante da alta global no preço dos conteiners. “Antigamente, um conteiners pra Guatemala custava quase dois mil dólares. Hoje, está 9 mil. Isso faz uma diferença muito grande para quem trabalha com exportações”, conclui Jr.</p>",
                outros_post: [
                    {
                        data: '2020-01-12',
                        titulo: 'Belém terá a primeira Policlínica do Pará',
                        slug: 'belem-tera-a-primeira-policlinica-do-estado'
                    }

                ],
            },

        }
        return res.status(200).json(data)
    }
    if (slug == 'belem-tera-a-primeira-policlinica-do-estado') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                id: 8,
                banner: "https://issaa.sitebeta.com.br/img/noticias/ame.jpg",
                titulo: "Belém terá a primeira Policlínica do Pará",
                subtitulo: 'O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará',
                slug: "belem-tera-a-primeira-policlinica-do-estado",
                editoria: 'Nome da Unidade Policlinica',
                data: "2020-07-28",
                body: "<p>O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará, o grupo quer consolidar embarques mensaispara o Porto de Quetzo, na Guatemala, via Canal do Panamá. “Os produtores da nossa região estão crescendo muito a ponto de conseguir uma produção de 30 mil toneladas de gergelim ao ano. É um número muito expressivo. Nossa missão foi encontrar uma solução logística, já que praticamente toda a produção estava sendo exportada pelo Porto de Paranaguá (PR)”, afirma Carlos Pinto Jr., diretor de operações da Matapi.</p><p>As soluções apresentadas aos representantes da empresa guatemalteca Sezam Zaad, uma das maiores agroexportadoras de gergelim, agradaram e Victor Makucheff e José Francisco, a convite do vice-presidente do Grupo Atlântica Matapi, Tiago Pinto, foram conhecer a estrutura de armazenagem do porto. Na ocasião, foram recebidos pelos servidores da Companhia Docas do Pará, Amiraldo Júnior, supervisor de operações, e Pedro Paulo, fiel de carga do porto.</p><p>O primeiro navio break bulk previsto para deixar Belém rumo a Quetzo em agosto. Nesta modalidade, diferentemente dos conteiners, é possível armazenar a carga individualmente no porão do navio. Apesar de exigir mais tempo de operação, reduz custos diante da alta global no preço dos conteiners. “Antigamente, um conteiners pra Guatemala custava quase dois mil dólares. Hoje, está 9 mil. Isso faz uma diferença muito grande para quem trabalha com exportações”, conclui Jr.</p>",
                outros_post: [
                    {
                        data: '2020-01-12',
                        titulo: 'Belém terá a primeira Policlínica do Pará',
                        slug: 'belem-tera-a-primeira-policlinica-do-estado'
                    }

                ],
            },

        }
        return res.status(200).json(data)
    }



}



