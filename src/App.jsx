import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Exchanges from "./Components/Exchanges";
import Coins from "./Components/Coin";
import CoinDetail from "./Components/CoinDetail";
import ColorSwitch from "./Components/ColorSwitch";


const App = () => {
  return (
    <Router>
      <Header />
      <ColorSwitch/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin/:id" element={<CoinDetail/> } />
        <Route path="/exchanges" element={<Exchanges />} />
      </Routes>
    </Router>
  );
};

export default App;
