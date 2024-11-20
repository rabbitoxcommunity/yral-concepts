import React from 'react'

export default function ContactForm() {
  return (
    <section className="yral__about yral_contact">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center">
              <h5 className='gradient'>Contact Us</h5>
              <h2 data-aos="fade-up" data-aos-duration="3000">Have any questions? We’d love to hear from you.</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="row justify-content-center">
              <div className="col-md-5" data-aos="fade-up" data-aos-duration="3000">
                <img src="/assets/img/contact.jpg" alt="" className="main w-100" />
              </div>
              <div className="col-md-5">
                <div className="contact__form" data-aos="fade-up" data-aos-duration="2000">
                  <div className="row">
                    <div className="col-md-6 pe-0">
                      <label htmlFor="">First Name</label>
                      <input type="text" className='form-control' placeholder='First Name' />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="">Last Name</label>
                      <input type="text" className='form-control' placeholder='Last Name' />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="">Email</label>
                      <input type="text" className='form-control' placeholder='Email' />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="">Contact Number</label>
                      <input type="text" className='form-control' placeholder='Contact Number' />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="">Type your needs</label>
                      <textarea rows={4} placeholder='Message' className='form-control'></textarea>
                    </div>
                    <button className="btn btn-primary green">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
