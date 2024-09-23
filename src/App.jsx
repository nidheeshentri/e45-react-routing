// Mounting phase, Update phase, Unmount phase

import {useState, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { Table } from "react-bootstrap";


let App = () => {
  
  let [products, setProducts] = useState([])
  let [carts, setCarts] = useState([
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    }

  ])
  
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      setProducts(res.data)
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  const addToCart = (product) =>{
    setCarts([...carts, product])
  }

 
  return (
    <>
      <Container>
        <h1>Products list</h1>
        <Row>
          {products.map((product, index)=>{
            return(
              <Col xs = {3} key = {index}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>${product.price}</Card.Text>
                    <a href = {`product-details/${product.id}`} style = {{marginRight: "10px"}}>
                      <Button variant="primary" size="sm">View product</Button>
                    </a>
                    <Button variant="warning" size="sm" onClick = {()=>addToCart(product)}>Add to cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
      <hr />
      <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {carts.map((cart, index)=>{
                  return(
                    <tr>
                      <td>
                          <img src = {cart.image} style = {{width: "50px"}}/>
                      </td>
                      <td>{cart.title}</td>
                      <td>${cart.price}</td>
                      <td>
                          <button>Delete</button>
                          <button>-</button>
                          10
                          <button>+</button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
        </Table>
    </Container>
    </>
  )
}

export default App