import styles from "./Header.module.scss";
import Image from "next/image";
import Menu from "./Menu";
import ContentWrapper from "../UI/ContentWrapper";

const Header = ({ menu }) => {
  return (
    <div className={styles.header}>
      <ContentWrapper className={styles.desk}>
        <span className={styles.logo}>
          <Image src={menu.data.logo.url} width={120} height={50} />
        </span>
        <Menu items={menu.data.menu_links} />
      </ContentWrapper>
      <div className={styles.mobile}>mobile</div>
    </div>
  );
};
export default Header;
