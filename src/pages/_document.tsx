import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="hu">
      <Head>
        <meta name="title" content="NYATA 2024" />
        <meta name="description" content="Nyári Szakkollégiumi Találkozó 2024" />
      </Head>
      <body className="font-body text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
