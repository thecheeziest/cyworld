import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    carts:[],
    cartTotal: 0,
}

export const musicCartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart(state, action){
            state.carts.push(action.payload);
        },
        removeCart(state, action){
            state.carts = state.carts.filter(item => item.id !== action.payload)
            //주문하기 id가 일치해야함
        },
        totalCart(state, action) {
            state.cartTotal = state.carts.length;
          }
    }
}
)

export const {addCart,removeCart,totalCart} = musicCartSlice.actions
export default musicCartSlice.reducer