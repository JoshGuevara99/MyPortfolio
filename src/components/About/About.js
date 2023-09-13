import React,{useState,useEffect} from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

function About() {

  const [letterClass,setLetterClass] = useState('text-animate')

  const aboutLetters = ['A','b','o','u','t',' ','M','e']

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
    <div className = "about text-container">
        <h1 className = "text-zone">
          <AnimatedLetters letterClass={letterClass} strArray = {aboutLetters} index = {8}/>
        </h1>
    </div>
  
  )
}

export default About