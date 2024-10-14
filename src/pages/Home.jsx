import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Hero from '../component/Hero/Hero'
import Whysolar from '../component/solar/Whysolar'
import Heroproduct from '../component/Product/Heroproduct'
import Testimonials from '../component/Testonomial/Testonomials'
import Services from '../component/Product/Services'
import Advatges from '../component/Product/Advatges'
import Footer from '../component/Footer/Footer'

const Home = () => {
  return (
    <div className='bg-white'>
        <Navbar/>
        <Hero/>
        <Whysolar/>
       <Heroproduct/>
       <Testimonials/>
       <Services/>
       <Advatges/>
       
       <Footer/>
    </div>
  )
}

export default Home