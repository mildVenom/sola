import React from 'react'
import curved1 from '../../assets/images/curved-about.png'
import { toast } from 'react-toastify'

function About() {
    function handleReadMore(){
        return toast("Coming soon!")
    }
    return (
        <section className='about-landing px-20 py-20 w-full z-20 relative bg-white'>
            <h1 className="text-lg font-medium text-gray-500 uppercase"><div className='line mb-2 bg-gray-400 mr-2'></div> About us</h1>
            <h1 className="text-3xl md:text-4xl w-12/13 md:w-2/3 px-5 md:px-20 text-start py-10 text-gray-700 capitalize">
                We train <span className="text-red-600">
                    private companies, learning institutions, corporations
                </span>, and <span className="results-oriented">
                    government organizations.
                </span>
            </h1>
            <p className="text-lg text-gray-500 px-5 md:px-20 text-start w-12/13 md:w-4/5">
            We prioritize the success of our clients. We work closely with you to understand your unique requirements and goals, enabling us to tailor our training solutions accordingly. 
            </p>
            <p className='text-lg text-red-600 font-bold capitalize px-10 md:px-20 text-start w-4/5 py-5'>
                <a onClick={handleReadMore} className='hand-cursor p-5'>read more</a>
            </p>
            <img src={curved1} alt="curved" className='absolute top-0 right-10' />
        </section>
    )
}

export default About