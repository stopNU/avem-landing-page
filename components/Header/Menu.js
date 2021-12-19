import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item, index) => (
        <MenuItem
          key={index}
          scrollToId={item.section_id}
          onCloseHandler={props.closeHandler}
        >
          {item.label}
        </MenuItem>
      ))}
    </ul>
  );
};

export default Menu;
