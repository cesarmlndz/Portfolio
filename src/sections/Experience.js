import React from 'react';
import '../css/Experience.css'

export default function Experience() {
  const experiences = [
    {
      duration: 'Jan 2024 - Present',
      company: 'Space-Eyes',
      title: 'Full Stack Developer',
      description: 'Operating under the Data Management team developing both Full Stack web and mobile applications. Create end-to-end applications using React and React Native, while utilizing AWS for backend operations, such as querying data, API management, databases and more. Specialized in showcasing results from advanced machine learning algorithms, optimizing data retrieval.',
      skills: [
        'React', 'JavaScript', 'React Native', 'AWS Lambda', 'AWS S3', 'AWS API Gateway', 'AWS Cognito', 'Python', 'Jupyter', 'HTML', 'CSS', 'SQL', 'PostgreSQL', 'Esri', 'MapBox'
      ]
    },
    {
      duration: 'May 2023 - July 2023',
      company: 'Space-Eyes',
      title: 'Software Developer Intern',
      description: 'Developed full-stack web applications on a React frontend that displayed results from advanced machine learning algorithms. Seamlessly integreated the React client-side with a robust AWS cloud backend server, querying data from various databases and authenticating users. As well as developed informational static web pages for future products from the company.',
      skills: [
        'React', 'JavaScript', 'HTML', 'CSS', 'SQL', 'PostgreSQL', 'AWS API Gateway', 'AWS Cognito', 'AWS Lambda', 'Esri'
      ]
    }
  ]
  return (
    <div className='experience-section' id='jump-to-experience'>
        <h1 className='experience-section-title'>Experience</h1>
        {experiences.map((experience) => {
          return (
            <div className='position-container'>
            <h1 className='position-duration'>{experience.duration}</h1>
            <div className='position-info'>
                <p className='position-company'>{experience.company}</p>
                <p className='position-title'>{experience.title}</p>
                <p className='position-description'>{experience.description}</p>
                <div className='position-skills'>
                    {experience.skills.map((skill) => {
                      return (
                        <p>{skill}</p>
                      )
                    })}
                </div>
            </div>
        </div>
          )
        })}
    </div>
  )
}
