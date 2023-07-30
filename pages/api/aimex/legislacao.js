import NextCors from 'nextjs-cors';

export default async function handler(req, res) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const data = {
      error: 'false',
      message: 'Sem erros',
      data: [
        {
          id: 1,
          tipo: "Estadual",
          body: [
            {
              id: 1,
              categoria: 'Decretos',
              body: [
                {
                  id: 1,
                  doc_title: 'Nº 6.063 - 2007 | Regulamenta Lei Nº 11.284 - 206 - Concessão Florestal',
                  doc: 'https://www.google.com.br'
                },
                {
                    id: 2,
                    doc_title: 'Nº 6.514 - 2008 | Infração e processo administrativo ambiental - Crimes Ambientais',
                    doc: 'https://www.google.com.br'
                },
                {
                    id: 3,
                    doc_title: 'Nº 9.760 - 2019 | Altera o Decreto 6.514 regulamenta crimes ambientais',
                    doc: 'https://www.google.com.br'
                },
              ],
            },
            {
              id: 2,
              categoria: 'Leis',
              body: [
                {
                    id: 1,
                    doc_title: 'Nº 6.063 - 2007 | Regulamenta Lei Nº 11.284 - 206 - Concessão Florestal',
                    doc: 'https://www.google.com.br'
                },
                {
                    id: 2,
                    doc_title: 'Nº 6.514 - 2008 | Infração e processo administrativo ambiental - Crimes Ambientais',
                    doc: 'https://www.google.com.br'
                },
                {
                    id: 3,
                    doc_title: 'Nº 9.760 - 2019 | Altera o Decreto 6.514 regulamenta crimes ambientais',
                    doc: 'https://www.google.com.br'
                },
              ],
            }
          ],
        },
        {
          id: 1,
          tipo: "Federal",
          body: [
            {
              id: 1,
              categoria: 'Leis',
              body: [
                {
                    id: 1,
                    doc_title: 'Nº 6.063 - 2007 | Regulamenta Lei Nº 11.284 - 206 - Concessão Florestal',
                    doc: 'https://www.google.com.br'
                },
                {
                    id: 2,
                    doc_title: 'Nº 6.514 - 2008 | Infração e processo administrativo ambiental - Crimes Ambientais',
                    doc: 'https://www.google.com.br'
                },
                {
                    id: 3,
                    doc_title: 'Nº 9.760 - 2019 | Altera o Decreto 6.514 regulamenta crimes ambientais',
                    doc: 'https://www.google.com.br'
                },
              ],
            },
            {
              id: 2,
              categoria: 'Decretos',
              body: [
                {
                    id: 1,
                    doc_title: 'Nº 6.063 - 2007 | Regulamenta Lei Nº 11.284 - 206 - Concessão Florestal',
                    doc: 'https://www.google.com.br'
                },
                {
                    id: 2,
                    doc_title: 'Nº 6.514 - 2008 | Infração e processo administrativo ambiental - Crimes Ambientais',
                    doc: 'https://www.google.com.br'
                },
                {
                    id: 3,
                    doc_title: 'Nº 9.760 - 2019 | Altera o Decreto 6.514 regulamenta crimes ambientais',
                    doc: 'https://www.google.com.br'
                },
              ],
            }
          ],
        },
      ]
  }
    res.status(200).json(data)
}
