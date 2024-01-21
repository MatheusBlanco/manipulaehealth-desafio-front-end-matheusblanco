import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import Providers from "../lib/Provider";
import styles from "../styles/Home.module.css";
import "../styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      {" "}
      <Head>
        <title>Fake Deezer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <main className={`${styles.main} ${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </Providers>
  );
}
