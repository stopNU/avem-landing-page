import SectionWrapper from "../../components/UI/SectionWrapper";
import ContentWrapper from "../../components/UI/ContentWrapper";
import Image from "next/image";
import styles from "./MeetTheTeam.module.scss";
import { SiLinkedin } from "react-icons/si";
import { RichText } from "prismic-reactjs";
//import * as prismicH from '@prismicio/helpers'
//npm install @prismicio/helpers@beta

const MeetTheTeam = ({ slice }) => {
  //const contentHTML = prismicH.asHTML(slice.primary.title)
  return (
    <SectionWrapper id="meet-the-team" className={styles.section}>
      <ContentWrapper>
        {slice.primary.title && (
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{
              __html: slice.primary.title[0].text,
            }}
          ></h2>
        )}
      </ContentWrapper>
      <ContentWrapper className={styles.team}>
        {slice?.items?.map((member) => (
          <div key={member.name}>
            <Image
              src={member.profile_picture.url}
              width={member.profile_picture.dimensions.width}
              height={member.profile_picture.dimensions.height}
              alt={member.profile_picture.alt}
              quality={100}
            />
            <p className={styles.name}>{member.name}</p>
            <span className={styles.position}>
              <RichText render={member.company_title} />
            </span>
            {member.linkedin_link.url && (
              <a
                href={member.linkedin_link.url}
                target="_blank"
                title="linkedin"
              >
                <SiLinkedin className={styles.icon} />
              </a>
            )}
          </div>
        ))}
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default MeetTheTeam;
