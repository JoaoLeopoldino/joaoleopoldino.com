import Script from 'next/script';

const Ganalytics = () => (
  <Script
    strategy="afterInteractive"
    src={`https://www.googletagmanager.com/gtag/js?id=G-PXYWLN8LSV`}
    onLoad={() => {
      const win: any = window;
      win.dataLayer = win.dataLayer || [];
      function gtag(..._args: (string | Date)[]) {
        win.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", 'G-PXYWLN8LSV');
    }}
  />
);

export default Ganalytics;