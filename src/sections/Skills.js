import React from 'react';
import '../css/Skills.css'

export default function Skills() {
    const skillSections = [
        {
            title: "Languages",
            skills: ["JavaScript", "TypeScript", "Python", "Java", "Swift", "Kotlin", "Rust", "C++", "C", "SQL"]
        },
        {
            title: "Frontend",
            skills: ["React", "React Native", "Tauri", "HTML", "CSS", "Mapbox"]
        },
        {
            title: "Backend & APIs",
            skills: ["PostgreSQL", "MySQL", "Node.js", "Express", "FastAPI", "REST", "WebSockets", "MongoDB", "Esri Server", "Railway"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS Lambda", "AWS API Gateway", "AWS EC2", "AWS S3", "AWS Cognito", "Azure", "Firebase", "Linux", "Git"]
        },
        {
            title: "ML & Data",
            skills: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "Jupyter"]
        },
        {
            title: "Other",
            skills: ["Bilingual (English/Spanish)", "Client & Investor Relations", "Technical Demos", "Cross-functional Leadership"]
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
