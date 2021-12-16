import styles from "./Header.module.scss";
import ContentWrapper from "./ContentWrapper";
import Image from "next/image";

import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const Header = (props) => {
  const { title, text, imageUrl } = props;

  return (
    <div className={styles.header}>
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
export default Header;
