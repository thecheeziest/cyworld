import React, { useEffect } from 'react';
import { CyworldDotoriMain } from '../components/styled/cyworldStyle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DotoriStore = () => {
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
        // user 데이터가 변경될 때마다 로컬 스토리지에 저장
    }, [user]);

    console.log(user)

    return (
        <CyworldDotoriMain>
            <div className="go-bgm">
                <h3>Lr는。。 슬플 ⊂⊂H ㅎi팝을 춰</h3>
                <Link to="bgm"><button>BGM샵 입장</button></Link>
            </div>
            <div className="go-theme">
                <h3>ㄴH 人人┣ⓔ 꾸ㅁi7l</h3>
                <Link to="theme"><button>테마샵 입장</button></Link>
            </div>
            <div className="go-minimi">
                <h3>ㄴH ヲH릭 꾸ㅁi7l</h3>
                <Link to="theme"><button>미니미샵 입장</button></Link>
            </div>
        </CyworldDotoriMain>
    );
};

export default DotoriStore;