import { BrowserRouter, Route } from "react-router-dom";

import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <About />
      </BrowserRouter>
    </div>
  );
}

export default App;
