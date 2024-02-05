import React from 'react'
import Navigation from '../NavBar';
import curved3 from '../../assets/images/curved-3.png'
import curved1 from '../../assets/images/curved-about.png'



function Training() {
    return (
        <section className='training bg-white'>
            <Navigation />
            <div className="inner-training w-100 h-full px-20 md:px-40 py-20 bg-white">
                <h2 className="text-2xl md:text-4xl">
                    We train <span className="text-red-600">  Private Companies</span>, <span className="text-red-600">Learning Institutions</span>, <span className="text-red-600">Cooperates</span> and <span className="text-red-600">government organization</span> team building program.
                </h2>
                <p className="text-gray-700 pt-10 pr-40 font-light">
                    We prioritize the success of our clients. We work closely with you to understand your unique requirements and goals, enabling us to tailor our training solutions accordingly. Our trainers are skilled facilitators who foster a supportive and collaborative learning environment, encouraging active participation and knowledge exchange. We believe in empowering individuals to become lifelong learners, equipped with the skills and mindset to thrive in an ever-evolving world.
                </p>
                <section className="py-20 get-started relative">
                    <div className='flex w-full justify-center items-center flex-row flex-wrap gap-5'>
                        <div className="flex-1 border border-orange-500 rounded p-5 shadow-md w-1/2 h-100px">
                            <h2 className='font-bold text-gray-700 py-3 text-start uppercase'>Our Mission</h2>
                            <p className="font-light text-gray-500 text-md">
                                Team building is a vital component of organizational success. It enhances communication, collaboration, and synergy among team members, leading to increased productivity and a positive work environment.
                            </p>
                        </div>

                        <div className="flex-1 border border-orange-500 rounded p-5 shadow-md w-1/2 sm:w-full h-100px">
                            <h2 className='font-bold text-gray-700 py-3 text-start uppercase'>Our Vision</h2>
                            <p className="font-light text-gray-500 text-md">
                                Our mentorship program focuses on, empowering students through meaningful interactions and knowledge sharing, fostering personal and academic growth.
                            </p>
                        </div>
                    </div>
                </section>
                <img src={curved3} alt="curved line" className="absolute left-0 bottom-0 z-10" />
                <img src={curved1} alt="curved" className='absolute top-0 right-10 z-0' />
            </div>
        </section>
    )
}

export default Training