import { createSlice } from '@reduxjs/toolkit';
import { minimiList } from '../../assets/api/cyworldData';
import sAlert from '../../assets/sweetalert/sweetalert';

const initialState = {
    showCart: false,
    cartList: []
}

export const minimiSlice = createSlice({
    name: 'minimi',
    initialState,
    reducers: {
        onCart(state, action) {
            state.showCart = !state.showCart
        },
        addCart(state, action) {
            const cartItem = minimiList.find(item => item.id === action.payload);
            
            if (!state.cartList.find(item => item.id === action.payload)) {
                state.cartList.push(cartItem)
                state.showCart = true;
            } else { // id랑 action.payload가 같을 때
                sAlert('error', '이미 담겨 있는 미니미입니다!')
            }
        },
        delCart(state, action) {
            state.cartList = state.cartList.filter(item => item.id !== action.payload);
        },
        resetCart(state, action) {
            state.cartList = [];
        }
    }
})

export const { onCart, addCart, delCart, resetCart } = minimiSlice.actions
export default minimiSlice.reducer