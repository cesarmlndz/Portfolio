import React from 'react';
import '../css/Skills.css'
import webdevImg from '../assets/webdevImg.png'
import brainImg from '../assets/brainImg.png'
import JSImg from '../assets/JSImg.png'

export default function Skills() {    
    const skillSections = [
        {
            title: "Software Development",
            skills: ["React", "HTML", "CSS", "React Native", "NodeJs", "ExpressJs", "Git & GitHub", "AWS", "PostgreSQL", "Google Firebase", "mySQL", "MongoDB", "Esri Server"],
            imageUrl: webdevImg
        },
        {
            title: "Programming Languages",
            skills: ["JavaScript", "Java", "Python", "C++", "C", "SQL", "Swift"],
            imageUrl: JSImg
        },
        {
            title: "Data Science / Machine Learning",
            skills: ["Pandas" , "NumPy", "Scikit-learn", "PySpark", "Keras", "TensorFlow", "Jupyter"],
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
                            <img src={skill.imageUrl} alt='skill'/>
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
