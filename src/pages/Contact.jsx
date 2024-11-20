import React from 'react'
import { NavLink } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <>
            <section className="yral__about innerpage_About pb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div style={{ marginLeft: '4%' }} className="col-md-6">
                            <h2 data-anime>Get in Touch with Us</h2>
                            <div className="breadcrumb">
                                <ul>
                                    <li><NavLink to='/'>Home</NavLink></li>
                                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contactGrid" data-aos="fade-up" data-aos-duration="2000">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="contactInfo" data-aos="fade-up" data-aos-duration="1000">
                                <img src="/assets/icons/location.svg" alt="" />
                                    <h4>Location</h4>
                                    <p>Umm Al Thoub, Umm Al Quwain</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contactInfo" data-aos="fade-up" data-aos-duration="2000">
                                <img src="/assets/icons/phone.svg" alt="" />
                                    <h4>Contact</h4>
                                    <p>+971 56 202 4262</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contactInfo border-0" data-aos="fade-up" data-aos-duration="3000">
                                <img src="/assets/icons/email.svg" alt="" />
                                    <h4>Email</h4>
                                    <p>Info@yralconcepts.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <ContactForm/>
        </>
    )
}
