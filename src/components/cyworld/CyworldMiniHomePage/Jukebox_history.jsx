import React from 'react';
import { CyworldJukeboxPg } from '../../styled/cyworldStyle';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Jukebox_history = () => {
    return (
        <CyworldJukeboxPg>
        <div className="history">
            <p className="none">설정된 배경 음악이 없습니다.</p>
            {/* <p className='on'>
                <b>2023.07.13</b>
                <strong>기다리다</strong>
                <em>윤하</em>
            </p>
            <p>
                <b>2023.07.13</b>
                <strong>사랑.. 그게 뭔데</strong>
                <em>지아</em>
            </p>
            <p>
                <b>2023.07.13</b>
                <strong>사랑은 맛있다♡</strong>
                <em>휘성</em>
            </p>
            <p>
                <b>2023.07.13</b>
                <strong>우산 (Feat. 윤하)</strong>
                <em>에픽하이</em>
            </p> */}
        </div>
        <div className="go-store">
            <Link to="/dotori_store"><button>도토리 상점 바로가기</button></Link>
        </div>
        </CyworldJukeboxPg>
    );
};

export default Jukebox_history;