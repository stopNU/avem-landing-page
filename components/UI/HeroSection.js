import styles from "./HeroSection.module.scss";
import ContentWrapper from "./ContentWrapper";
import Image from "next/image";

import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const HeroSection = (props) => {
  const { title, text, imageUrl } = props;

  return (
    <div className={styles.hero} id="header">
      <ContentWrapper className={styles.content}>
        <div className={styles.text}>
          <h1
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></h1>
          <RichText render={text} linkResolver={linkResolver} />
        </div>
      </ContentWrapper>
      <Image
        className={styles.bgImage}
        src={imageUrl}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};
export default HeroSection;
