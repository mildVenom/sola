import React from 'react'

function Quote() {
  return (
    <section className='quote bg-transparent flex justify-center items-center flex-col gap-0 py-40'>
        <h1 className="h1 text-3xl md-text-5xl text-orange-500  px-20 pb-10 w-full md:w-4/5 text-center">
            In this interconnected world, every single action we take has an impact on the lives of others
        </h1>
        <h1 className="text-lg font-medium text-gray-500 uppercase"><div className='line mb-2 bg-gray-400 mr-2'></div> Jane Goodall</h1>
    </section>
  )
}

export default Quote