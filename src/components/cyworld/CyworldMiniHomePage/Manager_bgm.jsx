import React from 'react';
import { CyworldSetting } from '../../styled/cyworldStyle';

const Manager_bgm = () => {
    let chkBgm = 0;

    return (
            <CyworldSetting>
                {
                nowUser && nowUser.userBgm ?
                <>
                <p className='set'>
                <strong>보유 중인 배경음악</strong>
                <button>설정</button>
                </p>
                <div className="set-home bgmList">
                    {
                        nowUser.userBgm.map(item => <p key='{item.id}'>
                        <label htmlFor='{item.id}'>휘성 - 사랑은 맛있어</label>
                        <input type="radio" id='{item.id}' name="bgm" onChange={e => chkBgm = e.target.id} />
                    </p>)
                    }
                </div>
                <p className='set del'>
                    <button>선택 삭제</button>
                    <button>전체 삭제</button>
                </p>
                </>
                :
                <p className='none'>보유 중인 배겨음악이 없습니다.</p>
                }
            </CyworldSetting>
    );
};

export default Manager_bgm;