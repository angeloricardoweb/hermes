import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { id } = req.query;
  let data = {};

  if (id == 1) {
    data = {
      error: false,
      message: 'Sem erro',
      results: {
        id: 1,
        curso_slug: 'curso-de-php',
        tipo: 'video',
        video: {
          url: 'https://www.youtube.com/embed/mLNqo4u-YTM',
        },
        quiz_id: null,
        audio: null,
        conteudo_html: null,
        titulo: `01 - Quem criou o PHP`,
        descricao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nu',
        conteudo_anterior: null,
        conteudo_proximo: {
          id: 2,
          titulo: '02 - Para que serve o PHP',
        },
      },
    };
  }

  if (id == 2) {
    data = {
      error: false,
      message: 'Sem erro',
      results: {
        id: 2,
        curso_slug: 'curso-de-php',
        tipo: 'audio',
        video: null,
        quiz_id: null,
        audio: {
          url: 'http://api-temp.vercel.app/placeholder/audio.mp3',
          descricao:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nu',
        },
        conteudo_html: null,
        titulo: `02 - Para que serve o PHP`,
        descricao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nu',
        conteudo_anterior: {
          id: 1,
          titulo: '01 - Quem criou o PHP',
        },
        conteudo_proximo: {
          id: 3,
          titulo: '03 - Instalando o PHP',
        },
      },
    };
  }

  if (id == 3) {
    data = {
      error: false,
      message: 'Sem erro',
      results: {
        id: 3,
        curso_slug: 'curso-de-php',
        tipo: 'conteudo',
        video: null,
        quiz_id: null,
        audio: null,
        conteudo_html:
          '<dl class="qandaentry" id="faq.installation.blankscreen"> <dt><strong> Unix/Windows: Eu tenho o PHP instalado, mas quando tento acessar um arquivo de script PHP através do meu browser, recebo uma tela em branco. </strong></dt> <dd class="answer"> <p class="para"> Faça um &#039;view source&#039; no navegador web e provavelmente descobrirá que pode ver o código fonte do seu script PHP. Isto significa que o seu servidor web não enviou o script para o interpretador do PHP. Algo está errado com as configurações do seu servidor - verifique novamente as configurações de seu servidor, com base nas instruções de instalação do PHP. </p> </dd> </dl>',
        titulo: `03 - Instalando o PHP`,
        descricao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nu',
        conteudo_anterior: {
          id: 2,
          titulo: '02 - Para que serve o PHP',
        },
        conteudo_proximo: {
          id: 4,
          titulo: '04 - Primeiro script PHP',
        },
      },
    };
  }

  if (id == 4) {
    data = {
      error: false,
      message: 'Sem erro',
      results: {
        id: 4,
        curso_slug: 'curso-de-php',
        tipo: 'quiz',
        video: null,
        quiz_id: 4,
        audio: null,
        conteudo_html: null,
        titulo: `04 - Primeiro script PHP`,
        descricao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel aliquam aliquam, nunc nisl aliquam nisl, eget aliquam nu',
        conteudo_anterior: {
          id: 3,
          titulo: '03 - Instalando o PHP',
        },
        conteudo_proximo: null,
      },
    };
  }
  res.status(200).json(data);
}
