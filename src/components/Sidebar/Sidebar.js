import React from 'react'
import './Sidebar.scss'
import {Link, NavLink} from 'react-router-dom'
import logo from "/Users/joshuaguevara/Desktop/react-portfolio/MyPortfolio/src/assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Sidebar() {
  return (
    <div className= 'nav-bar'>
      <Link to='/'>
        <img src={logo}/>
      </Link>
      <nav>

        <NavLink exact = "true" activeclassname = "active" to = "/">
        <FontAwesomeIcon icon = {faHome} color = "4d4d4e"/>
        </NavLink>
        <NavLink className = "about-link" exact = "true" activeclassname = "active" to = "/about">
        <FontAwesomeIcon icon = {faUser} color = "4d4d4e"/>
        </NavLink>
        <NavLink className = "contact-link" exact = "true" activeclassname = "active" to = "/contact">
        <FontAwesomeIcon icon = {faEnvelope} color = "4d4d4e"/>
        </NavLink>

    </nav>
    <ul>
      <li>
        <a target = "_blank" 
        rel = "noreferrer"
        href="https://www.linkedin.com/in/joshua-guevara-89b3b118b/">
          <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e"/>
        </a>
      </li>
      <li>
        <a target = "_blank" 
        rel = "noreferrer"
        href="https://github.com/JoshGuevara99?tab=repositories">
          <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e"/>
        </a>
      </li>


    </ul>
      </div>

 
  )
} 
