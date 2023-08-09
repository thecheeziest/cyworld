import { createSlice } from '@reduxjs/toolkit';

const getDate = () => {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0'); // 두 자리로 표현하도록 설정
  const d = String(now.getDate()).padStart(2, '0'); 
  const h = String(now.getHours()).padStart(2, '0'); 
  const min = String(now.getMinutes()).padStart(2, '0'); 
  return `${y},${m},${d} ${h}:${min}`;
  };

const initialState = {  //슬라이스 Redux 초기 상태 정의
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