import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Global from "../styles/Global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <NextSeo title="EadBox | Dashboard" description="EadBox Dashboard" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
