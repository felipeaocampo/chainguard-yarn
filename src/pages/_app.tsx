import type { AppProps } from "next/app";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { ThemeProvider } from "next-themes";

import Layout from "@/components/ui/Layout";

import "@/styles/globals.css";
import "@contentful/live-preview/style.css";
import "@/styles/slider-styles.css";
import "@/styles/video.css";

import { Inter } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   localStorage.setItem("theme", "light");
  //   const selectedTheme = localStorage.getItem("theme");

  //   if (selectedTheme) {
  //     console.log("first if");
  //     console.log(selectedTheme);
  //     document.body.classList.add(selectedTheme);
  //   } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
  //     console.log("second if");
  //     document.body.classList.add("dark");
  //   } else {
  //     console.log("third if");
  //     document.body.classList.add("light");
  //   }
  // }, []);
  // console.log("pageProps: ", pageProps);
  return (
    <ThemeProvider attribute="class">
      <ContentfulLivePreviewProvider
        locale="en-US"
        enableLiveUpdates={pageProps.preview}
        enableInspectorMode={pageProps.preview}
      >
        <form action="/search" data-hs-cf-bound="true">
          <label htmlFor="search">Search Label</label>
          <input
            maxLength={256}
            name="query"
            placeholder="Searchy…"
            type="search"
            id="search"
          />
          <button type="submit">Search!</button>
        </form>
        <Layout className={`${inter.className}`} navBar={pageProps.data.navBar}>
          <Component {...pageProps} />
        </Layout>
      </ContentfulLivePreviewProvider>
    </ThemeProvider>
  );
}
