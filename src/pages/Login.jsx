import React from 'react';
import CyworldLogin from '../components/cyworld/CyworldHome/CyworldLogin';
import { CyworldLoginContainer } from '../components/styled/cyworldStyle';

const Login = () => {
    return (
        <CyworldLoginContainer>
        <div className="login">
            <div className="log-title">
                <div className="logo">
                    <img src="./images/logo_icon.png" alt="cyworld" />
                </div>
                <div className="title">
                    <h3>안녕하세요.<br />싸이월드입니다.</h3>
                    <p>회원 서비스 이용을 위해 로그인해 주세요.</p>
                </div>
            </div>
            <CyworldLogin />
        </div>
        </CyworldLoginContainer>
    );
};

export default Login;