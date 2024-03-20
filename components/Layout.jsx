import styles from "./Layout.module.css";

import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title} · Fitbod</title>
        <meta name="description" content="Strength Training Exercises by Fitbod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <Link href="/">
          <img className={styles.logo} src="https://storage.googleapis.com/fitbod-web-internal/logo.svg" alt="Fitbod Logo" />
        </Link>
      </div>
      <div className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.heading} tabIndex={0}>{title}</h1>
        {children}
      </div>
      <div className={styles.footer}></div>
    </>
  );
}
