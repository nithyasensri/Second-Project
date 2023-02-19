import React from "react";
import { Card, Row, Button, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import banner from '../images/breadcrumb.jpg'


function Veggies({ veggies, Increase, Decrease, addCart, productinfo }) {
    // console.log(veggies)
    return (<div>
        <Row>
            <div className="banner">
                <img src={banner} />
            </div>
        </Row>
        <Row className="d-flex justify-content-center main-display">
            <Col xs={10}>
                <Row>
                    <h3>Vegetables</h3>
                    {veggies.map((data) => {
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
                                                    <span onClick={() => Increase(data._id)} className="plus">+</span>
                                                    <span className="quan">{data.Quantity} kg</span>
                                                    <span onClick={() => Decrease(data._id)} className="minus">-</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>)

                    })}
                </Row>
            </Col>
        </Row>

        {/* {veggies.map((data) => {
            // console.log(data)
            // console.log(`http://localhost:3000/${data.path}`);
            // console.log(data.path)
            return (<div key={data._id}>
                <h3>{data.Name} {data.Rupees}
                    <img src={`http://localhost:3000/${data.path}`} style={{ 'width': '100px' }} />

                    <div className="plin">
                        <span onClick={() => Increase(data._id)} className="plus">+</span>
                        <span>{data.Quantity}</span>
                        <span onClick={() => Decrease(data._id)} className="minus">-</span>
                    </div>
                    <button type="submit" onClick={() => addCart(data)}>AddCart</button>
                    <button type="submit" onClick={() => productinfo(data)}>Read more</button>
                </h3>
            </div>)
        })} */}
    </div>)
}

export default Veggies;