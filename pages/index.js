import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Excercises from "@/components/Exercises";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Strength Training Exercises · Fitbod</title>
        <meta name="description" content="Strength Training Exercises by Fitbod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.header}>
        <img className={styles.logo} src="https://storage.googleapis.com/fitbod-web-internal/logo.svg" alt="Fitbod Logo" />
      </div>
      <div className={styles.main}>
        <h1 className={styles.heading}>Top Exercises</h1>
        <Excercises/>
      </div>
      <div className={styles.footer}></div>
    </>
  );
}
