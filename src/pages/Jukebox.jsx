import React from 'react';
import { CyworldHPContainer } from '../components/styled/cyworldStyle';
import CyworldToday from '../components/cyworld/CyworldMiniHome/CyworldToday';
import { Icon } from '@iconify/react';
import Jukebox_history from '../components/cyworld/CyworldMiniHomePage/Jukebox_history';
import CyworldTitle from '../components/cyworld/CyworldMiniHome/CyworldTitle';
import { useEffect } from 'react';


const Jukebox = () => {

    useEffect(()=>{
        var musicList = localStorage.getItem('musicList');
    })
    
    return (
        <CyworldHPContainer>
            <div className="profile">
                <CyworldToday />
                <div className="pro-inner">
                    <ul className="board-menu">

                        <li>쥬크박스</li>
                        <li>『 BGM ★ List。。』</li>
                        {/* 메뉴 명 + 게시판 제목 들어가는 영역 */}

                    </ul>
                </div>
            </div>
            <div className="main">
                <CyworldTitle />
                <div className="main-inner">
                    <div className="content">
                        <div className="title">
                            <Icon icon="clarity:cd-dvd-solid" />
                            <h3> BGM History..</h3>
                            {/* 본문의 아이콘 & 제목 들어가는 영역 */}
                        </div>

                        {/* 여기부터 본문 내용 들어가면 됨 (컴포넌트 연결하거나 그냥 작성하거나) */}
                        <Jukebox_history />

                    </div>
                </div>
            </div>
        </CyworldHPContainer>
    );
};

export default Jukebox;