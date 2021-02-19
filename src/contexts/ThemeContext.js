import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

function ThemeContextProvider(props){

  const [isGreenTheme, setIsGreenThem] = useState(true);
  const [green , setGreen ] = useState({
    fontColor: 'darkslategray', bg: '#00801342',
  })
  const [dark, setDark] = useState({
    fontColor: 'white', bg: '#000000',
  })

  const toggleTheme = () =>{
    setIsGreenThem( !isGreenTheme )
  }

  const data = {
    isGreenTheme,
    green,
    dark,
    toggleTheme
  }

  return(
    <ThemeContext.Provider value={{data}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
export default ThemeContextProvider;