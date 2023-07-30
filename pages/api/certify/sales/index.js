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
    chartsData: [
      {
        id: 0,
        category: 'all',
        name: 'All Products',
        chartSeries: [
          {
            name: 'Year 2021',
            data: [
              2000, 2, 6000, 10000, 7000, 10000, 2000, 4000, 2525, 5284, 2542,
              4748,
            ],
          },
          {
            name: 'Year 2022',
            data: [
              20, 500, 8000, 3000, 2000, 5000, 9000, 12000, 2525, 5284, 5215,
              4748,
            ],
          },
        ],
        data: [
          {
            title: 'Total Sales',
            value: 3500.0,
            when: 'Yesterday',
          },
          {
            title: 'Total Sales',
            value: 4885.0,
            when: 'Day Before',
          },
          {
            title: 'Total Sales',
            value: 2500.0,
            when: 'Since Sunday',
          },
          {
            title: 'Total Sales',
            value: 4885.0,
            when: 'Since Start of Month',
          },
          {
            title: 'Total Sales',
            value: 8000.0,
            when: 'Last Month',
          },
        ],
      },

      {
        id: 1,
        category: 'texes-praxis',
        name: 'TExES + PRAXIS',
        chartSeries: [
          {
            name: 'Year 2021',
            data: [
              2000, 2, 2000, 10000, 7000, 10000, 2000, 4000, 2525, 5284, 6515,
              4748,
            ],
          },
          {
            name: 'Year 2022',
            data: [
              20, 500, 8000, 3000, 2000, 5000, 9000, 12000, 2525, 5284, 5489,
              4748,
            ],
          },
        ],
        data: [
          {
            title: 'Total Sales',
            value: 5808.0,
            when: 'Yesterday',
          },
          {
            title: 'Total Sales',
            value: 6515.0,
            when: 'Day Before',
          },
          {
            title: 'Total Sales',
            value: 6985.0,
            when: 'Since Sunday',
          },
          {
            title: 'Total Sales',
            value: 2515.0,
            when: 'Since Start of Month',
          },
          {
            title: 'Total Sales',
            value: 2656.0,
            when: 'Last Month',
          },
        ],
      },

      {
        id: 2,
        category: 'texes',
        name: 'TExES',
        chartSeries: [
          {
            name: 'Year 2021',
            data: [
              2000, 2, 6000, 10000, 7000, 10000, 2000, 4000, 2525, 5284, 1465,
              4748,
            ],
          },
          {
            name: 'Year 2022',
            data: [
              20, 500, 8000, 3000, 2000, 2000, 9000, 12000, 2525, 5284, 1795,
              4748,
            ],
          },
        ],
        data: [
          {
            title: 'Total Sales',
            value: 5145.0,
            when: 'Yesterday',
          },
          {
            title: 'Total Sales',
            value: 9581.0,
            when: 'Day Before',
          },
          {
            title: 'Total Sales',
            value: 9626.0,
            when: 'Since Sunday',
          },
          {
            title: 'Total Sales',
            value: 9552.0,
            when: 'Since Start of Month',
          },
          {
            title: 'Total Sales',
            value: 1215.0,
            when: 'Last Month',
          },
        ],
      },

      {
        id: 3,
        category: 'praxis',
        name: 'PRAXIS',
        chartSeries: [
          {
            name: 'Year 2021',
            data: [
              2000, 2, 6000, 1000, 7000, 10000, 2000, 4000, 2525, 5284, 1854,
              4748,
            ],
          },
          {
            name: 'Year 2022',
            data: [
              20, 500, 8000, 3000, 2000, 5000, 9000, 1000, 2525, 5284, 1717,
              4748,
            ],
          },
        ],
        data: [
          {
            title: 'Total Sales',
            value: 2655.0,
            when: 'Yesterday',
          },
          {
            title: 'Total Sales',
            value: 9852.0,
            when: 'Day Before',
          },
          {
            title: 'Total Sales',
            value: 7822.0,
            when: 'Since Sunday',
          },
          {
            title: 'Total Sales',
            value: 3254.0,
            when: 'Since Start of Month',
          },
          {
            title: 'Total Sales',
            value: 2515.0,
            when: 'Last Month',
          },
        ],
      },

      {
        id: 4,
        category: 'tpa-builder',
        name: 'TPA Builder',
        chartSeries: [
          {
            name: 'Year 2021',
            data: [
              2000, 2, 6000, 10000, 2000, 10000, 2000, 4000, 2525, 5284, 8972,
              4748,
            ],
          },
          {
            name: 'Year 2022',
            data: [
              20, 500, 8000, 8000, 2000, 5000, 9000, 12000, 2525, 5284, 9157,
              4748,
            ],
          },
        ],
        data: [
          {
            title: 'Total Sales',
            value: 6265.0,
            when: 'Yesterday',
          },
          {
            title: 'Total Sales',
            value: 4242.0,
            when: 'Day Before',
          },
          {
            title: 'Total Sales',
            value: 2424.0,
            when: 'Since Sunday',
          },
          {
            title: 'Total Sales',
            value: 5871.0,
            when: 'Since Start of Month',
          },
          {
            title: 'Total Sales',
            value: 2423.0,
            when: 'Last Month',
          },
        ],
      },

      {
        id: 5,
        category: 'study-guide',
        name: 'Study Guide',
        chartSeries: [
          {
            name: 'Year 2021',
            data: [
              2000, 2, 500, 10000, 7000, 10000, 2000, 4000, 2525, 5284, 9519,
              4748,
            ],
          },
          {
            name: 'Year 2022',
            data: [
              20, 500, 8000, 12000, 2000, 8000, 9000, 12000, 2525, 5284, 1277,
              4748,
            ],
          },
        ],
        data: [
          {
            title: 'Total Sales',
            value: 8464.0,
            when: 'Yesterday',
          },
          {
            title: 'Total Sales',
            value: 4824.0,
            when: 'Day Before',
          },
          {
            title: 'Total Sales',
            value: 8435.0,
            when: 'Since Sunday',
          },
          {
            title: 'Total Sales',
            value: 6842.0,
            when: 'Since Start of Month',
          },
          {
            title: 'Total Sales',
            value: 4868.0,
            when: 'Last Month',
          },
        ],
      },
    ],
  }

  res.status(200).json(data)
}

