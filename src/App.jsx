import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring the beauty of nature into your home.
        </p>

        <Link to="/plants">
          <button className="get-started">
            Get Started
          </button>
        </Link>

        <Link to="/about">
          <button className="about-button">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/plants" element={<ProductList />} />

      <Route path="/cart" element={<CartItem />} />

      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;