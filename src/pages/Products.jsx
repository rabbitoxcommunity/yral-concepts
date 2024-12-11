import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Products() {
  const [viewMoreProducts, setViewMoreProducts] = useState(false)
  const Categories = ['Trending Products', 'Shirts', 'Saree', 'Kurta', 'Trousers', 'Shoes', 'Backpacks']
  const brands = ['Biosolve', 'Ekota', 'Izzah', 'Hygia']
  const Collections = ['New Arrival', 'trend', 'outfit']
  const products = [
    {
      img: "/assets/img/products/p1.jpg",
      title: "Jumbo Toilet Roll Dispenser"
    },
    {
      img: "/assets/img/products/p22.jpg",
      title: "PL18-2O3ONT"
    },
    {
      img: "/assets/img/products/p14.jpg",
      title: "TOILET ROLL"
    },
    {
      img: "/assets/img/products/p15.jpg",
      title: "TOILET ROLL"
    },
    {
      img: "/assets/img/products/p2.jpg",
      title: "Automatic Soap Dispenser"
    },
    {
      img: "/assets/img/products/p3.jpg",
      title: "Soap Dispenser"
    },
    {
      img: "/assets/img/products/p4.jpg",
      title: "Auto Cut Hand Towel Dispenser"
    },
    {
      img: "/assets/img/products/p5.jpg",
      title: "Plastic foot operated Bin"
    },
    {
      img: "/assets/img/products/p6.jpg",
      title: "Plastic Waste Basket"
    },
    {
      img: "/assets/img/products/p7.jpg",
      title: "Plastic Foot Operated Bin With Wheels"
    },
    // {
    //   img: "/assets/img/products/p8.jpg",
    //   title : "Swing Top Bin"
    // },
    {
      img: "/assets/img/products/p9.jpg",
      title: "OVEN CLEANER"
    },
    {
      img: "/assets/img/products/p10.jpg",
      title: "BLEACH REGULAR"
    },
    // {
    //   img: "/assets/img/products/p11.jpg",
    //   title : "DISH WASHING LIQUID"
    // },
    // {
    //   img: "/assets/img/products/p12.jpg",
    //   title : "BLEACH LEMON"
    // }
  ]

  const handleMoreProducts = () => {
    setViewMoreProducts(!viewMoreProducts)
  }
  return (
    <>
      <section className="yral__about innerpage_About product__page">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="col-md-6">
              <h2 data-aos="fade-up" data-aos-duration="2000">We offer a comprehensive selection of products.</h2>
              <div className="breadcrumb">
                <ul>
                  <li data-aos="fade-up" data-aos-duration="3000"><NavLink to='/'>Home</NavLink></li>
                  <li data-aos="fade-up" data-aos-duration="3000"><NavLink to='/products'>Products</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="products__categories" data-aos="fade-up" data-aos-duration="3000">
                <div className="grid">
                  <p>Biodegradable Bowls & Plates</p>
                </div>
                <div className="grid">
                  <p>Dispensers</p>
                </div>
                <div className="grid">
                  <p>Bins & Trollys</p>
                </div>
                <div className="grid">
                  <p>Cleaning Tools</p>
                </div>
                <div className="grid">
                  <p>Disposables</p>
                </div>
                <div className="grid" onClick={handleMoreProducts}>
                  <p>View More +</p>
                </div>
                {
                  viewMoreProducts &&
                  <>
                    <div className="grid">
                      <p>Cleaning Liquids</p>
                    </div>
                    <div className="grid">
                      <p>Paper roll & Tissues</p>
                    </div>
                  </>
                }


              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='product__listing'>
        <div className="container">
          <div className="">
            <div className="row">
              <div className="col-md-2 tab-3">
                <div className="filters">
                  <img src="/assets/icons/filter.svg" alt="" />
                  <p>FILTERS</p>
                </div>
                <div className="advanced__filter">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Brands</Accordion.Header>
                      <Accordion.Body>
                        <div className="option__lists">
                          {
                            brands?.map((ele, i) => {
                              return (
                                <div className="form-check" key={i}>
                                  <input className="form-check-input" type="checkbox" value="" id={ele} />
                                  <label className="form-check-label" for={ele}>
                                    {ele}
                                  </label>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Categories</Accordion.Header>
                      <Accordion.Body>
                        <div className="option__lists">
                          {
                            Categories?.map((ele, i) => {
                              return (
                                <div className="form-check" key={i}>
                                  <input className="form-check-input" type="checkbox" value="" id={ele} />
                                  <label className="form-check-label" for={ele}>
                                    {ele}
                                  </label>
                                </div>
                              )
                            })
                          }

                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Collection</Accordion.Header>
                      <Accordion.Body>
                        <div className="option__lists">
                          {
                            Collections?.map((ele, i) => {
                              return (
                                <div className="form-check" key={i}>
                                  <input className="form-check-input" type="checkbox" value="" id={ele} />
                                  <label className="form-check-label" for={ele}>
                                    {ele}
                                  </label>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>

                </div>
              </div>
              <div className="col-md-10 tab-9">
                <div className="filters">
                  <p>Showing 1 – 12 products of 117 products</p>
                </div>
                <div className="row row-cols-4">
                  {
                    products?.map((ele) => {
                      return (
                        <div className="col sm-12 tab-6">
                          <div className="productGrid" data-aos="fade-up" data-aos-duration="1500">
                            <div className="image">
                              <img src={ele?.img} alt="" />
                            </div>
                            <h3>{ele?.title}</h3>
                            <p className='main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut dolores aut enim pariatur, </p>
                            <div className="buy">
                              <p>Enquire Now</p>
                              {/* <div className="whatsapp">
                                <img src="/assets/icons/fwhatsapp.svg" alt="" />
                              </div> */}
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                  <div className="col-12 text-center mt-5">
                    <button className='btn btn-primary green'>Load More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
