import Document, { Html, Head, Main, NextScript } from 'next/document';

import { metaContent } from '../constants';
import { previewImg } from '/public';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="keywords" content={metaContent.keyword.join(', ')} />
          <meta name="description" content={metaContent.description} />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="Code Talker" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={previewImg} />
          <meta
            property="og:url"
            content="https://code-talker-blog.vercel.app/"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
