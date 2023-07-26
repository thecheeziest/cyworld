import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, changeInput, emailMsg } from '../../../store/modules/joinSlice';
import sAlert from '../../../assets/sweetalert/sweetalert';


const CyworldJoin = () => {
    const dispatch = useDispatch();
    const { data, emailChk, pwText, pwOn } = useSelector(state => state.join);
    const navigate = useNavigate();

    const onSubmit = e => {
        e.preventDefault();

        if (!emailChk.trim()) { // 이메일 중복 체크 안 했을 때
            sAlert('error', '이메일 중복 체크를 해 주세요.');
        }

        if ( (!data.emailDomain.includes('.com') && !data.emailDomain.includes('.kr')) // 이메일 .com .kr 아닐 때
        || (!emailChk.trim()) // 이메일 중복 체크 안 했을 때
        || (emailChk === '중복') // 중복일 때 
        || (!data.name.trim()) // 이름 공백일 때
        || (!data.pw.trim()) // 비번 공백일 때
        || (data.pw !== data.pwChk) // 비번 일치하지 않을 때
        ) return sAlert('error', '회원 정보를 제대로 입력해 주세요.'); // 가입 못 함

        sAlert('success', '싸이월드의 가족이 되신 걸 환영합니다!');
        navigate('/'); // 가입 완료 시 로그인 창으로 (홈)
        dispatch(addUser(data)); // userData에 추가
    }

    const userInput = e => {
        const { name, value } = e.target;
        dispatch(changeInput({ name, value }));
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='이름 (한글)' onChange={userInput}  
            name="name" />
            <p>
                <input type="text" id="email_id" placeholder="아이디 (이메일)" name="emailID" onChange={userInput} />
                <b>@</b>
                <input type="text" id="email_domain" placeholder="이메일 도메인"name="emailDomain" onChange={userInput} /> 
                <button onClick={e => { e.preventDefault(); dispatch(emailMsg(data.emailID + '@' + data.emailDomain)) } }>중복 확인</button>
                {/* e.preventDefault 안 하면 중복 확인 누르자마자 가입(addUser)으로 넘어감 */}
            </p>
            <p>
                <input type="password" placeholder='비밀번호' name="pw" onChange={userInput} />
                <input type="password" placeholder='비밀번호 확인' name="pwChk" onChange={userInput} />
                <strong className={`${pwOn ? 'on' : ''}`}>{pwText}</strong>
            </p>
            <p>
                <label htmlFor="birth">생년월일</label>
                <input type="date" id="birth" name="birth" onChange={userInput} />
            </p>
            <p className='gender'>
                <label htmlFor="male">남성</label>
                <input type="radio" id="male" value="male" name="gender" onChange={userInput} />
                <label htmlFor="female">여성</label>
                <input type="radio" id="female" value="female" name="gender" onChange={userInput} />
            </p>
            <div className='btn'>
                <Link to="/"><button>처음으로</button></Link>
                <button onSubmit={onSubmit}>가입하기</button>
            </div>
        </form>
    );
};

export default CyworldJoin;
