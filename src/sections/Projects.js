import React from 'react';
import '../css/Projects.css';
import findmyroommateImg from '../assets/findmyroommateImg.png';
import unoflowImg from '../assets/unowflowImg.png';
import wildfireAIImg from '../assets/wildfireAIImg.png';
import cesarAIImg from '../assets/cesarAIImg.png'
import goodnewsimg from '../assets/goodnewsimg.png';


export default function Projects() {
    const projects = [
        {
            title: "GoodNews!",
            desription: "Full-Stack application using the PERN Stack (PostgreSQL, ExpressJS, React, NodeJs). Authentication powered by Firebase. GoodNews! lets users track their job applications in an organized manner, as well view analytics regarding their applications with detailed charts and percentages using ChartJs.",
            imageURL: goodnewsimg,
            liveURL: "https://goodnews-bay.vercel.app/"
        },
        {
            title: "findmyroommate!",
            desription: "Full-Stack React and Firebase web application for college students to find roommates easily. Users can connect with others in need of roommates by posting their housing situation on the site.",
            imageURL: findmyroommateImg,
            liveURL: "https://findmyroommate-b2820.web.app/"
        },
        {
            title: "UNOFLOW WEB3",
            desription: "React web application that splits into two services: NFT Marketplace & Crypto Tracker. Users can browse, track, and purchase the hottest NFT’s and crypto currencies on the market.",
            imageURL: unoflowImg,
            liveURL: "https://unofloweb3.com/"

        },
        {
            title: "Wildfire-AI",
            desription: "Space-Eyes, the company where I interned, will soon be launching Wildfire-AI. This is a wildfire detection and prediction service using advanced machine learning algorithms. My task was to develop a web application for a landing page using HTML, CSS, JavaScript, ChartJs, and Material UI. ",
            imageURL: wildfireAIImg,
            liveURL: "http://wildfire-ai.com/"

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