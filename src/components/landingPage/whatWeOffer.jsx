import React from 'react'
import cursor from '../../assets/images/cursor.svg';
import cursorGreen from '../../assets/images/cursor-green.svg';
import cursorYellow from '../../assets/images/cursor-yellow.svg';
import { toast } from 'react-toastify';

function WhatWeOffer() {
    function handleSeeMore() {
        return toast("Coming soon!")
    }
    return (
        <section className='what-we-offer px-20 py-20 w-full z-10'>

            <h1 className="text-lg font-medium text-gray-500 uppercase"><div className='line mb-2 bg-gray-400 mr-2'></div> What we offer</h1>
            <h1 className="text-3xl md:text-4xl w-3/3 px-10 md:px-40 text-center py-10 text-gray-700 ">
                Our training programs are designed to be <span className="text-red-600">
                    engaging
                </span>, practical, and <span className="results-oriented">
                    results-oriented.
                </span>
            </h1>

            <div className="programs-container md:pt-5 flex justify-around items-center flex-col md:flex-row gap-10 flex-wrap">
                <ul class="list-none flex flex-col gap-10 flex-nowrap shadow-lg md:shadow-lg px-10 py-10 rounded md:rounded-none">
                    <li class=" text-center font-bold text-gray-700">
                        <p className="text-lg">Training</p>
                    </li>
                    <li class=" flex justify-around gap-3 text-start">
                        <img src={cursor} alt='cursor' className='point-img' />
                        <p className="text-lg text-gray-500">Leadership Training</p>
                    </li>
                    <li class=" flex justify-around gap-3">
                        <img src={cursor} alt='cursor' className='point-img' />
                        <p className="text-lg text-gray-500">Performance Management</p>
                    </li>
                    <li class=" flex justify-around gap-3">
                        <img src={cursor} alt='cursor' className='point-img' />
                        <p className="text-lg text-gray-500">Change Management</p>
                    </li>
                    <li class=" flex justify-around gap-3">
                        <img src={cursor} alt='cursor' className='point-img' />
                        <p className="text-lg text-gray-500">Motivational Talks</p>
                    </li>
                </ul>

                <ul class="list-none flex flex-col gap-10 flex-nowrap shadow-lg md:shadow-lg px-10 py-10 rounded md:rounded-none">
                    <li class=" text-center font-bold text-gray-700">
                        <p className="text-lg">Mentoring</p>
                    </li>
                    <ul className='list-none flex flex-col gap-10 flex-nowrap shadow-lg md:shadow-none px-10 py-5 rounded md:rounded-none'>
                        <li class=" text-center font-bold text-gray-700">
                            <p className="text-lg">Educational mentoring</p>
                        </li>
                        <li class=" flex justify-around gap-3">
                            <img src={cursorGreen} alt='cursor' className='point-img' />
                            <p className="text-lg text-gray-500">Mentorship Programmes</p>
                        </li>
                        <li class=" flex justify-around gap-3">
                            <img src={cursorGreen} alt='cursor' className='point-img' />
                            <p className="text-lg text-gray-500">Counselling Programmes</p>
                        </li>
                    </ul>
                    <ul className="list-one flex flex-col gap-10 flex-nowrap shadow-lg md:shadow-none px-10 py-5 rounded md:rounded-none">
                        <li class=" text-center font-bold text-gray-700">
                            <p className="text-lg">Career Mentoring</p>
                        </li>
                        <li class=" flex justify-around gap-3">
                            <img src={cursorGreen} alt='cursor' className='point-img' />
                            <p className="text-lg text-gray-500">Employment Programmes</p>
                        </li>
                        <li class=" flex justify-around gap-3">
                            <img src={cursorGreen} alt='cursor' className='point-img' />
                            <p className="text-lg text-gray-500">Youth Programmes</p>
                        </li>
                    </ul>
                </ul>

                <ul class="list-none flex flex-col gap-10 flex-nowrap shadow-lg md:shadow-lg px-10 py-10 rounded md:rounded-none">
                    <li class=" text-center font-bold text-gray-700">
                        <p className="text-lg">Personal Development</p>
                    </li>
                    <li class=" flex justify-around gap-3">
                        <img src={cursorYellow} alt='cursor' className='point-img' />
                        <p className="text-lg text-gray-500">Upskilling & Reskilling Training</p>
                    </li>
                    <li class=" flex justify-around gap-3">
                        <img src={cursorYellow} alt='cursor' className='point-img' />
                        <p className="text-lg text-gray-500">Wellness & Well-Being Training</p>
                    </li>
                    <li class=" flex justify-around gap-3">
                        <img src={cursorYellow} alt='cursor' className='point-img' />
                        <p className="text-lg text-gray-500">Stress Management In The Workplace</p>
                    </li>
                    <li class=" flex justify-around gap-3">
                        <img src={cursorYellow} alt='cursor' className='point-img' />
                        <p className="text-lg text-gray-500">Mental Health Awareness</p>
                    </li>
                </ul>
            </div>
            <p className='text-md text-red-800 capitalize text-end font-bold pt-10 see-more-programs'>
                <a className="" onClick={handleSeeMore}>see more programs</a>
            </p>
        </section>
    )
}

export default WhatWeOffer