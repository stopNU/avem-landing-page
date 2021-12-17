import styles from "./AboutSection.module.scss";
import ContentWrapper from "../UI/ContentWrapper";
import SectionWrapper from "../UI/SectionWrapper";
import Image from "next/image";
import Button from '../UI/Button';

import { RichText } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

const AboutSection = (props) => {
  const { backgroundImage, description, buttons, title, image } = props;

  return (
    <SectionWrapper id="about" big>
      <Image
        className={styles.bgImage}
        src={backgroundImage.url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <ContentWrapper className={styles.about}>
        <div>
          <h2
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          ></h2>
          <RichText
            render={description}
            linkResolver={linkResolver}
          />
          <div className={styles.buttons}>
            {buttons.map((button) => (
              <Button
                key={button.label}
                link={button.link}
                isPrimary={button.is_primary_button}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <Image
            src={image.url}
            width={image.dimensions.width}
            height={image.dimensions.height}
          />
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
};
export default AboutSection;