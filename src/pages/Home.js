import ArticleItem from "../components/ArticleItem";
import Search from "../components/Search";
import { useContext } from "react";
import { ArticleContext } from '../contexts/ArticleContext';
import NotFound from '../components/NotFound';

function Home(){

  const { isNecessaryArticle } = useContext(ArticleContext);
  
  return(
    <div className="home">
      <Search/>
      {isNecessaryArticle ?  <ArticleItem/> : <NotFound/> }

      
    </div>
  );
}

export default Home;