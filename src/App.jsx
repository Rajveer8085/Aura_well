import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css'
import Header from './Component/Header/Header'
import Gallery from './pages/Gallery/Gallery'
import Home from './pages/Home/Home'
import SpaBooking from './pages/SpaBooking/SpaBooking'
import { AppointmentProvider } from './Store/SpaContext'

function App() {

  return (
    <BrowserRouter>
      <AppointmentProvider>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path="/appointment" element={<SpaBooking />} />
          <Route path="/about" element={<div style={{ textAlign: "center", padding: "50px" }}>
            <h1>🚧 About Page is Under Service 🚧</h1>
            <p>We’re working hard to bring this section live soon!</p>
          </div>} />
          <Route path="/contact" element={<div style={{ textAlign: "center", padding: "50px" }}>
            <h1>🚧 contact Page is Under Service 🚧</h1>
            <p>We’re working hard to bring this section live soon!</p>
          </div>} />
        </Routes>
      </AppointmentProvider>
    </BrowserRouter>
  )
}

export default App
