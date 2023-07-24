import { createSlice } from '@reduxjs/toolkit';

const getDate = () => {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  return `${y}년 ${m}월 ${d}일`;
};

const initialState = {
  music: [],
  data: "",
};


export const musicBoxSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    getMusicDate(state, action) {
      const date = getDate();
      state.date = date; // 날짜 값을 상태에 업데이트
    },
  },
});



export const { getMusicDate } = musicBoxSlice.actions;

export default musicBoxSlice.reducer;