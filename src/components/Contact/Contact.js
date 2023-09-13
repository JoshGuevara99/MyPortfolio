import React,{useState,useEffect} from 'react'
import "./Contact.scss"
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

function Contact() {


  const [letterClass,setLetterClass] = useState('text-animate')

  const contactLetters = ['C','o','n','t','a','c', 't',' ','M','e']


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
    <div className = "contact-container">
      <div className = "text-zone">
        <h1>
            <AnimatedLetters letterClass={letterClass} strArray = {contactLetters} index = {10}/>
        </h1>
       
      </div>
      <p className="paragraph-container">
        Please contact me for further inquiries as I am always seeking new opportunities
        </p>

      <form className='form-container'>
        <ul>
          <li className='half'>
            <input className= "input" type="text" name="name" placeholder='Name' required/>
          </li>
          <li className='half'>
          <input type="email" className= "input"name="email" placeholder = "Email" required/>

          </li>
          <li className='whole'>
          <input type="text" className= "input"name="subject" placeholder = "Subject" required/>

          </li>
          <li className='whole'>

            <textarea placeholder='Message'
            name="message"
            required/>

          </li>
          <li>
          <input type="submit" className= "flat-button" value= "Submit"   required/>

          </li>
        </ul>

      </form>
    </div>
  )
}

export default Contact