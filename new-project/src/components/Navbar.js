import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";


import '../App.css'
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../images/logo-1.svg'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

{/* <FontAwesomeIcon icon="fa-thin fa-magnifying-glass" /> */ }


const Navbar = ({ basketClick, cartCountItem, handleSubmit, submitSearch,newbtn }) => {
    return (<Row>
        <div className='main-navdiv d-flex justify-content-center'>
            <div className='menu-div col-lg-10'>

                <Row className="sub-main">

                    <Col xs={3}>
                        <div className='logo'>
                            <a href="/">
                                <img src={Logo} />
                            </a>
                        </div>
                    </Col>

                    <Col xs={6}>
                        <div className='menu'>
                            <nav>
                                <ul>
                                    <li onClick={newbtn}>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/addproducts">Add Products</Link>
                                    </li>
                                    {/* <li>
                                <Link to="/about">About</Link>
                            </li> */}
                                    <li onClick={newbtn}>
                                        <Link to="/fruits">Fruits</Link>
                                    </li>
                                    <li onClick={newbtn}>
                                        <Link to="/veggies">Veggies</Link>
                                    </li>
                                    <li onClick={newbtn}>
                                        <Link to="/contacts">Contactus</Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className='main-bar'>
                            <div className='search-bar'>
                                <input type="text" onChange={(e) => handleSubmit(e)} />
                                <button type='submit' onClick={submitSearch}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                    </Col>

                    <Col xs={1}>
                        <div className='side-menu'>
                            <div className='basketClick' onClick={basketClick}>
                                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                                <p>{cartCountItem}</p>
                            </div>
                        </div>
                    </Col>

                </Row>

            </div>
        </div>
    </Row>
    );
}


export default Navbar;