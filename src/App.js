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




// import './App.css';
// import Auth from './components/auth'
// import Navbar from './components/navbar';
// import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import Register from './components/register';

// function App() {

  
  
//   return (
    
//     <Navbar></Navbar>
   
//   );
// }
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);
// export default App;
