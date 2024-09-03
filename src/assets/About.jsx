import React, {useEffect} from 'react'
import HeroSection from '../components/HeroSection'
// import { data } from 'autoprefixer'
import { useGlobalContext } from '../context';

const About = () => {



  const{ updateAboutPage} = useGlobalContext();

  useEffect(()=>updateAboutPage(), []);





  return (
   <HeroSection />
  )
}

export default About;