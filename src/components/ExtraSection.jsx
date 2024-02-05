import React from 'react'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'

function ExtraSection() {
    return (
        <section className='w-full pt-28'>
            <div className="w-full h-screen relative" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${image4})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"

            }}>
                <div className="absolute  text-orange-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-4xl font-bold">Synthesizing Success By Unleashing Team Potential </h1>
                    <p className="tex-2xl text-center text-gray-300">
                    Elevate your team's spirit and amplify collaboration with The School Of Life Art. Building success, one team at a time!
                    </p>
                </div>
            </div>
            <div className="w-full h-screen relative" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${image3})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",

            }}>
                <div className="absolute  text-orange-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-4xl font-bold">Elevating Performance through Collaborative Excellence</h1>
                    <p className="tex-2xl text-center text-gray-300">
                    Empower your team with transformative training experiences at [Your Company Name]. Together, we thrive, learn, and conquer challenges as one unstoppable force!
                    </p>
                </div>
            </div>
            <div className="w-full h-screen relative" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${image2})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"

            }}>
                <div className="absolute  text-orange-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-4xl font-bold">Precision Training for Peak Performance</h1>
                    <p className="tex-2xl  text-gray-300">
                    Bullseye your goals with targeted team training!, we customize learning experiences to hit the mark and drive collective success.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ExtraSection