import ArticleItem from "../components/ArticleItem";
import Search from "../components/Search";

function Home(){
  return(
    <div className="home">
      <h1>Home page</h1>
      <Search/>
      <ArticleItem></ArticleItem>
    </div>
  );
}

export default Home;