import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Cources from "./pages/Cources";
import CourcesDetails from "./pages/CourcesDetails";
import Navbar2 from "./component/Navbar2";

function App() {
  return (
    <div className="">
      <Navbar />
      <Navbar2 />
      <Routes>
        {/* normal routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cources" element={<Cources />} />
        {/* dynamic routes */}
        <Route path="/cources/:cid" element={<CourcesDetails />} />
        {/* nested routes */}
        <Route path="/product" element={<Product />}>
          <Route path="/product/men" element={<Men />} />
          <Route path="/product/women" element={<Women />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
