import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'



function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  
  
  
  
  
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };


  return (
    <Router>
      <div className={`App ${darkMode ? "dark" : "light"}`}>
        <header>
          <h1>Still Waters</h1>
          <h3>Devotion</h3>
          <nav className="nav-bar">
            <Link to="/">Home</Link> | {""}
            <Link to="/about">About</Link> | {""}
            <Link to="/contact">Contact</Link>

            {/* toggle Button */}
            <button 
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            >

            {darkMode ? "Light Mode" : "Dark Mode"}
            </button>


             {/* Search Bar */}
        <form className="seach-form" onSubmit={handleSearch}>
          <input type="text" placeholder="search devotion..." value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </nav>
      </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>@ {new Date().getFullYear()} Still Waters Devotion </p>
        </footer>

      </div>
    </Router>
  );
}


export default App;