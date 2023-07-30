import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const data = {
    error: false,
    message: 'Sem erros',
    results: {
      boletos: [
        {
          id: 1,
          slug: 'boleto-novembro-2022',
          status: 'pago',
          title_boleto: 'Fatura de Novembro - 11/2022',
          data_pagamento: '10/11/2022',
          data_vencimento: '19/11/2022',
          link_boleto: 'https://www.boletofast.com.br/imagens/BoletoAvulso.png',
          text_codigo_boleto: '23232323333232323232322322323233223223322332233',
          link_comprovante: 'https://templates.invoicehome.com/modelo-de-recibo-pt-branco-classico-750px.png',
          boleto_pdf: 'https://api-temp.vercel.app/assembleia-paraense/boleto-exemplo.pdf',
        },
        {
          id: 2,
          slug: 'boleto-novembro-2021',
          status: 'atrasado',
          title_boleto: 'Fatura de Novembro - 11/2021',
          data_pagamento: null,
          data_vencimento: '19/11/2021',
          link_boleto: 'https://www.boletofast.com.br/imagens/BoletoAvulso.png',
          text_codigo_boleto: '23232323333232323232322322323233223223322332233',
          link_comprovante: 'https://templates.invoicehome.com/modelo-de-recibo-pt-branco-classico-750px.png',
          boleto_pdf: 'https://api-temp.vercel.app/assembleia-paraense/boleto-exemplo.pdf',
        },
        {
          id: 3,
          slug: 'boleto-agosto-2021',
          status: 'em espera',
          title_boleto: 'Fatura de Agosto - 08/2022',
          data_pagamento: '23/08/2022',
          data_vencimento: '19/11/2024',
          link_boleto: 'https://www.boletofast.com.br/imagens/BoletoAvulso.png',
          text_codigo_boleto: '23232323333232323232322322323233223223322332233',
          link_comprovante: 'https://templates.invoicehome.com/modelo-de-recibo-pt-branco-classico-750px.png',
          boleto_pdf: 'https://api-temp.vercel.app/assembleia-paraense/boleto-exemplo.pdf',
        },
      ],
    }
  }

  res.status(200).json(data)
}
