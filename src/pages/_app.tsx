import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { SideBar } from "../components/Sidebar";
import Providers from "../lib/Provider";
import { MainContainer, MainFlex } from "../styles";
import "../styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Head>
        {" "}
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Fake Deezer</title>
        <meta name="description" content="Best PWA app in the world!" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/icon.png" color="#FFFFFF" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="My awesome PWA app" />
        <meta name="twitter:description" content="Best PWA app in the world!" />
        <meta name="twitter:image" content="/icons/twitter.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My awesome PWA app" />
        <meta property="og:description" content="Best PWA app in the world!" />
        <meta property="og:site_name" content="My awesome PWA app" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="/icons/og.png" />
        {/* add the following only if you want to add a startup image for Apple devices. */}
        <link
          rel="apple-touch-startup-image"
          href="/icon.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icon.png"
          sizes="640x1136"
        />
      </Head>{" "}
      <MainFlex className={`${inter.className}`}>
        <SideBar />
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </MainFlex>
    </Providers>
  );
}
