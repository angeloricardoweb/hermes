import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
  const { slug } = req.query;


  if (slug == 'poli-metropolitana') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {

        id: 1,
        slug: 'poli-metropolitana',
        banner: {
          url: 'https://api-temp.vercel.app/issaa/nova-metropolitana.jpg',
          alt: 'unidade de metropolitana'
        },

        titulo: 'POLICLÍNICA METROPOLITANA',
        descricao:
          'A Poli Metropolitana - Policlínicas do Pará - é um centro de média e alta complexidade que atende uma demanda na saúde do Estado do Pará.',
        body: 'O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará, o grupo quer consolidar embarques mensaispara o Porto de Quetzo, na Guatemala, via Canal do Panamá. “Os produtores da nossa região estão crescendo muito a ponto de conseguir uma produção de 30 mil toneladas de gergelim ao ano. É um número muito expressivo. Nossa missão foi encontrar uma solução logística, já que praticamente toda a produção estava sendo exportada pelo Porto de Paranaguá (PR)”, afirma Carlos Pinto Jr., diretor de operações da Matapi.</p><p>As soluções apresentadas aos representantes da empresa guatemalteca Sezam Zaad, uma das maiores agroexportadoras de gergelim, agradaram e Victor Makucheff e José Francisco, a convite do vice-presidente do Grupo Atlântica Matapi, Tiago Pinto, foram conhecer a estrutura de armazenagem do porto. Na ocasião, foram recebidos pelos servidores da Companhia Docas do Pará, Amiraldo Júnior, supervisor de operações, e Pedro Paulo, fiel de carga do porto.</p><p>O primeiro navio break bulk previsto para deixar Belém rumo a Quetzo em agosto. Nesta modalidade, diferentemente dos conteiners, é possível armazenar a carga individualmente no porão do navio. Apesar de exigir mais tempo de operação, reduz custos diante da alta global no preço dos conteiners. “Antigamente, um conteiners pra Guatemala custava quase dois mil dólares. Hoje, está 9 mil. Isso faz uma diferença muito grande para quem trabalha com exportações”, conclui Jr.'
      },
    }
    return res.status(200).json(data)
  }
  if (slug == 'hospital-galileu') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {

        id: 2,
        slug: 'hospital-galileu',
        banner: {
          url: 'https://api-temp.vercel.app/issaa/novo-galileu.jpg',
          alt: 'unidade do hospital galileu'
        },

        titulo: 'HOSPITAL PÚBLICO ESTADUAL GALILEU',
        descricao:
          'O Hospital Público Estadual Galileu (HPEG) é referência na rede Estadual do Pará em atendimentos de traumas ortopédicos.',
        body: 'O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará, o grupo quer consolidar embarques mensaispara o Porto de Quetzo, na Guatemala, via Canal do Panamá. “Os produtores da nossa região estão crescendo muito a ponto de conseguir uma produção de 30 mil toneladas de gergelim ao ano. É um número muito expressivo. Nossa missão foi encontrar uma solução logística, já que praticamente toda a produção estava sendo exportada pelo Porto de Paranaguá (PR)”, afirma Carlos Pinto Jr., diretor de operações da Matapi.</p><p>As soluções apresentadas aos representantes da empresa guatemalteca Sezam Zaad, uma das maiores agroexportadoras de gergelim, agradaram e Victor Makucheff e José Francisco, a convite do vice-presidente do Grupo Atlântica Matapi, Tiago Pinto, foram conhecer a estrutura de armazenagem do porto. Na ocasião, foram recebidos pelos servidores da Companhia Docas do Pará, Amiraldo Júnior, supervisor de operações, e Pedro Paulo, fiel de carga do porto.</p><p>O primeiro navio break bulk previsto para deixar Belém rumo a Quetzo em agosto. Nesta modalidade, diferentemente dos conteiners, é possível armazenar a carga individualmente no porão do navio. Apesar de exigir mais tempo de operação, reduz custos diante da alta global no preço dos conteiners. “Antigamente, um conteiners pra Guatemala custava quase dois mil dólares. Hoje, está 9 mil. Isso faz uma diferença muito grande para quem trabalha com exportações”, conclui Jr.'
      },
    }
    return res.status(200).json(data)
  }
  if (slug == 'natea-tucurui') {
    const data = {
      error: false,
      message: 'Sem erros',
      results: {

        id: 3,
        slug: 'natea-tucurui',
        banner: {
          url: 'https://api-temp.vercel.app/issaa/hospital-galileu.png',
          alt: 'unidade de natea tucurui'
        },

        titulo: 'POLICLÍNICA/NATEA - TUCURUÍ',
        descricao:
          'A Policlínica/Natea - Tucuruí é um centro de média e alta complexidade que atende uma demanda na saúde do sudeste do Estado do Pará.',
        body: 'O Grupo Atlântica Matapi está desenvolvendo um novo projeto para exportação de grãos de gergelim produzidos no sul do Pará, Maranhão e Tocantins para a América Central.A partir do embarque pelo Porto de Belém, capital do Pará, o grupo quer consolidar embarques mensaispara o Porto de Quetzo, na Guatemala, via Canal do Panamá. “Os produtores da nossa região estão crescendo muito a ponto de conseguir uma produção de 30 mil toneladas de gergelim ao ano. É um número muito expressivo. Nossa missão foi encontrar uma solução logística, já que praticamente toda a produção estava sendo exportada pelo Porto de Paranaguá (PR)”, afirma Carlos Pinto Jr., diretor de operações da Matapi.</p><p>As soluções apresentadas aos representantes da empresa guatemalteca Sezam Zaad, uma das maiores agroexportadoras de gergelim, agradaram e Victor Makucheff e José Francisco, a convite do vice-presidente do Grupo Atlântica Matapi, Tiago Pinto, foram conhecer a estrutura de armazenagem do porto. Na ocasião, foram recebidos pelos servidores da Companhia Docas do Pará, Amiraldo Júnior, supervisor de operações, e Pedro Paulo, fiel de carga do porto.</p><p>O primeiro navio break bulk previsto para deixar Belém rumo a Quetzo em agosto. Nesta modalidade, diferentemente dos conteiners, é possível armazenar a carga individualmente no porão do navio. Apesar de exigir mais tempo de operação, reduz custos diante da alta global no preço dos conteiners. “Antigamente, um conteiners pra Guatemala custava quase dois mil dólares. Hoje, está 9 mil. Isso faz uma diferença muito grande para quem trabalha com exportações”, conclui Jr.'
      },
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
  res.status(200).json(data)
}


