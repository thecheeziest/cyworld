import React from 'react';
import { CyworldSetting } from '../../styled/cyworldStyle';
import { useDispatch, useSelector } from 'react-redux';
import { onMiniroom } from '../../../store/modules/userSlice';
import { useParams } from 'react-router-dom';

const Manager_miniroom = () => {
    const { userData } = useSelector(state => state.user);
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력

    const dispatch = useDispatch();
    let chkRoom = 0;

    return (
        <CyworldSetting>
            {
                nowUser && nowUser.userMiniroom ?
                <>
                <p className='set'>
                <strong>보유 중인 미니룸</strong>
                <button onClick={() => dispatch(onMiniroom(chkRoom))}>설정</button>
                </p>
                <div className="set-home">
                    {
                        nowUser.userMiniroom.map(item => <p key={item.id}>
                            <label htmlFor={item.id} style={{
                                backgroundImage: item.roomImg
                            }}></label>
                            <input type="radio" id={item.id} name="miniroom" onChange={e => chkRoom = e.target.id} />
                        </p>)
                    }
                </div>
                <p className='set del'>
                    <button>선택 삭제</button>
                    <button>전체 삭제</button>
                </p>
                </>
                :
                <p className='none'>보유 중인 미니룸이 없습니다.</p>
            }
        </CyworldSetting>
    );
};

export default Manager_miniroom;