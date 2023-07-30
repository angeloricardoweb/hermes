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
      certificado: {
        sgi: [
          {
            id: '1',
            titulo: 'ISO 9001/2015',
            descricao:
              'Buscar potencializar a performance de um negócio, garantindo qualidade máxima dos processos internos e externos.',
          },
          {
            id: '2',
            titulo: 'ISO 14001/2015',
            descricao:
              'Norma que avalia a cadeia produtiva da empresa, a fim de identificar atividades poluidoras e pontos de desperdício, além de promover o monitoramento do sistema de gestão ambiental.',
          },
          {
            id: '3',
            titulo: 'ISO 45001/2015',
            descricao:
              'Visa ajudar as organizações a repensarem nos seus processos visando diminuir as doenças ocupacionais bem como os acidentes no trabalho',
          },
        ],
        normas_especificas: [
          {
            id: '1',
            titulo: 'ISO 17025/2015',
            descricao:
              'O certificado comprova que o laboratório executa suas atividades com precisão, com resultados de alta qualidade.',
          },
          {
            id: '2',
            titulo: 'ISO 27001/2015',
            descricao:
              'É uma norma internacional de gestão de segurança da informação, que tem como principal objetivo o atendimento de uma série de requisitos, processos e controles, que visam gerir a segurança da informação presentes em uma empresa.',
          },
          {
            id: '3',
            titulo: 'ISO 37001/2021',
            descricao:
              'Norma internacional desenvolvida para ajudar organizações a implementar um Sistema de Gestão Antissuborno (SGAS).',
          },
          {
            id: '3',
            titulo: 'PBQO-h construção/habitação',
            descricao:
              'É uma certificação exigida pela Caixa Econômica (e demais instituições financeiras) para ter acesso a financiamento construtivo e no caso de licitações públicas.',
          },
        ],
        seguranca_aliementos: [
          {
            id: '1',
            titulo: 'ISO 22000/2015',
            descricao:
              'Norma de gerenciamento de segurança de alimentos fornece requisitos específicos para um sistema de gerenciamento de segurança de alimentos.',
          },
          {
            id: '2',
            titulo: 'FSSC 22000',
            descricao:
              'Certificação de Sistema de Segurança de Alimentos Baseada na norma ISO 22000 e complementada por normas técnicas, como a ISO TS 22002-1 para a fabricação de alimentos',
          },
          {
            id: '3',
            titulo: 'APPCC / HACCP',
            descricao:
              'Apresenta um conjunto de requisitos e técnicas para a implantação do programa de gerenciamento de riscos operacionais a segurança dos alimentos em empresas de alimentos, ou que tenham participação da cadeia de alimentos.',
          },
          {
            id: '3',
            titulo: 'BPF',
            descricao:
              'O termo Boas Práticas de Fabricação  é normalmente utilizado em referência à práticas de fabricação aplicáveis as industrias alimentícia, farmacêutica, cosmética, de dispositivos médicos.',
          },
        ],
        sgq: [
          {
            id: '1',
            titulo: '5S',
            descricao:
              'É um programa de gestão de qualidade empresarial desenvolvido no Japão que visa aperfeiçoar aspectos como organização, limpeza e padronização.',
          },
          {
            id: '2',
            titulo: '5W2H',
            descricao:
              'O método 5W2H é uma ferramenta de gestão utilizada para definir direcionamentos estratégicos de um plano. A ideia é responder sete perguntas básicas para entender quais são os próximos passos.',
          },
          {
            id: '3',
            titulo: '7 ferramentas da qualidade',
            descricao:
              'As sete ferramentas do controle de qualidade é uma denominação para técnicas gráficas específicas identificadas como as mais úteis na resolução de problemas que têm relação com o conceito de qualidade. ',
          },
          {
            id: '3',
            titulo: 'MASP',
            descricao:
              'Método de Análise e Solução de Problemas e busca identificar as causas de um problema para, então, propor soluções efetivas e definitivas, maximizando os resultados.',
          },
        ],
      },
    },
  };
  res.status(200).json(data);
}
