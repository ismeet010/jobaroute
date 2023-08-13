import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";



function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Jobarouter</h1>
        {/* Link and NavLink are different as when we click on navlink it gets a class="active" in it */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          {/* index is same thing as path="/" */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
