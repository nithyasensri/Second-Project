import React from "react";
import { Card, Row, Button, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import banner from '../images/breadcrumb.jpg'


function Fruits({ fruits, fruIncrease, fruDecrease, addCart, productinfo }) {
    // console.log(fruits)

    return (<div>
        <Row>
            <div className="banner">
                <img src={banner} />
            </div>
        </Row>
        <Row className="d-flex justify-content-center main-display">
            <Col xs={10}>
                <Row>
                    <h3>Fruits</h3>
                    {fruits.map((data) => {
                        return (<Col xs={4} className="pro-list-pro">
                            <Card>
                                <div className="thumb">
                                    <Card.Img src={`http://localhost:3000/${data.path}`} />
                                    <div className="hover-div">
                                        <ul>
                                            <li onClick={() => addCart(data)}><FontAwesomeIcon icon={faBasketShopping} /></li>
                                            <li onClick={() => productinfo(data)}><FontAwesomeIcon icon={faEye} /></li>
                                        </ul>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>{data.Name}</Card.Title>
                                    <Card.Text>{data.Rupees}</Card.Text>
                                    <Col xs={12}>
                                        <Row className="car-detail-sub d-flex justify-content-center">
                                            <Col xs={5} className="car-details">
                                                <div className="plin">
                                                    <span onClick={() => fruIncrease(data._id)} className="plus">+</span>
                                                    <span className="quan">{data.Quantity}</span>
                                                    <span onClick={() => fruDecrease(data._id)} className="minus">-</span>
                                                </div>
                                            </Col>
                                            {/* <Col xs={12} className="car-details">
                                                <button type="submit" onClick={() => addCart(data)}><FontAwesomeIcon icon={faBasketShopping} /></button>
                                                <button type="submit" onClick={() => productinfo(data)}><FontAwesomeIcon icon={faEye} /></button>
                                            </Col> */}
                                        </Row>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>)

                    })}
                </Row>
            </Col>
        </Row>
    </div>)
}

export default Fruits;