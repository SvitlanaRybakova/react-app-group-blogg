import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/add-article">ADD ARTICLE</Link>
      <Link to="/about">ABOUT</Link>
    </nav>
  );
};

export default Navbar;
