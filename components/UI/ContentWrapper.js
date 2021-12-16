const ContentWrapper = (props) => {
  return (
    <div className={props.className + " content-wrapper"}>{props.children}</div>
  );
};
export default ContentWrapper;
