import './Logo.scss'
import logo from '/Users/joshuaguevara/Desktop/react-portfolio/src/assets/images/logo-j.png'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import React, { useRef,useEffect } from 'react'
import gsap from 'gsap-trial'


function Logo() {
    console.log("one logo")
    const backgroundRef = useRef()
    const outlineRef = useRef()
    const solidRef = useRef()


    useEffect(()=>{

        console.log(outlineRef)


        gsap.registerPlugin(DrawSVGPlugin)

        gsap
        .timeline()

        .to(backgroundRef.current,{
            duration:1,
            opacity:1,

        })

        .from(outlineRef.current,{
            drawSVG:0,
            duration:10,
        })

        gsap.fromTo(
            solidRef.current,
            {
                opacity:0,
            },
            {
                opacity:1,
                delay:4,
                duration:2
            }
        )
    },[])


    return (

        <div className='logo-container' ref = {backgroundRef} >


            <img className="solid-logo" src={logo} alt="J" ref = {solidRef}/>


            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="400.000000pt" height="500.000000pt" viewBox="0 0 400.000000 500.000000"
 preserveAspectRatio="xMidYMid meet">

<g className ="svg-container" transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
fill="none" stroke="none">
<path ref={outlineRef} d="M2650 4927 c-30 -23 -50 -62 -50 -94 0 -31 -3 -33 -40 -39 -52 -9
-86 -36 -111 -90 -17 -35 -29 -46 -67 -60 -58 -21 -74 -37 -98 -94 -18 -43
-19 -98 -22 -1457 l-2 -1413 -169 0 c-93 0 -183 3 -201 7 -42 8 -124 86 -146
138 -15 35 -18 101 -24 519 l-6 478 -47 45 -47 44 -548 -3 -548 -3 -37 -25
c-34 -23 -57 -66 -57 -107 0 -7 -19 -16 -42 -20 -47 -7 -98 -49 -98 -80 0 -34
-29 -63 -72 -69 -34 -6 -45 -14 -69 -52 -15 -24 -33 -68 -39 -97 -15 -72 -7
-1214 9 -1305 45 -257 175 -497 332 -613 24 -17 58 -42 74 -54 17 -13 55 -34
85 -48 30 -14 69 -32 85 -40 149 -70 228 -97 388 -129 95 -20 215 -40 267 -47
52 -6 105 -16 117 -21 14 -7 170 -9 450 -5 560 6 607 13 953 133 91 32 197 76
235 98 39 23 84 48 100 56 17 8 73 58 126 110 54 52 140 136 192 186 52 51
109 110 125 133 17 23 33 42 37 41 3 0 34 30 68 67 81 88 130 184 170 330 l32
118 0 1675 0 1675 -26 45 c-47 84 -16 80 -679 80 -444 -1 -589 -4 -600 -13z
m1170 -7 c0 -5 6 -10 14 -10 25 0 73 -58 80 -95 4 -20 7 -769 7 -1664 -1
-1778 3 -1667 -58 -1871 -51 -171 -71 -199 -348 -475 -310 -311 -375 -356
-631 -445 -233 -81 -399 -113 -687 -136 -404 -31 -883 4 -1197 87 -287 77
-468 175 -618 334 -94 100 -143 181 -182 303 -62 192 -63 199 -67 879 -3 420
-1 634 6 661 13 48 51 87 91 95 37 8 70 40 70 70 0 32 37 65 91 80 29 9 45 19
48 32 6 32 50 91 79 106 22 11 120 15 497 17 259 2 499 0 535 -3 58 -6 69 -11
101 -45 47 -50 48 -58 54 -582 4 -382 6 -410 24 -450 25 -52 61 -88 121 -119
42 -22 59 -24 226 -27 161 -3 182 -2 195 14 12 15 15 223 19 1440 l5 1423 34
35 c19 20 41 36 49 36 28 0 72 35 82 65 17 52 60 85 118 92 l52 6 0 42 c0 33
6 47 31 71 l30 29 532 5 c293 3 547 7 565 8 17 1 32 -2 32 -8z"/>
</g>
</svg>

        </div>
    )
}

export default Logo