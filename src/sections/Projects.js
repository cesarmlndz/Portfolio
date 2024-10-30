import React from 'react';
import '../css/Projects.css';
import findmyroommateImg from '../assets/findmyroommateImg.png';
import unoflowImg from '../assets/unowflowImg.png';
import wildfireAIImg from '../assets/wildfireAIImg.png';
import cesarAIImg from '../assets/cesarAIImg.png'
import goodnewsimg from '../assets/goodnewsimg.png';
import firewatchimg from '../assets/firewatchweb.png';
import appStoreImg from '../assets/download-on-app-store.png';
import googlePlayStoreImg from '../assets/download-on-google-play.png';
import webIcon from '../assets/web-icon.png';

export default function Projects() {
    const projects = [
        {
            title: "FireWatch",
            desription: "Led development of both the mobile (React Native) and web (React) versions of a revenue earning, subscription-based, SaaS disaster prevention application. It is aimed at predicting and tracking wildfires using advanced machine learning algorithms, satellite imagery, weather data, and more.",
            imageURL: firewatchimg,
            liveURL: "https://space-eyes.info/#/login",
            appStoreURL: "https://apps.apple.com/us/app/space-eyes/id6498717343",
            googlePlayURL: "https://play.google.com/store/apps/details?id=com.nativefirewatch&pcampaignid=web_share"
        },
        {
            title: "SeaWatch",
            desription: "Developer of a revenue earning, subscription-based, SaaS application that delivers AI enabled Maritime Geospatial Intelligence. SeaWatch tracks vessel traffic, manages fleet operations, and monitors port congestion in real time around the globe. Leveraging sensor fusion technology, it enhances detection capabilities by combining multiple data sources, such as satellite imagery and AIS signals. The app supports monitoring vessels within EEZ zones and automatically tracks and reports incidents like rule violations or unusual activity.",
            imageURL: firewatchimg,
            liveURL: "https://seawatch.space-eyes.com/#/login",
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
                            <img src={project.imageURL} className='project-demo-img'/>
                            <p className='project-description'>{project.desription}</p>
                            {(project.appStoreURL && project.googlePlayURL) &&
                            <div className='project-links'>
                                <a target='_blank' href={project.appStoreURL}>
                                    <img src={appStoreImg} className='project-app-link-img'/>
                                </a> 
                                <a target='_blank' href={project.googlePlayURL}>
                                    <img src={googlePlayStoreImg} className='project-app-link-img'/>
                                </a> 
                            </div>
                            }
                            {project.liveURL &&
                            <a target='_blank' href={project.liveURL} className='project-website-link'>
                                <img src={webIcon} className='project-website-link-img'/>
                                <p className='project-website-text'>View Live Web Version</p>
                            </a> 
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
