import React from 'react'
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'


function Cart() {
    let prodCart = useSelector(state => state.cart.products)
  return (
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
                {prodCart.map((product, index)=>{
                    return(
                        <tr>
                        <td>
                            <img src = {product.image} style = {{width: "50px"}}/>
                        </td>
                        <td>{product.title}</td>
                        <td>${product.price}</td>
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
  )
}

export default Cart