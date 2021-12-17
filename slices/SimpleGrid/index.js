import React from "react";
import { RichText } from "prismic-reactjs";
import styles from "./SimpleGrid.module.scss";
import SectionWrapper from "../../components/UI/SectionWrapper";
import ContentWrapper from "../../components/UI/ContentWrapper";
import Card from "../../components/UI/Card";
import Image from "next/image";

const SimpleGrid = ({ slice }) => (
  <SectionWrapper color={slice.primary.backgroundColor} id={slice.primary.sectionId}>
    <ContentWrapper className={styles.intro}>
      <span className="title">
        {slice.primary.title && (
          <h2
            dangerouslySetInnerHTML={{
              __html: slice.primary.title[0].text,
            }}
          ></h2>
        )}
      </span>
      {slice.primary.description && (
        <RichText render={slice.primary.description} />
      )}
    </ContentWrapper>
    <ContentWrapper
      className={[
        `${
          slice.variation === "gridWith2Columns"
            ? styles["grid-2-columns"]
            : null
        } ${styles.grid}`,
      ]}
    >
      {slice.items.length > 0 &&
        slice.items.map((item, index) => (
          <Card key={index} className={styles.item}>
            {item.icon && <Image
              src={item.icon.url}
              width={item.icon.dimensions.width}
              height={item.icon.dimensions.height}
            />}
            <RichText render={item.title} />
          </Card>
        ))}
    </ContentWrapper>
  </SectionWrapper>
);

export default SimpleGrid;
