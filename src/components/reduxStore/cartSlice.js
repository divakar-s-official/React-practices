import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: { // is an object
        items: []
        
        
    },
    reducers: { // different type of actions and reducer
        // its again an object corresponding to those actions
        addItem : (state, action) => {
            //mutating our state / directly modifying our state over here
            state.items.push(action.payload)
        },
        removeItem : (state) => {
            state.items.pop()
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer