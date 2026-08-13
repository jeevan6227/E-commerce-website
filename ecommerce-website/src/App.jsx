import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

import { CartProvider } from "./context/CartContext";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("shopzone-theme") === "dark";
  });

  const toggleTheme = () => {
    setDarkMode((currentMode) => {
      const newMode = !currentMode;

      localStorage.setItem(
        "shopzone-theme",
        newMode ? "dark" : "light"
      );

      return newMode;
    });
  };

  return (
    <CartProvider>
      <BrowserRouter>

        <div className={darkMode ? "app dark-mode" : "app"}>

          <Navbar
            darkMode={darkMode}
            toggleTheme={toggleTheme}
          />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/products"
              element={<Products />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/checkout"
              element={<Checkout />}
            />

            <Route
              path="/order-success"
              element={<OrderSuccess />}
            />
          </Routes>

        </div>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;