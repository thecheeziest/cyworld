import { createSlice } from '@reduxjs/toolkit';
import sAlert from '../../assets/sweetalert/sweetalert';

const initialState = {
    userData: JSON.parse(localStorage.getItem('userData')) || null,
    logUser: {id: '', pw: ''},
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeInput(state, action) {
            const { name, value } = action.payload;
            state.logUser = { ...state.logUser, [name]: value };
        },
        login(state, action) {
            const {id, pw} = action.payload;
            const userChk = JSON.parse(localStorage.getItem('userData')).find(item => item.email === id && item.pw === pw);
            state.user = userChk ? userChk : sAlert('error', '아이디와 비밀번호를 확인해 주세요.');
            state.logUser = {id: '', pw: ''}
        },
        logout(state, action) {
            localStorage.removeItem('user');
        },
        addSkin(state, action) {
            state.user.userSkin = state.user.userSkin || [];
            // user 객체에 userSkin이라는 배열이 없으면 [] 빈 배열로 생성
            const idChk = state.user.userSkin.find(item => item.id === action.payload);
            // 스킨 id가 서로 같은지 체크
            if (!idChk) { // 스킨 id 중복 아닐 때 추가
                state.user.userSkin.push( { id: action.payload, skinImg: `url(../images/skin/skin${action.payload}.jpg)` } ); }
                // userSkin 안에 객체 타입으로 생성
            
            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        onSkin(state, action) {
            state.user.nowSkin = state.user.nowSkin || '';
            state.user.nowSkin = `url(../images/skin/skin${action.payload}.jpg)`

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        onMiniroom(state, action) {
            state.user.nowMiniroom = state.user.nowMiniroom || '';
            state.user.nowMiniroom = `url(../images/miniroom/miniroom${action.payload}.jpg)`

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        onMinimi(state, action) {
            state.user.nowMinimi = state.user.nowMinimi || '';
            state.user.nowMinimi = `url(../images/minimi/minimi${action.payload}.jpg)`

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        onBgm(state, action) {
            state.user.nowBgm = state.user.nowBgm || '';
            state.user.nowBgm = `♬..${action.payload}.mp3`

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        setTitle(state, action) {
            state.user.title = state.user.title || '';
            // user 객체에 title이라는 문자열이 없으면 '' 빈 문자열 생성
            state.user.title = action.payload;
            // user의 title 속성에 text 저장

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        setInfo(state, action) {
            state.user.info = state.user.info || {};
            // // user 객체에 info라는 객체이 없으면 {} 빈 객체 생성
            state.user.info.txt = action.payload;
            state.user.info.img = 'url(../images/info_1.jpg)'
            // // user의 title 속성에 저장

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        addFriendsSay(state, action) {
            // state.user.friends.push({ comment: action.payload });
        }
    }
})

export const { changeInput, login, logout, addSkin, onSkin, onMiniroom, onMinimi, setTitle, setInfo, addFriendsSay } = userSlice.actions
export default userSlice.reducer