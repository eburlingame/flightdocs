import { createGlobalStyle, ThemeProvider } from "styled-components";

import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: eb-garamond, sans-serif;
  font-size: large
}

h1, h2, h3, h4, h5 {
  font-family: futura-pt, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/gdy6rln.css" />
      </Head>

      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
