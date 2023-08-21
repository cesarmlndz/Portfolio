import React from 'react'
import headshot from '../assets/headshot.png'
import Typewriter from 'typewriter-effect';
import '../css/About.css';
import linkedInImg from '../assets/linkedInImg.png';
import githubImg from '../assets/githubImg.png';
import pinEmoji from '../assets/pinEmoji.png';

export default function About() {
  return (
    <div className='about-section' id='jump-to-about'>
        <div className='about-section-intro'>
            <img className='headshot-img' src={headshot}/>
            <div className='about-section-intro-text'>
                <h1>Hello, my name is Cesar.</h1>
                <h1>
                <Typewriter
                    options={{
                    autoStart: true,
                    loop: true,
                    delay: 100
                    }}
                    onInit={(typewriter) => {
                    typewriter.typeString('Software Engineer.')
                        .pauseFor(1500)
                        .deleteAll()
                    typewriter.typeString('Full-Stack Developer.')
                        .pauseFor(1500)
                        .deleteAll()
                    typewriter.typeString('Programmer.')
                    .pauseFor(1500)
                    .deleteAll()
                    typewriter.typeString('Team-Player.')
                        .pauseFor(1500)
                        .deleteAll()
                    .start();
                    }}
                />
                </h1>
                <p>Originally from San Juan, Puerto Rico | Based in Miami, Florida <img src={pinEmoji} className='pin-emoji'/> <br></br>
                Passionate software developer with real-world experience in creating full-stack applications.</p>
                <div className='social-links'>
                    <a href='https://linkedin.com/in/cesar-melendez-16b3b01b8' target='_blank'><img src={linkedInImg}/></a>
                    <a href='https://github.com/cesarmlndz' target='_blank'><img src={githubImg}/></a>
                </div>
            </div>
        </div> 
       <a href='#jump-to-experience' className='about-section-view-work-btn'>
            View my work!
       </a>
  </div>
  )
}