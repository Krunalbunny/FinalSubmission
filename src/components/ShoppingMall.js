import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Shop from './Shop';
import Cart from './Cart';

const ShoppingMall = (props) => {
  return (
    <Router>
      <div className="App">
        <Navbar logout={props.logout}/>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ShoppingMall;