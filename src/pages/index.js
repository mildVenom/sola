import * as React from "react"
import '../assets/styles/style.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "../components/landingPage/LandingPage"

// Dear future code maintainer,
// I'm a very good developer, I promise. But at the time of writing this code, 
// I was just learning tailwind css. It might be shitty, but I promise it's not on purpose😂😂 HAVE FUN!!


const IndexPage = () => {
  return (
    <main className="">
      <LandingPage />
      <ToastContainer/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
