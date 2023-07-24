import React from 'react';
import { CyworldHPContainer } from '../components/styled/cyworldStyle';
import CyworldToday from '../components/cyworld/CyworldMiniHome/CyworldToday';
import CyworldTitle from '../components/cyworld/CyworldMiniHome/CyworldTitle';
import Manager_miniroom from '../components/cyworld/CyworldMiniHomePage/Manager_miniroom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onSetMenu } from '../store/modules/cyworldSlice';
import Manager_skin from '../components/cyworld/CyworldMiniHomePage/Manager_skin';
import Manager_bgm from '../components/cyworld/CyworldMiniHomePage/Manager_bgm';

const Manager = () => {
    const { setData, setView } = useSelector(state => state.cyworld);
    const dispatch = useDispatch();

    return (
        <CyworldHPContainer>
            <div className="profile">
                <CyworldToday />
                <div className="pro-inner">
                    <ul className="board-menu">
                        <li>미니홈피 관리</li>
                        {
                            setData.map(item => <li key={item.id}>
                                <span className={item.on ? "on" : ""} onClick={() => dispatch(onSetMenu(item.id))}>{item.menu}</span></li>)
                        }
                        {/* 메뉴 명 + 게시판 제목 들어가는 영역 */}
                    </ul>
                </div>
            </div>
            <div className="main">
                <CyworldTitle />
                <div className="main-inner">
                    <div className="content">
                        {
                            
                            setView === 1 && <>
                            <div className="title"> <h3>미니룸 설정</h3> </div>
                            <Manager_miniroom /> </>
                        }
                        {
                            
                            setView === 2 && <>
                            <div className="title"> <h3>스킨 설정</h3> </div>
                            <Manager_skin /> </>
                        }
                        {
                            
                            setView === 3 && <>
                            <div className="title"> <h3>배경음악 설정</h3> </div>
                            <Manager_bgm /> </>
                        }
                        <div className="go-store">
                            <Link to="/dotori_store"><button>도토리 상점 바로가기</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </CyworldHPContainer>
    );
};

export default Manager;