import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { changeInput, onTitle } from '../../../store/modules/cyworldSlice';
import { setTitle } from '../../../store/modules/userSlice';

const CyworldTitle = () => {
    const { user, userData } = useSelector(state => state.user);
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력
    
    const { isTitle, text } = useSelector(state => state.cyworld);
    const dispatch = useDispatch();

    const editTitle = () => {
        dispatch(onTitle());
        dispatch(setTitle(text));
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
        </div>
    );
};

export default CyworldTitle;