import { Link } from 'react-router-dom';
import { CyworldHomeNews } from '../../styled/cyworldStyle';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Home_news = () => {
    const { user, userData } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    // 도메인에 맞는 데이터 출력

    return (
        <CyworldHomeNews>
            <div className="update-news">
                <strong className='mini-title'>Updated news</strong>
                <Link to={`/${nowUser.emailID}/diary`}>
                <p><span>{nowUser.userDiary ? `${nowUser.userDiary[nowUser.userDiary.length - 1].substance}` : '등록된 다이어리가 없습니다.'}</span></p>
                </Link>
                <Link to={`/${nowUser.emailID}/gallery`}>
                <p><span>{nowUser.gallery ? `${nowUser.gallery[nowUser.gallery.length - 1].date} 일자 업로드 사진` : '등록된 사진이 없습니다.'}</span></p>
                </Link>
                <Link to={`/${nowUser.emailID}/guest_book`}>
                <p><span>{nowUser.userGuest ? `${nowUser.userGuest[nowUser.userGuest.length - 1].substance}` : '등록된 방명록이 없습니다.'}</span></p>
                </Link>
                <Link to={`/${nowUser.emailID}/jukebox`}>
                <p><span>{nowUser.userBgm ? `${nowUser.userBgm[nowUser.userBgm.length - 1].substance}` : '설정된 배경음악이 없습니다.'}</span></p>
                </Link>
            </div>
            <div className="new">
                <strong className='mini-title'><Icon icon="clarity:cd-dvd-solid" /> BGM ▶</strong>
                <table>
                    <tr>
                        <td>다이어리 <span>0/{nowUser.userDiary ? `${ nowUser.userDiary.length - 1 }` : '0'}</span></td>
                        <td>사진첩 <span>0/{nowUser.gallery ? `${ nowUser.gallery.length - 1 }` : '0'}</span></td>
                    </tr>
                    <tr>
                        <td>방명록 <span>0/{nowUser.userGuest ? `${ nowUser.userGuest.length - 1 }` : '0'}</span></td>
                        <td>쥬크박스 <span>0/{nowUser.userBgm ? `${ nowUser.userBgm.length - 1 }` : '0'}</span></td>
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