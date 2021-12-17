const SectionWrapper = (props) => {
  const styles = {
    backgroundColor: props.color ? props.color : null
  };

  let classes = props.className
    ? props.className + " section-wrapper"
    : "section-wrapper";

  if (props.big) {
    classes += " big-section";
  }

  return (
    <section id={props.id} className={classes} style={styles}>
      {props.children}
    </section>
  );
};
export default SectionWrapper;
