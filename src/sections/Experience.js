import React from 'react';
import '../css/Experience.css'

export default function Experience() {
  return (
    <div className='experience-section' id='jump-to-experience'>
        <h1 className='experience-section-title'>Experience</h1>
        <div className='position-container'>
            <h1 className='position-duration'>May 2023 - July 2023</h1>
            <div className='position-info'>
                <p className='position-company'>Space-Eyes</p>
                <p className='position-title'>Software Developer Intern</p>
                <p className='position-description'>Developed full-stack web applications on a React frontend
                that displayed results from advanced machine learning algorithms. Seamlessly integreated the React client-side 
                with a robust AWS cloud backend server, querying data from various databases and authenticating users. 
                As well as developed informational static
                web pages for future products from the company.</p>
                <div className='position-skills'>
                    <p>React</p>
                    <p>JavaScript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>SQL</p>
                    <p>PostgreSQL</p>
                    <p>Esri Map API</p>
                    <p>AWS API Gateway</p>
                    <p>AWS Cognito</p>
                    <p>AWS Lambda</p>
                </div>
            </div>
        </div>
    </div>
  )
}