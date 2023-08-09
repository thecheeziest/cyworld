import React from 'react';
import { CyworldHomeNews } from '../../styled/cyworldStyle';
import { Icon } from '@iconify/react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home_news = () => {
    const { user, userData } = useSelector(state => state.user);
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);

    
    return (
        <CyworldHomeNews>
            <div className="update-news">
                <strong className='mini-title'>Updated news</strong>
                <p><span>가장 최근에 올린</span></p>
                <p><span>게시물 글 제목들이</span></p>
                <p><span>노출되는 영역입니다</span></p>
                <p><span>네 개까지 노출되고 겁나 길면 알아서 잘려야 하고 누르면 바로 이동해야 합니다 가능할까요?</span></p>
            </div>
            <div className="new">
                <strong className='mini-title'><Icon icon="clarity:cd-dvd-solid" /> BGM ▶</strong>
                <table>
                    <tr>
                        <td><Link to={`/${nowUser.emailID}/diary`}>다이어리 <span>0/0</span></Link></td>
                        <td><Link to={`/${nowUser.emailID}/gallery`}>사진첩 <span>2/10</span></Link></td>
                    </tr>
                    <tr>
                        <td><Link to={`/${nowUser.emailID}/guest_book`}>방명록 <span>0/0</span></Link></td>
                        <td><Link to={`/${nowUser.emailID}/jukebox`}>쥬크박스 <span>0/0</span></Link></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </CyworldHomeNews>
    );
};

export default Home_news;