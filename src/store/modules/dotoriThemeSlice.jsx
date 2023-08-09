import { createSlice } from "@reduxjs/toolkit";
import sAlert from '../../assets/sweetalert/sweetalert';

const initialState = {
    carts: []
}

export const dotoriThemeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        addCarts(state, action){
            const {id, item} = action.payload
            if(state.carts.some((item => item.id === id)))
            return sAlert('error', '이미 장바구니에 담긴 상품입니다.')
            state.carts = [...state.carts, item]
            sAlert('success', '상품이 장바구니에 추가되었습니다.!')
        },
        delCarts(state, action){
            state.carts = state.carts.filter(item => item.id !== action.payload)
        },
        resetCarts(state, action){
            state.carts = []
        }
    }
})

export const { addCarts, delCarts, resetCarts } = dotoriThemeSlice.actions
export default dotoriThemeSlice.reducer