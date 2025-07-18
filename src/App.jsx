import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './Components/header/Navbar'
import Footer from './Components/footer/Footer'
import UseStateHook from './Components/UseStateHook'
import AddToCart from './Components/header/AddToCart'
import DetailedPage from './Components/DetailedPage'
import Products from './Components/Products'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/usestatehook' element={<UseStateHook />}></Route>
          <Route path='/addtocart' element={<AddToCart />}></Route>
          <Route path='/products/:id' element={<DetailedPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
