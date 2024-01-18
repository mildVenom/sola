import React from 'react'
import curved2 from '../../assets/images/curved-2.png'

function GetStarted() {
    return (
        <section className="py-20 px-20 bg-white get-started relative">
            <h1 className="text-start text-gray-700 text-3xl capitalize font-bold pb-10">Get Started</h1>
            <div className='flex w-full justify-center items-center flex-row flex-wrap gap-5'>
                <div className="flex-1 border border-orange-500 rounded p-5 shadow-md w-1/2 h-100px">
                    <h2 className='font-bold text-gray-700 py-5 text-start uppercase'>Team Building</h2>
                    <p className="font-light text-gray-500 text-md">
                        Team building is a vital component of organizational success. It enhances communication, collaboration, and synergy among team members, leading to increased productivity and a positive work environment.
                    </p>
                </div>

                <div className="flex-1 border border-orange-500 rounded p-5 shadow-md w-1/2 h-100px">
                    <h2 className='font-bold text-gray-700 py-5 text-start uppercase'>Education Mentorship</h2>
                    <p className="font-light text-gray-500 text-md">
                    Our mentorship program focuses on, empowering students through meaningful interactions and knowledge sharing, fostering personal and academic growth. It ensures a balance in the wholistic growth of a person.
                    </p>
                </div>
            </div>
                <img src={curved2} alt="curved line" className="absolute left-0 bottom-0 z-10" />
        </section>
    )
}

export default GetStarted