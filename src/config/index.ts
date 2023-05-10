export const NAV_LINKS = [
  { href: '/', text: 'About' },
  { href: '/blog', text: 'Blog' },
  { href: '/snippets', text: 'Snippets' }
];

export const AUTHOR = {
  name: 'João Leopoldino',
  email: 'chapacriativa@gmail.com',
  link: 'https://twitter.com/JLeopoldinoSF'
};

export const DEFAULT_SEO = {
  title: `João Leopoldino's personal website`,
  description:
    'From Angola, I helped companies located in Angola, Brazil, and Holland reach their defined objectives through my contribution to the idealization and implementation of technology solutions.',
  canonical: 'https://www.joaoleopoldino.com/',
  openGraph: {
    title: `João Leopoldino's personal website`,
    description:
      'From Angola, I helped companies located in Angola, Brazil, and Holland reach their defined objectives through my contribution to the idealization and implementation of technology solutions.',
    type: 'website',
    url: 'https://www.joaoleopoldino.com/',
    site_name: 'joaoleopoldino.com',
    images: [
      {
        url: 'https://www.joaoleopoldino.com/social-banner.webp',
        width: 1200,
        height: 675,
        alt: 'My cat and my gear',
        type: 'image/webp'
      }
    ]
  },
  twitter: {
    handle: '@JLeopoldinoSF',
    site: '@JLeopoldinoSF',
    cardType: 'summary_large_image'
  }
};

export const SANITY_CONFIG = {
  dataset: 'production',
  projectId: 'nerbtc6p',
  useCdn: process.env.NODE_ENV !== 'production',
  apiVersion: '2021-03-25'
};

export const SPOTIFY_NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const SPOTIFY_TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const WAKATIME_API_ENDPOINT = `https://wakatime.com/api/v1/users/joaoleopoldino/stats/last_7_days`;

export const POSTS_LIMIT = 200;

export const TYPED_STRINGS = [
  `Thanks for reading!`,
  'Მადლობა წაკითხვისთვის!',
  `Danke fürs Lesen!`,
  `Дзякуй за чытанне!`,
  `Merci de nous lire !`,
  `¡Gracias por leer!`,
  `Dzięki za przeczytanie!`,
  `Дякую за читання!`,
  `Grazie per aver letto!`
];
