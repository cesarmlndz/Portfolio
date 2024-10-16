import React from 'react';
import '../css/Projects.css';
import findmyroommateImg from '../assets/findmyroommateImg.png';
import unoflowImg from '../assets/unowflowImg.png';
import wildfireAIImg from '../assets/wildfireAIImg.png';
import cesarAIImg from '../assets/cesarAIImg.png'
import goodnewsimg from '../assets/goodnewsimg.png';
import firewatchimg from '../assets/firewatchweb.png';

export default function Projects() {
    const projects = [
        {
            title: "FireWatch",
            desription: "Led development of both the mobile (React Native) and web (React) versions of a revenue earning, subscription-based, SaaS disaster prevention application. It is aimed at predicting and tracking wildfires using advanced machine learning algorithms, satellite imagery, weather data, and more. The application provides real-time data on active and historical fires, allows users to comment on events and predictions, send out mission critical alerts, and displays information on an interactive 3D map, helping communities stay informed and prepared.",
            imageURL: firewatchimg,
            liveURL: "http://space-eyes.info/#/login"
        },
         {
            title: "findmyroommate!",
            desription: "Full-Stack React and Firebase web application for college students to find roommates easily. Users can connect with others in need of roommates by posting their housing situation on the site.",
            imageURL: findmyroommateImg,
            liveURL: "https://findmyroommate-b2820.web.app/"
        },
    ]

    return (
        <div className='projects-section' id='jump-to-projects'>
            <h1 className='projects-section-title'>Projects</h1>
            <div className='projects-container'>
                {projects.map((project, index) => {
                    return (
                        <div className='project-container' key={index}>
                            <p className='project-title'>{project.title}</p>
                            <img src={project.imageURL}/>
                            <p className='project-description'>{project.desription}</p>
                            {project.liveURL ? 
                            <a target='_blank' href={project.liveURL}>View live!</a> 
                            :
                            <a style={{cursor: "not-allowed", boxShadow: "none",  transform: "none",
                            animation: "none"}}>Live URL offline</a> }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
