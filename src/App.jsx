import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Aos from "aos";
import "aos/dist/aos.css";
import Store from "./components/Store/Store";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  //temp data
  const cartItems = [
    {
      id: 2,
      quantity: 2,
    },
  ];

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Cart cartItems={cartItems}/>
        <NavBar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/products" element={<Store cartItems={cartItems}/>} />
          <Route
            path="/"
            element={<Home handleOrderPopup={handleOrderPopup} />}
          />
        </Routes>
        <Footer />
        <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
