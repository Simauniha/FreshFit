import React from 'react'
import "./Home.css";
import Hero from "../../components/Hero"
import LatestCollection from '../../components/LatestCollection';
import BestSheller from '../../components/BestSeller';
import OurPolicy from '../../components/OurPolicy';
import NewsletterBox from '../../components/NewsletterBox';

const Home = () => {
  return (
    <>
    <Hero/>
    <LatestCollection/>
    <BestSheller/>
    <OurPolicy/>
    <NewsletterBox/>
    </>
  )
}

export default Home
