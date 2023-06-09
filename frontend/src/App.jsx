import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className='py-5'>
      <Container>
        <Routes>
          <Route path='/order/:id' element={<OrderScreen/>}/>
          <Route path='/shipping' element={<ShippingScreen/>}/>
          <Route path='/payment' element={<PaymentScreen/>}/>
          <Route path='/placeorder' element={<PlaceOrderScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/profile' element={<ProfileScreen/>}/>
          <Route path='/product/:id' element={<ProductScreen/>} />
          <Route path='/cart/:id?' element={<CartScreen/>} />
          <Route path='/' element={<HomeScreen/>} exact />
        </Routes>
      </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
