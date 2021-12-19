import styles from "./Header.module.scss";
import Image from "next/image";
import Menu from "./Menu";
import ContentWrapper from "../UI/ContentWrapper";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";

const Header = ({ menu }) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const toggleMobileMenuHandler = () => {
    setToggleMobileMenu((prevState) => !prevState);
  };

  const onClickCloseHandler = () => {
    setToggleMobileMenu(false);
  };

  const mobileMenuIcon = !toggleMobileMenu ? (
    <GiHamburgerMenu onClick={toggleMobileMenuHandler} />
  ) : (
    <IoCloseSharp onClick={toggleMobileMenuHandler} />
  );

  return (
    <div className={styles.header}>
      <ContentWrapper className={styles.desk}>
        <span className={styles.logo}>
          <Image
            src={menu.data.logo.url}
            alt="Avem logo"
            width={120}
            height={50}
          />
        </span>
        <Menu items={menu.data.menu_links} />
      </ContentWrapper>
      <ContentWrapper className={styles.mobile}>
        <span className={styles.logo}>
          <Image
            src={menu.data.logo.url}
            alt="Avem logo"
            width={90}
            height={50}
          />
        </span>
        <div>{mobileMenuIcon}</div>
        {toggleMobileMenu && (
          <Modal show={toggleMobileMenu}>
            <Menu
              items={menu.data.menu_links}
              closeHandler={onClickCloseHandler}
            />
          </Modal>
        )}
      </ContentWrapper>
    </div>
  );
};
export default Header;
