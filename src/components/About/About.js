import React, { useState, useEffect } from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faJsSquare, faNode, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import pythonLogo from "../../assets/images/python-logo.png"
import photo from "../../assets/images/Photo.jpeg"


function About() {

  const [letterClass, setLetterClass] = useState('text-animate')

  const aboutLetters = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']

  useEffect(() => {
    console.log("one home")
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);



  return (
    <div className="about-container">
      
      <h1 className="text-zone">
        About Me
      </h1>

      <div className='content-container'>



          <img className="my-photo" src={photo} />



        <div className='animation-container'>
          <div className='logo-spinner'>
            <div className='face1'>
              <img className="python-logo" src={pythonLogo} />
            </div>
            <div className='face2'>
              <FontAwesomeIcon className="react-icon" icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face3'>
              <FontAwesomeIcon  className="js-icon" icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face4'>
              <FontAwesomeIcon className="node-icon" icon={faNode} color="#2c9c2a" />
            </div>


          </div>

        </div>

      </div>
      <div className='paragraph-container'>
        <p className='paragraph'>
          Hello! Thank you for visiting my site. My name is Joshua Guevara, I am a 2022 graduate of San Jose State University with a degree in Applied Computational Mathematics and a minor in Computer Science. Over the past year, I've been working as a software developer at an internet backbone. My primary focus lies in frontend development, where I specialize in crafting interactive web and mobile applications using React. Aside from that, my development experience encompasses a wide variety of projects ranging from API development with Node.js to web scraping and automation with Python, and spans a diverse range of programming languages and tools including Java, SQL, and Javascript. I'm constantly seeking new ways to challenge myself; when I'm not coding or studying, you can find me practicing jiu jitsu, rock climbing, and playing guitar. I'm now actively seeking opportunities to leverage my mathematical foundation alongside my technical skills in a stimulating and collaborative environment.
        </p>
      </div>


    </div>

  )
}

export default About