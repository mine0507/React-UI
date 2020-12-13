import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="http://localhost:3000/operation-front">operation-front</a>
          <a href="http://localhost:3000/ui-sample1">ui-sample1</a>
          <a href="http://localhost:3000/ui-sample2">ui-sample2</a>
        </h1>
      </main>
    </div>
  );
}
