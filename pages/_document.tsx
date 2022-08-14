import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ko">
        <Head>
          {/*<script src="https://developers.kakao.com/sdk/js/kakao.js" async />*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
