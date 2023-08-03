import { useSelector } from 'react-redux';
import Diary_dailyItem from './Diary_dailyItem';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Diary_dailyList = () => { 
    const navigate = useNavigate()
    const { user } = useSelector(state => state.user); 
    const { userID } = useParams();    
    const {dailyData} = useSelector(state => state.diary)
    const num = dailyData.length
    const onGo = () => userID === user.emailID ? navigate(`/${user.emailID}/diary/add`) : alert('☆。˚＊。글쓰기는 주인장만 ㄱ߅능㉭ㅐ요. 댓글을 ○l용㉭ㅐ주세요˚＊。˚☆ ')

    return (    
        <>
            <div className='daily-list'>
                {
                    num === 0 ? 
                    <div className="daily-null">
                        <p className="none">해당일자는 다이어리가 존재하지 않습니다.</p>
                        <div className="go-add" onClick={onGo}>
                                <p className='click'>Click─☆＊。</p>
                                <p className='go'>Going to write</p>
                        </div>
                    </div>
                    :
                    <div className='daily-length'>
                        <p><span>{num}</span>개의 다이어리가 존재합니다.</p> 
                        { userID === user.emailID && <Link to={`/${user.emailID}/diary/add`}><button><Icon icon="noto-v1:pencil" className='icon'/> 글쓰기</button></Link> }
                    </div>
                }
                {
                    dailyData.map(item => <Diary_dailyItem key={item.id} item={item}/>)
                }
            </div>
        </>
    );
};

export default Diary_dailyList;