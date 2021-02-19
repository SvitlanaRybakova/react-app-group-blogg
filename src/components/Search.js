import React, { useContext } from 'react';
import { ArticleContext } from '../contexts/ArticleContext';
import { form, input, button } from '../styles/Search.module.css';
import {ThemeContext} from "../contexts/ThemeContext";



function Search(){
  const { searchInput, onChange, findArticle } = useContext(ArticleContext);
  const { isGreenTheme, green, dark } = useContext(ThemeContext);
  const theme = isGreenTheme ? green : dark;

  return(
    <form onSubmit={findArticle} className={form}>
      <input 
      className={input} 
      type="text" 
      placeholder="search" 
      value={searchInput} 
      onChange={onChange}
      
      />

      <button className={button} style= {{background: theme.navbar, color: theme.fontColor}}>Find</button>
    </form>
  )
}
export default Search;