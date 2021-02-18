import { BrowserRouter, Route } from "react-router-dom";

import About from "./pages/About";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
      </BrowserRouter>
    </div>
  );
}

export default App;
