import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { toggleWrapper, button, knob, dark, green, themeCheckbox} from '../styles/ThemeToggle.module.css';

function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className={toggleWrapper}>
      <input className={themeCheckbox}
        id="theme-checkbox"
        type="checkbox"
        onClick={toggleTheme}
      />
      <label className={button} htmlFor="theme-checkbox">
        <div className={knob}></div>
        <div className={dark}>dark</div>
        <div className={green}>green</div>
      </label>
    </div>



  )
}
export default ThemeToggle;