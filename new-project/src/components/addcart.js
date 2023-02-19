
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { Button, Row, Col } from "react-bootstrap";
// import '../App';

function AddCart({ cartCountItem, cartCountTotal, cart, cartIncrease, cartDecrease,
    remData, cartcheck, openCart, closebtn }) {
    // console.log(openCart)



    const opendiv = { transform: "translateX(252%)", transition: "0.5s ease-in" };
    const closediv = { transform: "translateX(500%)", transition: "0.5s ease-in" };

    return (<div>
        <div className='overlay' style={{ display: openCart ? "block" : "none" }}></div>
        {/* {openCart ? console.log("a"):console.log("bb") } */}
        <div className="left-slide" style={openCart ? opendiv : closediv}>
            <div className='cross-mark' onClick={closebtn}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className='inner-row'>
                <h5>No.of.Cartitems:{cartCountItem}</h5>
                <h5>Total:{cartCountTotal}</h5>
                {
                    cart.map((e) => {
                        // console.log(e);
                        return (<div key={e._id}>
                            <Row className='add-crt-div'>
                                <Col xs={3} className="add-img">
                                    <img src={`http://localhost:3000/${e.path}`} style={{ 'width': '100px' }} />
                                </Col>
                                <Col xs={6} className="add-cart">
                                    <h6>{e.Name}</h6>
                                    <h6>Rs:{e.Rupees}</h6>
                                    <div className="plin">
                                        <span onClick={() => cartIncrease(e)} className="plus">+</span>
                                        <span className='quan'> {e.Quantity}kg </span>
                                        <span onClick={() => cartDecrease(e)} className="minus">-</span>
                                    </div>
                                </Col>
                                <Col xs={3} className="addcart-check-rem">
                                    <Button className="removebtn" onClick={() => remData(e._id)}>Delete</Button>
                                </Col>
                            </Row>
                        </div>)
                    })
                }
                <Row className='check-out d-flex justify-content-center'>
                    <Col className='addcart-check-out' xs={4}>
                        <Button onClick={() => cartcheck()}>Checkout</Button>
                    </Col>
                </Row>
            </div>

        </div>

    </div>)
}

export default AddCart