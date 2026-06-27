import React from 'react';
import '../css/Experience.css'

export default function Experience() {
  const experiences = [
    {
      duration: 'April 2025 - Present',
      company: 'Space-Eyes Inc.',
      title: 'Lead Software Engineer',
      points: [
        "Lead a team of Full Stack engineers shipping the company's flagship platforms end-to-end, setting technical direction, running code reviews, and owning delivery from backend services to user-facing apps.",
        "Architected and built backend services in Python and Node.js on AWS (Lambda, API Gateway, EC2, S3, Cognito) and PostgreSQL, exposing REST and WebSocket endpoints that serve real-time data to the dashboards.",
        "Developed cross-platform clients in React, Tauri (Rust), and React Native (iOS/Android) backed by the above APIs.",
        "Served as point of contact for investors, clients, and partners, and translated technical capability into business terms.",
      ]
    },
    {
      duration: 'Jan 2024 - April 2025',
      company: 'Space-Eyes Inc.',
      title: 'Full Stack Developer',
      points: [
        "Built and maintained REST APIs on AWS (API Gateway + Lambda) and provisioned EC2 infrastructure powering data-management web applications.",
        "Designed PostgreSQL schemas and optimized queries serving ML-model results, cutting average response time.",
        "Developed end-to-end React applications that visualized outputs from advanced machine-learning algorithms for users.",
      ]
    },
    {
      duration: 'May 2023 - July 2023',
      company: 'Space-Eyes Inc.',
      title: 'Software Developer Intern',
      points: [
        "Integrated a React frontend with an AWS backend (querying multiple databases, user authentication) to display ML algorithm results.",
        "Developed informational static web pages for upcoming company products.",
      ]
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
                  <ul className='timeline-points'>
                    {experience.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>
    </div>
  )
}
