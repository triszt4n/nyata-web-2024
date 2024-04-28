import "@/styles/globals.css";
import PlausibleProvider from "next-plausible";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import SEO from "../../next-seo.config";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <DefaultSeo {...SEO} />
      <PlausibleProvider
        domain="kir-dev.hu"
        selfHosted
        customDomain="https://visit.kir-dev.hu"
      >
        <Component {...pageProps} />
      </PlausibleProvider>
    </>
  );
}
