import React from 'react';
import { CyworldHomeNews } from '../../styled/cyworldStyle';
import { Icon } from '@iconify/react';

const Home_news = () => {
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
                        <td>다이어리 <span>0/0</span></td>
                        <td>사진첩 <span>2/10</span></td>
                    </tr>
                    <tr>
                        <td>방명록 <span>0/0</span></td>
                        <td>쥬크박스 <span>0/0</span></td>
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