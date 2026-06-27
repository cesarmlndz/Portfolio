import React from 'react'
import Typewriter from 'typewriter-effect';
import '../css/About.css';
import linkedInImg from '../assets/linkedInImg.png';
import pinEmoji from '../assets/pinEmoji.png';
import headshot from '../assets/ny-pic.png';

export default function About() {
  return (
    <div className='about-section' id='jump-to-about'>
        <div className='about-section-intro'>
            <img className='headshot-img' src={headshot} alt='Cesar Melendez headshot'/>
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
                        .start();
                    }}
                />
                </h1>
                <p className='about-location'>
                    <span className='about-location-item'>
                        <img src={pinEmoji} className='pin-emoji' alt=''/>
                        Originally from San Juan, Puerto Rico
                    </span>
                    <span className='about-location-divider' aria-hidden='true'>·</span>
                    <span className='about-location-item'>Based in Miami, Florida</span>
                </p>
                <p className='about-bio'>Lead Software Engineer and early team member at a defense/AI startup, built and shipped platforms end-to-end and led a team of engineers, while owning investor, client, and partner relationships and live demos for the enterprise clients and U.S. military.</p>
                <div className='social-links'>
                    <a href='https://linkedin.com/in/cesar-melendez-16b3b01b8' target='_blank' rel='noreferrer'><img src={linkedInImg} alt='LinkedIn'/></a>
                </div>
            </div>
        </div> 
       <a href='#jump-to-experience' className='about-section-view-work-btn'>
            <span className='view-work-label'>View my work</span>
            <span className='view-work-arrow' aria-hidden='true'>→</span>
       </a>
  </div>
  )
}
