import styles from "./AboutSection.module.scss";
import ContentWrapper from "../UI/ContentWrapper";
import SectionWrapper from "../UI/SectionWrapper";
import Image from "next/image";
import Button from "../UI/Button";

import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const AboutSection = (props) => {
  const { backgroundImage, description, buttons, title, image } = props;

  return (
    <SectionWrapper id="about" big>
      <span className={styles.bgImage}>
        <Image
          src={backgroundImage.url}
          alt="Background image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </span>
      <ContentWrapper className={styles.about}>
        <div>
          <h6>WHAT IS AVEM?</h6>
          <h2
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></h2>
          <RichText render={description} linkResolver={linkResolver} />
          {/*<div className={styles.buttons}>
            {buttons.map((button) => (
              <Button
                key={button.label}
                link={button.link}
                isPrimary={button.is_primary_button}
              >
                {button.label}
              </Button>
            ))}
            </div>*/}
        </div>
        <div className={styles.image}>
          <Image
            src={image.url}
            alt={image.alt}
            width={image.dimensions.width}
            height={image.dimensions.height}
          />
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};
export default AboutSection;
