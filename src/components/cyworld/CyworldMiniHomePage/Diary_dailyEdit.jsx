import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateData } from '../../../store/modules/diarySlice';

const Diary_dailyEdit = () => {
    const dispatch = useDispatch()   
    const navigate = useNavigate()

    const {editData} = useSelector(state => state.diary)
    const [editText, setEditText] = useState(editData)
    const {id, date, substance, updTime } = editText

    const cur = new Date() 
    const week = ['일','월','화','수','목','금','토']
    const curYear = cur.getFullYear()
    const curMonth = String(cur.getMonth()+1).padStart(2,'0')
    const curDate = String(cur.getDate()).padStart(2,'0')
    const curDay = week[cur.getDay()]
    const curHour = String(cur.getHours()).padStart(2,'0')    
    const curMinute = String(cur.getMinutes()).padStart(2,'0')   

    const changInput = (e) => {
        const {value} = e.target
        setEditText({...editText, substance:value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        editText.updTime = `${curYear}.${curMonth}.${curDate} ${curDay} ${curHour}:${curMinute}` //2023.07.20 목 12:23
        if(!substance) {return alert('입력된 내용이 없습니다! 확인해주세요.')}
        dispatch(updateData(editText))
        setEditText({substance:'', updTime:''})
        navigate(`/${user.emailID}/diary`)
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