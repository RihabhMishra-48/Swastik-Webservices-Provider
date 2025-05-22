import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import LoginSignup from "./components/LoginSignup";
import Documentation from "./components/Documentation";


const HomePage = () => {
  return (
    <>
      <div id="home"><HeroSection /></div>
      <div id="features"><FeatureSection /></div>
      <div id="workflow"><Workflow /></div>
      <div id="pricing"><Pricing /></div>
      <div id="testimonials"><Testimonials /></div>
      <Footer />
    </>
  );
};

// ✅ Function to hide Navbar on Sign In/Sign Up pages
const Layout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<LoginSignup />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path="/documentation" element={<Documentation />} />

        </Routes>
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
