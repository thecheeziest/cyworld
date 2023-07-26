import React from 'react';
import { CyworldSetting } from '../../styled/cyworldStyle';
import { useDispatch, useSelector } from 'react-redux';
import { onMinimi } from '../../../store/modules/userSlice';
import { useParams } from 'react-router-dom';

const Manager_minimi = () => {
    const { userData } = useSelector(state => state.user);
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력

    const dispatch = useDispatch();
    let chkRoom = 0;

    return (
        <CyworldSetting>
            {
                nowUser && nowUser.userMinimi ?
                <>
                <p className='set'>
                <strong>보유 중인 미니미</strong>
                <button onClick={() => dispatch(onMinimi(chkRoom))}>설정</button>
                </p>
                <div className="set-home">
                    {
                        nowUser.userMinimi.map(item => <p key={item.id}>
                            <label htmlFor={item.id} style={{
                                backgroundImage: item.roomImg
                            }}></label>
                            <input type="radio" id={item.id} name="miniroom" onChange={e => chkRoom = e.target.id} />
                        </p>)
                    }
                </div>
                </>
                :
                <p className='none'>보유 중인 미니미가 없습니다.</p>
            }
        </CyworldSetting>
    );
};

export default Manager_minimi;