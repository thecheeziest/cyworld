import { createSlice } from '@reduxjs/toolkit';

const getDate = () => {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  return `${y}년 ${m}월 ${d}일`;
};

export const setData = (data, id) => {
  return data.map(item =>
    item.id === id
      ? {
          ...item,
          like: !item.done ? item.like + 1 : item.like - 1,
          done: !item.done,
        }
      : item
  );
};

const initialState = {    //music 슬라이스 Redux 초기 상태 정의
  like: false,
  music: [],
  carts: [], 
  cartTotal: 0, 
  date: getDate(),
  selectedMusic: null,
};

const musicBoxSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {        //디스패치될 때 상태를 수정하는 여러 개의 리듀서 함수
    getMusicDate: (state) => {  // getMusicDate, getDate 함수를 사용, 현재 날짜로 date를 업데이트
      state.date = getDate();
    },
    toggleLike: (state, action) => {
      const { data, id } = action.payload;
      const updatedData = setData(data, id);
      state.like = updatedData.find(item => item.id === id)?.like || state.like;
    },
    addCart: (state, action) => {  
      state.carts.push(action.payload);  //carts 배열에 항목을 추가
    },
    removeCart: (state, action) => {    //carts 배열에서 항목을 제거
      state.carts = state.carts.filter(item => item.id !== action.payload);
    },
    totalCart: (state) => {    //cartTotal 속성을 카트에 담긴 총 항목수로 업데이트
      state.cartTotal = state.carts.length;
    },
    resetCart: (state) => {
      state.carts = [];       // 쇼핑 카트 초기와  carts 배열을 비우고
      state.cartTotal = 0;    // cartTotal을 0으로 설정
    },
    selectMusic: (state, action) => {
      state.selectedMusic = action.payload;
    },
  },
});

export const {
  getMusicDate,
  toggleLike,
  addCart,
  removeCart,
  totalCart,
  resetCart,
  selectMusic
} = musicBoxSlice.actions;

export default musicBoxSlice.reducer;

