import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  const { slug } = req.query

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  if (slug == 'unidade-jurunas') {
    const data = {
      error: false,
      message: 'Sem erro',
      lojadetalhes: [
        {
          id: 1,
          slug: 'unidade-jurunas',
          nome: 'Unidade Jurunas',
          descricao_unidade: 'Unidade Jurunas',
          endereco:
            'R. Eng. Fernando Guilhon, 962 66033-315 - Jurunas - Belém - Pará',
          link_endereco: 'https://goo.gl/maps/1YjUGPoCtHW5Phyr5',
          telefones_atendimento: {
            telefone: '',
            whatsapp: '(91) 98393-8684'
          },
          horario_atendimento: {
            segunda: '07:00–21:00',
            terca: '07:00–21:00',
            quarta: '07:00–21:00',
            quinta: '07:00–21:00',
            sexta: '07:00–21:00',
            sabado: '07:00–21:00',
            domingo: '08:00–14:00',
            feriados: '07:30-14:00'
          },
          img_carrosel: {
            primeira: '/unidade/jurunas.jpg',
            titulo_primeira: 'Título img 1',
            segunda: '/unidade/jurunas.jpg',
            titulo_segunda: 'Título img 2',
            terceira: '/unidade/jurunas.jpg',
            titulo_terceira: 'Título img 3',
            quarta: '/unidade/jurunas.jpg',
            titulo_quarta: 'Título img 4'
          }
        }
      ]
    }
    res.status(200).json(data)
  }
  if (slug == 'unidade-umarizal') {
    const data = {
      error: false,
      message: 'Sem erro',
      lojadetalhes: [
        {
          id: 2,
          slug: 'unidade-umarizal',
          nome: 'Unidade Umarizal',
          descricao_unidade: 'Unidade Umarizal',
          endereco:
            'Av. Pedro Álvares Cabral, 70 Marambaia, Belém - PA, 66050-400',
          link_endereco: 'https://goo.gl/maps/dnvYA5rqRSjSQ28Z8',
          telefones_atendimento: {
            telefone: '(91) 3120-3256',
            whatsapp: '(91) 98393-8684'
          },
          horario_atendimento: {
            segunda: '07:00–21:00',
            terca: '07:00–21:00',
            quarta: '07:00–21:00',
            quinta: '07:00–21:00',
            sexta: '07:00–21:00',
            sabado: '07:00–21:00',
            domingo: '08:00–14:00',
            feriados: '07:30-14:00'
          },
          img_carrosel: {
            primeira: '/unidade/umarizal.png',
            titulo_primeira: 'Título img 1',
            segunda: '/unidade/umarizal.png',
            titulo_segunda: 'Título img 2',
            terceira: '/unidade/umarizal.png',
            titulo_terceira: 'Título img 3',
            quarta: '/unidade/umarizal.png',
            titulo_quarta: 'Título img 4'
          }
        }
      ]
    }
    res.status(200).json(data)
  }
  if (slug == 'unidade-pedreira') {
    const data = {
      error: false,
      message: 'Sem erro',
      lojadetalhes: [
        {
          id: 3,
          slug: 'unidade-pedreira',
          nome: 'Unidade Pedreira',
          descricao_unidade: 'Unidade Pedreira',
          endereco: 'Av. Pedro Miranda, 1021 Pedreira, Belém - PA, 66085-022',
          link_endereco: 'https://goo.gl/maps/ysC7povLD8Dmogzg8',
          telefones_atendimento: {
            telefone: '',
            whatsapp: '(91) 98393-8684'
          },
          horario_atendimento: {
            segunda: '07:00–21:00',
            terca: '07:00–21:00',
            quarta: '07:00–21:00',
            quinta: '07:00–21:00',
            sexta: '07:00–21:00',
            sabado: '07:00–21:00',
            domingo: '08:00–14:00',
            feriados: '07:30-14:00'
          },
          img_carrosel: {
            primeira: '/unidade/pedreira.jpg',
            titulo_primeira: 'Título img 1',
            segunda: '/unidade/pedreira.jpg',
            titulo_segunda: 'Título img 2',
            terceira: '/unidade/pedreira.jpg',
            titulo_terceira: 'Título img 3',
            quarta: '/unidade/pedreira.jpg',
            titulo_quarta: 'Título img 4'
          }
        }
      ]
    }
    res.status(200).json(data)
  }
  if (slug == 'unidade-coqueiro') {
    const data = {
      error: false,
      message: 'Sem erro',
      lojadetalhes: [
        {
          id: 4,
          slug: 'unidade-coqueiro',
          nome: 'Unidade Coqueiro',
          descricao_unidade: 'Unidade Coqueiro',
          endereco:
            'Rod. Mário Covas, 147 Coqueiro, Ananindeua - PA, 67113-330',
          link_endereco: 'https://goo.gl/maps/WT9nfMzH4eu7Y5847',
          telefones_atendimento: {
            telefone: '9130121234',
            whatsapp: '91901231234'
          },
          horario_atendimento: {
            segunda: '07:00–21:00',
            terca: '07:00–21:00',
            quarta: '07:00–21:00',
            quinta: '07:00–21:00',
            sexta: '07:00–21:00',
            sabado: '07:00–21:00',
            domingo: '08:00–14:00',
            feriados: '07:30-14:00'
          },
          img_carrosel: {
            primeira: '/unidade/coqueiro.jpg',
            titulo_primeira: 'Título img 1',
            segunda: '/unidade/coqueiro.jpg',
            titulo_segunda: 'Título img 2',
            terceira: '/unidade/coqueiro.jpg',
            titulo_terceira: 'Título img 3',
            quarta: '/unidade/coqueiro.jpg',
            titulo_quarta: 'Título img 4'
          }
        }
      ]
    }
    res.status(200).json(data)
  }
  if (slug == 'unidade-castanheira') {
    const data = {
      error: false,
      message: 'Sem erro',
      lojadetalhes: [
        {
          id: 5,
          slug: 'unidade-castanheira',
          nome: 'Unidade Castanheira',
          descricao_unidade: 'Unidade Castanheira',
          endereco:
            'Rod. Mário Covas, 147 Castanheira, Ananindeua - PA, 67113-330',
          link_endereco: 'https://goo.gl/maps/WT9nfMzH4eu7Y5847',
          telefones_atendimento: {
            telefone: '9130121234',
            whatsapp: '91901231234'
          },
          horario_atendimento: {
            segunda: '07:00–21:00',
            terca: '07:00–21:00',
            quarta: '07:00–21:00',
            quinta: '07:00–21:00',
            sexta: '07:00–21:00',
            sabado: '07:00–21:00',
            domingo: '08:00–14:00',
            feriados: '07:30-14:00'
          },
          img_carrosel: {
            primeira: '/unidade/castanheira.jpg',
            titulo_primeira: 'Título img 1',
            segunda: '/unidade/castanheira.jpg',
            titulo_segunda: 'Título img 2',
            terceira: '/unidade/castanheira.jpg',
            titulo_terceira: 'Título img 3',
            quarta: '/unidade/castanheira.jpg',
            titulo_quarta: 'Título img 4'
          }
        }
      ]
    }
    res.status(200).json(data)
  }

  // const data = {
  //     error: false,
  //     message: 'Sem erro',
  //     lojadetalhes: [
  //         {
  //             id: 1,
  //             slug: 'unidade-jurunas',
  //             nome: 'Unidade Jurunas',
  //             descricao_unidade: 'Unidade Jurunas',
  //             endereco: 'R. Eng. Fernando Guilhon, 962 66033-315 - Jurunas - Belém - Pará',
  //             link_endereco: 'https://goo.gl/maps/1YjUGPoCtHW5Phyr5',
  //             telefones_atendimento: {
  //                 telefone: '9130121234',
  //                 whatsapp: '91901231234',
  //             },
  //             horario_atendimento: {
  //                 segunda: '07:00–21:00',
  //                 terca: '07:00–21:00',
  //                 quarta: '07:00–21:00',
  //                 quinta: '07:00–21:00',
  //                 sexta: '07:00–21:00',
  //                 sabado: '07:00–21:00',
  //                 domingo: '08:00–14:00',
  //                 feriados: '07:30-14:00',
  //             },
  //             img_carrosel: {
  //                 primeira: '/img/carrosel/img1.jpg',
  //                 titulo_primeira: 'Título img 1',
  //                 segunda: '/img/carrosel/img2.jpg',
  //                 titulo_segunda: 'Título img 2',
  //                 terceira: '/img/carrosel/img3.jpg',
  //                 titulo_terceira: 'Título img 3',
  //                 quarta: '/img/carrosel/img4.jpg',
  //                 titulo_quarta: 'Título img 4',
  //             },
  //         },
  //         {
  //         id: 2,
  //         slug: 'unidade-umarizal',
  //         nome: 'Unidade Umarizal',
  //         descricao_unidade: 'Unidade Umarizal',
  //         endereco: 'Av. Pedro Álvares Cabral, 70 Marambaia, Belém - PA, 66050-400',
  //         link_endereco: 'https://goo.gl/maps/dnvYA5rqRSjSQ28Z8',
  //         telefones_atendimento: {
  //             telefone: '9130121234',
  //             whatsapp: '91901231234',
  //         },
  //         horario_atendimento: {
  //             segunda: '07:00–21:00',
  //             terca: '07:00–21:00',
  //             quarta: '07:00–21:00',
  //             quinta: '07:00–21:00',
  //             sexta: '07:00–21:00',
  //             sabado: '07:00–21:00',
  //             domingo: '08:00–14:00',
  //             feriados: '07:30-14:00',
  //         },
  //         img_carrosel: {
  //             primeira: '/img/carrosel/img1.jpg',
  //             titulo_primeira: 'Título img 1',
  //             segunda: '/img/carrosel/img2.jpg',
  //             titulo_segunda: 'Título img 2',
  //             terceira: '/img/carrosel/img3.jpg',
  //             titulo_terceira: 'Título img 3',
  //             quarta: '/img/carrosel/img4.jpg',
  //             titulo_quarta: 'Título img 4',
  //         },
  //         },
  //         {
  //             id: 3,
  //             slug: 'unidade-pedreira',
  //             nome: 'Unidade Pedreira',
  //             descricao_unidade: 'Unidade Pedreira',
  //             endereco: 'Av. Pedro Miranda, 1021 Pedreira, Belém - PA, 66085-022',
  //             link_endereco: 'https://goo.gl/maps/ysC7povLD8Dmogzg8',
  //             telefones_atendimento: {
  //                 telefone: '9130121234',
  //                 whatsapp: '91901231234',
  //             },
  //             horario_atendimento: {
  //                 segunda: '07:00–21:00',
  //                 terca: '07:00–21:00',
  //                 quarta: '07:00–21:00',
  //                 quinta: '07:00–21:00',
  //                 sexta: '07:00–21:00',
  //                 sabado: '07:00–21:00',
  //                 domingo: '08:00–14:00',
  //                 feriados: '07:30-14:00',
  //             },
  //             img_carrosel: {
  //                 primeira: '/img/carrosel/img1.jpg',
  //                 titulo_primeira: 'Título img 1',
  //                 segunda: '/img/carrosel/img2.jpg',
  //                 titulo_segunda: 'Título img 2',
  //                 terceira: '/img/carrosel/img3.jpg',
  //                 titulo_terceira: 'Título img 3',
  //                 quarta: '/img/carrosel/img4.jpg',
  //                 titulo_quarta: 'Título img 4',
  //             },
  //         },
  //         {
  //             id: 4,
  //             slug: 'unidade-coqueiro',
  //             nome: 'Unidade Coqueiro',
  //             descricao_unidade: 'Unidade Coqueiro',
  //             endereco: 'Rod. Mário Covas, 147 Coqueiro, Ananindeua - PA, 67113-330',
  //             link_endereco: 'https://goo.gl/maps/WT9nfMzH4eu7Y5847',
  //             telefones_atendimento: {
  //                 telefone: '9130121234',
  //                 whatsapp: '91901231234',
  //             },
  //             horario_atendimento: {
  //                 segunda: '07:00–21:00',
  //                 terca: '07:00–21:00',
  //                 quarta: '07:00–21:00',
  //                 quinta: '07:00–21:00',
  //                 sexta: '07:00–21:00',
  //                 sabado: '07:00–21:00',
  //                 domingo: '08:00–14:00',
  //                 feriados: '07:30-14:00',
  //             },
  //             img_carrosel: {
  //                 primeira: '/img/carrosel/img1.jpg',
  //                 titulo_primeira: 'Título img 1',
  //                 segunda: '/img/carrosel/img2.jpg',
  //                 titulo_segunda: 'Título img 2',
  //                 terceira: '/img/carrosel/img3.jpg',
  //                 titulo_terceira: 'Título img 3',
  //                 quarta: '/img/carrosel/img4.jpg',
  //                 titulo_quarta: 'Título img 4',
  //             },
  //         },
  //         {
  //             id: 5,
  //             slug: 'unidade-castanheira',
  //             nome: 'Unidade Castanheira',
  //             descricao_unidade: 'Unidade Castanheira',
  //             endereco: 'Rod. Mário Covas, 147 Castanheira, Ananindeua - PA, 67113-330',
  //             link_endereco: 'https://goo.gl/maps/WT9nfMzH4eu7Y5847',
  //             telefones_atendimento: {
  //                 telefone: '9130121234',
  //                 whatsapp: '91901231234',
  //             },
  //             horario_atendimento: {
  //                 segunda: '07:00–21:00',
  //                 terca: '07:00–21:00',
  //                 quarta: '07:00–21:00',
  //                 quinta: '07:00–21:00',
  //                 sexta: '07:00–21:00',
  //                 sabado: '07:00–21:00',
  //                 domingo: '08:00–14:00',
  //                 feriados: '07:30-14:00',
  //             },
  //             img_carrosel: {
  //                 primeira: '/img/carrosel/img1.jpg',
  //                 titulo_primeira: 'Título img 1',
  //                 segunda: '/img/carrosel/img2.jpg',
  //                 titulo_segunda: 'Título img 2',
  //                 terceira: '/img/carrosel/img3.jpg',
  //                 titulo_terceira: 'Título img 3',
  //                 quarta: '/img/carrosel/img4.jpg',
  //                 titulo_quarta: 'Título img 4',
  //             },
  //         },
  //     ]
  // }
  // res.status(200).json(data)
}
