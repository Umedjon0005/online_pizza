import './scss/app.scss';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import FullPizza from './components/FullPizza';
//https://64211ecc86992901b2abef99.mockapi.io/PizzaTittle
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
