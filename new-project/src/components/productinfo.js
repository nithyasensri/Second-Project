import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Button, Container, Col } from "react-bootstrap";
import banner from '../images/breadcrumb.jpg'



function Productinfo({ info, cartPlus, cartMinus, addCart, infopage }) {

    console.log(info);
    return (<div>
    
        <Row>
            <div className="banner">
                <img src={banner} />
            </div>
        </Row>
        

        <Row className="d-flex justify-content-center main-display description-page">
            <Col xs={9}>
                {info.Type === "fruits" ? <Button className="read-more"><Link to="/fruits" onClick={infopage}>Back to Fruits</Link></Button> :
                    <Button className="read-more"><Link to="/veggies" onClick={infopage}>Back to Veggies</Link></Button>
                }
                

                <Col className="info-pro" xs={12}>

                    <Row>
                        <Col xs={4} className="img-desc">
                                <Card className="pro-main">
                                    <img src={`http://localhost:3000/${info.path}`} />
                                </Card>
                            </Col>
                        <Col xs={6} className="product-info">
                            
                                <h3>{info.Name} </h3>
                                <h3>{info.Rupees}</h3>
                           
                            <div className="plin">
                                    <span onClick={() => cartPlus(info)} className="plus"> + </span>
                                    <span className="quan"> {info.Quantity}kg </span>
                                    <span onClick={() => cartMinus(info)} className="minus"> - </span>
                                </div>
                            <Button type="submit" onClick={() => addCart(info)}>AddCart</Button>
                        </Col>
                    </Row>
                </Col>
            </Col>
        </Row >
    </div>)






}

export default Productinfo;