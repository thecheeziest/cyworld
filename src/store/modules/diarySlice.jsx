import { createSlice } from "@reduxjs/toolkit";
import { useActionData } from "react-router-dom";

const data = [
// {
//     id: 1, date: '2023.07.28 금 10:04', updTime: null, isPublic: true, substance: '‥‥‥☆‥‥난‥‥‥★‥‥‥‥‥\n‥‥‥‥‥‥‥너☆‥‥‥‥‥‥‥\n★‥‥‥‥‥‥‥뿐‥‥‥☆‥‥‥\n‥‥‥☆‥‥‥‥‥이‥‥★‥‥‥\n‥‥★‥‥‥‥‥‥‥야‥‥‥‥☆\n‥‥‥‥★‥‥‥‥‥‥사‥‥‥★\n‥‥☆‥‥‥‥‥‥★‥‥랑‥‥‥\n‥‥‥‥★‥‥‥‥‥‥☆‥해‥‥\n', 
//     style: {align: 'center'},
//     comment:[
//         {id: 1, comUser: '전지현', comText: '그들의 얼음 있을 일월과 보이는 설산에서 봄바람이다.', comDate: '2023.12.23 12:29'},
//         {id: 2, comUser: '송혜교', comText: '찬미를 이상, 끝까지 이것이다. 얼마나 꽃이 얼음에 인류의 생명을 같으며, 평화스러운 약동하다. 우리의 웅대한 대한 거선의 구하지 옷을 소금이라 아니한 있는 보라. 찾아다녀도, 뛰노는 그들의 가치를 풍부하게 품고 무엇이 힘차게 너의 뿐이다.', comDate: '2023.12.25 12:29'},
//     ]
// },
// {
//     id: 2, date: '2023.07.29 수 11:11', updTime: null, isPublic: true, substance: '난... ㄱ ㅏ끔˳˳\n눈물을 흘린ㄷ ㅏ....\nㄱ ㅏ끔은 눈물을 참을 수 없는 ㄴ ㅐㄱ ㅏ 별루ㄷ ㅏ...\n맘이 ㅇ ㅏㅍ ㅏ서....\n소ㄹ ㅣ치며... 울 수 있ㄷ ㅏ는 건....\n좋은 ㄱ ㅓㅇ ㅑ.....\nㅁ ㅓ... 꼭 슬ㅍ ㅓㅇ ㅑ만 우는 건 ㅇ ㅏ니잖ㅇ ㅏ...^^\n난... 눈물이 ....좋ㄷ ㅏ.....\nㅇ ㅏ니...\nㅁ ㅓㄹ ㅣㄱ ㅏ ㅇ ㅏ닌.....\n맘으로.....우는 ㄴ ㅐㄱ ㅏ 좋ㄷ ㅏ.....\n', 
//     style: {align: 'left'},
//     comment:[
//         {id: 3, comUser: '전지현', comText: '것이 봄날의 수 풀이 없으면 것이다. 얼음에 싶이 놀이 천지는 인생에 그림자는 뼈 봄바람이다.', comDate: '2023.12.23 12:29'},
//         {id: 4, comUser: '송혜교', comText: '인간이 찾아다녀도, 이상은 청춘의 이것이다. 몸이 가는 기쁘며, 있는 있다.', comDate: '2023.12.25 12:29'},
//     ]
// }
]


const initialState = {
    dailyData: [], //해당일자 데이터 //최초 필터링 데이터
    editData: {}, //편집 데이터
    

    // data,
    // nextId: 10, //data.length로 하면 initialState의 객체속성의 배열이 나오기 때문에 오류나는 거임
    // nextComId: 10, //수정하기
}

export const diarySlice = createSlice({
    name:'diary',
    initialState,
    reducers: {
        maxNextId(state, action){
        },
        showDailyData(state, action){ //해당일자의 다이어리 리스트를 보여준다
            state.dailyData = action.payload
        },
        sortData(state, action){ 
            state.dailyData.sort(function (a,b){
                if(a.id > b.id){
                    return -1
                }
                if(a.id < b.id){
                    return 1
                }
                return 0
            })
        },
        setEditData(state, action){
            state.editData = action.payload
        },
        // addDiary(state, action){
        //     // action.payload = addText
        //     state.data = [...state.data, {id:state.nextId++, updTime:null, comment:[], ...action.payload}]
        // },
        // addData(state, action){
        //     state.data = [...state.data, {id:state.nextId++, updTime:null, comment:[], ...action.payload}]
        // },
        // delData(state, action){
        //     state.data = state.data.filter(item => item.id !== action.payload)
        // },
        // updateData(state, action){ //게시물 수정
        //     // state.data = {...state.data, ...action.payload}
        //     state.data = state.data.map(item => item.id === action.payload.id ? action.payload : item)
        // },
        // delComData(state, action){
        //     state.data = state.data.map(item => ({...item, comment:item.comment.filter(comItem => comItem.id !== action.payload)}))
        // },
        // addComData(state, action){
        //     const {id, addText} = action.payload
        //     const targetData = state.data.find(item => item.id === id) //id와 일치하는 객체 //filter로해서 하루종일 안됐었음
        //     targetData.comment.push({ id: state.nextComId++, comUser:'안효섭', ...addText })
        // }
    }
})

export const { maxNextId, addDiary, sendData, showDailyData, addData, delData, setEditData, updateData, sortData, delComData, addComData, putDiaryData} = diarySlice.actions
export default diarySlice.reducer