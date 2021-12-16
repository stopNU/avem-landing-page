import Document, { Html, Head, Main, NextScript } from "next/document";
import PrismicScript from "../components/PrismicScript";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/favicon.png" type="image/png" />
        </Head>
        {/*<style jsx global>{ reset }</style>
        <style jsx global>{ globals }</style>*/}
        <body>
          <Main />
          <NextScript />
          <PrismicScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
