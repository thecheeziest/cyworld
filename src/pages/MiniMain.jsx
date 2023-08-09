import React from 'react';
import { CyworldHPContainer } from '../components/styled/cyworldStyle';
import CyworldToday from '../components/cyworld/CyworldMiniHome/CyworldToday';
import CyworldTitle from '../components/cyworld/CyworldMiniHome/CyworldTitle';
import CyworldInfo from '../components/cyworld/CyworldMiniHome/CyworldInfo';
import { useSelector } from 'react-redux';
import Home_news from '../components/cyworld/CyworldMiniHomePage/Home_news';
import Home_comment from '../components/cyworld/CyworldMiniHomePage/Home_comment';
import { useParams } from 'react-router-dom';

const MiniMain = () => {
    const { userData, isOpen } = useSelector(state => state.user);
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력

    
    return (
        <CyworldHPContainer>
            <div className="profile">
                <CyworldToday />
                <CyworldInfo />
            </div>
            <div className="main">
                <CyworldTitle />
                <div className="main-inner">
                    <div className="main-content">
                        <Home_news />
                        <div className="mini-room">
                            <strong className='mini-title'>Mini Room</strong>
                            <div className="room-img" style={{ backgroundImage: nowUser.nowMiniroom ? `url(${nowUser.nowMiniroom})` : 'url(./images/miniroom/miniroom1.gif)' }}></div>
                        </div>
                        <Home_comment />
                    </div>
                </div>
            </div>
        </CyworldHPContainer>
    );
};

export default MiniMain;