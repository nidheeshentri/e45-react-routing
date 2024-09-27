import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'

function CartChild(props) {
    let [carts, setCarts] = useState(props.cartData)
    let [data, setData] = useState("Data")
  return (
    <>
        <Container>
            <h1>Cart chld</h1>
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

export default CartChild