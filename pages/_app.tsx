import { createGlobalStyle, ThemeProvider } from 'styled-components'

import standardComponents from '../components/components'
import { MDXProvider } from '@mdx-js/react'

import { GlobalStyle, theme } from '../styles/global'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/gdy6rln.css"
                />
                <title>Preflight</title>
            </Head>

            <GlobalStyle />

            <ThemeProvider theme={theme}>
                <MDXProvider components={standardComponents}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MDXProvider>
            </ThemeProvider>
        </>
    )
}
