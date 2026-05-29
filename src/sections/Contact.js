import React from 'react';
import '../css/Contact.css';

export default function Contact() {
    const email = 'cesarf.melendez@gmail.com';

    return (
        <div className='contact-section' id='jump-to-contact'>
            <h1 className='contact-section-title'>Contact</h1>
            <div className='contact-block'>
                <p className='contact-label'>Get in touch</p>
                <a className='contact-email' href={`mailto:${email}`}>
                    {email}
                    <span className='contact-email-arrow' aria-hidden='true'>→</span>
                </a>
            </div>
        </div>
    )
}
