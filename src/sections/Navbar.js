import React, { useState } from 'react';
import '../css/Navbar.css';
import menuimg from '../assets/menuimg.png';
import ximg from '../assets/ximg.png'

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className='navbar-container'>
        {!showLinks && <a className='navbar-logo' href='#jump-to-about'>{"<cesarmlndz />"}</a>}
        <div className='navbar-links'>
            <a href='#jump-to-experience'>experience</a>
            <a href='#jump-to-projects'>projects</a>
            <a href='#jump-to-skills'>skills</a>
            <a href='#jump-to-contact'>contact</a> 
        </div>
        {!showLinks && <img src={menuimg} onClick={() => setShowLinks(true)}/>}
        {showLinks &&
          <div className='expanded-links-container'>
            <img src={ximg} onClick={() => setShowLinks(false)}/>
            <a href='#jump-to-experience' onClick={() => setShowLinks(false)}>experience</a>
            <a href='#jump-to-projects' onClick={() => setShowLinks(false)}>projects</a>
            <a href='#jump-to-skills' onClick={() => setShowLinks(false)}>skills</a>
            <a href='#jump-to-contact' onClick={() => setShowLinks(false)}>contact</a>
          </div>
        }
    </div>
  )
}