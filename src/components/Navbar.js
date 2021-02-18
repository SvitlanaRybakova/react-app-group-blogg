import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.a} to="/">
        HOME
      </Link>
      <Link to="/add-article-page">ADD ARTICLE</Link>
      <Link to="/about">ABOUT</Link>
    </nav>
  );
};

export default Navbar;
