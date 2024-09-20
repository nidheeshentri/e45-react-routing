// Mounting phase, Update phase, Unmount phase

import {useState, useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from "axios";


let App = () => {
  
  let [products, setProducts] = useState([])
  
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
                    <a href = {`product-details/${product.id}`}>
                      <Button variant="primary" onClick ={()=>setCount(count+1)}>View product</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default App