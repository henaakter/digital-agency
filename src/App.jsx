import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Learn from "./pages/Learn";
import Marketing from "./pages/Marketing";
import Overview from "./pages/Overview";
import Pricing from "./pages/Pricing";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
