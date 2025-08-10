import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import HeroSection from './Component/Hero/Hero'
import ExpertiseAreas from './Component/ExpertiseAreas/ExpertiseAreas'
import ServicesSection from './Component/ServiceSection/ServicesSection'
import AppointmentSection from './Component/AppointmentSection/AppointmentSection'
import MassageTherapyCenter from './Component/MassageTherapyCenter/MassageTherapyCenter'
import BookAppointment from './Component/BookAppointment/BookAppointment'
import StayInTouchFooter from './Component/Footer/StayInTouchFooter'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <ExpertiseAreas />
      <ServicesSection />
      <AppointmentSection />
      <MassageTherapyCenter />
      <BookAppointment />
      <StayInTouchFooter />
    </>
  )
}

export default App
