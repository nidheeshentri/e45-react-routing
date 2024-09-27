import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

function header() {
  let navigate = useNavigate(); 
  const count = useSelector(state => state.counter.value)
  let prodCart = useSelector(state => state.cart.products)

  const redirectToCart = () =>  {
    navigate("/cart")
  }

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link to="/" class = "nav-link">Home</Link>
                <Link to="/about-us" class = "nav-link">About us</Link>
                <Link to="/contact-us" class = "nav-link">Contact us</Link>
              </Nav>
              <div className="d-flex">
                <Button variant="outline-success" onClick = {redirectToCart}>Cart({prodCart.length})</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}

export default header