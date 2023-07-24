import { createSlice } from '@reduxjs/toolkit';
import { menuData, setData } from '../../assets/api/cyworldData';

const initialState = {
    menuData,
    setData,
    setView: 1,
    text: '',
    isTitle: false,
    isInfo: false
}

export const cyworldSlice = createSlice({
    name: 'cyworld',
    initialState,
    reducers: {
        onMenu(state, action) {
            state.menuData = state.menuData.map(item => item.id === action.payload ? {...item, on: true} : {...item, on: false})
        },
        onSetMenu(state, action) {
            state.setData = state.setData.map(item => item.id === action.payload ? {...item, on: true} : {...item, on: false});
            state.setView = action.payload;
        },
        changeInput(state, action) {
            state.text = action.payload;
        },
        onTitle(state) {
            state.isTitle = !state.isTitle;
            state.text = '';
        },
        onInfo(state) {
            state.isInfo = !state.isInfo;
        }
    }
})

export const {onMenu, onSetMenu, changeInput, onTitle, onInfo} = cyworldSlice.actions
export default cyworldSlice.reducer