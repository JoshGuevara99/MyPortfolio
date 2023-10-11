import './Logo.scss'
import logo from "../../../assets/images/logo-j.png"
import React, { useRef,useEffect } from 'react'
import gsap from 'gsap-trial'


function Logo() {
    console.log("one logo")
    const backgroundRef = useRef()
    const outlineRef = useRef()
    const solidRef = useRef()


    useEffect(()=>{

        console.log(outlineRef)



        gsap
        .timeline()

        .to(backgroundRef.current,{
            rotate:0,
            duration:1,
            opacity:1,

        })


        .from(backgroundRef.current,{
            rotate:360,
            duration:3,
            opacity:0,
        })

        

        gsap.fromTo(
            solidRef.current,
            {
                opacity:0,
            },
            {
                opacity:1,
                delay:0,
                duration:5
            }
        )
    },[])


    return (

        <div className='logo-container' ref = {backgroundRef} >


            <img className="solid-logo" src={logo} alt="J" ref = {solidRef}/>


           

        </div>
    )
}

export default Logo