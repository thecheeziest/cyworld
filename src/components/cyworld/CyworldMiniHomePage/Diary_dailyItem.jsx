import Diary_comment from './Diary_comment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delData, setEditData } from '../../../store/modules/diarySlice';

const Diary_dailyItem = ({item}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id, date, substance, isPublic, comment, updTime} = item
    const onGo = () => {
        navigate('/zoa/diary/edit')
        dispatch(setEditData(item))
    }
    
    return (
        <>
            <div className="daily-item">
                <p className="date">{date}</p>
                {
                    updTime !== null ? <p className="updTime">마지막 수정 시간 {updTime}</p> : null
                }
                <p className="substance">{substance}</p>
                <p className='isPublic'>공개설정 : {isPublic ? "전체공개" : "일촌공개"}</p>
                <div className="btn-line"> 
                    <p className='upload-wrap'>
                        <button onClick={onGo}>수정</button>
                        <button onClick={()=>dispatch(delData(id))}>삭제</button>
                    </p>
                </div>
                {/* //////// 댓글창 //////// */}
                <Diary_comment id={id} comment={comment}/>
            </div>    
        </>
    );
};

export default Diary_dailyItem;

// import { PiHeartStraightDuotone } from 'react-icons/Pi';
// import { Icon } from '@iconify/react';
                    // <p className='like-wrap'>
                    //     {/* <button><PiHeartStraightDuotone/></button>                     */}
                    //     <button><Icon icon="noto:pink-heart" /></button>
                    //     {/* <span>공감</span> */}
                    //     <em className='isLike'>100</em>
                    // </p>