
import React, { useEffect } from 'react'
// import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'
import Services from './assets/Services';
import Contact from './assets/Contact';




const Home = () => {
 

  const{updateHomePage} = useGlobalContext();

  useEffect(()=>updateHomePage(),[]);
   



  return (
    <>
    <HeroSection  />
    <Services />
    <Contact/>
    
    </>
  )
}


export default Home;