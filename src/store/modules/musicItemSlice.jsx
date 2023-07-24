import { createSlice } from '@reduxjs/toolkit';

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

export const musicItemSlice = createSlice({
  name: 'musicItem',
  initialState: {
    like: false,
  },
  reducers: {
    toggleLike: (state, action) => {
      // const { data, id } = action.payload;
      // const updatedData = setData(data, id); // setData 함수를 호출하여 데이터 업데이트
      // state.data = updatedData;
  },
},
});

export const { toggleLike } = musicItemSlice.actions;

export default musicItemSlice.reducer;