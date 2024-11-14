import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoArrowForwardCircleOutline, IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { home_banner } from '../config/config'
import Slider from 'react-slick'
import { MdOutlineShoppingCart } from 'react-icons/md'

export default function Home() {

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
                      <h1>Disinfectants, Drain Openers & Multi-Purpose Cleaners</h1>
                      <p>Bio Solve offers a range of effective cleaning products
                        to keep your surroundings spotless.</p>
                      <div className="explore">
                        <div className="btn btn-primary white">Enquire Now</div>
                        <div className="btn btn-primary black">Explore More</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image">
                      <img src="/assets/img/banner5.png" className='main' alt="" />
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
                      <h1>Germicidal Detergent & Deodorizer</h1>
                      <p>Hygia provides a comprehensive range of products
                        designed to maintain cleanliness and hygiene in
                        various settings.</p>
                      <div className="explore">
                        <div className="btn btn-primary white">Enquire Now</div>
                        <div className="btn btn-primary black">Explore More</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image">
                      <img src="/assets/img/banner6.png" className='main' alt="" />
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
              <h2>Innovating Solutions For Everyday Needs</h2>
            </div>
            <div className="col-md-5">
              <p>Yral Concepts was founded in
                2024 by three friends in Ajman,
                UAE, with a mission to provide
                innovative solutions for
                everyday problems. </p>
              <p>Our brands focus on offering a
                wide range of products, from
                hygiene and cleaning
                materials to sustainable
                eco-friendly solutions.</p>
              <div className="btn btn-primary black mt-4">Know more</div>
            </div>
          </div>
        </div>
      </section>
      <section className="trending__products">
        <div className="container">
          <div className="row row-cols-4">
            <div className="col">
              <div className="trending">
                <h2>Trending Products</h2>
                <img className='main' src="/assets/img/banner2.png" alt="" />
                <Link to='/products'>
                  <div className="more__products">
                    <IoArrowForwardCircleOutline />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="productGrid">
                <div className="image">
                  <img src="/assets/img/banner3.png" alt="" />
                </div>
                <h3>Maxi Roll Dispenser, Folded Hand Towel Dispenser, Jumbo Toilet Roll Dispenser, Automatic Freshener</h3>
                <div className="buy">
                  <p>View Products</p>
                  <div className="whatsapp">
                    <IoCartOutline />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="productGrid">
                <div className="image">
                  <img src="/assets/img/banner4.png" alt="" />
                </div>
                <h3>Durable plastic and steel dustbins
                  designed for long-lasting performance</h3>
                <div className="buy">
                  <p>View Products</p>
                  <div className="whatsapp">
                    <IoCartOutline />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="productGrid">
                <div className="image">
                  <img src="/assets/img/banner5.png" alt="" />
                </div>
                <h3>Disinfectant, Drain Opener, Carpet Shampo and All Purpose Cleaner</h3>
                <div className="buy">
                  <p>View Products</p>
                  <div className="whatsapp">
                    <IoCartOutline />
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
              <img src="/assets/img/ekota.png" className='w-100 ekota-bg' alt="" />
            </div>
            <div className="col-md-6">
              <div className="contents">
                {/* <img src="/assets/img/ekota-logo.svg" className='logo' alt="" /> */}
                <h2>Sustainable and Eco-Friendly products.</h2>
                <p>Ekota focuses on providing eco-friendly solutions with
                  our range of sustainable cutleries. Made from areca
                  leaves and wood, our products are both
                  biodegradable and durable</p>
                <div className="btn btn-primary white">View Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="yral__about">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center">
              <h5 className='gradient'>What we offer</h5>
              <h2>Our brands focus on offering a
                wide range of products.</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
