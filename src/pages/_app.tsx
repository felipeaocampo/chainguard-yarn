import type { AppProps } from "next/app";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

import Layout from "@/components/ui/Layout";

import "@/styles/globals.css";
import "@contentful/live-preview/style.css";
import "@/styles/slider-styles.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      enableLiveUpdates={pageProps.preview}
      enableInspectorMode={pageProps.preview}
    >
      <Layout className={`${inter.className}`}>
        <Component {...pageProps} />
      </Layout>
    </ContentfulLivePreviewProvider>
  );
}
