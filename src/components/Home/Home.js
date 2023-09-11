import React,{useState, useEffect} from 'react'
import './Home.scss'
import logo from "/Users/joshuaguevara/Desktop/react-portfolio/src/assets/images/logo-j.png"
import { Link } from 'react-router-dom'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'

function Home() {
    

    const [letterClass,setLetterClass] = useState('text-animate')
    const nameArray = ['o','s','h','u','a']
    const jobArray = ['F','u','l','l','s','t','a','c','k', ' ','D','e','v','e','l','o','p','e','r']
    // const jobArray = ['F','u','l','l','s','t','a','c','k', ' ','D','e','v','e','l']



    // useEffect(()=>{


    //     return setTimeout(()=>{
    //         setLetterClass('text-animate-hover')
    //     },4000)


    // },[])

    useEffect(() => {
        console.log("one home")
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // It's a good practice to clean up timeouts when the component unmounts
        return () => {
            clearTimeout(timeoutId);
        };
    }, []); 


    return (
        <div className='container home-page'>
            <div className='text-container'>
                <h1>
                    <span className = {letterClass}>H</span>
                    <span className = {`${letterClass} _12`}>i,</span>

                 <br /> 
                 <span className = {`${letterClass} _13`}>I</span>
                 <span className = {`${letterClass} _14`}>'m</span>
                <span  style={{whiteSpace:"nowrap"}}>
                <img className="logo-img" src={logo} alt="developer" />
                <AnimatedLetters letterClass = {letterClass} strArray = {nameArray} index = {15}/>
                </span>
              

                <br></br>
                <div style={{whiteSpace:"nowrap"}}>
                <AnimatedLetters letterClass = {letterClass} strArray = {jobArray} index = {22}/>

                </div>

                <br/>

           
              
                </h1>

               
                <h2 style={{marginTop:"80px"}}>Frontend Engineer / React Developer </h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>

            </div>

            <Logo/>

        </div>
    )
}

export default Home