import React from 'react'
import AboutUs from '../components/AboutComponents/AboutUs'
import ContactForm from '../components/AboutComponents/ContactForm'
import Mission from '../components/AboutComponents/Mission'
import Vision from '../components/AboutComponents/Vision'
import WithLayout from '../Layout/WithLayout'
const AboutScreen = () => {
  return (
    <>
      <AboutUs />
      <Mission />
      <Vision />
      <ContactForm />
    </>
  )
}

export default WithLayout(AboutScreen);