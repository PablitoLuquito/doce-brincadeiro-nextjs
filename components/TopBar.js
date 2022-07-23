const TopBar = (props) => {
  return (
    <div
      className={`fixed z-10 w-full max-w-4xl m-auto -translate-x-1/2 bg-orange-900 left-1/2 h-14 shad ${props.topBarClassName}`}
    >
      {props.children}
    </div>
  );
};
export default TopBar;
