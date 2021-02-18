import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ArticleContextProvider from "./contexts/ArticleContext";


function App() {
  return (
    <div className="App">
    <ArticleContextProvider>
        <BrowserRouter>
          <Navbar />
          <Home />
          <About />
        </BrowserRouter>
  </ArticleContextProvider>
    </div>
  );
}

export default App;
