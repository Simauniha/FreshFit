import React from 'react'
import "./Home.css";
import Hero from "../../components/Hero/Hero"
import LatestCollection from '../../components/LatestCollection/LatestCollection';

const Home = () => {
  return (
    <>
    <Hero/>
    <LatestCollection></LatestCollection>
    </>
  )
}

export default Home
