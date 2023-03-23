import React from "react";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./components/AddToCart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
    </div>
  );
};

export default App;
