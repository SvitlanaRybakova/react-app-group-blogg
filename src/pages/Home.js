import ArticleItem from "../components/ArticleItem";
import Search from "../components/Search";

function Home(){
  return(
    <div className="home">
      <Search/>
      <ArticleItem></ArticleItem>
    </div>
  );
}

export default Home;