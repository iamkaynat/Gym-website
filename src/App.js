import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import HomePage from './Pages/homepage';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignUp';
import NavBar from './Components/Navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
