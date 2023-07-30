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

    if (slug == 'matapi-amplia-exportacoes-para-novos-mercados-internacionais') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                imagem: {
                    url: "https://www.gov.br/dnit/pt-br/assuntos/aquaviario/intervencao-em-hidrovias/hidrovias-1/hidroviamadeira2.jpg",
                    alt: "default image alt"
                },
                id: 1,
                slug: "matapi-amplia-exportacoes-para-novos-mercados-internacionais",
                titulo: "Matapi amplia exportações para novos mercados internacionais",
                imagem_descricao: "",
                body: "<p>O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará, o grupo quer consolidar embarques mensaispara o Porto de Quetzo, na Guatemala, via Canal do Panamá. “Os produtores da nossa região estão crescendo muito a ponto de conseguir uma produção de 30 mil toneladas de gergelim ao ano. É um número muito expressivo. Nossa missão foi encontrar uma solução logística, já que praticamente toda a produção estava sendo exportada pelo Porto de Paranaguá (PR)”, afirma Carlos Pinto Jr., diretor de operações da Matapi.</p><p>As soluções apresentadas aos representantes da empresa guatemalteca Sezam Zaad, uma das maiores agroexportadoras de gergelim, agradaram e Victor Makucheff e José Francisco, a convite do vice-presidente do Grupo Atlântica Matapi, Tiago Pinto, foram conhecer a estrutura de armazenagem do porto. Na ocasião, foram recebidos pelos servidores da Companhia Docas do Pará, Amiraldo Júnior, supervisor de operações, e Pedro Paulo, fiel de carga do porto.</p><p>O primeiro navio break bulk previsto para deixar Belém rumo a Quetzo em agosto. Nesta modalidade, diferentemente dos conteiners, é possível armazenar a carga individualmente no porão do navio. Apesar de exigir mais tempo de operação, reduz custos diante da alta global no preço dos conteiners. “Antigamente, um conteiners pra Guatemala custava quase dois mil dólares. Hoje, está 9 mil. Isso faz uma diferença muito grande para quem trabalha com exportações”, conclui Jr.</p>",
                data: "2022-08-31",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2023-04-18',
                        titulo: 'Grupo Atlântica Matapi e Oléa/Cevital abrem nova rota para o Mediterrâneo',
                        slug: 'grupo-atlantica-matapi-e-oleacevital-abrem-nova-rota-para-o-mediterraneo'
                    },
                    {
                        data: '2023-03-17',
                        titulo: 'Matapi conclui primeiro embarque de teca de 2023',
                        slug: 'matapi-conclui-primeiro-embarque-de-teca-de-2023'
                    },


                ],

            }
        }
        return res.status(200).json(data)
    }

    if (slug == 'matapi-conclui-primeiro-embarque-de-teca-de-2023') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                imagem: {
                    url: "https://i.imgur.com/kibb70c.jpg",
                    alt: "O vice-presidente, Tiago Pinto, o presidente Relton Osvaldo Pinto, e o diretor de operações, Elton Pinto, acompanharam o último dia de operações em Outeiro."
                },
                id: 1,
                slug: "matapi-conclui-primeiro-embarque-de-teca-de-2023",
                titulo: "Matapi conclui primeiro embarque de teca de 2023",
                imagem_descricao: "O vice-presidente, Tiago Pinto, o presidente Relton Osvaldo Pinto, e o diretor de operações, Elton Pinto, acompanharam o último dia de operações em Outeiro.",
                body: '<p>O Grupo Atlântica Matapi, empresa especializada em logística na Amazônia, concluiu, na quinta-feira, 16, a primeira operação portuária de embarque toras de teca produzidas pela Teak Resources Company (TRC). O M/V Admiralty Spirit recebeu 11.500 toneladas de madeira que vão atender o gigantesco mercado indiano. A teca embarcada é de reflorestamento, pode levar de 25 a 30 anos para estar no ponto ideal de corte, e é largamente utilizada na construção de embarcações, casas e móveis na Ásia.</p><p>A operação foi realizada no Porto de Outeiro, Distrito de Belém. De acordo com o Diretor de Operações da Matapi, as vantagens são "baixa espera para atracação, gerando uma redução de custos ao cliente exportador, e o auxílio para o crescimento dos moradores locais, mediante a contratação de pessoas que moram nas redondezas do porto".</p><p>A parceria firmada entre Matapi e TRC ano passado ganhou ainda mais força em 2023. Estão previstas 15 operações, que vão totalizar cerca de 200 mil toneladas de teca. "Isso confirma a expertise da Matapi em operar toras de madeira. Em cada operação que realizamos, movimentamos os portos do Arco Norte e contribuímos significativamente com a economia do Estado, gerando emprego no Pará", concluiu Elton. O próximo embarque está previsto até abril.</p>',
                data: "2023-03-17",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2023-04-18',
                        titulo: 'Grupo Atlântica Matapi e Oléa/Cevital abrem nova rota para o Mediterrâneo',
                        slug: 'grupo-atlantica-matapi-e-oleacevital-abrem-nova-rota-para-o-mediterraneo'
                    },
                    {
                        data: '2022-08-31',
                        titulo: 'Matapi amplia exportações para novos mercados internacionais',
                        slug: 'matapi-amplia-exportacoes-para-novos-mercados-internacionais'
                    },


                ],

            }
        }
        return res.status(200).json(data)
    }

    if (slug == 'grupo-atlantica-matapi-e-oleacevital-abrem-nova-rota-para-o-mediterraneo') {
        const data = {
            error: false,
            message: 'Sem erro',
            results: {
                imagem: {
                    url: "https://i.imgur.com/0hDHGTL.jpeg",
                    alt: "O vice-presidente, Tiago Pinto, o presidente Relton Osvaldo Pinto, e o diretor de operações, Elton Pinto, acompanharam o último dia de operações em Outeiro."
                },
                id: 1,
                slug: "grupo-atlantica-matapi-e-oleacevital-abrem-nova-rota-para-o-mediterraneo",
                titulo: "Grupo Atlântica Matapi e Oléa/Cevital abrem nova rota para o Mediterrâneo",
                imagem_descricao: "Adam Iskounen, diretor-geral da Oléa/Cevital no Brasil e Relton Osvaldo Pinto, presidente do Grupo Atlântica Matapi: parceria por uma nova rota para o Mediterrâneo.",
                body: '<p>O Grupo Atlântica Matapi, especialista em soluções logísticas na Amazônia, foi escolhido pela Oléa/Cevital para planejar, executar e distribuir, pelos próximos 10 anos, as matérias-primas de uma nova cadeia produtiva que irá se estabelecer em Barcarena, no Pará, e ainda atenderá demandas de uma rota comercial inédita para o Brasil.</p><p>A Oléa é uma subsidiária da Cevital, o maior conglomerado privado da Argélia - país localizado no norte da África com grande importância comercial na costa do Meriterrâneo -, que tem participações no setor agroalimentar, varejo, indústria e serviços. Atualmente, é a principal compradora de açúcar do Brasil. A empresa vai construir, em 2023, um parque industrial em Barcarena, com investimentos previstos em 4 bilhões de reais, e gerar dois mil empregos diretos e outros três mil indiretos.</p><p>Vamos começar com uma esmagadora (instalação industrial que processa grãos, geralmente soja, para produzir óleo e farelo), uma refinaria de óleo vegetal, uma fábrica de ração, uma fábrica de margarina e, possivelmente, uma fábrica de chocolates, aproveitando uma matéria-prima que cada vez é mais abundante no Estado, o cacau”, revelou Paulo Hegg, diretor de desenvolvimento de negócios da Oléa/Cevital no Brasil.</p><p>Além das indústrias, a empresa vai investir em cinco portos privados no Arco Norte - Outeiro, Vila do Conde, Santarém e Miritituba, no Pará, além de Santana, no Amapá - utilizando o potencial do transporte fluvial da Amazônia e reduzindo custos logísticos, tempo de viagem e distância até porto de Béjaïa, na Argélia.</p><p>São 7 ou 8 dias ao invés de 16 ou 17 (em comparação aos portos de Santos/SP e Paranaguá/SC). É praticamente metade do tempo. Estamos ganhando do ponto de vista da navegação, custo logístico, retorno dos navios e proximidade do nosso porto”, comemorou Adam Iskounen, diretor-geral da Oléa/Cevital no Brasil.</p><p>As atividades desenvolvidas pela Oléa/Cevital abrirão, ainda, novas relações comerciais para beneficiar produtores brasileiros, especialmente os de soja. Inicialmente, a empresa argelina exportará fertilizantes para atender uma demanda crescente da agricultura brasileira, principalmente nos estados do Centro-Oeste. Por outro lado, com a implantação de uma gigantesca esmagadora na Argélia, em junho, com capacidade de processar 45 mil toneladas de cereais por semana, será necessário importar cerca de 3,5 milhões de soja por ano para a produção de farelo e óleo de soja, e óleos de girassol, canola e amendoim, na costa do Mediterrâneo.</p><p>Alinhados com a missão e a visão da Oléa/Cevital, a gente desenvolveu uma solução logística integrada para prover o transporte rodofluvial de cargas para os portos do Arco Norte, carregando navios com até 60 mil toneladas e, ao mesmo tempo, trabalhar na importação de fertilizantes. É uma satisfação apoiar a implantação da Cevital, através da Oléa, na Amazônia, e contribuir para o desenvolvimento da nossa região”, concluiu Tiago Pinto, vice-presidente do Grupo Atlântica Matapi.</p>',
                data: "2023-04-18",
                outros_post: [  //máximo 5 noticias
                    {
                        data: '2023-03-17',
                        titulo: 'Matapi conclui primeiro embarque de teca de 2023',
                        slug: 'matapi-conclui-primeiro-embarque-de-teca-de-2023'
                    },
                    {
                        data: '2022-12-01',
                        titulo: 'Matapi amplia exportações para novos mercados internacionais',
                        slug: 'matapi-amplia-exportacoes-para-novos-mercados-internacionais'
                    },


                ],

            }
        }
        return res.status(200).json(data)
    }

    if (!slug) {
        const data = {
            error: true,
            message: 'Você precisa informar o slug.',
            results: {}
        }
        return res.status(404).json(data)
    }


}
