import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers:{
        setCart: (state, action) => {
            state.products = action.payload
        },
        addSingleProduct: (state, action) => {
            state.products.push(action.payload)
        }
    }
})

export const { setCart, addSingleProduct } = cartSlice.actions

export default cartSlice.reducer