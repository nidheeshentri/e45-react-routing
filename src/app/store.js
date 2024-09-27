import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import CartReducer from "../features/cart/cartSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: CartReducer
  }
})