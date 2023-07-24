import React from 'react';
import { CyworldSetting } from '../../styled/cyworldStyle';
import { useDispatch, useSelector } from 'react-redux';
import { onSkin } from '../../../store/modules/userSlice';
import { useParams } from 'react-router-dom';

const Manager_skin = () => {
    const { userData } = useSelector(state => state.user);
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력

    const dispatch = useDispatch();
    let skinId = 0;

    return (
        <CyworldSetting>
            {
                nowUser && nowUser.userSkin ?
                <>
                <p className='set'>
                <strong>보유 중인 스킨</strong>
                <button onClick={() => dispatch(onSkin(skinId))}>설정</button>
                </p>
                <div className="set-home">
                    {
                        nowUser.userSkin.map(item => <p key={item.id}>
                            <label htmlFor={item.id} style={{
                                backgroundImage: item.skinImg
                            }} className='skin'></label>
                            <input type="radio" id={item.id} name="skin" onChange={e => skinId = e.target.id} />
                        </p>)
                    }
                </div>
                </>
                :
                <p className='none'>보유 중인 스킨이 없습니다.</p>
            }
        </CyworldSetting>
    );
};

export default Manager_skin;