import React from "react";
import { Card, Row, Button, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import banner from '../images/breadcrumb.jpg'
import { Link } from "react-router-dom";



function Searchinfo({ finsearchVal, serPlus, serMinus, addCart, serinfopage, infoser, infopage, serlink }) {

    console.log(serlink);


    return (<div>
        <Row>
            <div className="banner">
                <img src={banner} />
            </div>
        </Row>
        <Row className="d-flex justify-content-center main-display">
            <Col xs={9}>
                {finsearchVal.Type === "fruits" ? <Button className="read-more"><Link to="/fruits" onClick={serlink}>Back to Fruits</Link></Button> :
                    <Button className="read-more"><Link to="/veggies" onClick={serlink}>Back to Veggies</Link></Button>
                }
                <Row>
                    
                    {serinfopage ?
                        <Col className="info-pro" xs={12}>
                            <Row>
                                <Col xs={4} className="img-desc">
                                    <Card className="pro-main">
                                        <img src={`http://localhost:3000/${finsearchVal.path}`} />
                                    </Card>
                                </Col>

                                <Col xs={6} className="product-info">
                                    <h3>{finsearchVal.Name}</h3>
                                    <h3>{finsearchVal.Rupees}</h3>
                                    <div className="plin">
                                        <span onClick={() => serPlus(finsearchVal)} className="plus"> + </span>
                                        <span className="quan">{finsearchVal.Quantity}</span>
                                        <span onClick={() => serMinus(finsearchVal)} className="minus"> - </span>
                                    </div>
                                    <Button onClick={() => addCart(finsearchVal)}><FontAwesomeIcon icon={faBasketShopping} />Add Cart</Button>
                                </Col>
                            </Row>
    </Col>: (<Col xs={4} className="pro-list-pro">
        <Card>
            <div className="thumb">
                <Card.Img src={`http://localhost:3000/${finsearchVal.path}`} />
                <div className="hover-div">
                    <ul>
                        <li onClick={() => addCart(finsearchVal)}><FontAwesomeIcon icon={faBasketShopping} /></li>
                        <li onClick={() => infoser(finsearchVal)}><FontAwesomeIcon icon={faEye} /></li>
                    </ul>
                </div>
            </div>
            <Card.Body>
                <Card.Title>{finsearchVal.Name}</Card.Title>
                <Card.Text>{finsearchVal.Rupees}</Card.Text>
                <Col xs={12}>
                    <Row className="car-detail-sub d-flex justify-content-center">
                        <Col xs={5} className="car-details">
                            <div className="plin">
                                <span onClick={() => serPlus(finsearchVal)} className="plus"> + </span>
                                <span className="quan">{finsearchVal.Quantity}</span>
                                <span onClick={() => serMinus(finsearchVal)} className="minus"> - </span>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Card.Body>
        </Card>
    </Col>)
}
                </Row >
            </Col >
        </Row >

    </div >)
}

export default Searchinfo;