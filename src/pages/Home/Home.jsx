import React from 'react'
import HeroSection from '../../Component/Hero/Hero'
import ExpertiseAreas from '../../Component/ExpertiseAreas/ExpertiseAreas'
import ServicesSection from '../../Component/ServiceSection/ServicesSection'
import AppointmentSection from '../../Component/AppointmentSection/AppointmentSection'
import MassageTherapyCenter from '../../Component/MassageTherapyCenter/MassageTherapyCenter'
import BookAppointment from '../../Component/BookAppointment/BookAppointment'
import StayInTouchFooter from '../../Component/Footer/StayInTouchFooter'

const Home = () => {
  return (
    <>
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

export default Home