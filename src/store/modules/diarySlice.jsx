import { createSlice } from "@reduxjs/toolkit";
import {dataList} from '../../assets/api/diaryData'
import { compileString } from "sass";

const initialState = {
    data: dataList,
    dailyData: [],//해당일자 데이터
    editData: {},//편집 데이터
    nextId: dataList.length+1  //data.length로 하면 initialState의 객체속성의 배열이 나오기 때문에 오류나는 거임
}

export const diarySlice = createSlice({
    name:'diary',
    initialState,
    reducers: {
        showDailyData(state, action){ //캘린더 해당일자 다이어리 리스트 보여준다
            state.dailyData = action.payload
        },
        addData(state, action){
            state.data = [...state.data, {id:state.nextId++, comment:[], ...action.payload}]
        },
        delData(state, action){
            state.data = state.data.filter(item => item.id !== action.payload)
        },
        setEditData(state, action){
            state.editData = action.payload
        },
        updateData(state, action){ //수정본
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
        }

    
    }
})

export const {showDailyData, addData, delData, setEditData, updateData, sortData} = diarySlice.actions
export default diarySlice.reducer