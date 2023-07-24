import React from 'react';
import CyworldJoin from '../components/cyworld/CyworldHome/CyworldJoin';
import { CyworldJoinContainer } from '../components/styled/cyworldStyle';

const Join = () => {

    return (
        <CyworldJoinContainer>
            <div className='join'>
                <div className="logo">
                    <img src="./images/logo.png" alt="cyworld" />
                    <h2>회원가입</h2>
                </div>
                <p>싸이월드의 일촌이 되어 주세요!</p>
                <CyworldJoin />
            </div>
        </CyworldJoinContainer>
    );
};

export default Join;