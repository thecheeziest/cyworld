import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showDailyData, sortData } from '../../../store/modules/diarySlice';

const Diary_calendar = () => {
    const dispatch = useDispatch()
    const {data} = useSelector(state => state.diary)    
    const [value, onChange] = useState(new Date()) //클릭한 날짜
    const activeDate = moment(value).format('YYYY.MM.DD'); // 클릭한 날짜 //2023.07.19, string
    
    useEffect(()=>{
        const filteredData = data.filter(item => item.date.slice(0,10) === activeDate)
        dispatch(showDailyData(filteredData))
        dispatch(sortData())
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
                // onActiveStartDateChange={({ activeStartDate }) => getActiveMonth(activeStartDate)}  // 받아온 인자(activeStartDate)에 따라 현재 보여지는 달(activeMonth)의 State를 변경하는 함수
            />
            <div className="sel-show">
                <p>{moment(value).format("MM.DD")}</p>
                <p>{moment(value).format("ddd")}</p>
            </div>
        </div>
    );
};

export default Diary_calendar;