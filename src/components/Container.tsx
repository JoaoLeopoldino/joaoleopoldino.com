import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { IContainerPropsWithChildren } from '@/typings';

export default function Container(props: IContainerPropsWithChildren) {
  const router = useRouter();
  const articleMeta =
    props.type === 'article'
      ? {
          publishedTime: props.date,
          tags: props.tags ? props.tags : ['dev-portfolio', 'personal-website'],
          authors: ['https://twitter.com/JLeopoldinoSF'],
          description: props.description
        }
      : {};

  const pageMeta = {
    title: props.title,
    description: props.description,
    openGraph: {
      title: props.title,
      article: articleMeta,
      url:
        `https://www.joaoleopoldino.com${router.asPath}` ??
        'https://www.joaoleopoldino.com',
      type: props.type ?? 'page',
      image: props.image ?? 'https://joaoleopoldino.com/static/images/banner.jpeg',
      images: [
        {
          url: props.image ?? 'https://joaoleopoldino.com/static/images/banner.jpeg',
          alt: props.title
        }
      ]
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <NextSeo {...pageMeta} />
      <Header />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {props.children}
        <Footer />
      </main>
    </div>
  );
}
