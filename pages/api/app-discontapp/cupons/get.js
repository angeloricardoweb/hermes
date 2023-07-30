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
        nome_filial: 'Filial',
        valor_desconto: '10%',
        validade: '09/03/2023',
        codigo_cupom: '7B23YUIA98',
        nome_empresa: 'Cachorro Feliz LTDA',
        nome_cupom: 'Comida Natural Congelada',
        imagem_cupom: 'https://api-temp.vercel.app/app-discontapp/produto-capa.png',
        resumo: 'Cinco marmitas com refeições naturais de carne, frango, carne moída, legumes e vegetais, tudo 100% natural.',
        descricao_completa: 'I - nome empresarial e número de inscrição do fornecedor, quando houver, no Cadastro Nacional de Pessoas Físicas ou no Cadastro Nacional de Pessoas Jurídicas do Ministério da Fazenda; II - endereço físico e eletrônico, e demais informações necessárias para sua localização e contato; III - características essenciais do produto ou do serviço, incluídos os riscos à saúde e à segurança dos consumidores; IV - discriminação, no preço, de quaisquer despesas adicionais ou acessórias, tais como as de entrega ou seguros; V - condições integrais da oferta, incluídas modalidades de pagamento, disponibilidade, forma e prazo da execução do serviço ou da entrega ou disponibilização do produto; e VI - informações claras e ostensivas a respeito de quaisquer restrições à fruição da oferta. VII - prazo para utilização da oferta pelo consumidor;',
      },
    ]
  };

  return res.status(200).json(data);
}