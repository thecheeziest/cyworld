import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { CyworldMiniHP } from '../components/styled/cyworldStyle';
import CyworldMenu from '../components/cyworld/CyworldMiniHome/CyworldMenu';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/modules/userSlice';

const MiniHome = () => {
    const { user, userData } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력
    
    useEffect(() => {
        // navigate(`/${userID}`); // 새로고침 될 때마다 미니홈피 홈 화면으로
        localStorage.setItem('user', JSON.stringify(user));
        // user 데이터가 변경될 때마다 로컬 스토리지에 저장
        
    }, [user]);

    const onLogout = () => {
        dispatch(logout());
        navigate('/login');
    }

    const selectedMusic = useSelector(state => state.music.selectedMusic);

    return (
        <CyworldMiniHP style={{ backgroundImage: nowUser.nowSkin ? nowUser.nowSkin : 'url(../images/skin/skin1.jpg)' }}>
                <div className="hp-con">
                    <div className="hp-sec1">
                        <Outlet />
                        <CyworldMenu />
                    </div>
                    <div className="hp-sec2">
                        <Link to="/">
                            <img src="./images/logo.png" alt="" />
                        </Link>
                        <div className="follow">
                            {nowUser.name} 님과 나는 <span>일촌</span>
                        </div>
                        <div className="now-music">
                        {userID === user.emailID ? (
                            selectedMusic ? (
                                <p>
                                    {selectedMusic.title}, {selectedMusic.singer}
                                </p>
                            ) : (
                                <p>음악을 설정해주세요</p>
                            )
                        ) : (
                            <p>음악을 설정해주세요</p>
                        )}
                        </div>
                        <div className="logout">
                            <button onClick={onLogout}>로그아웃</button>
                        </div>
                    </div>
                </div>
        </CyworldMiniHP>
    );
};

export default MiniHome;