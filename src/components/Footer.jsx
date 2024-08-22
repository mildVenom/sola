import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed(width: 350, height: 350) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  const image = data.allFile.edges.find(edge => edge.node.relativePath.includes('swimming.jpg'));

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <section className='footer bg-white'>
      <div className="footer-inner w-full-h-full px-20 py-20">
        <div className="mid-section px-16 md:px-30 gap-5 py-4 flex justify-center items-center flex-col lg:flex-row ">
          <div className="right-container flex-1 lg:w-1/4 flex justify-center items-center relative">
            <Img fixed={image.node.childImageSharp.fixed} alt="Swimming" className="hero-right border-4 border-orange-500 p-1 rounded-full" />
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: "absolute", width: "100px", height: "100px", top: 0, left: 0, zIndex: 1, transform: "rotate(180deg)" }}>
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>
                  <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#sw-gradient)" d="M25.3,-29.9C30.4,-25.9,30.5,-15.6,32.4,-5.6C34.3,4.4,37.9,14.2,35.1,21.4C32.3,28.7,23.1,33.3,14.2,34.7C5.3,36.1,-3.2,34.1,-11.4,31.2C-19.6,28.2,-27.5,24.4,-33.1,17.7C-38.7,11,-41.9,1.5,-40.8,-7.7C-39.8,-16.8,-34.4,-25.7,-26.9,-29.3C-19.4,-32.9,-9.7,-31.2,0.2,-31.4C10.1,-31.7,20.2,-33.9,25.3,-29.9Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: "all 0.3s ease 0s;" }}></path>
            </svg>
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: "absolute", width: "100px", height: "100px", bottom: 0, right: 0, zIndex: 1 }}>
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>
                  <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#sw-gradient)" d="M25.3,-29.9C30.4,-25.9,30.5,-15.6,32.4,-5.6C34.3,4.4,37.9,14.2,35.1,21.4C32.3,28.7,23.1,33.3,14.2,34.7C5.3,36.1,-3.2,34.1,-11.4,31.2C-19.6,28.2,-27.5,24.4,-33.1,17.7C-38.7,11,-41.9,1.5,-40.8,-7.7C-39.8,-16.8,-34.4,-25.7,-26.9,-29.3C-19.4,-32.9,-9.7,-31.2,0.2,-31.4C10.1,-31.7,20.2,-33.9,25.3,-29.9Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: "all 0.3s ease 0s;" }}></path>
            </svg>
          </div>
          <div className="left-container bg-dark flex-1 lg:w-3/4 flex justify-end flex-col py-10">
            <h1 className="text-lg font-medium text-gray-500 uppercase"><div className='line mb-2 bg-gray-400 mr-2'></div> Contact us</h1>
            <h1 className="font-bold text-4xl text-gray-700 ">Want to join our programme?</h1>
            <h1 className="text-2xl md:text-3xl w-3/3 px-0 md:px-0 text-start pt-2 text-gray-700 ">
              <span className="text-red-600">Get in touch</span> with us. <span className="results-oriented"></span>
            </h1>
            <div className="flex flex-col justify-center items-start gap-5 py-5 text-lg text-gray-700">
              <div className="flex-1 flex flex-row gap-3">
                <box-icon type='solid' name='phone' color="#bc4110"></box-icon>
                <p><a href="tel:+254 712345678" className='hover:text-green-600 transition duration-300 ease-in-out'>+254 712345678</a></p>
              </div>
              <div className="flex-1 flex flex-row gap-3">
                <box-icon name='gmail' type='logo' color="#bc4110"></box-icon>
                <p><a href="mailto:info@theschooloflifeart.com" className='hover:text-green-600 transition duration-300 ease-in-out'>info@theschooloflifeart.com</a></p>
              </div>
              <div className="flex-1 flex flex-row gap-3">
                <box-icon name='world' type="solid" color="#bc4110"></box-icon>
                <p>P.O BOX 16796 00100, Nairobi Kenya, Raphta Road Westlands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center pt-4 pb-1 font-medium text-lg">&trade; The School Of Life Art, {year} </div>
      <div className="w-full text-center pb-2 text-slate-600 text-sm">Developed and maintained by <a target='_blank noopener noreferrer' href="https://linkedin.com/in/muriithigakuru"><span className="text-[#bc4110] font-semibold text-md">Antony Gakuru</span></a></div>
    </section>
  );
}

export default Footer;
