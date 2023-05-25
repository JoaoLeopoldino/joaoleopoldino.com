import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
// import { Analytics } from '@vercel/analytics/react';

import ErrorBoundary from '@/components/ErrorBoundary';

import { DEFAULT_SEO } from '@/config';
import Ganalytics  from '@/components/Ganalytics';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...DEFAULT_SEO} />
      <Ganalytics GA_TRACKING_ID={process.env.GOOGLE_ANALYTICS_ID}/>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ThemeProvider>
  );
}
