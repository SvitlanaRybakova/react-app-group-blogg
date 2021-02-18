import ArticleItem from "../components/ArticleItem";
import Search from "../components/Search";
import { useContext } from "react";
import { ArticleContext } from '../contexts/ArticleContext';

function Home(){

  const { isNecessaryArticle } = useContext(ArticleContext);
  return(
    <div className="home">
      <Search/>
      {isNecessaryArticle ?  <ArticleItem/> : <h1>Not found</h1> }

      
    </div>
  );
}

export default Home;