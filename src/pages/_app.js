import { Layout } from '../components';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import '../styles/globals.scss';
import Head from 'next/head';
import { metaContent } from '../constants';
import { previewImg } from '../../public';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Code Talker | ບົດຄວາມເພື່ອໂປຣແກຣມເມີ້</title>
        <meta name="keywords" content={metaContent.keyword.join(', ')} />
        <meta name="description" content={metaContent.description} />
        <meta property="og:image" content={previewImg} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
      </Script>
    </>
  );
}

export default MyApp;
