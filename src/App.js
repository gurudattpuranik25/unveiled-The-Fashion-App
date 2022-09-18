import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Context from "./components/Context";
import ProductPage from "./components/ProductPage";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Context>
      <div>
        <Navbar />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path={`/productPage/:productId`} element={<ProductPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Context>
  );
}

export default App;
