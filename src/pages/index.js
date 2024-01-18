import * as React from "react"
import '../assets/styles/style.css'
import Hero from "../components/landingPage/hero"
import WhatWeOffer from "../components/landingPage/whatWeOffer"
import ParticlesComponent from "../components/particlesComponent"
// Dear future code maintainer,
// I'm a very good developer, I promise. But at the time of writing this code, 
// I was just learning tailwind css. It might be shitty, but I promise it's not on purpose😂😂 HAVE FUN!!


const IndexPage = () => {
  return (
    <main className="">
      <Hero />
      <WhatWeOffer />
      <ParticlesComponent showParticles={true} />
      <p className="z-1">house maid</p>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
