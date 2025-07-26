import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar /> {/* Navbar */}
        <Routes>
          <Route path="/login" element={<LoginPopup />} />
        </Routes>
        <Hero />
        <div className="container">
          <Title subtitle="Our Programs" title="Programs We Offer" />
          <Programs /> <About />
          <Title subtitle="Gallery" title="Campus Photos" /> <Campus />
          <Title subtitle="Testimonials" title="What Our Students Say" />
          <Testimonial /> <Title subtitle="Contact us" title="Get In Touch" />
          <Contact />
          <Footer />
        </div>
      </Router>
    </div>
  );
};
export default App;
