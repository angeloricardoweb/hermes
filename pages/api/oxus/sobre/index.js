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
    results: {
      conteudo: {
        a_oxus:
          '<p>Empreendedorismo está em todo ser, a liderança adequada está em poucos e sem liderança não existe empresa.</p><p>A OXUS foi criada em 1996 com o objetivo de gerar soluções de gestão empresariais para micro, pequenas, médias e grandes empresas, com foco em resultados para o negócio. Sua história vem de 14 estados e 6 países desenvolvendo projetos de gestão empresarial, gestão da qualidade, produção, produtividade e marketing.</p><p>OXUS é especialista em criação e gestão empresarial, certificações nacionais e internacionais (principalmente as com base na norma ISO).</p><p>Nosso grande diferencial é a equipe de consultores seniores e multidisciplinares, ou seja contratando a OXUS, atuaremos de forma customizada na área que a empresa está com maiores necessidades, sendo em um setor ou mais setores.</p>',
        visao:
          '<p>Estar entre as 10 melhores empresas de consultoria, especializadas em projetos de gestão empresarial e inovação do Brasil seja, na área pública ou privada até 2025.</p>',
        missao:
          '<p>Criar projetos comprometidos com a transformação de resultados empresariais positivos, com inovação tecnológica, redução de custo otimizando todos os setores, de forma continua gerar avaliações sistêmicas de melhoria, assessorado pelo plano de marketing.</p>',
        como_atuamos:
          '<p>No seguimento de projetos empresariais no setor privado e público projetos de desenvolvimento social e econômico.</p><p>Hoje a OXUS conta com uma equipe de seis (06) consultores de sêniores de alto nível e um time de oito (08) consultores plenos qualificados;</p>',
      },
    },
  };
  res.status(200).json(data);
}
