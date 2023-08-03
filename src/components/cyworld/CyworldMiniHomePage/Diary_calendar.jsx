import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  showDailyData, sortData } from '../../../store/modules/diarySlice';
import { useParams } from 'react-router-dom';

const Diary_calendar = () => {
    const dispatch = useDispatch()
    const [value, onChange] = useState(new Date()) //클릭한 날짜
    const activeDate = moment(value).format('YYYY.MM.DD'); // 날짜포맷변환 string, 2023.07.19    

    // userSlice
    const { userData } = useSelector(state => state.user); 
    const { userID } = useParams(); 
    const nowUser = userData.find(item => item.emailID === userID); // nowUser = 주인장의 데이터만 가져와라
    const data = nowUser.userDiary ? nowUser.userDiary : [] // nowUserData = 주인장에게 userDiary가 존재하면 그대로, 없다면 userDiary:[]
    
    // 데이터가 업데이트될 때마다 
    useEffect(()=>{
        const filteredData = data.filter(item => item.date.slice(0,10) === activeDate) || []
        dispatch(showDailyData(filteredData)) // put dailyData
        dispatch(sortData(data))
    },[activeDate, data])

    return (
        <div className='diary-calendar'>    
            <Calendar 
                onChange={onChange}  
                value={value}  
                next2Label={null}
                prev2Label={null}
                showNeighboringMonth={false}
                formatDay={(locale, date) => moment(date).format('D')}
            />
            <div className="sel-show">
                <p>{moment(value).format("MM.DD")}</p>
                <p>{moment(value).format("ddd")}</p>
            </div>
        </div>
    );
};

export default Diary_calendar;