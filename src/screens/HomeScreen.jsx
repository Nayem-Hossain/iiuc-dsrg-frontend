import React from 'react'
import Slider from '../components/HomeComponents/Slider'
import CounterWidget from '../components/HomeComponents/CounterWidget'
import Partners from '../components/HomeComponents/Partners'
import WithLayout from '../Layout/WithLayout'
import CurrentEvents from '../components/HomeComponents/CurrentEvents'
const HomeScreen = () => {
  return (
    <>
    <Slider/>
    <CurrentEvents/>
    <Partners/>
    <CounterWidget/>
    </>
  )
}

export default WithLayout(HomeScreen)