import React from 'react';
import '../css/Experience.css'

export default function Experience() {
  const experiences = [
    {
      duration: 'April 2025 - Present',
      company: 'Space-Eyes Inc.',
      title: 'Software Engineer Lead',
      description: "Leading a team of Full Stack engineers shipping the company's flagship platforms end-to-end. Architect and develop across React, Tauri (Rust), and React Native iOS/Android apps; Python and Node.js backends; and AWS, PostgreSQL, and Azure cloud infrastructure with real-time data pipelines, WebSocket streams, and REST APIs powering the dashboards. Set technical direction, conduct code reviews, and own delivery from backend services through to user-facing applications."
    },
    {
      duration: 'Jan 2024 - April 2025',
      company: 'Space-Eyes Inc.',
      title: 'Full Stack Developer',
      description: 'Operated under the Data Management team developing Full Stack applications. Create end-to-end web applications using React, utilizing AWS for backend operations, such as querying data, API management, databases and more. Specialized in showcasing results from advanced machine learning algorithms, optimizing data retrieval.'
    },
    {
      duration: 'May 2023 - July 2023',
      company: 'Space-Eyes Inc.',
      title: 'Software Developer Intern',
      description: 'Developed Full-Stack web applications on a React frontend that displayed results from advanced machine learning algorithms. Seamlessly integrated the React client-side with a robust AWS cloud backend server, querying data from various databases and authenticating users. As well as developed informational static web pages for future products from the company.'
    }
  ]
  return (
    <div className='experience-section' id='jump-to-experience'>
        <h1 className='experience-section-title'>Experience</h1>
        <ol className='experience-timeline'>
          {experiences.map((experience, index) => {
            return (
              <li className='timeline-item' key={index}>
                <span className='timeline-marker' aria-hidden='true' />
                <div className='timeline-content'>
                  <p className='timeline-duration'>{experience.duration}</p>
                  <h2 className='timeline-title'>
                    {experience.title}
                    <span className='timeline-separator'> · </span>
                    <span className='timeline-company'>{experience.company}</span>
                  </h2>
                  <p className='timeline-description'>{experience.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
    </div>
  )
}
