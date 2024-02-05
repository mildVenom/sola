import React from 'react'
import Navigation from '../NavBar'
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'

function Offer() {
    return (
        <section className=''>
            <Navigation />
            <div className="">
                <div className="offer-inner py-20 px-20 md:px-20">
                    <h3 className="offer-text text-2xl md:text-3xl font-semibold text-orange-600">What We Offer</h3>
                    <p className="text-gray-500 py-5 text-lg">
                        Our training programs are designed to be engaging, practical, and results-oriented. We combine cutting-edge instructional methodologies with real-world scenarios, ensuring that participants can apply their newfound knowledge directly in their work environments. From interactive workshops and hands-on simulations to online courses and customized training modules, we offer flexible learning options to suit different preferences and schedule
                    </p>
                    <h3 className="offer-text text-2xl md:text-3xl font-semibold text-orange-600 pt-10">Join Our Programmes</h3>
                </div>
            </div>
            <section className='offerings relative px-20'>
                <div className='my-5 border border-orange-600 rounded-3xl w-full h-auto flex justify-around items-center flex-row flex-wrap '>
                    <div className='h-full w-auto md:p-5 p-0 flex justify-center items-center'>
                        <img src={image1} className="sm:w-full md:w-80 h-1/3 border rounded-3xl" alt='awesome' />
                    </div>
                    <div className="">
                        <h3 className="h3 text-center text-3xl text-bold text-gray-700 pt-10">Training Programmes</h3>
                        <ul className='list-disc flex flex-row gap-10 flex-wrap pt-5 pb-3 px- justify-center items-center text-gray-600'>
                            <div className="">
                                <li className='md:text-xl text-md'>Leadership Training</li>
                                <li className='md:text-xl text-md'>Performance Management</li>
                                <li className='md:text-xl text-md'>Change Management</li>
                                <li className='md:text-xl text-md'>Strategic Management</li>
                            </div>
                            <div className="">
                                <li className='md:text-xl text-md'>Communication & Presentation Skills</li>
                                <li className='md:text-xl text-md'>Life Coaching</li>
                                <li className='md:text-xl text-md'>Women in leadership Development</li>
                                <li className='md:text-xl text-md'>Motivational Talks</li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='my-5 border border-orange-600 rounded-3xl w-full h-auto flex justify-around items-center flex-row flex-wrap '>
                    <div className="">
                        <h3 className="h3 text-center text-3xl text-bold text-gray-700 pt-10">Mentoring Programmes</h3>
                        <ul className='list-disc flex flex-row gap-10 flex-wrap pt-5 pb-3 px- justify-center items-center text-gray-600'>
                            <div className="">
                                <li className='md:text-xl text-md'>Mentorship Programme</li>
                                <li className='md:text-xl text-md'>Counselling Programme</li>
                                <li className='md:text-xl text-md'>Employment Programme</li>
                                <li className='md:text-xl text-md'>Youth Programme</li>
                            </div>
                            <div className="">
                                <li className='md:text-xl text-md'>Team building </li>
                                <li className='md:text-xl text-md'>Corporate team building</li>
                            </div>
                        </ul>
                    </div>
                    <div className='h-full w-auto md:p-5 p-0 flex justify-center items-center'>
                        <img src={image3} className="sm:w-full md:w-80 h-1/3 border rounded-3xl" alt='awesome' />
                    </div>
                </div>

                <div className='my-5 border border-orange-600 rounded-3xl w-full h-auto flex justify-around items-center flex-row flex-wrap '>
                    <div className='h-full w-auto md:p-5 p-0 flex justify-center items-center'>
                        <img src={image4} className="sm:w-full md:w-80 h-1/3 border rounded-3xl" alt='awesome' />
                    </div>
                    <div className="">
                        <h3 className="h3 text-center text-3xl text-bold text-gray-700 pt-10">Personal Development Programmes</h3>
                        <ul className='list-disc flex flex-row gap-10 flex-wrap pt-5 pb-3 px- justify-center items-center text-gray-600'>
                            <div className="">
                                <li className='md:text-xl text-md'>Upskilling and Reskilling Training</li>
                                <li className='md:text-xl text-md'>Wellness & Well-being Training</li>
                                <li className='md:text-xl text-md'>Stress Management in The WorkPlace</li>
                                <li className='md:text-xl text-md'>Mental Health Awareness</li>
                            </div>
                            <div className="">
                                <li className='md:text-xl text-md'>Nutrition & Healthy Eating</li>
                                <li className='md:text-xl text-md'>Resilience & Emotional Well-being</li>
                            </div>
                        </ul>
                    </div>
                </div>

            </section>

        </section>
    )
}

export default Offer