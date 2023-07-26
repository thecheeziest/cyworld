import { useSelector } from 'react-redux';
import Diary_dailyItem from './Diary_dailyItem';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


const Diary_dailyList = () => {    
    const {dailyData} = useSelector(state => state.diary)
    const num = dailyData.length

    return (
        <>
            <div className='daily-list'>

                {
                    num === 0 ? 
                    <div className="daily-length no">
                        <p>다이어리가 존재하지 않습니다.</p>
                        <Link to="/zoa/diary/add">글쓰러 가기</Link>
                    </div>
                    :
                    <div className='sub-title'>
                        <p className="daily-length"><span>{num}</span>개의 다이어리가 존재합니다.</p> 
                        <Link to="/zoa/diary/add"><button><Icon icon="noto-v1:pencil" className='icon'/> 글쓰기</button></Link>
                        {/* <Link to="/zoa/diary/add"><button><Icon icon="emojione:pencil" className='icon'/> 글쓰기</button></Link> */}
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