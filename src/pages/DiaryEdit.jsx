import React from 'react';
import { CyworldDiaryPg, CyworldHPContainer } from '../components/styled/cyworldStyle';
import CyworldToday from '../components/cyworld/CyworldMiniHome/CyworldToday';
import CyworldTitle from '../components/cyworld/CyworldMiniHome/CyworldTitle';
import Diary_dailyEdit from '../components/cyworld/CyworldMiniHomePage/Diary_dailyEdit';

const DiaryEdit = () => {
    return (
        <CyworldHPContainer>
            <div className="profile">
                <CyworldToday />
                <div className="pro-inner">
                    <ul className="board-menu">
                        <li>다이어리</li>
                        <li>『 BGM ★ List。。』</li>
                    </ul>
                </div>
            </div>

            <div className="main">
                <CyworldTitle />
                <div className="main-inner">
                    <div className="content" style={{border:'none'}}>                                              
                        {/* 다이어리 시작 */}
                        <CyworldDiaryPg>
                            <Diary_dailyEdit />
                        </CyworldDiaryPg>
                    </div>
                </div>
            </div>

            
        </CyworldHPContainer>
    );
};

export default DiaryEdit;