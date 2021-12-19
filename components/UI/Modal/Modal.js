import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import styles from "./Modal.module.scss";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      {props.children}
    </div>
  );
};

export default Modal;
