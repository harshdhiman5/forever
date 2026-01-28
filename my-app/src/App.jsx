// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Collection from './Collection';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/collection' element={<Collection></Collection>}></Route>
          <Route path="/product/:id" element={<ProductDetails />} />
           
      
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </>
  );
}

export default App;
