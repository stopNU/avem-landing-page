import Head from "next/head";
//import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Client } from "../utils/prismicHelpers";

export default function Home(props) {
  console.log("props", props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}><h1>{props.doc.data.page_title[0].text}</h1></main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getSingle("landing_page", ref ? { ref } : null)) || {};
  //const menu = await client.getSingle('menu', ref ? { ref } : null) || {}

  return {
    props: {
      doc,
      //menu,
      preview,
    },
  };
}
