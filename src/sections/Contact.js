import React, { useRef }from 'react';
import '../css/Contact.css';
import emailjs from '@emailjs/browser';
import emailImg from '../assets/emailImg.png';
import waveImg from '../assets/waveImg.png'

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_odmlg1l', 'template_fjtja5u', form.current, 'y9HvKMzjzyJphi81r')
        .then((result) => {
            alert("You successfully sent Cesar a message! He will reply as as soon as possible.")
        }, (error) => {
            console.log(error)
            alert("Please try sending again.")
        });
    };
    return (
        <div className='contact-section' id='jump-to-contact'>
            <h1 className='contact-section-title'>Contact</h1>
            <div className='email-container'>
                <img src={emailImg} alt='email'/>
                <p>cesarf.melendez@gmail.com</p>
            </div>
            <form className='contact-container' ref={form} onSubmit={sendEmail}>
                <div className='send-message-title'>
                    <h1>Send me a message! </h1>
                    <img src={waveImg} alt='wave'/>
                </div>
                <input placeholder='Name' type="text" name="user_name" required/>
                <input placeholder='Email' type="email" name="user_email" required/>
                <textarea placeholder='Message' name="message" required/>
                <input type="submit" value="Send" className='contact-send-btn'/>
            </form>
        </div>
    )
}