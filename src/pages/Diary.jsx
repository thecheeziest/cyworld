import React, { useState } from 'react';
import { CyworldDiaryPg, CyworldHPContainer } from '../components/styled/cyworldStyle';
import CyworldToday from '../components/cyworld/CyworldMiniHome/CyworldToday';
import CyworldTitle from '../components/cyworld/CyworldMiniHome/CyworldTitle';
import Diary_calendar from '../components/cyworld/CyworldMiniHomePage/Diary_calendar';
import Diary_dailyList from '../components/cyworld/CyworldMiniHomePage/Diary_dailyList';

/* 
yarn add moment
yarn add react-calendar
*/


const Diary = () => {    
    
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
                        <CyworldDiaryPg>
                            <Diary_calendar /> 
                            <Diary_dailyList />
                        </CyworldDiaryPg>
                    </div>
                </div>
            </div>
        </CyworldHPContainer>
    );
};

export default Diary;



