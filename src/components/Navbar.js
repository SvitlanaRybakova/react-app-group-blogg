import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">Add Article</Link>
      <Link to="/About">About</Link>
    </nav>
  );
};

export default Navbar;
