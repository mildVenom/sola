import React from 'react'
import Hero from './hero'
import ParticlesComponent from '../particlesComponent'
import WhatWeOffer from './whatWeOffer'
import About from './about'
import GetStarted from './getStarted'
import Quote from './quote'
import Footer from '../Footer'

function LandingPage() {
    return (
        <>
            <Hero />
            <ParticlesComponent />
            <WhatWeOffer />
            <About />
            <GetStarted />
            <Quote />
            <Footer />
        </>
    )
}

export default LandingPage