import React from 'react';
import { CyworldHPContainer } from '../components/styled/cyworldStyle';
import CyworldToday from '../components/cyworld/CyworldMiniHome/CyworldToday';
import { Icon } from '@iconify/react';
import CyworldTitle from '../components/cyworld/CyworldMiniHome/CyworldTitle';
// import Profile_Info from '../components/cyworld/CyworldMiniHomePage/Profile_Info';
import Profile_Edit from '../components/cyworld/CyworldMiniHomePage/Profile_Edit';


const Profile = () => {
    return (
        <CyworldHPContainer>
            <div className="profile">
                <CyworldToday />
                <div className="pro-inner">
                    <ul className="board-menu">

                        <li>Profile</li>
                        <li>내 소개 </li>
                        {/* 메뉴 명 + 게시판 제목 들어가는 영역 */}

                    </ul>
                </div>
            </div>
            <div className="main">
                <CyworldTitle />
                <div className="main-inner">
                    <div className="content">
                        <div className="title">

                            
                            <Icon icon="ri:user-5-fill" />
                            <h3>ㄴr를 소7H합Liㄷr..♡</h3>
                            {/* 본문의 아이콘 & 제목 들어가는 영역 */}

                        </div>

                        {/* 여기부터 본문 내용 들어가면 됨 (컴포넌트 연결하거나 그냥 작성하거나) */}
                            {/* <Profile_Info /> */}
                            <Profile_Edit />
                        

                    </div>
                </div>
            </div>
        </CyworldHPContainer>
    );
};

export default Profile;