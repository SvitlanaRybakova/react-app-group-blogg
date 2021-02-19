import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props){

  const [isGreenTheme, setIsGreenThem] = useState(true);
  const [green] = useState({
    fontColor: '#464040', bg: ' #6e9a447a', navbar: '#6e9a44'
  })
  const [dark] = useState({
    fontColor: 'white', bg: '#000000', navbar: '#263238'
  })

  const toggleTheme = () =>{
    setIsGreenThem( !isGreenTheme )
  }


  return(
    <ThemeContext.Provider value={{isGreenTheme, green, dark, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
export default ThemeContextProvider;