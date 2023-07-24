import React from 'react';
import { CyworldHPContainer } from '../components/styled/cyworldStyle';
import CyworldToday from '../components/cyworld/CyworldMiniHome/CyworldToday';
import CyworldTitle from '../components/cyworld/CyworldMiniHome/CyworldTitle';
import Guest_Text from '../components/cyworld/CyworldMiniHomePage/Guest_Text';
// import Guest_Writ from '../components/cyworld/CyworldMiniHomePage/Guest_Writ';

const GuestBook = () => {
    return (
        <CyworldHPContainer>
            <div className="profile">
                <CyworldToday />
                <div className="pro-inner">
                    <ul className="board-menu">

                        <li>방명록</li>
                        <li>『 소중한 친구들 ★ 』</li>
                        {/* 메뉴 명 + 게시판 제목 들어가는 영역 */}

                    </ul>
                </div>
            </div>
            <div className="main">
                <CyworldTitle />
                <div className="main-inner">
                    <div className="content">
                        <div className="title">

                            {/* <Icon icon="clarity:cd-dvd-solid" /> */}
                            <h3> 방명록..♡</h3>
                            {/* 본문의 아이콘 & 제목 들어가는 영역 */}

                        </div>

                        {/* 여기부터 본문 내용 들어가면 됨 (컴포넌트 연결하거나 그냥 작성하거나) */}
                      
                        <Guest_Text/>
                        {/* <Guest_Writ/> */}

                    </div>
                </div>
            </div>
        </CyworldHPContainer>
    );
};

export default GuestBook;