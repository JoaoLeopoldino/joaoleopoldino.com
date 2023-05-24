import Script from 'next/script';

const Ganalytics = () => (
  <Script
    strategy="afterInteractive"
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
    onLoad={() => {
      const win: any = window;
      win.dataLayer = win.dataLayer || [];
      function gtag(..._args: (string | Date)[]) {
        win.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`);
    }}
  />
);

export default Ganalytics;