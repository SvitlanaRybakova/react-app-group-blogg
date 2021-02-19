import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props){

  const [isGreenTheme, setIsGreenThem] = useState(true);
  const [green , setGreen ] = useState({
    fontColor: '#464040', bg: '#00801342', navbar: 'rgb(131, 187, 129)'
  })
  const [dark, setDark] = useState({
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