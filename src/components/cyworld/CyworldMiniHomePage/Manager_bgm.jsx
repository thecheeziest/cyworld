import React from 'react';
import { CyworldSetting } from '../../styled/cyworldStyle';

const Manager_bgm = () => {
    return (
            <CyworldSetting>
                <p className='bgm'>도토리 상점에서 배경음악을 설정할 수 있어요!</p>
                {/* <p className='none'>보유 중인 배경음악이 없습니다.</p> */}
            </CyworldSetting>
    );
};

export default Manager_bgm;