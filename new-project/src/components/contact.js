import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"
import banner from '../images/breadcrumb.jpg'
function Contactus() {
    return (<div>
        <Row>
            <div className="banner">
                <img src={banner} />
            </div>
        </Row>
        <Row>
            <div className="contact-content d-flex justify-content-center">

                <div className="content-div contact-div col-lg-9 ">
                    <h2>Send us a Message</h2>
                    <h5>We are here to help you with anything you need?</h5>


                    <Row className="contact-review">
                        <Col xs={4} className="contact-details">
                            <Row className='d-flex justify-content-center'>
                                <Col xs={12} className="contact-subdetails">
                                    <Row className="contact-address">
                                        <div className="span-icon">
                                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                                        </div>
                                        <div className="cont-pre">
                                            <p>
                                                1st floor. No 66,<br />
                                                1st street, Aranthangi,<br />
                                                Pudukottai 614616.<br />
                                                Tamilnadu, India.
                                            </p>
                                        </div>
                                    </Row>
                                    <Row className="contact-address">
                                        <div className="span-icon">
                                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                        </div>
                                        <div className="cont-pre">
                                            <p>
                                                9800076851<br />
                                                89076543341,<br />
                                            </p>
                                        </div>
                                    </Row>
                                    <Row className="contact-address">
                                        <div className="span-icon">
                                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                        </div>
                                        <div className="cont-pre">
                                            <p>
                                                shrishivani18052018@gmail.com
                                            </p>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={8} className="contact-details">
                            <Row className="contact-review d-flex justify-content-center">
                                <Col xs={11} className="contact-form">

                                    <Row>
                                        <Col xs={6}>
                                            <InputGroup >
                                                <InputGroup.Text id="basic-addon1">
                                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                                </InputGroup.Text>
                                                <Form.Control
                                                    placeholder="First Name"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1" />
                                            </InputGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <InputGroup >
                                                <InputGroup.Text id="basic-addon1">
                                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                                </InputGroup.Text>
                                                <Form.Control
                                                    placeholder="Last Name"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1" />
                                            </InputGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={6}>
                                            <InputGroup >
                                                <InputGroup.Text id="basic-addon1">
                                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                                </InputGroup.Text>
                                                <Form.Control
                                                    placeholder="Email"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1" />
                                            </InputGroup>
                                        </Col>
                                        <Col xs={6}>
                                            <InputGroup >
                                                <InputGroup.Text id="basic-addon1">
                                                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                                </InputGroup.Text>
                                                <Form.Control
                                                    placeholder="Phone Number"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1" />
                                            </InputGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={12}>
                                            <InputGroup >
                                                <textarea cols={200}
                                                    placeholder="Enter Your Message"
                                                    type="text" id="message"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col style={{ 'textAlign': 'center' }}>
                                            <Button className="btn2" >Submit</Button>
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>


                        </Col>
                    </Row>


                </div>

            </div>
        </Row>
    </div>)
}

export default Contactus;