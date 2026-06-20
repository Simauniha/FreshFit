import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from "../src/pages/Home/Home"
import Collection from "./pages/Collection/Collection"
import Product from "../src/pages/Product/Product"
import Contact from "../src/pages/Contact/Contact"
import Login from "../src/pages/Login/Login"
import Orders from "../src/pages/Orders/Orders"
import Cart from "../src/pages/Cart/Cart"
import About from "../src/pages/About/About"
import PlaceOrder from "../src/pages/PlaceOrder/PlaceOrder"

import Navbar from "../src/components/Navbar/Navbar"
import Footer from "../src/components/Footer"
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
