import { createSlice } from "@reduxjs/toolkit";
import {dataList} from '../../assets/api/diaryData'

const initialState = {
    data: dataList,
    dailyData: [], //해당일자 데이터
    editData: {}, //편집 데이터
    nextId: dataList.length+1, //data.length로 하면 initialState의 객체속성의 배열이 나오기 때문에 오류나는 거임
    nextComId: 9 //수정하기
}

export const diarySlice = createSlice({
    name:'diary',
    initialState,
    reducers: {
        showDailyData(state, action){ //해당일자의 다이어리 리스트를 보여준다
            state.dailyData = action.payload
        },
        addData(state, action){
            state.data = [...state.data, {id:state.nextId++, updTime:null, comment:[], ...action.payload}]
            // state.addData2 = {id:state.nextId++, updTime:null, comment:[], ...action.payload}
        },
        delData(state, action){
            state.data = state.data.filter(item => item.id !== action.payload)
        },
        setEditData(state, action){
            state.editData = action.payload
        },
        updateData(state, action){ //게시물 수정
            // state.data = {...state.data, ...action.payload}
            state.data = state.data.map(item => item.id === action.payload.id ? action.payload : item)
        },
        sortData(state, action){ 
            state.data.sort(function (a,b){
                if(a.id > b.id){
                    return -1
                }
                if(a.id < b.id){
                    return 1
                }
                return 0
            })
        },
        delComData(state, action){
            state.data = state.data.map(item => ({...item, comment:item.comment.filter(comItem => comItem.id !== action.payload)}))
        },
        addComData(state, action){
            const {id, addText} = action.payload
            const targetData = state.data.find(item => item.id === id) //id와 일치하는 객체 //filter로해서 하루종일 안됐었음
            targetData.comment.push({ id: state.nextComId++, comUser:'안효섭', ...addText })
        }
    }
})

export const {showDailyData, addData, delData, setEditData, updateData, sortData, delComData, addComData} = diarySlice.actions
export default diarySlice.reducer