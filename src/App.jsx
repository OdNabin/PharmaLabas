import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./App/Component/Navbar";
import Footer from "./App/Component/Footer";
import ScrollToTop from "./App/Component/ScrollToTop";

/* ---------------- Lazy Loaded Pages ---------------- */

const Home = lazy(() => import("./App/Pages/Home"));
const About = lazy(() => import("./App/Pages/About"));
const Services = lazy(() => import("./App/Pages/Services"));

const Industries = lazy(() => import("./App/Component/Industries"));
const EngagementModel = lazy(() =>
  import("./App/Component/EngagementModel")
);
const Insights = lazy(() => import("./App/Component/Insights"));
const ExpertNetwork = lazy(() => import("./App/Component/ExpertNetwork"));
const Contact = lazy(() => import("./App/Component/Contact"));
const NotFound = lazy(() => import("./App/Component/NotFound"));

/* ---------------- App Component ---------------- */

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <div className="pt-20">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-[60vh]">
              <span className="text-lg font-semibold animate-pulse">
                Loading...
              </span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route
              path="/engagement-model"
              element={<EngagementModel />}
            />
            <Route path="/insights" element={<Insights />} />
            <Route path="/experts" element={<ExpertNetwork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
