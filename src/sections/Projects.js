import React from 'react';
import '../css/Projects.css';
import firewatchimg2 from '../assets/firewatch-demo-pic.png';
import morpheusimg from '../assets/morpheus.png';

export default function Projects() {
    const projects = [
        {
            title: "Morpheus™",
            imageURL: morpheusimg,
            overview: "Counter-UAS platform that detects, classifies, and mitigates drones in real time, integrated with U.S. Army C2 systems.",
            built: [
                "Full Stack React + Tauri (Rust) dashboard",
                "Python FastAPI backend streaming live RF telemetry over WebSockets and exposing REST endpoints consumed by the Army's C2",
                "PyTorch CNN classifiers trained on Azure GPUs over real-time radio frequency",
                "RF hardware stack — alpha networks, 2.4/5.8 GHz antennas, SDRs, Wi-Fi modules, microprocessors",
            ],
            achievements: [
                "Earned TRL at a U.S. Army Technical Readiness Event",
                "C2-integration evaluation and live demonstrations for the U.S. Navy",
                "Multiple SBIR and military contracts plus active private investment",
            ],
        },
        {
            title: "FireWatch™",
            imageURL: firewatchimg2,
            overview: "Revenue-earning AI-powered global wildfire monitoring platform that predicts ignition points, tracks active fires in real time, and simulates spread based on terrain and weather.",
            built: [
                "React web dashboard and React Native iOS and Android apps",
                "Python data pipelines on AWS aggregating fires from multiple satellite and weather sources into PostgreSQL",
                "Custom-area alert system that notifies users when fires enter their monitored zones",
                "3D visualization combining satellite imagery and weather data",
            ],
            achievements: [
                "Active contract with NASA for predicting wildfire ignition points",
                "Insurance contracts protecting 50,000+ properties and $1.5B+ in assets",
                "Emergency-services integrations dispatching fire trucks directly from the app",
            ],
        },
    ]

    return (
        <div className='projects-section' id='jump-to-projects'>
            <h1 className='projects-section-title'>Projects</h1>
            <div className='projects-rows'>
                {projects.map((project, index) => {
                    const reverse = index % 2 === 0;
                    return (
                        <div className={`project-row${reverse ? ' project-row--reverse' : ''}`} key={index}>
                            <a href='https://space-eyes.com' target='_blank' rel='noreferrer' className='project-image-wrap'>
                                <img src={project.imageURL} className='project-demo-img' alt={project.title}/>
                            </a>
                            <div className='project-content'>
                                <h2 className='project-title'>{project.title}</h2>
                                <p className='project-overview'>{project.overview}</p>
                                <div className='project-section'>
                                    <p className='project-section-label'>Tech & Contributions</p>
                                    <ul className='project-list'>
                                        {project.built.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='project-section'>
                                    <p className='project-section-label'>Achievements</p>
                                    <ul className='project-list'>
                                        {project.achievements.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
