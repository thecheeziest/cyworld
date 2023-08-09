import React from 'react';
import { CyworldSetting } from '../../styled/cyworldStyle';
import { useDispatch, useSelector } from 'react-redux';
import { allDelMinimi, delMinimi, onMinimi } from '../../../store/modules/userSlice';
import { useParams } from 'react-router-dom';

const Manager_minimi = () => {
    const { userData } = useSelector(state => state.user);
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력

    const dispatch = useDispatch();
    let chkMinimi = 0;

    return (
        <CyworldSetting>
            {
                nowUser && nowUser.userMinimi ?
                <>
                <p className='set'>
                    <strong>보유 중인 미니미</strong>
                    <button onClick={() => dispatch(onMinimi(chkMinimi))}>설정</button>
                </p>
                <div className="set-home minimi">
                    {
                        nowUser.userMinimi.map(item => <p key={item.id}>
                            <label htmlFor={item.id} style={{
                                backgroundImage: `url(${item.minimiURL})`
                            }}></label>
                            <input type="radio" id={item.id} name="minimi" onChange={e => chkMinimi = e.target.id} />
                        </p>)
                    }
                </div>
                <p className='set del'>
                    <button onClick={() => dispatch(delMinimi(chkMinimi))}>선택 삭제</button>
                    <button onClick={() => dispatch(allDelMinimi())}>전체 삭제</button>
                </p>
                </>
                :
                <p className='none'>보유 중인 미니미가 없습니다.</p>
            }
        </CyworldSetting>
    );
};

export default Manager_minimi;