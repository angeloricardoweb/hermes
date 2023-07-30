import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    origin: '*',
    optionsSuccessStatus: 200, 
  });

  const data = {
    error: false,
    message: 'Sem erros',
    results: [
      {
        id: 1,
        status: 1,
        titulo: 'Políticas',
        descricao_completa: "Política de Qualidade: Compromisso em oferecer serviços de alta qualidade, atendendo às necessidades e expectativas dos clientes, buscando a melhoria contínua dos processos e promovendo a satisfação do client Política de Atendimento ao Cliente: Estabelecimento de diretrizes para um atendimento cortês, respeitoso e eficiente, garantindo que todas as interações com os clientes sejam tratadas de maneira profissional e satisfatória. Política de Confidencialidade: Proteção das informações confidenciais dos clientes, colaboradores e parceiros de negócios, garantindo a segurança e o sigilo adequados em relação aos dados compartilhados durante a prestação de serviços. Política de Responsabilidade Social e Ambiental: Compromisso em adotar práticas responsáveis, tanto socialmente quanto ambientalmente, buscando minimizar impactos negativos, promover a sustentabilidade e contribuir para o desenvolvimento da comunidade. Política de Recursos Humanos: Estabelecimento de diretrizes para a gestão dos colaboradores, incluindo recrutamento e seleção, treinamento e desenvolvimento, remuneração justa, incentivos, benefícios e um ambiente de trabalho seguro e saudável. Política de Ética: Promoção de comportamentos éticos e honestos por parte dos colaboradores, evitando conflitos de interesse, corrupção e condutas antiéticas, estabelecendo diretrizes claras para a integridade nos negócios. Política de Segurança: Compromisso com a segurança dos clientes, colaboradores e locais de trabalho, implementando medidas de prevenção de acidentes, proteção de dados e informações, além de garantir a conformidade com as leis e regulamentações aplicáveis. Lembrando que essas são apenas algumas políticas comuns e que cada empresa pode adaptar e personalizar suas políticas de acordo com suas necessidades e objetivos específicos.",
      },
      {
        id: 2,
        status: 1,
        titulo: 'Termos de uso',
        descricao_completa: "Política de Qualidade: Compromisso em oferecer serviços de alta qualidade, atendendo às necessidades e expectativas dos clientes, buscando a melhoria contínua dos processos e promovendo a satisfação do client Política de Atendimento ao Cliente: Estabelecimento de diretrizes para um atendimento cortês, respeitoso e eficiente, garantindo que todas as interações com os clientes sejam tratadas de maneira profissional e satisfatória. Política de Confidencialidade: Proteção das informações confidenciais dos clientes, colaboradores e parceiros de negócios, garantindo a segurança e o sigilo adequados em relação aos dados compartilhados durante a prestação de serviços. Política de Responsabilidade Social e Ambiental: Compromisso em adotar práticas responsáveis, tanto socialmente quanto ambientalmente, buscando minimizar impactos negativos, promover a sustentabilidade e contribuir para o desenvolvimento da comunidade. Política de Recursos Humanos: Estabelecimento de diretrizes para a gestão dos colaboradores, incluindo recrutamento e seleção, treinamento e desenvolvimento, remuneração justa, incentivos, benefícios e um ambiente de trabalho seguro e saudável. Política de Ética: Promoção de comportamentos éticos e honestos por parte dos colaboradores, evitando conflitos de interesse, corrupção e condutas antiéticas, estabelecendo diretrizes claras para a integridade nos negócios. Política de Segurança: Compromisso com a segurança dos clientes, colaboradores e locais de trabalho, implementando medidas de prevenção de acidentes, proteção de dados e informações, além de garantir a conformidade com as leis e regulamentações aplicáveis. Lembrando que essas são apenas algumas políticas comuns e que cada empresa pode adaptar e personalizar suas políticas de acordo com suas necessidades e objetivos específicos.",
      },
      {
        id: 3,
        status: 1,
        titulo: 'Política',
        descricao_completa: "Política de Qualidade: Compromisso em oferecer serviços de alta qualidade, atendendo às necessidades e expectativas dos clientes, buscando a melhoria contínua dos processos e promovendo a satisfação do client Política de Atendimento ao Cliente: Estabelecimento de diretrizes para um atendimento cortês, respeitoso e eficiente, garantindo que todas as interações com os clientes sejam tratadas de maneira profissional e satisfatória. Política de Confidencialidade: Proteção das informações confidenciais dos clientes, colaboradores e parceiros de negócios, garantindo a segurança e o sigilo adequados em relação aos dados compartilhados durante a prestação de serviços. Política de Responsabilidade Social e Ambiental: Compromisso em adotar práticas responsáveis, tanto socialmente quanto ambientalmente, buscando minimizar impactos negativos, promover a sustentabilidade e contribuir para o desenvolvimento da comunidade. Política de Recursos Humanos: Estabelecimento de diretrizes para a gestão dos colaboradores, incluindo recrutamento e seleção, treinamento e desenvolvimento, remuneração justa, incentivos, benefícios e um ambiente de trabalho seguro e saudável. Política de Ética: Promoção de comportamentos éticos e honestos por parte dos colaboradores, evitando conflitos de interesse, corrupção e condutas antiéticas, estabelecendo diretrizes claras para a integridade nos negócios. Política de Segurança: Compromisso com a segurança dos clientes, colaboradores e locais de trabalho, implementando medidas de prevenção de acidentes, proteção de dados e informações, além de garantir a conformidade com as leis e regulamentações aplicáveis. Lembrando que essas são apenas algumas políticas comuns e que cada empresa pode adaptar e personalizar suas políticas de acordo com suas necessidades e objetivos específicos.",
      },
      {
        id: 4,
        status: 1,
        titulo: 'Anúncio',
        descricao_completa: "Política de Qualidade: Compromisso em oferecer serviços de alta qualidade, atendendo às necessidades e expectativas dos clientes, buscando a melhoria contínua dos processos e promovendo a satisfação do client Política de Atendimento ao Cliente: Estabelecimento de diretrizes para um atendimento cortês, respeitoso e eficiente, garantindo que todas as interações com os clientes sejam tratadas de maneira profissional e satisfatória. Política de Confidencialidade: Proteção das informações confidenciais dos clientes, colaboradores e parceiros de negócios, garantindo a segurança e o sigilo adequados em relação aos dados compartilhados durante a prestação de serviços. Política de Responsabilidade Social e Ambiental: Compromisso em adotar práticas responsáveis, tanto socialmente quanto ambientalmente, buscando minimizar impactos negativos, promover a sustentabilidade e contribuir para o desenvolvimento da comunidade. Política de Recursos Humanos: Estabelecimento de diretrizes para a gestão dos colaboradores, incluindo recrutamento e seleção, treinamento e desenvolvimento, remuneração justa, incentivos, benefícios e um ambiente de trabalho seguro e saudável. Política de Ética: Promoção de comportamentos éticos e honestos por parte dos colaboradores, evitando conflitos de interesse, corrupção e condutas antiéticas, estabelecendo diretrizes claras para a integridade nos negócios. Política de Segurança: Compromisso com a segurança dos clientes, colaboradores e locais de trabalho, implementando medidas de prevenção de acidentes, proteção de dados e informações, além de garantir a conformidade com as leis e regulamentações aplicáveis. Lembrando que essas são apenas algumas políticas comuns e que cada empresa pode adaptar e personalizar suas políticas de acordo com suas necessidades e objetivos específicos.",
      },
    ]
  };

  return res.status(200).json(data);
}