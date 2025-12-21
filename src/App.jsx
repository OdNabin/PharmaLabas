import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./App/Component/Navbar";
import Home from "./App/Pages/Home";
import Footer from "./App/Component/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="/contact" element={<h1>Contact Us</h1>} />
          <Route path="/services/:test" element={<h1>Service Details</h1>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
