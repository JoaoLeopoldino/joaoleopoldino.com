import {
  SiAlgolia,
  SiAmazonaws,
  SiChakraui,
  SiCss3,
  SiDebian,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGmail,
  SiGraphql,
  SiHeroku,
  SiJest,
  SiLinux,
  SiMapbox,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSahibinden,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTwitter,
  SiTypescript,
  SiVercel
} from 'react-icons/si';


interface IStackIcon {
  iconTitle: string;
  isLink?: boolean;
}
export const SOCIALS = [
  {
    Icon: <SiGithub />,
    url: 'https://github.com/JoaoLeopoldino',
    iconTitle: 'My GitHub'
  },
  {
    Icon: <SiTwitter />,
    url: 'https://twitter.com/JLeopoldinoSF',
    iconTitle: 'My Twitter'
  },
  {
    Icon: <SiGmail />,
    url: 'mailto:chapacriativa@gmail.com',
    iconTitle: 'My Gmail'
  }
];

export const STACKS = [
  {
    Icon: <SiAmazonaws />,
    url: 'https://aws.amazon.com/',
    iconTitle: 'Amazon AWS',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiCss3 />,
    url: 'https://golang.org/',
    iconTitle: 'CSS3',
    color: '#FFC107'
  },

  {
    Icon: <SiFigma />,
    url: 'https://graphql.org/',
    iconTitle: 'Figma',
    color: '#FFC107'
  },
  {
    Icon: <SiFirebase />,
    url: 'https://firebase.google.com/',
    iconTitle: 'Firebase',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiFramer />,
    url: 'https://aws.amazon.com/',
    iconTitle: 'Framer',
    color: '#FFC107'
  },
  {
    Icon: <SiGraphql />,
    url: 'https://graphql.org/',
    iconTitle: 'GraphQL',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiHeroku />,
    url: 'https://elixir-lang.org/',
    iconTitle: 'Heroku',
    color: '#FFC107'
  },
  {
    Icon: <SiLinux />,
    url: 'https://www.linux.org/',
    iconTitle: 'Linux',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiMapbox />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'Mapbox',
    color: '#FFC107'
  },
  {
    Icon: <SiNodedotjs />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'Node.js',
    color: '#FFC107'
  },
  {
    Icon: <SiNextdotjs />,
    url: 'https://www.nextjs.org/',
    iconTitle: 'Nextjs',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiPostgresql />,
    url: 'https://www.postgresql.org/',
    iconTitle: 'PostgreSQL',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiReact />,
    url: 'https://www.reactjs.org/',
    iconTitle: 'React',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiSahibinden />,
    url: 'https://www.sanity.io/',
    iconTitle: 'Sanity',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiTailwindcss />,
    url: 'https://www.tailwindscss.com/',
    iconTitle: 'Tailwind CSS',
    color: '#FFC107',
    featured: true
  },
  {
    Icon: <SiTypescript />,
    featured: true,
    url: 'https://www.typescriptlang.org/',
    iconTitle: 'Typescript',
    color: '#FFC107'
  },
  {
    Icon: <SiVercel />,
    url: 'https://vercel.com/',
    iconTitle: 'Vercel',
    color: '#FFC107',
    featured: true
  }
];

export default function StackIcon({ iconTitle, isLink = false }: IStackIcon) {
  const { Icon, url } =
    STACKS.find((stack) => stack.iconTitle === iconTitle) ?? STACKS[0];
  return isLink ? (
    <a
      className="duration-150 transform  ease-in-out hover:scale-110"
      href={url}
      title={iconTitle}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon}
    </a>
  ) : (
    Icon
  );
}
