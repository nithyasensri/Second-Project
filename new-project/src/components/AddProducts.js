
import React from "react";
import { Row, Col, Form, Button, Table } from 'react-bootstrap'
import ban1 from '../images/ban1.jpeg'
import axios from 'axios'
import { useState } from "react";
import { useRef } from 'react';
import { useEffect } from 'react'


function AddProducts() {
    const [data, setData] = useState({
        _id: null,
        Name: '',
        Type: '',
        Quantity: '',
        Rupees: '',
        FixRupees: ''

    })
    const [file, setFile] = useState('');
    const [fileName, setFilename] = useState("")
    const [resultText, serResultText] = useState("")
    const fileInput = useRef();
    const [isComplete, setisComplete] = useState(true)
    const [posts, setPosts] = useState([]);
    const [fruits, setFruits] = useState([]);

    const handleFirstNameInputChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }

    const handleChange = () => {
        console.log(fileInput);
        setFile(fileInput.current.files[0]);
        setFilename(fileInput.current.files[0].name)
    }

    const saveData = async (e) => {

        // console.log(file, fileName);
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)
        formData.append('fileName', fileName);
        formData.append('Name', data.Name);
        formData.append('Type', data.Type);
        formData.append('Quantity', data.Quantity);
        formData.append('Rupees', data.Rupees);
        formData.append('FixRupees', data.FixRupees);

        console.log(formData)
        // const empobject = {
        //   Name: data.Name,
        //   Age: data.Age,
        //   City: data.City,
        // }
        console.log(data.Type)

        // console.log(empobject);
        if (data.Type === "fruits") {
            const result = await axios.post("http://localhost:3000/info/fruits", formData)
                .then(function (response) {
                    // console.log(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });

            // setData({ Name: "", Quantity: "", Rupees: "", FixRupees: "" })
        }
        if (data.Type === "veggies") {
            const result = await axios.post("http://localhost:3000/info", formData)
                .then(function (response) {
                    // console.log(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }


        setData({ Name: "", Quantity: "", Rupees: "", FixRupees: "", Type: "" })

        // console.log(result);

    }


    const editData = (data) => {
        console.log(data);
        setisComplete(!isComplete);
        setData({ _id: data._id, Name: data.Name, Quantity: data.Quantity, Rupees: data.Rupees, FixRupees: data.FixRupees, Type: data.Type })
        // console.log(data);
    }


    const upDate = async (e) => {
        e.preventDefault();
        // console.log(file, fileName)
        // const editedVal = { _id: data._id, Name: data.Name, Age: data.Age, City: data.City }
        // console.log(editedVal._id);


        const formData = new FormData();
        formData.append('file', file)
        formData.append('fileName', fileName);
        formData.append('_id', data._id);
        formData.append('Name', data.Name);
        formData.append('Quantity', data.Quantity);
        formData.append('Rupees', data.Rupees);
        formData.append('Type', data.Type);
        formData.append('FixRupees', data.FixRupees);

        console.log(formData)
        if (data.Type === "veggies") {
            await axios.put(`http://localhost:3000/info/update/${data._id}`, formData)
                .then(function (response) {
                    console.log("suc")
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        if (data.Type === "fruits") {
            await axios.put(`http://localhost:3000/info/fruits/${data._id}`, formData)
                .then(function (response) {
                    console.log("suc")
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const delData = (data) => {
        console.log(data);

        if (data.Type === "veggies") {
            axios.delete(`http://localhost:3000/info/delete/${data._id}`)
                .then(function (response) {
                    console.log(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        if (data.Type === "fruits") {
            axios.delete(`http://localhost:3000/info/fruits/${data._id}`)
                .then(function (response) {
                    console.log(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    useEffect(() => {
        fetch('http://localhost:3000/info')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setPosts(data)
            });


        fetch('http://localhost:3000/info/fruits')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setFruits(data)
            });


    }, [])

    return (<Row>
        <Col xs={12} className="banner">
            <img src={ban1} />
        </Col>
        <Col xs={12} className="add-prod">
            <h2>Add Products</h2>
            <Row className="add-product d-flex justify-content-center">
                <Col xs={6} className="addproduct-form ">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Product Name :
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext placeholder="Product Name" onChange={handleFirstNameInputChange}
                                    aria-label="Product Name" value={data.Name} name='Name' />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Product Type :
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext placeholder="Product Name" onChange={handleFirstNameInputChange}
                                    aria-label="Product Type" value={data.Type} name='Type' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Quantity :
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext placeholder="Quantity" onChange={handleFirstNameInputChange}
                                    aria-label="Quantity" value={data.Quantity} name='Quantity' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                Rupees :
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext placeholder="Rupees" onChange={handleFirstNameInputChange}
                                    aria-label="Rupees" value={data.Rupees} name='Rupees' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="4">
                                FixRupees : 
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext placeholder="FixRupees" onChange={handleFirstNameInputChange}
                                    aria-label="FixRupees" value={data.FixRupees} name='FixRupees' />
                            </Col>
                        </Form.Group>

                        <input type="file" onChange={handleChange} ref={fileInput} name='file' />
                        {<img width={100} src={file === '' ? '' : URL.createObjectURL(file)} />}
                        <p>{resultText}</p>



                        <Row>
                            <Col style={{ 'textAlign': 'center' }}>
                                {isComplete ? <Button type="submit" onClick={(e) => saveData(e)}>AddData</Button> :
                                    <Button type="submit" onClick={(e) => upDate(e)}>update</Button>}
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

        </Col>

        <h3 style={{'textAlign':"center"}}>Veggies</h3>
        <Table>
            <thead>
                <tr>
                <td>Name</td>
                <td>Image</td>
                <td>Rs</td>
                <td>Action</td>
                <td>Remove</td>
                </tr>
            </thead>
            <tbody>
                {posts.map((data) => {
                    return (<tr>
                        <td key={data._id}>{data.Name}</td>
                        <td><img src={`http://localhost:3000/${data.path}`} style={{ 'width': '100px' }} /></td>
                        <td>{data.Rupees}</td>
                        <td><button type="submit" onClick={() => editData(data)}>Edit Data</button></td>
                        <td><button type="submit" onClick={() => delData(data)}>Delete data</button></td>
                    </tr>)
                })}
            </tbody>
        </Table>


        <h3 style={{'textAlign':"center"}}>Fruits</h3>
        <Table>
            <thead>
                <tr>
                <td>Name</td>
                <td>Image</td>
                <td>Rs</td>
                <td>Action</td>
                <td>Remove</td>
                </tr>
            </thead>
            <tbody>
                {fruits.map((data) => {
                    return (<tr>
                        <td key={data._id}>{data.Name}</td>
                        <td><img src={`http://localhost:3000/${data.path}`} style={{ 'width': '100px' }} /></td>
                        <td>{data.Rupees}</td>
                        <td><button type="submit" onClick={() => editData(data)}>Edit Data</button></td>
                        <td><button type="submit" onClick={() => delData(data)}>Delete data</button></td>
                    </tr>)
                })}
            </tbody>
        </Table>

      


    </Row>)
}


export default AddProducts
