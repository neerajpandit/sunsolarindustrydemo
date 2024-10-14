import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import Aboutsunsolar from '../component/About/Aboutsunsolar'
import Cards from '../component/solar/Cards'

const About = () => {
  return (
    <div className='bg-white'>
        <Navbar/>
        <Aboutsunsolar/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default About