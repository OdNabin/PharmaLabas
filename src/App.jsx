import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./App/Component/Navbar";
import Home from "./App/Pages/Home";
import Footer from "./App/Component/Footer";
import Services from "./App/Pages/Services";
import About from "./App/Pages/About";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<h1>Contact Us</h1>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
