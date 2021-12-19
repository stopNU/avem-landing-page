import React from "react";
import styles from "./Roadmap.module.scss";
import { RichText } from "prismic-reactjs";
import SectionWrapper from "../../components/UI/SectionWrapper";
import ContentWrapper from "../../components/UI/ContentWrapper";
import Card from "../../components/UI/Card";
import Image from "next/image";
import { GoCheck } from "react-icons/go";

const Roadmap = ({ slice }) => (
  <div className={styles.container}>
    <Image
      className={styles.bgImage}
      src={slice.primary.background.url}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />
    <SectionWrapper id="roadmap" className={styles.background}>
      <ContentWrapper className={styles.intro}>
        <span className="title">
          {slice.primary.title ? (
            <RichText render={slice.primary.title} />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </span>
        {slice.primary.description &&
        slice.primary.description[0].text.length > 0 ? (
          <RichText render={slice.primary.description} />
        ) : null}
      </ContentWrapper>
      <ContentWrapper>
        <div className={styles.list}>
          {slice.items &&
            slice.items.map((item) => (
              <Card
                key={item.title}
                className={item.completed ? styles.completed : ""}
              >
                {item.completed && <GoCheck className={styles.icon} />}
                <h3>{item.title}</h3>
                <RichText render={item.description} />
              </Card>
            ))}
        </div>
      </ContentWrapper>
    </SectionWrapper>
  </div>
);

export default Roadmap;
