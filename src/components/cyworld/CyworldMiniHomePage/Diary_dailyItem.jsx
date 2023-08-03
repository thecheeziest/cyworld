import Diary_comment from './Diary_comment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { delData, setEditData } from '../../../store/modules/diarySlice';
import { delDiary } from '../../../store/modules/userSlice';

const Diary_dailyItem = ({item}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user, userData } = useSelector(state => state.user); //user=현재 로그인한 사람의 데이터
    const { userID } = useParams(); 
    const nowUser = userData.find(item => item.emailID === userID); //미니홈피 주인의 데이터

    const {id, date, substance, isPublic, comment, updTime, style} = item
    const onGo = () => {
        navigate(`/${user.emailID}/diary/edit`)
        dispatch(setEditData(item)) //item은 그날의 데이터들
    }
    
    return (
        <>  
            <div className="daily-item">
                <p className="date">{date}</p>
                {
                    updTime !== null ? <p className="updTime">마지막 수정 시간 {updTime}</p> : null
                }
                <p className="substance" style={ style.align && {textAlign: style.align} } >{substance}</p>
                <p className='isPublic'>공개설정 : {isPublic ? "전체공개" : "일촌공개"}</p>
                <div className="btn-line">
                    {
                        // 삭제,수정버튼 주인장에게만 보이기
                        userID === user.emailID 
                        &&
                        <p className='upload-wrap'>
                            <button onClick={onGo}>수정</button>
                            {/* <button onClick={()=>dispatch(delData(id))}>삭제</button>  //diarySlice */}
                            <button onClick={()=>dispatch(delDiary(id))}>삭제</button>
                        </p>
                    } 
                </div>
                <Diary_comment id={id} comment={comment}/>
            </div>    
        </>
    );
};

export default Diary_dailyItem;