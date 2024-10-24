import React from 'react'
import Carousel from './Carousel'
import About from './about'
import Courses from './Courses'
import Registration from './Registration'
import Team from './Team'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <>
      <Carousel/>
      <About />
      <Courses/>
      <Registration/>
      <Team/>
      <Testimonials/>
    </>
  )
}

export default Home;