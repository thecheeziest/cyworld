import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { CyworldInfoContainer } from '../../styled/cyworldStyle';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, onInfo } from '../../../store/modules/cyworldSlice';
import { addRelationShip, setInfo } from '../../../store/modules/userSlice';
import { useNavigate, useParams } from 'react-router-dom';

const CyworldInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { text, isInfo } = useSelector(state => state.cyworld);
    const { user, userData c} = useSelector(state => state.user);

    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력
    const { name, email } = nowUser;
    const relData = { send : '', arrive : '' }

    const editInfo = () => {
        dispatch(onInfo());
        dispatch(setInfo(text));
    }

    const goHP = e => {
        navigate(`/${e.target.value}`);
    }
    const relationship = () => { // 일촌 배열에 송신자 수신자 상태 정보입력 (오류해결)
        relData.send = user.name
        relData.arrive = nowUser.name
        dispatch(addRelationShip(relData))
    }

    return (
        <CyworldInfoContainer className='pro-inner'>
            <div className="today-is">
                <strong>TODAY IS .. </strong>
                <Icon icon="entypo:flower" />
                <p>행복</p>
            </div>
            {
                <div className={`profile-img ${isInfo ? 'on' : ''}`} style={nowUser.info
                    ? {backgroundImage: nowUser.info.img}
                    : {backgroundImage: 'url(../images/info.jpg)'}
                    }></div>
            }
            {
                isInfo ?
                <>
                <div className="upload">
                    <button>사진 업로드</button>
                </div>
                <div className="comment">
                    <textarea autoFocus placeholder='자기소개를 입력해 주세요.' onChange={e => dispatch(changeInput(e.target.value))} ></textarea>
                </div>
                <div className="edit">
                    <p onClick={editInfo}><span>▶</span>SAVE</p>
                </div>
                </>
                :
                <>
                <div className="comment">
                    {
                        nowUser.info ? nowUser.info.txt : '자기소개를 입력해 주세요.'
                    }
                </div>
                {
                    user.emailID === userID && // 미니홈피 주인일 때만 노출
                    <div className="edit">
                        <p onClick={editInfo}><span>▶</span>EDIT</p>
                    </div>
                }
                </>
            }
            <div className="name">
                <p>{name}</p>
                <Icon icon="ant-design:woman-outlined" />
                {user.emailID !== userID && <button onClick={relationship}>일촌신청</button>}
            </div>
            <em className='mail'>{email}</em>
            <div className="surfing">
                <select onChange={goHP}>
                    <option>★ ጾጽ 일촌 파도타기 ⁀➷♥</option>
                    <option disabled>-----------------------------</option>
                    {
                        userData ?
                        userData.map(item => <option key={item.id} value={item.emailID}>{item.name} (일촌명)</option>)
                        : <option className='none'>일촌이 없어요! 랜덤 파도타기</option>
                    }
                </select>
            </div>
        </CyworldInfoContainer>
    );
};

export default CyworldInfo;