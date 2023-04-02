import { Layout } from '../components';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-8Z4RPW0HGB`}
      />
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8Z4RPW0HGB');`}
      </Script>
    </>
  );
}

export default MyApp;
