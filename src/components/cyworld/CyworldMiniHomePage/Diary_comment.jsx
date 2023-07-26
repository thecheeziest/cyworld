
import Diary_comItem from './Diary_comItem';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addComData } from '../../../store/modules/diarySlice';

const Diary_comment = ({id ,comment}) => {
    const dispatch = useDispatch()

    const [addText, setAddText] = useState({comText:'', comDate:''})
    const {comText, comDate} = addText

    // 날짜 및 시간
    const cur = new Date() 
    const week = ['일','월','화','수','목','금','토']
    const curYear = cur.getFullYear()
    const curMonth = String(cur.getMonth()+1).padStart(2,'0')
    const curDate = String(cur.getDate()).padStart(2,'0')
    const curHour = String(cur.getHours()).padStart(2,'0')
    const curMinute = String(cur.getMinutes()).padStart(2,'0')    

    const changeInput = e => {
        const {value} = e.target
        setAddText({...addText, comText: value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(!comText) return alert('댓글을 입력하세요.') 
        addText.comDate = `${curYear}.${curMonth}.${curDate} ${curHour}:${curMinute}` 
        dispatch(addComData({id, addText})) //action.payload 값이 2개일 때는 객체형태로
        setAddText({comText:'', comDate:''})
    }

    return (
        <>
            <div className='diary-comment'>
                <ul className="com-list">                    
                    {
                        comment.map(comItem => <Diary_comItem key={comItem.id} comItem={comItem}/>)
                    }
                </ul>
                <form className="com-input" onSubmit={onSubmit}>
                    <p>댓글</p>
                    {/* 댓글 인풋 */}
                    <input type="text" value={comText} onChange={changeInput}/>
                    <button>확인</button>
                </form>
            </div>            
        </>
    );
};

export default Diary_comment;