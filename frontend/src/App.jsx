import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className='py-5'>
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen/>} exact />
          <Route path='/product/:id' element={<ProductScreen/>} />
        </Routes>
      </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
