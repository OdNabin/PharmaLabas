import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./App/Component/Navbar";
import Home from "./App/Pages/Home";
import Footer from "./App/Component/Footer";
import Services from "./App/Pages/Services";
import About from "./App/Pages/About";
import Industries from "./App/Component/Industries";
import EngagementModel from "./App/Component/EngagementModel";
import Insights from "./App/Component/Insights";
import ExpertNetwork from "./App/Component/ExpertNetwork";
import Contact from "./App/Component/Contact";
import ScrollToTop from "./App/Component/ScrollToTop";
import NotFound from "./App/Component/NotFound";


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
           <Route path="/industries" element={<Industries/>} />
            <Route path="/engagement-model" element={<EngagementModel/>} />
            <Route path="/insights" element={<Insights/>} />
              <Route path="/experts" element={<ExpertNetwork/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
