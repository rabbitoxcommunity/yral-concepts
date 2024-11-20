import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoArrowForwardCircleOutline, IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { config_partners, home_banner } from '../config/config'
import Slider from 'react-slick'
import { MdOutlineShoppingCart } from 'react-icons/md'
import ContactForm from '../components/ContactForm'

export default function Home() {

  const products = [
    {
      title: "Hygia",
      img: "/assets/img/logos/HYGIA.svg",
      desc: "Hygia provides a comprehensive range of products designed to maintain cleanliness and hygiene in various settings.From dispensers to cleaning tools, Hygia ensures a clean and fresh environment.",
    },
    {
      title: "Biosolve",
      img: "/assets/img/logos/biosolve.svg",
      desc: "Bio Solve offers a range of effective cleaning products to keep your surroundings spotless. Our products are designed to tackle the toughest stains and ensure a hygienic environment.",
    },
    {
      title: "Ekota",
      img: "/assets/img/ekota-logo.svg",
      desc: "Ekota focuses on providing eco-friendly solutions with our range of sustainable cutleries. Made from areca leaves and wood, our products are both biodegradable and durable.",
    },
    {
      title: "Izzah",
      img: "/assets/img/logos/izzah.svg",
      desc: "Izzah offers a diverse range of high-quality tissue products designed to meet various needs. Whether for personal use, home, or business, our tissues provide softness, strength, and reliability.",
    }
  ]

  const partners = ['/assets/img/partners/Partners-1.webp', '/assets/img/partners/Partners-2.webp', '/assets/img/partners/Partners-3.webp', '/assets/img/partners/Partners-4.webp', '/assets/img/partners/Partners-5.webp', '/assets/img/partners/Partners-6.webp', '/assets/img/partners/Partners-7.webp']
  return (
    <>
      <div className='yral__homeBanner'>
        <div className="container">
          <Slider {...home_banner}>
            <div>
              <div className="bannerItem">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="contents">
                      <h1 data-aos="fade-up" data-aos-duration="1000">Sustainable and
                        Eco-Friendly products.</h1>
                      <p data-aos="fade-up" data-aos-duration="2000">Ekota focuses on providing eco-friendly solutions with
                        our range of sustainable cutleries. Made from areca
                        leaves and wood, our products are both
                        biodegradable and durable.</p>
                      <div className="explore" data-aos="fade-up" data-aos-duration="3000">
                        <div className="btn btn-primary green">Enquire Now</div>
                        <div className="btn btn-primary black">Explore More</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image">
                      <img src="/assets/img/products/EKOTA2.png" data-aos="zoom-out" data-aos-duration="2000" className='main' alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bannerItem">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="contents">
                      <h1 data-aos="fade-up" data-aos-duration="1000">High-quality tissue products designed
                        to meet various needs.</h1>
                      <p data-aos="fade-up" data-aos-duration="2000">Izzah offers a diverse range of high-quality tissue products designed
                        to meet various needs. Whether for personal use, home, or business,
                        our tissues provide softness, strength, and reliability.</p>
                      <div className="explore" data-aos="fade-up" data-aos-duration="3000">
                        <div className="btn btn-primary green">Enquire Now</div>
                        <div className="btn btn-primary black">Explore More</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image">
                      <img src="/assets/img/products/IZZAH2.png" data-aos="zoom-out" data-aos-duration="2000" className='main' alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </div>
      <section className="yral__about">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <h5 className='gradient'>About Us</h5>
              <h2 data-aos="fade-up" data-aos-duration="1000" data-anime>Innovating Solutions For Everyday Needs</h2>
            </div>
            <div className="col-md-5">
              <p data-aos="fade-up" data-aos-duration="2000">Yral Concepts was founded in
                2024 by three friends in Ajman,
                UAE, with a mission to provide
                innovative solutions for
                everyday problems. </p>
              <p data-aos="fade-up" data-aos-duration="3000">Our brands focus on offering a
                wide range of products, from
                hygiene and cleaning
                materials to sustainable
                eco-friendly solutions.</p>
              <div data-aos="fade-up" data-aos-duration="3000" className="btn btn-primary black mt-4">Know more</div>
            </div>
          </div>
        </div>
      </section>
      <section className="trending__products">
        <div className="container">
          <div className="row row-cols-4">
            <div className="col">
              <div className="trending" data-aos="fade-up" data-aos-duration="1000">
                <h2>Trending Products</h2>
                <img className='main' src="/assets/img/products/HYGIA2.png" alt="" />
                <Link to='/products'>
                  <div className="more__products">
                    <IoArrowForwardCircleOutline />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="productGrid" data-aos="fade-up" data-aos-duration="1500">
                <div className="image">
                  <img src="/assets/img/products/IZZAH2.png" alt="" />
                </div>
                <h3>Maxi Roll Dispenser, Folded Hand Towel Dispenser, Jumbo Toilet Roll Dispenser, Automatic Freshener</h3>
                <div className="buy">
                  <p>View Products</p>
                  <div className="whatsapp">
                    <img src="/assets/icons/fwhatsapp.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="productGrid" data-aos="fade-up" data-aos-duration="2000">
                <div className="image">
                  <img src="/assets/img/products/BIIOSOLVE2.png" alt="" />
                </div>
                <h3>Durable plastic and steel dustbins
                  designed for long-lasting performance</h3>
                <div className="buy">
                  <p>View Products</p>
                  <div className="whatsapp">
                    <img src="/assets/icons/fwhatsapp.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="productGrid" data-aos="fade-up" data-aos-duration="2500">
                <div className="image">
                  <img src="/assets/img/products/EKOTA2.png" alt="" />
                </div>
                <h3>Disinfectant, Drain Opener, Carpet Shampo and All Purpose Cleaner</h3>
                <div className="buy">
                  <p>View Products</p>
                  <div className="whatsapp">
                    <img src="/assets/icons/fwhatsapp.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ecofriendly__products">
        <img src="/assets/img/ekota-bg.png" className='bg' alt="" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/assets/img/products/EKOTA1.png" data-aos="fade-up" data-aos-duration="2000" className='w-100 ekota-bg' alt="" />
            </div>
            <div className="col-md-6">
              <div className="contents" data-aos="fade-up" data-aos-duration="2000">
                {/* <img src="/assets/img/ekota-logo.svg" className='logo' alt="" /> */}
                <h2>Sustainable and Eco-Friendly products.</h2>
                <p>Ekota focuses on providing eco-friendly solutions with
                  our range of sustainable cutleries. Made from areca
                  leaves and wood, our products are both
                  biodegradable and durable</p>
                <div className="btn btn-primary green">View Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="yral__about yral_products">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center">
              <h5 className='gradient'>What we offer</h5>
              <h2 data-aos="fade-up" data-aos-duration="3000" >Our brands focus on offering a
                wide range of products.</h2>
            </div>
          </div>
          <div className="row">
            <div className="row row-cols-4">
              {
                products?.map((ele, i) => {
                  return (
                    <div className="col" data-aos="fade-up" data-aos-duration={`${i+1}000`}>
                      <div className="products">
                        <img src={ele.img} alt="" />
                        <h2>{ele?.title}</h2>
                        <p>{ele?.desc}</p>
                        <button className='btn btn-primary black'>View Products</button>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </section>
      <section className="yral__about yral__partners">
        <div className="container">
          <div className="row align-items-center justify-content-center mb-5">
            <div className="col-md-6">
              <h5 className='gradient'>Partners</h5>
              <h2 data-aos="fade-up" data-aos-duration="3000">Our Global Business Partners</h2>
            </div>
            <div className="col-md-5">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nesciunt, rerum iste libero architecto dolores repellendus quas, explicabo quam cum, enim nisi mollitia temporibus id sapiente delectus veniam! Natus, cum!</p>
            </div>
          </div>
          <div className="row">
            <Slider {...config_partners}>

              {
                partners?.map((ele, i) => {
                  return (
                    <div key={i}>
                      <img className='partner-logo' src={ele} alt="" />
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>

      </section>
     <ContactForm/>
    </>
  )
}
