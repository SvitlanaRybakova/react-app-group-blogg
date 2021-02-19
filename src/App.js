import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ArticleContextProvider from "./contexts/ArticleContext";
import AddArticlePage from "./pages/AddArticlePage";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle"

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ArticleContextProvider>
          <BrowserRouter>
            <Navbar />
            <ThemeToggle/>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-article-page" component={AddArticlePage} />
            <Route exact path="/about" component={About} />
          </BrowserRouter>
        </ArticleContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
