import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

function ExtraSection() {
  const data = useStaticQuery(graphql`
    query {
      image2: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "image3.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "image4.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const images = [
    {
      fluid: data.image4.childImageSharp.fluid,
      heading: "Synthesizing Success By Unleashing Team Potential",
      text: "Elevate your team's spirit and amplify collaboration with The School Of Life Art. Building success, one team at a time!",
    },
    {
      fluid: data.image3.childImageSharp.fluid,
      heading: "Elevating Performance through Collaborative Excellence",
      text: "Empower your team with transformative training experiences at The School Of Life Art. Together, we thrive, learn, and conquer challenges as one unstoppable force!",
    },
    {
      fluid: data.image2.childImageSharp.fluid,
      heading: "Precision Training for Peak Performance",
      text: "Bullseye your goals with targeted team training! We customize learning experiences to hit the mark and drive collective success.",
    },
  ];

  return (
    <section className='w-full pt-28'>
      {images.map((image, index) => (
        <BackgroundImage
          key={index}
          fluid={image.fluid}
          className="w-full h-screen relative"
          style={{
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute text-orange-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl font-bold">{image.heading}</h1>
            <p className="text-2xl text-center text-gray-300">{image.text}</p>
          </div>
        </BackgroundImage>
      ))}
    </section>
  );
}

export default ExtraSection;
