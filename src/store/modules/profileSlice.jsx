import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '조정현',
    gender: '여자or남자',
    birthday: '1994.04.21.',
    bio: '내용을 입력해주세요.',
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        update: (state, action) => {
            // action.payload에 새로운 프로필 정보를 받아서 상태를 업데이트
            return { ...state, ...action.payload };
        },
    },
});

export const { update } = profileSlice.actions;
export default profileSlice.reducer;