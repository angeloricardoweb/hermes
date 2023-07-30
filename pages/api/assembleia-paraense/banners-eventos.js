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
      banners: [
        {
          id: 1,
          title_evento: 'Esporte 2022',
          descricao_evento: 'Inscrições abertas até às 12h do dia 20/04, no valor de R$ 100,00 por dupla. Solicite o link de inscrições para a Ana Paula, nossa assistente virtual. Basta mandar qualquer mensagem para o número 91 98408-0000, como “Olá”, “Oi”, “Boa tarde”, que o atendimento da assistente virtual será iniciado. Em seguida, escolhe a Falar com Departamentos (opção 4) > Tenis (opção 6).',
          link_evento: 'https://www.assembleiaparaense.com.br/eventos/agenda/cha-das-cinco-junino',
          image: 'https://api-temp.vercel.app/assembleia-paraense/banners/slide-1.png',
        },
        {
          id: 2,
          title_evento: 'Torneio 2022',
          descricao_evento: 'Inscrições abertas até às 12h do dia 20/04, no valor de R$ 100,00 por dupla. Solicite o link de inscrições para a Ana Paula, nossa assistente virtual. Basta mandar qualquer mensagem para o número 91 98408-0000, como “Olá”, “Oi”, “Boa tarde”, que o atendimento da assistente virtual será iniciado. Em seguida, escolhe a Falar com Departamentos (opção 4) > Tenis (opção 6).',
          link_evento: 'https://www.assembleiaparaense.com.br/eventos/agenda/burgers-e-brejas-ap-2023',
          image: 'https://api-temp.vercel.app/assembleia-paraense/banners/slide-2.png',
        },
        {
          id: 3,
          title_evento: 'Evento 2022',
          descricao_evento: 'Inscrições abertas até às 12h do dia 20/04, no valor de R$ 100,00 por dupla. Solicite o link de inscrições para a Ana Paula, nossa assistente virtual. Basta mandar qualquer mensagem para o número 91 98408-0000, como “Olá”, “Oi”, “Boa tarde”, que o atendimento da assistente virtual será iniciado. Em seguida, escolhe a Falar com Departamentos (opção 4) > Tenis (opção 6).',
          link_evento: 'https://www.assembleiaparaense.com.br/eventos/agenda/estacao-alegria-festa-dos-aniversariantes-do-trimestre-4',
          image: 'https://api-temp.vercel.app/assembleia-paraense/banners/slide-3.png',
        },
        {
          id: 4,
          title_evento: 'Evento 2022',
          descricao_evento: 'Inscrições abertas até às 12h do dia 20/04, no valor de R$ 100,00 por dupla. Solicite o link de inscrições para a Ana Paula, nossa assistente virtual. Basta mandar qualquer mensagem para o número 91 98408-0000, como “Olá”, “Oi”, “Boa tarde”, que o atendimento da assistente virtual será iniciado. Em seguida, escolhe a Falar com Departamentos (opção 4) > Tenis (opção 6).',
          link_evento: 'https://www.assembleiaparaense.com.br/eventos/agenda/campeonato-de-basquete-2023',
          image: 'https://api-temp.vercel.app/assembleia-paraense/banners/slide-4.png',
        },
        {
          id: 5,
          title_evento: 'Evento 2022',
          descricao_evento: 'Inscrições abertas até às 12h do dia 20/04, no valor de R$ 100,00 por dupla. Solicite o link de inscrições para a Ana Paula, nossa assistente virtual. Basta mandar qualquer mensagem para o número 91 98408-0000, como “Olá”, “Oi”, “Boa tarde”, que o atendimento da assistente virtual será iniciado. Em seguida, escolhe a Falar com Departamentos (opção 4) > Tenis (opção 6).',
          link_evento: 'https://www.assembleiaparaense.com.br/ap-conquista-premio-da-fenaclubes-2022',
          image: 'https://api-temp.vercel.app/assembleia-paraense/banners/slide-5.png',
        },
        {
          id: 6,
          title_evento: 'Evento 2022',
          descricao_evento: 'Inscrições abertas até às 12h do dia 20/04, no valor de R$ 100,00 por dupla. Solicite o link de inscrições para a Ana Paula, nossa assistente virtual. Basta mandar qualquer mensagem para o número 91 98408-0000, como “Olá”, “Oi”, “Boa tarde”, que o atendimento da assistente virtual será iniciado. Em seguida, escolhe a Falar com Departamentos (opção 4) > Tenis (opção 6).',
          link_evento: 'https://www.assembleiaparaense.com.br/ap-e-guajara-formam-parceria-firme-nas-aguas',
          image: 'https://api-temp.vercel.app/assembleia-paraense/banners/slide-6.png',
        },
        {
          id: 7,
          title_evento: 'Evento 2022',
          descricao_evento: 'Inscrições abertas até às 12h do dia 20/04, no valor de R$ 100,00 por dupla. Solicite o link de inscrições para a Ana Paula, nossa assistente virtual. Basta mandar qualquer mensagem para o número 91 98408-0000, como “Olá”, “Oi”, “Boa tarde”, que o atendimento da assistente virtual será iniciado. Em seguida, escolhe a Falar com Departamentos (opção 4) > Tenis (opção 6).',
          link_evento: 'https://www.assembleiaparaense.com.br/clube-de-vantagens-partiu-ap	',
          image: 'https://api-temp.vercel.app/assembleia-paraense/banners/slide-7.png',
        },
        {
          id: 8,
          title_evento: 'Evento 2022',
          descricao_evento: 'Inscrições abertas até às 12h do dia 20/04, no valor de R$ 100,00 por dupla. Solicite o link de inscrições para a Ana Paula, nossa assistente virtual. Basta mandar qualquer mensagem para o número 91 98408-0000, como “Olá”, “Oi”, “Boa tarde”, que o atendimento da assistente virtual será iniciado. Em seguida, escolhe a Falar com Departamentos (opção 4) > Tenis (opção 6).',
          link_evento: 'https://www.assembleiaparaense.com.br/clube-de-vantagens-partiu-ap',
          image: 'https://api-temp.vercel.app/assembleia-paraense/banners/slide-8.png',
        },

        {
          id: 9,
          title_evento: 'Evento 2022',
          descricao_evento: 'Inscrições abertas até às 12h do dia 20/04, no valor de R$ 100,00 por dupla. Solicite o link de inscrições para a Ana Paula, nossa assistente virtual. Basta mandar qualquer mensagem para o número 91 98408-0000, como “Olá”, “Oi”, “Boa tarde”, que o atendimento da assistente virtual será iniciado. Em seguida, escolhe a Falar com Departamentos (opção 4) > Tenis (opção 6).',
          link_evento: 'https://www.assembleiaparaense.com.br/ana-paula-assistente-virtual-da-ap',
          image: 'https://api-temp.vercel.app/assembleia-paraense/banners/slide-9.png',
        },
      ],
    },
  };

  res.status(200).json(data);
}
