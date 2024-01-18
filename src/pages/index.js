import * as React from "react"
import '../assets/styles/style.css'
import Hero from "../components/landingPage/hero"
import WhatWeOffer from "../components/landingPage/whatWeOffer"
import ParticlesComponent from "../components/particlesComponent"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from "../components/landingPage/about"
import Quote from "../components/landingPage/quote"
import GetStarted from "../components/landingPage/getStarted"
import Footer from "../components/Footer"
// Dear future code maintainer,
// I'm a very good developer, I promise. But at the time of writing this code, 
// I was just learning tailwind css. It might be shitty, but I promise it's not on purpose😂😂 HAVE FUN!!


const IndexPage = () => {
  return (
    <main className="">
      <ParticlesComponent/>
      <Hero />
      <WhatWeOffer />
      <About />
      <GetStarted />
      <Quote />
      <Footer />
      <ToastContainer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
