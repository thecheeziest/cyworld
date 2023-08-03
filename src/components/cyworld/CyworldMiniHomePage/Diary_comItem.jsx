import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { delComData } from '../../../store/modules/diarySlice';
import { Link, useParams } from 'react-router-dom';

const Diary_comItem = ({comItem}) => { // 댓글 한 개
    const {id, comId, comName, comText, comDate} = comItem
    const dispatch = useDispatch()

    const { user, userData } = useSelector(state => state.user); 
    const { userID } = useParams(); 
    const nowUser = userData.find(item => item.emailID === userID); 

    return (
        <li>
            <p className='com-user'><Link to={`/${comId}/`}>{comName}</Link></p><b> : </b>
            <p>{comText}</p>
            <p className='com-date'>{comDate}</p>            
            {
                // 주인장이거나 댓글쓴이면 편집,삭제 버튼이 보인다
                (userID === user.emailID || comId === user.emailID)
                &&
                <span>
                    <button><Icon icon="mdi:eraser" color="#a9a9a9" /></button>
                    <button onClick={()=>dispatch(delComData(id))}><Icon icon="mdi:close-box-outline" color="#a9a9a9" /></button>
                </span>
            }
            {/* 
                            1. 나우유저.userDiary의 데이터 중 게시물id가 일치하는 것을 찾아서 filter !== 삭제 
                            2. 유저데이터에도 업데이트 (이 과정을 꼭 거쳐야하나? : 새로 복사한 그릇이라 업데이트 해야될 것 같다)
                            3. userData 로컬스토리지에 업데이트 (user도 해야되나? 저절로 되는 것 같다)


                            

            
            */}
        </li>
    );
};

export default Diary_comItem;