import { createSlice } from '@reduxjs/toolkit'

let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addToCart(state, action){
            state.push(action.payload);
        },
        removeCart(state, action){
            return state.filter(item => item._id != action.payload._id);
        },
        clearCart(state, action){
            return [];
        }
    }
})

export default CartSlice.reducer;
export let {addToCart, removeCart, clearCart} = CartSlice.actions;