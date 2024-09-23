import React from 'react'
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'

function Cart() {
    const count = useSelector(state => state.counter.value)
  return (
    <Container>
        <h1>{count}</h1>
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
                <tr>
                <td>
                    <img src = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" style = {{width: "50px"}}/>
                </td>
                <td>Hand bag</td>
                <td>$150</td>
                <td>
                    <button>Delete</button>
                    <button>-</button>
                    10
                    <button>+</button>
                </td>
                </tr>
            </tbody>
        </Table>
    </Container>
  )
}

export default Cart