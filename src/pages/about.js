import * as React from "react"
import '../assets/styles/style.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";
import Training from "../components/aboutPage/training";

// Dear future code maintainer,
// I'm a very good developer, I promise. But at the time of writing this code, 
// I was just learning tailwind css. It might be shitty, but I promise it's not on purpose😂😂 HAVE FUN!!


const AboutPage = () => {
  return (
    <main className="">
      <Training />
      <Footer />
      <ToastContainer />
    </main>
  )
}

export default AboutPage

export const Head = () => <title>Home Page</title>
