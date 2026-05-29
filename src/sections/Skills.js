import React from 'react';
import '../css/Skills.css'

export default function Skills() {
    const skillSections = [
        {
            title: "Languages",
            skills: ["JavaScript", "TypeScript", "Python", "Java", "Swift", "Kotlin", "Rust", "C++", "C", "SQL"]
        },
        {
            title: "Stack",
            skills: ["React", "React Native", "Tauri", "Node.js", "Express", "REST", "WebSockets", "HTML", "CSS", "Mapbox"]
        },
        {
            title: "Cloud, Data & ML",
            skills: ["AWS Lambda", "AWS API Gateway", "AWS S3", "AWS Cognito", "Azure ML", "Firebase", "PostgreSQL", "MySQL", "MongoDB", "Linux", "Git", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Jupyter"]
        },
        {
            title: "Other",
            skills: ["Leadership", "Bilingual (English/Spanish)"]
        }
    ];

    return (
        <div className='skills-section' id='jump-to-skills'>
            <h1 className='skills-section-title'>Skills</h1>
            <div className='skills-rows'>
                {skillSections.map((section, index) => {
                    return (
                        <div className='skill-row' key={index}>
                            <h2 className='skill-row-title'>{section.title}</h2>
                            <div className='skill-row-chips'>
                                {section.skills.map((s, i) => (
                                    <span className='skill-chip' key={i}>{s}</span>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
