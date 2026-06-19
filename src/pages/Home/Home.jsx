import React from 'react'
import "./Home.css";
import Hero from "../../components/Hero/Hero"
import LatestCollection from '../../components/LatestCollection/LatestCollection';
import BestSheller from '../../components/BestSeller/BestSeller';
import OurPolicy from '../../components/OurPolicy/OurPolicy';

const Home = () => {
  return (
    <>
    <Hero/>
    <LatestCollection/>
    <BestSheller/>
    <OurPolicy/>
    </>
  )
}

export default Home
