import React from "react";
import { Col } from "react-bootstrap";
import { Carousel, Row, Card, Button } from 'react-bootstrap'
import ban1 from '../images/banner/ban1.jpeg'
import ban2 from '../images/banner/ban2.jpg'
import ban3 from '../images/banner/ban5.jpg'

import linkban1 from '../images/banner-1.jpeg'
import linkban2 from '../images/banner-3.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faBasketShopping } from "@fortawesome/free-solid-svg-icons"


function Home({ fruits, veggies, addCart, productinfo }) {
    // console.log(fruits.length)
    return (<div>
        <Row>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ban1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Fresh Fruits and Vegetables</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ban2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Fresh Fruits and Vegetables</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ban3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Fresh Fruits and Vegetables</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Row>
        <Row>
            <div className="extra-menu main-navdiv d-flex justify-content-center">
                <div className="ban-link" xs={10}>
                    <Row className=" d-flex justify-content-center">

                        <Col className="link-ban" xs={6} >
                            <Row className="side-ban">
                                <img src={linkban1} />
                                <div className="banner-content">
                                    <h3 style={{ "color": "#333333" }}>Fresh Fruits on our product</h3>
                                    <a href="/fruits" class="btn btn-style1">Shop now</a>
                                </div>
                            </Row>
                        </Col>

                        <Col className="link-ban" xs={6} >
                            <Row className="side-ban">
                                <img src={linkban2} />
                                <div className="banner-content">
                                    <h3 style={{ "color": "#333333" }}>Fresh Vegetables on our product</h3>
                                    <a href="/veggies" class="btn btn-style1">Shop now</a>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </Row>

        <Row>
            <div className="fruits-category">
                <div className="sub-fruits-category d-flex justify-content-center">
                    <Col className="fruits-spec-div" xs={8}>
                        <h3>Fruits</h3>
                        <Row style={{ 'padding': '15px 0px' }}>
                            {fruits.map((fruits, index) => {
                                if (index <= 2) {
                                    return (<Col xs={4} key={fruits._id}>
                                        <Card className="d-flex justify-content-center main-diplay-div">
                                            <Card.Body>
                                                <Card.Title>{fruits.Name}</Card.Title>
                                            </Card.Body>
                                            <Col className="img-div" xs={10}>
                                                <Card.Img src={`http://localhost:3000/${fruits.path}`} />
                                                <div className="hover-div">
                                                    <ul>
                                                        <li onClick={() => addCart(fruits)}><FontAwesomeIcon icon={faBasketShopping} /></li>
                                                        <li onClick={() => productinfo(fruits)}><FontAwesomeIcon icon={faEye} /></li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Card>
                                    </Col>)
                                }
                            })}
                        </Row>
                    </Col>
                </div>
            </div>
        </Row>

        <Row>
            <div className="ban-fix">
            </div>
        </Row>

        <Row>
            <div className="veggies-category">
                <div className="sub-veggies-category d-flex justify-content-center">
                    <Col className="fruits-spec-div" xs={9}>
                        <h3>veggies</h3>
                        <Row style={{ 'padding': '15px 0px' }}>
                            {veggies.map((veggies, index) => {
                                if (index <= 2) {
                                    return (<Col xs={4} key={veggies._id}>
                                        <Card className="d-flex justify-content-center main-diplay-div">
                                            <Card.Body>
                                                <Card.Title>{veggies.Name}</Card.Title>
                                            </Card.Body>
                                            <Col className="img-div" xs={10}>
                                                <Card.Img src={`http://localhost:3000/${veggies.path}`} />
                                                <div className="hover-div">
                                                    <ul>
                                                        <li onClick={() => addCart(veggies)}><FontAwesomeIcon icon={faBasketShopping} /></li>
                                                        <li onClick={() => productinfo(veggies)}><FontAwesomeIcon icon={faEye} /></li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Card>
                                    </Col>)
                                }
                            })}
                        </Row>
                    </Col>
                </div>
            </div>
        </Row>



    </div>)
}

export default Home;