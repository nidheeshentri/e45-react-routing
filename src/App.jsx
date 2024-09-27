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

import CartChild from "./CartChild";
import { useSelector, useDispatch } from 'react-redux'
import { setCart, addSingleProduct } from './features/cart/cartSlice';


let App = () => {
  
  let [products, setProducts] = useState([])
  let [carts, setCarts] = useState([])

  let prodCart = useSelector(state => state.cart.products)

  let dispatch = useDispatch()

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
    console.log("Clicked")
    dispatch(addSingleProduct(product))
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
      <CartChild cartData = {prodCart}/>
    </>
  )
}

export default App