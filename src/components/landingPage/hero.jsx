import React from 'react'
import Navigation from '../NavBar'
import img1 from '../../assets/images/img1.jpg'

function Hero() {
    return (
        <section className='hero-background z-10 bg-white'>
            <div className="inner-hero w-full h-full">
                <Navigation />
                <div className="mid-section px-16 md:px-30 gap-5 py-4 flex justify-center items-center flex-col lg:flex-row ">
                    <div className="left-container bg-dark flex-1 lg:w-3/4 flex justify-end flex-col py-10">
                        <h1 className="font-bold text-5xl text-gray-700 ">Dedicated to empowering students, individuals and organizations to reach their full potential</h1>
                        <p className="text-gray-500 text-md py-5">With a passion for learning and a commitment to excellence, we offer a wide range of comprehensive training programs tailored to meet the diverse needs of our clients.</p>
                        <button className="uppercase md:block bg-orange-500 hover:bg-orange-700 text-nowrap sm:text-md text-white py-2 px-4 rounded-full font-light transition duration-300 ease-in-out w-40">
                            Get in control
                        </button>
                    </div>
                    <div className="right-container flex-1 lg:w-1/4 flex justify-center items-center relative">
                        <img src={img1} alt="people sitting together" className="hero-right border-4 border-orange-500 p-2 rounded-full" width={400} loading='eager' />
                        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: "absolute", width: "100px", height: "100px", top: 0, left: 0, zIndex: 1, transform: "rotate(180deg)" }}>
                            <defs>
                                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                    <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                                    <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <path fill="url(#sw-gradient)" d="M25.3,-29.9C30.4,-25.9,30.5,-15.6,32.4,-5.6C34.3,4.4,37.9,14.2,35.1,21.4C32.3,28.7,23.1,33.3,14.2,34.7C5.3,36.1,-3.2,34.1,-11.4,31.2C-19.6,28.2,-27.5,24.4,-33.1,17.7C-38.7,11,-41.9,1.5,-40.8,-7.7C-39.8,-16.8,-34.4,-25.7,-26.9,-29.3C-19.4,-32.9,-9.7,-31.2,0.2,-31.4C10.1,-31.7,20.2,-33.9,25.3,-29.9Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s;" }}></path>
                        </svg>
                        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: "absolute", width: "100px", height: "100px", bottom: 0, right: 0, zIndex: 1 }}>
                            <defs>
                                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                    <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                                    <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <path fill="url(#sw-gradient)" d="M25.3,-29.9C30.4,-25.9,30.5,-15.6,32.4,-5.6C34.3,4.4,37.9,14.2,35.1,21.4C32.3,28.7,23.1,33.3,14.2,34.7C5.3,36.1,-3.2,34.1,-11.4,31.2C-19.6,28.2,-27.5,24.4,-33.1,17.7C-38.7,11,-41.9,1.5,-40.8,-7.7C-39.8,-16.8,-34.4,-25.7,-26.9,-29.3C-19.4,-32.9,-9.7,-31.2,0.2,-31.4C10.1,-31.7,20.2,-33.9,25.3,-29.9Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s;" }}></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
