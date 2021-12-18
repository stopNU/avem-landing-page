import styles from "./Header.module.scss";
import Image from "next/image";
import Menu from "./Menu";

const Header = ({ menu }) => {
  return (
    <div className={styles.header}>
      <div>
        <Image src={menu.data.logo.url} width={120} height={50} />
        <Menu items={menu.data.menu_links} />
        <p>Go to App</p>
      </div>
    </div>
  );
};
export default Header;
