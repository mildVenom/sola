import React from 'react'

function WhatWeOffer() {
    return (
        <section className='min-h-screen what-we-offer px-20 py-20 w-full'>
            <h1 className="text-lg font-medium text-gray-500 uppercase"><div className='line mb-2 bg-gray-400 mr-2'></div> What we offer</h1>
            <h1 className="text-4xl w-2/3 py-10 text-gray-700 ">
                Our training programs are designed to be <span className="text-red-600">
                    engaging
                </span>, practical, and <span className="results-oriented">
                    results-oriented.
                </span>
            </h1>

            <div className="programs-container"></div>
        </section>
    )
}

export default WhatWeOffer