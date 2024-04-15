
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/Placeorder/Placeorder';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path='/Placeorder' element={<Placeorder/>} />
        
        </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;

