import React from 'react'
import Hero from '../components/Hero'
import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import card1 from '../assets/card1.jpeg'
import card2 from '../assets/card2.jpeg'
import card3 from '../assets/card3.jpeg'
import card4 from '../assets/card4.jpeg'
import prize from '../assets/prize.png';
import client from '../assets/clients.png'
import mob from '../assets/mob.png'
import download from '../assets/download.png'
import Send from '../components/Send'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Hero />

      <div className="featured">
        <div className="row">
          <h5>Handy picked</h5>
        </div>
        <div className="row">
          <div className="col-6 heading_feature">
            <h1>Featured Listings</h1>
          </div>
          <div className="col-6 d-flex justify-content-end gap-4">
            <button className=' btn-feature justify-content-center'>New</button>
            <button className=' btn-feature justify-content-center'>Used</button>
          </div>
        </div>
        <div className="row cardrow mt-4 w-199 gap-4">
          <div className="card" style={{ width: "24rem" }}>
            <img src={card1} alt="..." />
            <Link to="/single-product">
              <div className="card-body bg-dark">
                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                <h5 className="card-title text-white">$4,800</h5>
                <p className="card-text gap-3"><hr /></p>
                <a href="#" className="littlebtn">2018</a>
                <a href="#" className='text-white m-4'>13,092 miles</a>
                <a href="#" className='text-white'>Automatic</a>
              </div>
            </Link>
          </div>
          <div className="card" style={{ width: "24rem" }}>
            <img src={card1} alt="..." />
            <Link to="/single-product">
              <div className="card-body bg-dark">
                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                <h5 className="card-title text-white">$4,800</h5>
                <p className="card-text gap-3"><hr /></p>
                <a href="#" className="littlebtn">2018</a>
                <a href="#" className='text-white m-4'>13,092 miles</a>
                <a href="#" className='text-white'>Automatic</a>
              </div>
            </Link>
          </div>
          <div className="card" style={{ width: "24rem" }}>
            <img src={card1} alt="..." />
            <Link to="/single-product">
              <div className="card-body bg-dark">
                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                <h5 className="card-title text-white">$4,800</h5>
                <p className="card-text gap-3"><hr /></p>
                <a href="#" className="littlebtn">2018</a>
                <a href="#" className='text-white m-4'>13,092 miles</a>
                <a href="#" className='text-white'>Automatic</a>
              </div>
            </Link>
          </div>
          <div className="card" style={{ width: "24rem" }}>
            <img src={card1} alt="..." />
            <Link to="/single-product">
              <div className="card-body bg-dark">
                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                <h5 className="card-title text-white">$4,800</h5>
                <p className="card-text gap-3"><hr /></p>
                <a href="#" className="littlebtn">2018</a>
                <a href="#" className='text-white m-4'>13,092 miles</a>
                <a href="#" className='text-white'>Automatic</a>
              </div>
            </Link>
          </div>        </div>
        <div className="row d-flex justify-content-between align-items-center mt-4">
          <div className="col-auto">
            <span>Follow us</span>
            <ul className="feature-icons d-inline-flex list-unstyled">
              <li><a className="facebook" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a className="twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a className="instagram" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
          <div className="col-auto">
            <button className="btn-view-more">View More</button>
          </div>
        </div>
      </div>


      <div className="popular">
        <div className="row">
          <h5>Handy picked</h5>
        </div>
        <div className="row">
          <div className="col-6 heading_feature">
            <h1>Popular Makes</h1>
          </div>
          <div className="col-md-6 d-flex justify-content-end gap-4">
            <button className='popularbtn justify-content-center'>Audi</button>
            <button className='popularbtn justify-content-center'>HONDA</button>
            <button className='popularbtn justify-content-center'>FORD</button>
            <button className='popularbtn justify-content-center'>ISUZU</button>
          </div>
        </div>
        <div className="row cardrow mt-4 w-199 gap-4">

          <div className="card" style={{ width: "24rem" }}>
            <img src={card1} alt="..." />
            <Link to="/single-product">
              <div className="card-body bg-dark">
                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                <h5 className="card-title text-white">$4,800</h5>
                <p className="card-text gap-3"><hr /></p>
                <a href="#" className="littlebtn">2018</a>
                <a href="#" className='text-white m-4'>13,092 miles</a>
                <a href="#" className='text-white'>Automatic</a>
              </div>
            </Link>
          </div>
          <div className="card" style={{ width: "24rem" }}>
            <img src={card1} alt="..." />
            <Link to="/single-product">
              <div className="card-body bg-dark">
                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                <h5 className="card-title text-white">$4,800</h5>
                <p className="card-text gap-3"><hr /></p>
                <a href="#" className="littlebtn">2018</a>
                <a href="#" className='text-white m-4'>13,092 miles</a>
                <a href="#" className='text-white'>Automatic</a>
              </div>
            </Link>
          </div>
          <div className="card" style={{ width: "24rem" }}>
            <img src={card1} alt="..." />
            <Link to="/single-product">
              <div className="card-body bg-dark">
                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                <h5 className="card-title text-white">$4,800</h5>
                <p className="card-text gap-3"><hr /></p>
                <a href="#" className="littlebtn">2018</a>
                <a href="#" className='text-white m-4'>13,092 miles</a>
                <a href="#" className='text-white'>Automatic</a>
              </div>
            </Link>
          </div>
          <div className="card" style={{ width: "24rem" }}>
            <img src={card1} alt="..." />
            <Link to="/single-product">
              <div className="card-body bg-dark">
                <h5 className="card-title text-white">HONDA FIT 2018</h5>
                <h5 className="card-title text-white">$4,800</h5>
                <p className="card-text gap-3"><hr /></p>
                <a href="#" className="littlebtn">2018</a>
                <a href="#" className='text-white m-4'>13,092 miles</a>
                <a href="#" className='text-white'>Automatic</a>
              </div>
            </Link>
          </div>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-auto">

            </div>
            <div className="col-auto">
              <Link to="/allcars">
                <button className="btn-view-more">View More</button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className="choose-us">
        <div className="container">
          <div className="row">
            <div className="col-12 heading_choose">
              <h1>Why Choose Us?</h1>
            </div>
          </div>
          <div className="row m-4">
            <div className="col-12 col-md-4 text-center mb-4">
              <div className="cont">
                <div className="svgimg mb-3">
                  <img src={prize} alt="Wide range of brands" className="img-fluid" />
                </div>
                <h2>Wide range of brands</h2>
                <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center mb-4">
              <div className="cont">
                <div className="cliimg mb-3">
                  <img src={client} alt="Trusted by our clients" className="img-fluid" />
                </div>
                <h2>Trusted by our clients</h2>
                <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center mb-4">
              <div className="cont">
                <div className="mobimg mb-3">
                  <img src={mob} alt="Fast & easy financing" className="img-fluid" />
                </div>
                <h2>Fast & easy financing</h2>
                <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="download">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="cardblack">
                <div className="card-content">
                  <h1>How to buy a car?</h1>
                  <ul className="card-list">
                    <li>best deals</li>
                    <li>sell your car</li>
                    <li>car book values</li>
                    <li>car dealers</li>
                    <li>compare prices</li>
                  </ul>
                  <Link to="/about">
                    <button className="read-more">Read more</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="cardorange">
                <h1>Newsletter</h1>
                <input className='mY-4' type="text" name="newsletter" placeholder="Your email address" />
                <button className="sendnew">Send</button>
                <p className='news_p'>Subscribe to our newsletter and stay updated with our offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home