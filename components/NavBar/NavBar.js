const NavBar = (props) => {
  return (
    <nav
      className={`fixed bottom-0 z-10 w-full max-w-4xl mx-auto -translate-x-1/2 bg-white border-t left-1/2 h-14 ${props.navBarClassName}`}
    >
      {props.children}
    </nav>
  );
};

export default NavBar;
