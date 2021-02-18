import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ArticleContextProvider from "./contexts/ArticleContext";
import AddArticlePage from "./pages/AddArticlePage";


function App() {
  return (
    <div className="App">
    <ArticleContextProvider>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        {/* <Router exact path="/" component={Home}/> */}
        <Route exact path="/about" component={About} />
        <AddArticlePage/>
        </BrowserRouter>
  </ArticleContextProvider>
    </div>
  );
}

export default App;
