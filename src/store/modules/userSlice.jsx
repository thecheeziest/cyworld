import { createSlice } from '@reduxjs/toolkit';
import sAlert from '../../assets/sweetalert/sweetalert';

const initialState = {
    userData: JSON.parse(localStorage.getItem('userData')) || null,  //모두의 데이터
    logUser: {id: '', pw: ''},   //로그인 한 사람의 데이터
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    relationData : [] // 일촌 배열
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { 
        addDiary(state, action){
            state.user.userDiary = state.user.userDiary || []; 
            state.user.userDiary.push({...action.payload, updTime:null, comment:[]})
            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item) 
            localStorage.setItem('user', JSON.stringify(state.user)) 
            localStorage.setItem('userData', JSON.stringify(state.userData))     
        },
        delDiary(state, action){
            state.user.userDiary = state.user.userDiary.filter(item => item.id !== action.payload)
            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item)
            localStorage.setItem('user', JSON.stringify(state.user)) 
            localStorage.setItem('userData', JSON.stringify(state.userData)) 
        },
        editDiary(state, action){ // 다이어리는 이미 주인장만 작성 가능 => id가 동일한 게시물 찾기 
            state.user.userDiary = state.user.userDiary.map(item => item.id === action.payload.id ? action.payload : item)
            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item)
            localStorage.setItem('user', JSON.stringify(state.user)) 
            localStorage.setItem('userData', JSON.stringify(state.userData)) 
        },
        addComDiary(state, action){
            const {userID, id, addText} = action.payload // 주인장ID, 게시물id, 댓글객체
            const nowUser = state.userData.find(item => item.emailID === userID); //주인장의 데이터
            const targetDiary = nowUser.userDiary.find(item => item.id === id) // 주인장의 다이어리 중 현재게시물과 id가 일치하는 데이터를 찾아 {댓글}을 추가한다
            targetDiary.comment.push(addText)
            /* localStorage.setItem('user.', JSON.stringify(state.user)) // user업뎃안됨 */
            localStorage.setItem('userData', JSON.stringify(state.userData)) 
        },
        delComDiary(state, action){

        },
        // diary 끝
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
        // addSkin(state, action) {
        //     state.user.userSkin = state.user.userSkin || [];
        //     // user 객체에 userSkin이라는 배열이 없으면 [] 빈 배열로 생성
        //     const idChk = state.user.userSkin.find(item => item.id === action.payload);
        //     // 스킨 id가 서로 같은지 체크
        //     if (!idChk) { // 스킨 id 중복 아닐 때 추가
        //         state.user.userSkin.push( { id: action.payload, skinImg: `url(../images/skin/skin${action.payload}.jpg)` } ); }
        //         // userSkin 안에 객체 타입으로 생성
            
        //     state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
        //     localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
        //     localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        // },
        onSkin(state, action) {
            state.user.nowSkin = state.user.nowSkin || '';
            state.user.nowSkin = state.user.userSkin.find(item => item.id === Number(action.payload)).imgURL;

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        onMiniroom(state, action) {
            state.user.nowMiniroom = state.user.nowMiniroom || '';
            state.user.nowMiniroom = state.user.userMiniroom.find(item => item.id === Number(action.payload)).url;

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        addMinimi(state, action) {
            state.user.userMinimi = state.user.userMinimi || [];
            // user 객체에 userMinimi이라는 배열이 없으면 [] 빈 배열로 생성
            state.user.userMinimi.push( ...action.payload );
            
            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        delMinimi(state, action) {
            state.user.userMinimi = state.user.userMinimi.filter(item => item.id !== Number(action.payload));
            // 선택 미니미만 삭제
            state.user.nowMinimi = state.user.userMinimi.find(item => item.minimiURL === state.user.nowMinimi) ? state.user.nowMinimi : '';
            // 현재 미니미 = 삭제된 미니미면 없애기, 있으면 그대로
            sAlert('success', '미니미가 삭제되었습니다!')

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        allDelMinimi(state, action) {
            state.user.userMinimi = [];
            state.user.nowMinimi = '';
            sAlert('success', '미니미가 전체 삭제 되었습니다!')

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        onMinimi(state, action) {
            state.user.nowMinimi = state.user.nowMinimi || '';
            state.user.nowMinimi = state.user.userMinimi.find(item => item.id === Number(action.payload)).minimiURL;
            sAlert('success', '미니미가 설정되었습니다!')

            state.userData = state.userData.map(item => item.emailID === state.user.emailID ? state.user : item); // userData도 같이 업데이트
            localStorage.setItem('user', JSON.stringify(state.user)); // user 로컬스토리지에 저장
            localStorage.setItem('userData', JSON.stringify(state.userData)); // userData 로컬스토리지에 저장
        },
        onBgm(state, action) {
            state.user.nowBgm = state.user.nowBgm || '';
            const bgm = state.user.userBgm.find(item => item.id === Number(action.payload));
            state.user.nowBgm = `♬..${bgm.singer} - ${bgm.title}.mp3`

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
        },
        addRelationShip(state, action) { // 일촌객체를 일촌배열에 추가
            const {send, arrive} = action.payload
            state.relationData = [
                ...state.relationData,
                {
                    send : send,
                    arrive : arrive,
                    status : '대기중'
                }
            ]
        }
    }
})

export const { addDiary, delDiary, editDiary, addComDiary, delComDiary, changeInput, login, logout, onSkin, onMiniroom, onMinimi, addMinimi, delMinimi, allDelMinimi, setTitle, setInfo, addFriendsSay, addRelationShip } = userSlice.actions
export default userSlice.reducer