import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { changeInput, onTitle } from '../../../store/modules/cyworldSlice';
import { falseOpen, setTitle, trueOpen } from '../../../store/modules/userSlice';
import { AiOutlineMail } from 'react-icons/ai'
import CyworldModal from './CyworldModal';

const CyworldTitle = () => {
    const { user, userData, isOpen, relationData } = useSelector(state => state.user);
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력
    
    const { isTitle, text } = useSelector(state => state.cyworld);
    const dispatch = useDispatch();

    const editTitle = () => {
        dispatch(onTitle());
        dispatch(setTitle(text));
    }
    const relationList = () => {
        dispatch(dispatch(trueOpen()))
    }

    return (
        <div className='home-title'>
            {
                isTitle ?
                <h2><input type="text" placeholder='미니홈피 제목을 입력해 주세요.' autoFocus value={text} onChange={e => dispatch(changeInput(e.target.value))} /></h2>
                :
                <Link to={`/${nowUser.emailID}`}><h2>
                    {
                        nowUser && nowUser.title ? nowUser.title
                        : `${nowUser.name} 님의 미니홈피`
                    }
                    </h2></Link>
            }
            {
                user.emailID === userID && // 미니홈피 주인일 때만 노출
                <button className='edit' onClick={editTitle}>{isTitle ? 'SAVE' : 'EDIT'}</button>
            }
            {
                user.emailID === userID && <button onClick={relationList}><AiOutlineMail /></button>
            }
        </div>
    );
};

export default CyworldTitle;