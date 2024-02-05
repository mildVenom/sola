import React from 'react'
import '../assets/styles/style.css'
import Footer from '../components/Footer'
import Offer from '../components/offer/offer'
import ExtraSection from '../components/ExtraSection'

function whatWeOffer() {
  return (
    <section className=''>
        <Offer />
        <ExtraSection/>
        <Footer />
    </section>
  )
}

export default whatWeOffer;
export const Head = () => <title>What We Offer</title>
