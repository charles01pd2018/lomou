import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static getInitialProps( {  renderPage } ) {
    const page = renderPage();

    return {
        ...page,
      };
  }

  render() {
    return (
      <Html lang="en">
        <Head >
          <link rel="preload" href="/static/fonts/telex/Telex-Regular.ttf" as="font" crossOrigin="" /> 
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className='loading'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;