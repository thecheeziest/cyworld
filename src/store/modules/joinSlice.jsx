import { createSlice } from '@reduxjs/toolkit';
import sAlert from '../../assets/sweetalert/sweetalert';

const initialState = {
    text: '',
    data: {},
    userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) :
    [
        {id: 1, name: '조현아', email: 'zoa@naver.com', emailID: 'zoa', emailDomain: 'naver.com', pw: '1002', pwChk: '1002', gender: 'female', birth: '1996-10-02', gallery : [
            {id: 1, img: "cat0.jpg", like: 22, reply: [], date: "2023-07-14", voted: false},
            {id: 2, img: "cat1.jpg", like: 9, reply: [], date: "2023-07-14", voted: false},
            {id: 3, img: "cat2.jpg", like: 13, reply: [], date: "2023-07-14", voted: false},
            {id: 4, img: "cat3.jpg", like: 7, reply: [], date: "2023-07-14", voted: false},
            {id: 5, img: "cat4.jpg", like: 31, reply: [], date: "2023-07-14", voted: false},
            {id: 6, img: "cat5.jpg", like: 11, reply: [], date: "2023-07-14", voted: false},
            {id: 7, img: "cat6.jpg", like: 24, reply: [], date: "2023-07-14", voted: false}
        ] },
        {id: 2, name: '이초롱', email: 'chfhdvlcl@naver.com', emailID: 'chfhdvlcl', emailDomain: 'naver.com', pw: '0421', pwChk: '0421', gender: 'female', birth: '1994-04-21', gallery : [
            {id:'', img:'', like:'', reply:[], date:'2023-07-25', voted: false}
        ]},
        {id: 3, name: '김영은', email: 'ye_1223@naver.com', emailID: 'ye_1223', emailDomain: 'naver.com', pw: '1223', pwChk: '1223', gender: 'female', birth: '1998-12-23', gallery : [
            {id:'', img:'', like:'', reply:[], date:'2023-07-25', voted: false}
        ]},
        {id: 4, name: '우동훈', email: 'wosm5798@naver.com', emailID: 'wosm5798', emailDomain: 'naver.com', pw: '0105', pwChk: '0105', gender: 'male', birth: '1997-01-05', gallery : [
            {id:'', img:'', like:'', reply:[], date:'2023-07-25', voted: false}
        ]},
        {id: 5, name: '변서은', email: 'hotpink@naver.com', emailID: 'hotpink', emailDomain: 'naver.com', pw: '0303', pwChk: '0303', gender: 'female', birth: '2023-03-03', gallery : [
            {id:'', img:'', like:'', reply:[], date:'2023-07-25', voted: false}
        ]},
    ],
    emailChk: '',
    pwText: '동일한 비밀번호를 입력하세요.'
}

export const joinSlice = createSlice({
    name: 'join',
    initialState,
    reducers: {
        changeInput(state, action) {
            const { name, value } = action.payload;
            state.data = { ...state.data, [name]: value };
            state.pwText = !state.data.pw ? '동일한 비밀번호를 입력하세요' : state.data.pw === state.data.pwChk ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다.';
        },
        addUser(state, action) {
            const { emailID, emailDomain, ...payload } = action.payload;
            state.userData = [
                ...state.userData,
                {
                    id: state.userData.length + 1,
                    email: emailID + '@' + emailDomain,
                    emailID,
                    emailDomain,
                    ...payload }
            ]
            localStorage.setItem('userData', JSON.stringify(state.userData)) // 로컬 스토리지에 저장

            state.emailChk = '';
        },
        emailMsg(state, action) {
            state.emailChk = state.userData.find(item => item.email === action.payload) ? '중복' : '가능';
            state.userData.find(item => item.email === action.payload) ? sAlert('error', '이미 가입되어 있는 이메일 주소입니다.') : action.payload.includes('.com') || action.payload.includes('.kr') ? sAlert('success', '가입 가능한 이메일 주소입니다.') : sAlert('error', '이메일 형식이 올바르지 않습니다.');
        }
    }
})

export const { changeInput, addUser, emailMsg } = joinSlice.actions
export default joinSlice.reducer