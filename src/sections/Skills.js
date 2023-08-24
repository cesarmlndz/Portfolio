import React, { useState } from 'react';
import '../css/Skills.css'
import webdevImg from '../assets/webdevImg.png'
import brainImg from '../assets/brainImg.png'
import JSImg from '../assets/JSImg.png'

export default function Skills() {    
    const skillSections = [
        {
            title: "Web-Development",
            skills: ["React", "HTML", "CSS", "NodeJs", "ExpressJs", "Git & Github", "AWS", "PostgreSQL", "Google Firebase", "mySQL", "MongoDB"],
            imageUrl: webdevImg
        },
        {
            title: "Programming Languages",
            skills: ["JavaScript", "Java", "Python", "C++", "C", "SQL", "Swift"],
            imageUrl: JSImg
        },
        {
            title: "Data Science / Machine Learning",
            skills: ["Pandas" , "NumPy", "Scikit-learn", "PyCharm", "Jupyter"],
            imageUrl: brainImg
        }
    ];
    
    return (
        <div className='skills-section' id='jump-to-skills'>
            <h1 className='skills-section-title'>Skills</h1>
            <div className='skills-container'>
                {skillSections.map((skill, index) => {
                    return (
                        <div className='skill-container' key={index}>
                            <img src={skill.imageUrl}/>
                            <h1 className='skill-title'>{skill.title}</h1>
                            <div className='individual-skill-container'>
                                {skill.skills.map((s, index) => {
                                    return (
                                        <p className='individual-skill' key={index}>{s}</p>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}