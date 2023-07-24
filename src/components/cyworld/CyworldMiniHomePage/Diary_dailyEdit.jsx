import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateData } from '../../../store/modules/diarySlice';
import moment from 'moment';


const Diary_dailyEdit = () => {
    const dispatch = useDispatch()   
    const navigate = useNavigate()

    const {editData} = useSelector(state => state.diary)
    const [editText, setEditText] = useState(editData)
    const {id, date, substance} = editText

    
    
    
    



    const changInput = (e) => {
        const {value} = e.target
        // substance 값을 변경해야함
        setEditText({...editText, substance:value})

    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(updateData(editText))
        navigate('/zoa/diary')
        

    }



    return (
        <div className='daily-add'>
            <form onSubmit={onSubmit}>
                <div className="top-box">
                    <p className="attach-line">
                        <button><Icon icon="flat-color-icons:picture" className='icon'/>이미지</button>
                        <button><Icon icon="vscode-icons:file-type-video" className='icon'/>동영상</button>
                        <button><Icon icon="ic:twotone-rate-review" color="#3d6de3" className='icon'/>리뷰</button>
                        <button><Icon icon="emojione-v1:music-ascend" height="13px" className='icon'/>음악링크</button>
                    </p>
                    <p className='style-line'>
                        <span>
                            <select><option>글꼴효과</option></select>
                            <select><option>글꼴</option></select>
                            <select><option>크기</option></select>
                        </span>
                        <span>
                            <button style={{fontWeight:900, fontSize:17}}>가</button>
                            <button style={{fontStyle:'italic', fontWeight:100}}>가</button>
                            <button style={{textDecoration:'underline'}}>가</button>
                            <button style={{textDecoration:'line-through'}}>가</button>
                        </span>
                        <span>                
                            <button style={{color:'#c2283a'}}>가</button>
                            <button style={{color:'#fff', background:'#c2283a'}}>가</button>
                        </span>
                        <span>
                            <button><i className='xi-align-left'></i></button>
                            <button><i className='xi-align-center'></i></button>
                            <button><i className='xi-align-right'></i></button>
                            <button><i className='xi-align-justify'></i></button>
                        </span>
                    </p>
                </div>
                <div className="bottom-box">
                    <textarea name="" id="" cols="30" rows="10" placeholder='너만의 기록을 남겨봐 ─☆＊' value={substance} onChange={changInput}></textarea>
                </div>
                <p className='btn-wrap'>
                    <Link to="/zoa/diary"><button><Icon icon="pepicons-print:circle-filled" color="#ff9200" width="20px" />취소</button></Link>
                    <button><Icon icon="pepicons-print:circle-filled" color="#ff9200" width="20px" type='submit' />확인</button>
                </p>
            </form>
        </div>
    );
};

export default Diary_dailyEdit;