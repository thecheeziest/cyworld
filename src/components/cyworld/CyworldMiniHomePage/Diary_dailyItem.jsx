import { delData, setEditData } from '../../../store/modules/diarySlice';
import Diary_comment from './Diary_comment';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


const Diary_dailyItem = ({item}) => {
    const {id, date, substance, isPublic, comment} = item
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onGo = () => {
        navigate('/zoa/diary/edit')
        dispatch(setEditData(item))
    }

    
    
    return (
        <>
            <div className="daily-item">
                <p className="date">{date}</p>
                <p className="substance">{substance}</p>
                <p className='isPublic'>공개설정 : {isPublic ? "전체공개" : "일촌공개"}</p>
                <div className="btn-line"> 
                    <p className='upload-wrap'>
                        <button onClick={onGo}>수정</button>
                        <button onClick={()=>dispatch(delData(id))}>삭제</button>
                    </p>
                </div>
                <Diary_comment comment={comment}/>
                
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