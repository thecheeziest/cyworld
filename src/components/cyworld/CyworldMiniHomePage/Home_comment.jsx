import React from 'react';
import { CyworldHomeComment } from '../../styled/cyworldStyle';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput } from '../../../store/modules/cyworldSlice';
import { useParams } from 'react-router-dom';

const Home_comment = () => {
    const { user, userData } = useSelector(state => state.user);
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력

    const dispatch = useDispatch();
    const { text } = useSelector(state => state.cyworld);

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <CyworldHomeComment>
            <form className="comment-box">
                <strong>일촌평</strong>
                <input type="text" value={text} onChange={e => dispatch(changeInput(e.target.value))} />
                <button type="onSubmit" onClick={onSubmit}>등록</button>
            </form>
            {
                nowUser.friends ?
                nowUser.friends.map(item => <div className="ment" key={item.id}>
                    <p>{item.comment}
                        ({item.nickname} <span>{item.name}</span>)</p>
                    <p className='btn'>
                        {
                            item.emailID === user.emailID && // 작성자일 때 노출
                            <>
                            <Icon icon="mdi:eraser" color="#A9A9A9" /> 수정
                            </>
                        }
                        {
                            user.emailID === userID || user.emailID && // 미니홈피 주인일 때 or 작성자일 때 노출
                            <>
                            <Icon icon="mdi:close-box-outline" color="#A9A9A9" /> 삭제
                            </>
                        }
                    </p>
                </div>)
                :
                <div className="ment">
                    <b className="none">등록된 일촌평이 없습니다.</b>
                </div>
            }
        </CyworldHomeComment>
    );
};

export default Home_comment;