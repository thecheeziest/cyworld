import React, { useEffect } from 'react';
import { CyworldHomeContainer } from '../components/styled/cyworldStyle';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/modules/userSlice';

const Home = () => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
        // user 데이터가 변경될 때마다 로컬 스토리지에 저장
    }, [user]);

    const onLogout = () => {
        dispatch(logout());
        navigate('/login');
    }

    return (
        <CyworldHomeContainer>
            <div className='home'>
                <div className="user-main">
                    <div className="login">
                        <div className="logo">
                            <img src="./images/logo_icon.png" alt="cyworld" />
                        </div>
                        <h3>{user ? `${user.name} 님,` : '안녕하세요.'}<br />싸이월드에 오신 것을<br />환영합니다!</h3>
                    </div>
                    {
                        user && Object.keys(user).length ?
                        <div className="btn">
                            <Link to={user.emailID}><button className='go-hp'>미니홈피 입장</button></Link>
                            <button className='logout' onClick={onLogout}>로그아웃</button>
                        </div>
                        :
                        <div className="btn">
                            <Link to="/login"><button className='login'>로그인</button></Link>
                            <Link to="/join"><button className='join'>회원가입</button></Link>
                        </div>
                    }
                </div>
            </div>
        </CyworldHomeContainer>
    );
};

export default Home;