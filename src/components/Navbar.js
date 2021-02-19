import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import {ThemeContext} from "../contexts/ThemeContext";
import { useContext } from 'react';


const Navbar = () => {
  const { isGreenTheme, green, dark } = useContext(ThemeContext);
  const theme = isGreenTheme ? green : dark;

  console.log(theme);
  return (
    <nav className={styles.nav} style= {{background: theme.navbar}}>
      <Link className={styles.a} to="/" style= {{ color: theme.fontColor}} >
        HOME
      </Link>
      <Link to="/add-article-page" style= {{ color: theme.fontColor}}>ADD ARTICLE</Link>
      <Link to="/about" style= {{ color: theme.fontColor}}>ABOUT</Link>
    </nav>
  );
};

export default Navbar;
