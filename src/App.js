import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/home';
import Navbar from './components/navbar';
import Register from './components/register';
import Login from './components/login';
import Barber from './components/barber'
import './App.scss'

const App = () => {
 return (
  <div className="container">
    <Navbar />
   <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/home/:id/' element={<Barber />}></Route>
   </Routes>

 </div>
)
}
export default App;