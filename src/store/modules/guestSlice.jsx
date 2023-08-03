import { createSlice } from '@reduxjs/toolkit';

const getDate = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth() + 1;
    const d = now.getDate();
    return `${y}년 ${m}월 ${d}일`;
  };

const initialState = {    //슬라이스 Redux 초기 상태 정의
    date: getDate(),
  };

  const guestSlice = createSlice({
    name: 'guest',
    initialState,
    reducers: {  
        guestDate: (state) => {
            state.date = getDate();
        }
    },
});

export const {guestDate} = guestSlice.actions; 
export default guestSlice .reducer;