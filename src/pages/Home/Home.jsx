import React from 'react'
import "./Home.css";
import Hero from "../../components/Hero/Hero"
import LatestCollection from '../../components/LatestCollection/LatestCollection';
import BestSheller from '../../components/LatestCollection/BestSeller';

const Home = () => {
  return (
    <>
    <Hero/>
    <LatestCollection/>
    <BestSheller/>
    </>
  )
}

export default Home
