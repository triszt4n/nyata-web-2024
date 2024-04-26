import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  canonical: 'https://nyata.hu',
  defaultTitle: 'NYATA 2024',
  titleTemplate: '%s | NYATA 2024',
  languageAlternates: [{ hrefLang: 'hu-HU', href: 'https://nyata.hu' }],
  description:
    `Nyári Szakkollégiumi Találkozó a Műegyetemi Szakkollégiumok Közössége rendezésében 2024-ben. ` +
    `A hazai és határon túli szakkollégiumok központi éves rendezvénye, ahol különböző tudományágakban ` +
    `tevékenykedő hallgatók előadásokon és workshopokon keresztül gondolkodhatnak közösen egy aktuális társadalmi kérdésről.`,
  additionalMetaTags: [
    {
      property: 'keywords',
      content: [
        'collegium',
        'szakkollegium',
        'muszak',
        'nyata',
      ].join(','),
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://nyata.hu/',
    siteName: 'NYATA 2024',
    description:
      'Nyári Szakkollégiumi Találkozó a Műegyetemi Szakkollégiumok Közössége rendezésében 2024-ben.',
    images: [
      {
        url: '/default-og.png',
        width: 1939,
        height: 1015,
        alt: 'NYATA 2024',
      },
    ],
  },
}

export default config
