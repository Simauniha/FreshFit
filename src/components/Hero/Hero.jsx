import "./Hero.css";
import React from 'react'
import hero from "../../assets/hero.png";

const Hero = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row border border-gray-400">
                {/* hero left side */}
                <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                    <div className="text-[#414141]">
                        <div className="flex items-center gap-2">
                            <p className="w-8 md:w-11 h-0.5 bg-(--dark)"></p>
                            <p className="font-medium text-lg md:text-base text-(--dark)">OUR BESTSELLERS</p>
                        </div>
                        <h1 className="prata-regular text-3xl sm:py-3 lg:text-7xl leading-relaxed text-(--dark)">Latest Arrivals</h1>
                        <div className="flex items-center gap-2">
                            <p className="font-semibold text-lg md:text-base text-(--dark)">SHOP NOW</p>
                            <p className="w-8 md:w-11 h-0.5 bg-(--dark)"></p>
                        </div>
                    </div>
                </div>
                {/* hero right size */}
                <img src={hero} className="w-full sm:w-1/2 h-175 hero-img" alt="Hero image" />
                
            </div>
        </>
    )
}

export default Hero
