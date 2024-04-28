import "@/styles/globals.css";
import PlausibleProvider from "next-plausible";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import SEO from "../../next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
