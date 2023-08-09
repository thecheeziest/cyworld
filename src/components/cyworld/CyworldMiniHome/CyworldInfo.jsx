import React, { useEffect, useState } from 'react';
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
    const { user, userData, relationData } = useSelector(state => state.user);
    const [data, setData] = useState(relationData)
    const [isShow , setIsShow] = useState(true)
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력
    const { name, email } = nowUser;
    const relData = { send : '', arrive : '' }
    const [friend , setFriend] = useState(relationData.filter(item => item.status == '일촌'))
    let sendUser = friend.find(item => item.send == user.name && item.arrive == nowUser.name)
    let arriveUser = friend.find(item => item.arrive == user.name && item.send == nowUser.name)

    const editInfo = () => {
        dispatch(onInfo());
        dispatch(setInfo(text));
    }
    // localStorage.clear()
    const goHP = e => {
        navigate(`/${e.target.value}`);
    }
    const relationship = () => { // 일촌 배열에 송신자 수신자 상태 정보입력 (오류해결)
        relData.send = user.name
        relData.arrive = nowUser.name
        setIsShow(false)
        alert(`${nowUser.name}님에게 일촌신청을 보냈습니다!`)
        dispatch(addRelationShip(relData))
    }

    useEffect( () => {
        setIsShow(true)
        setData(relationData.filter(item => item.status == '대기중'))
        setFriend(relationData.filter(item => item.status == '일촌'))
        sendUser = friend.find(item => item.send == user.name && item.arrive == nowUser.name)
        arriveUser = friend.find(item => item.arrive == user.name && item.send == nowUser.name)
        data.forEach(item => {
            if(item.send == user.name) {
                if(item.arrive == nowUser.name) {
                    setIsShow(false)
                } else {
                    setIsShow(true)
                }
            }
        })
        if(sendUser) {
            if(sendUser.send == user.name && sendUser.arrive == nowUser.name) {
                setIsShow(false)
                console.log(isShow)
            } else {
                setIsShow(true)
            }
        } else if(arriveUser) {
            if (arriveUser.arrive == user.name  && arriveUser.send == nowUser.name) {
                setIsShow(false)
                console.log(isShow)
            }else {
                setIsShow(true)
            }
        }
    },[userID])

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
                {user.emailID !== userID && isShow && <button onClick={relationship}>일촌신청</button>}
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