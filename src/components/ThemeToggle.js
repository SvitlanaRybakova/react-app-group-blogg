import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{ cursor: 'pointer' }}
      onClick={toggleTheme}
    >
      Change the theme
    </button>
  )
}
export default ThemeToggle;