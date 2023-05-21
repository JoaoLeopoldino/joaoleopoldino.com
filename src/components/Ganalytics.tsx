import Script from 'next/script';

export function Ganalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LLS2306FEC"
        strategy={'afterInteractive'}
      />
      <Script id={'google-analytics'} strategy={'afterInteractive'}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LLS2306FEC');
        `}
      </Script>
    </>
  );
}