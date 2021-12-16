const SectionWrapper = (props) => {
  console.log("props", props, props.className);
  const classes = props.className ? props.className + " section-wrapper" : "section-wrapper";
  
  return (
    <div id={props.id} className={classes}>{props.children}</div>
  );
};
export default SectionWrapper;
