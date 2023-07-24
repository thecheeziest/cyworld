import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, login } from '../../../store/modules/userSlice';

const CyworldLogin = () => {
    const { logUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = e => {
        e.preventDefault();
        if (!logUser.id || !logUser.pw) return

        dispatch(login(logUser));
        navigate('/');
    }

    const loginInput = e => {
        const { name, value } = e.target;
        dispatch(changeInput({ name, value }));
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='아이디 (이메일)' name="id" value={logUser.id} onChange={loginInput}/>
            <input type="password" placeholder='비밀번호' name="pw" value={logUser.pw} onChange={loginInput}/>
            <div className='btn'>
                <button onSubmit={onSubmit}>로그인</button>
                <Link to="/join"><button>회원가입</button></Link>
            </div>
        </form>
    );
};

export default CyworldLogin;