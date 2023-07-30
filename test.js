const data = [
  {
    id: 1,
    logo: 'url_qualquer',
  },
  {
    id: 2,
    logo: 'url_qualquer',
  },
  {
    id: 3,
    logo: 'url_qualquer',
    descricao: {
      texto: 'descricao',
    },
    fotos: [
      {
        id: '1',
        url: 'sdjfsiojfsif',
      },
      {
        id: '2',
        url: 'sdjfsiojfsif',
      },
      {
        id: '3',
        url: 'sdjfsiojfsif',
      },
    ],
  },
];

const items = [
  {
    idade: '12',
    nome: 'Arthur',
  },
  {
    idade: '22',
    nome: 'Camila',
  },
  {
    idade: '32',
    nome: 'Leo',
  },
];

function printaNomes() {
  return items.map((item) => {
    console.log(`nome: ${item.nome},idade: ${item.idade} `);
  });
}


const bannersHome = [
  {
    id: '1',
    foto: 'url',
    link: 'link'
  },
  {
    id: '2',
    foto: 'url',
    link: 'link'
  },
  {
    id: '3',
    foto: 'url',
    link: 'link'
  },
]


printaNomes();
