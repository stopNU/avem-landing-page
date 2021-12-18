const ContentWrapper = (props) => {
  const classes = props.className
    ? props.className + " content-wrapper"
    : "content-wrapper";

  return <div className={classes}>{props.children}</div>;
};
export default ContentWrapper;
