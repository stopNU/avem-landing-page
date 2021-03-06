import styles from "./Footer.module.scss";
import ContentWrapper from "./UI/ContentWrapper";
import Image from "next/image";
import Menu from "./Header/Menu";
import SocialMediaItem from "./SocialMediaItem";

const Footer = (props) => {
  const { menu } = props;

  return (
    <ContentWrapper className={styles.wrapper}>
      <div>
        <Image
          src={menu.data.logo.url}
          alt="Avem Logo"
          width={120}
          height={50}
        />
        <p>The DeFi 3.0 for Securites.</p>
        <p>Merging Retail and Institutions.</p>
        <p className={styles.copyright}>
          Copyright © 2021 Avem. All rights reserved.
        </p>
      </div>

      <div className={styles.menu}>
        <Menu items={menu.data.menu_links} />
      </div>

      <div>
        {menu.data.platforms.map((platform) => (
          <SocialMediaItem
            key={platform.label}
            className={styles.socialItem}
            platform={platform.platform}
            label={platform.label}
            link={platform.url}
          />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Footer;
