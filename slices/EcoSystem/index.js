import SectionWrapper from "../../components/UI/SectionWrapper";
import ContentWrapper from "../../components/UI/ContentWrapper";
import Image from "next/image";
import styles from "./EcoSystem.module.scss";
import { RichText } from "prismic-reactjs";

const EcoSystem = ({ slice }) => (
  <div>
    <SectionWrapper id="ecosystem" className={styles["title-section"]}>
      <ContentWrapper>
        <RichText render={slice.primary.title} />
      </ContentWrapper>
    </SectionWrapper>
    <SectionWrapper className={styles["product-section"]}>
      <ContentWrapper className={styles.products}>
        {slice?.items?.map((product, i) => (
          <div
            key={i}
            className={[`${styles.product} ${styles[product.color]}`]}
          >
            <div className={styles.text}>
              <span className={styles.title}>
                <RichText render={product.title} />
              </span>
              <RichText render={product.text} />
            </div>
            <div className={styles.image}>
              <Image
                src={product.symbol.url}
                width={product.symbol.dimensions.width}
                height={product.symbol.dimensions.height}
                alt={product.symbol.alt}
                layout="fixed"
              />
            </div>
          </div>
        ))}
      </ContentWrapper>
    </SectionWrapper>
  </div>
);

export default EcoSystem;
