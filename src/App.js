import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import AddArticlePage from "./pages/AddArticlePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <AddArticlePage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
