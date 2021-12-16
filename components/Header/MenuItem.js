const MenuItem = (props) => {
  const clickHandler = () => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(props.scrollToId);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <li onClick={clickHandler}>{props.children}</li>;
};

export default MenuItem;
