import Head from "next/head";
import DefaultLayout from "../layouts";
import styles from "../styles/Home.module.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/UI/HeroSection";

import SliceZone from "../slices/SliceZone";
import { Client } from "../utils/prismicHelpers";
import AboutSection from "../components/Sections/AboutSection";

export default function Home(props) {
  const { data } = props.doc;
  console.log("props", props);

  if (props.doc && data) {
    return (
      <DefaultLayout>
        <Head>
          <title>{data.meta_title}</title>
          <meta name="description" content={data.meta_description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Header menu={props.menu} />

          <HeroSection
            title={data.header_title[0].text}
            text={data.header_text}
            backgroundImage={data.header_background_image}
          />

          <AboutSection
            title={data.about_title[0].text}
            description={data.about_description}
            buttons={data.about_buttons}
            image={data.about_image}
            backgroundImage={data.about_background_image}
          />

          {data.body1 && <SliceZone sliceZone={data.body1} />}
        </main>

        <Footer menu={props.menu} />
      </DefaultLayout>
    );
  }

  // Call the standard error page if the document was not found
  return null;
}

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = Client();

  const doc =
    (await client.getSingle("landing_page", ref ? { ref } : null)) || {};
  const menu =
    (await client.getSingle("main_navigation", ref ? { ref } : null)) || {};

  return {
    props: {
      doc,
      menu,
      preview,
    },
  };
}
