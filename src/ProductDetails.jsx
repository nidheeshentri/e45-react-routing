import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';

function ProductDetails() {

  const [product, setProduct] = useState({})

  let {product_id} = useParams()


  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/"+product_id)
    .then((res)=>{
      console.log(res.data)
      setProduct(res.data)
    })
    .catch(()=>{
      alert("Something went wrong. Refresh the page.")
    })
  }, [])

  return (
    <section>
      <div>
        <img src = {product.image} style = {{width: "300px"}}/>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </section>
  )
}

export default ProductDetails