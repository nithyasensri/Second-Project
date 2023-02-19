
import React from "react";
import { Row, Col } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faAnglesRight,FaEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faAnglesRight,faEnvelope, faLocationDot, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, } from "react-icons/fa";


function Footer({ newbtn }) {
  return (<Row>
    <div className="footer d-flex justify-content-center">
      <div className="product-display  footer-display col-lg-10 ">
        <Row>
          <Col xs={2}>
            <div className="footer-main1">
              <div class="footer-left-left ">
                <h4>Our Links</h4>
                <nav>
                  <ul>
                    <li onClick={newbtn}>
                      <span><FontAwesomeIcon icon={faAnglesRight} /></span>
                      <Link to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <span><FontAwesomeIcon icon={faAnglesRight} /></span>
                      <Link to="/addproducts">
                        Add Products
                      </Link>
                    </li>
                    <li onClick={newbtn}>
                      <span><FontAwesomeIcon icon={faAnglesRight} /></span>
                      <Link to="/fruits">
                        Fruits
                      </Link>
                    </li>
                    <li onClick={newbtn}>
                      <span><FontAwesomeIcon icon={faAnglesRight} /></span>
                      <Link to="/veggies">
                        Veggies
                      </Link>
                    </li>
                    <li onClick={newbtn}>
                      <span><FontAwesomeIcon icon={faAnglesRight} /></span>
                      <Link to="/contacts">
                        Contactus
                      </Link>
                    </li>

                  </ul>
                </nav>

              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="footer-main1">
              <h4>Need Help</h4>
              <h4>7122456767</h4>
              <p>hello@balajicars.com</p>
            </div>
          </Col>
          <Col xs={4}>
            <div className="footer-main1">
              <h4>Contact Us</h4>
              <p><span><FontAwesomeIcon icon={faLocationDot} /></span>
               Address: Michael I. Days 3756
                Preston Street Wichita,
                KS 67213</p>
              <p><span><span><FontAwesomeIcon icon={faPhone} /></span></span>
              Phone: +1-888 705 770</p>
              <p><span><FontAwesomeIcon icon={faEnvelope} /></span>
              Email: info@domain.com</p>
            </div>
          </Col>
          <Col xs={3}>
            <div className="footer-main1-links">
              <h4>Follow Us</h4>
              <div className="social-links col-xs-12">
                <ul>
                  <li><a><FaFacebookF /></a></li>
                  <li><a><FaLinkedinIn /></a></li>
                  <li><a><FaTwitter /></a></li>
                  <li><a><FaInstagram /></a></li>
                </ul>
              </div>
            </div>
          </Col>

        </Row>
      </div>
    </div>
  </Row>)
}

export default Footer