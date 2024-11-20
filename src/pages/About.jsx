import React from 'react'
import CountUp from 'react-countup'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="yral__about innerpage_About">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <h2 data-aos="fade-up" data-aos-duration="2000">Innovating Solutions For Everyday Needs</h2>
              <div className="breadcrumb">
                <ul>
                  <li data-aos="fade-up" data-aos-duration="3000"><NavLink to='/'>Home</NavLink></li>
                  <li data-aos="fade-up" data-aos-duration="3000"><NavLink to='/about'>About</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="counter" data-aos="fade-up" data-aos-duration="2000">
                <div className="count">
                  <div>
                    <CountUp start={0} end={100} duration={5} /><span>+</span>
                  </div>
                  <p>Quality Products</p>
                </div>
                <div className="count">
                  <div>
                    <CountUp start={0} end={1000} duration={5} /><span>+</span>
                  </div>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about__videoSection">
        <video autoPlay muted>
          <source src="/assets/video/cleaning1.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h2 data-aos="fade-up" data-aos-duration="3000">About Us</h2>
          <p data-aos="fade-up" data-aos-duration="3000">Yral Concepts, founded in 2024 in Ajman, UAE, is driven by a mission to provide
            innovative solutions for everyday challenges. Our diverse range of products spans
            hygiene, cleaning materials, and sustainable eco-friendly solutions. As a
            forward-thinking company, Yral Concepts is committed to developing and introducing new products that address real-world needs, making life more convenient
            and enhancing the quality of life for our customers.</p>
        </div>
      </div>
      <section className="yral__about whyChooseUs">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <h5 className='gradient'>Why Choose Us</h5>
              <h2 data-aos="fade-up" data-aos-duration="3000">Why Choose Yral Products?</h2>
            </div>
            <div className="col-md-5">
              <p className='main-desc' data-aos="fade-up" data-aos-duration="2000">At Yral concepts, we are committed to providing high-quality cleaning solutions and sustainable products that meet your everyday needs. Here's why we stand out:</p>
            </div>
          </div>
          <div className="row row-cols-4">
            <div className="col">
              <div className="why__choose" data-aos="fade-up" data-aos-duration="1500">
                <img src="/assets/icons/eco-friendly.svg" alt="" />
                <h3>Eco-Friendly Commitment</h3>
                <p>Our bowls and plates are crafted from 100% natural areca leaves and wood, ensuring they are biodegradable, sustainable, and safe for the environment.</p>
              </div>
            </div>
            <div className="col">
              <div className="why__choose" data-aos="fade-up" data-aos-duration="2000">
                <img src="/assets/icons/quality.svg" alt="" />
                <h3>Superior Quality</h3>
                <p>From durable dispensers to versatile cleaning tools, we deliver products built to last and perform effectively.</p>
              </div>
            </div>
            <div className="col">
              <div className="why__choose" data-aos="fade-up" data-aos-duration="2500">
                <img src="/assets/icons/cleaning.svg" alt="" />
                <h3>Comprehensive Range</h3>
                <p>We offer a wide selection of cleaning products, tissues, Jumbo Toilet Roll Dispensers, and other essentials to suit residential, commercial, and industrial requirements.</p>
              </div>
            </div>
            <div className="col">
              <div className="why__choose" data-aos="fade-up" data-aos-duration="3000">
                <img src="/assets/icons/price.svg" style={{width: '48px'}} alt="" />
                <h3>Affordable Pricing</h3>
                <p>High quality doesn't have to come at a high price. We strive to make our products accessible to everyone without compromising quality.</p>
              </div>
            </div>
            {/* <div className="col">
              <div className="why__choose">
                <img src="/assets/icons/eco-friendly.svg" alt="" />
                <h3>Customer-Centric Approach</h3>
                <p>Your satisfaction is our priority. We are dedicated to offering responsive service and ensuring our products meet your expectations.</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
