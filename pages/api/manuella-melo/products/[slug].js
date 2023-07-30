import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  const { slug } = req.query;

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
      metadata: {
        pagina: 'Produto',
        categoria: 'Praia',
        subCategoria: 'Bikini',
        titulo: 'Bikini Marina',
        slug,
      },
      produtos: [
        {
          id: 123,
          preco: 600,
          maxParcelas: 3,
          nome: 'Sutiã Marina',
          caracteristicas: {
            cores: {
              id: 1,
              nome: 'Cor',
              opcoes: [
                { id: 1, nome: 'Preto Noite', hex: '#1b1b1b' },
                { id: 2, nome: 'Azul Alexandria', hex: '#6060bc' },
                { id: 4, nome: 'Rosa Esmaltado', hex: '#ff00ff' },
                { id: 5, nome: 'Amarelo Singular', hex: '#cece44' },
                { id: 6, nome: 'Verde Esperalda', hex: '#50e950' },
              ],
            },
            detalhes: {
              material: '100% algodão'
            },
            tamanhos: {
              id: 2,
              nome: 'Tamanho',
              opcoes: [
                { id: 1, valor: '36' },
                { id: 2, valor: '38' },
                { id: 3, valor: '40' },
                { id: 4, valor: '42' },
                { id: 5, valor: '44' },
              ],
            },
          },
        },
        {
          id: 456,
          preco: 600,
          maxParcelas: 3,
          nome: 'Calça Marina',
          caracteristicas: {
            cores: {
              id: 1,
              nome: 'Cor',
              opcoes: [
                { id: 1, nome: 'Preto Noite', hex: '#1b1b1b' },
                { id: 2, nome: 'Azul Alexandria', hex: '#6060bc' },
                { id: 4, nome: 'Rosa Esmaltado', hex: '#ff00ff' },
                { id: 5, nome: 'Amarelo Singular', hex: '#cece44' },
                { id: 6, nome: 'Verde Esperalda', hex: '#50e950' },
              ],
            },
            detalhes: {
              material: '100% algodão'
            },
            tamanhos: {
              id: 2,
              nome: 'Tamanho',
              opcoes: [
                { id: 1, valor: '36' },
                { id: 2, valor: '38' },
                { id: 3, valor: '40' },
                { id: 4, valor: '42' },
                { id: 5, valor: '44' },
              ],
            },
          },
        },
      ],
      detalhes: [
        {
          id: 1,
          titulo: 'Composição',
          descricao: '98% Algodão 2% Elastano',
        },
        {
          id: 2,
          titulo: 'Lavagem',
          descricao: 'Lavagem a mão',
        },
      ],
      imagens: [
        {
          id: 1,
          url: 'https://api-temp.vercel.app/manuella-melo/model-1.webp',
          zoom_url: 'https://api-temp.vercel.app/manuella-melo/model-1-zoom.webp',
        },
        {
          id: 2,
          url: 'https://api-temp.vercel.app/manuella-melo/model-2.webp',
          zoom_url: 'https://api-temp.vercel.app/manuella-melo/model-2-zoom.webp',
        },
        {
          id: 3,
          url: 'https://api-temp.vercel.app/manuella-melo/model-3.webp',
          zoom_url: 'https://api-temp.vercel.app/manuella-melo/model-3-zoom.webp',
        },
        {
          id: 4,
          url: 'https://api-temp.vercel.app/manuella-melo/model-4.webp',
          zoom_url: 'https://api-temp.vercel.app/manuella-melo/model-4-zoom.webp',
        },
      ],
    },
  };

  res.status(200).json(data);
}
