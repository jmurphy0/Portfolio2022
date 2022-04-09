import "./App.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div class="content">
          <Routes>
            <Route exact path="/" element={<About />}></Route>
            <Route exact path="/About" element={<About />}>
              About
            </Route>
            <Route exact path="/Contact" element={<Contact />}>
              Contact
            </Route>
            <Route exact path="/Portfolio" element={<Portfolio />}>
              Portfolio
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
