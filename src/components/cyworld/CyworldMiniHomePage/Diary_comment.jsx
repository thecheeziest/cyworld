import Diary_comItem from './Diary_comItem';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addComDiary } from '../../../store/modules/userSlice';
import { addComData, maxNextId } from '../../../store/modules/diarySlice';

const Diary_comment = ({id ,comment}) => { // 해당게시물id , 댓글배열    
    const dispatch = useDispatch()

    const cur = new Date() 
    const week = ['일','월','화','수','목','금','토']
    const curYear = cur.getFullYear()
    const curMonth = String(cur.getMonth()+1).padStart(2,'0')
    const curDate = String(cur.getDate()).padStart(2,'0')
    const curHour = String(cur.getHours()).padStart(2,'0')
    const curMinute = String(cur.getMinutes()).padStart(2,'0')   
    
    const { user, userData } = useSelector(state => state.user); 
    const { userID } = useParams(); 
    const nowUser = userData.find(item => item.emailID === userID); 
    const {userDiary} = nowUser
    
    const [addText, setAddText] = useState({id:'', comId:user.emailID, comName:user.name, comText:'', comDate:''})
    const {comText} = addText

    const getMaxId = () => {
    /*  주인장.userDiary를(전체게시글들을) 돌며 item.comment.id가 가장 큰것을 찾아라
        단 userDiary가 undefined거나 length===0일 수도 있다  */        
        if (!userDiary || userDiary.length === 0) return 0;
        let maxId = 0;
        userDiary.map((item) => {
          item.comment.map((comItem) => {
            if( comItem.id > maxId ) maxId = comItem.id
          });
        });
        return maxId;
      };

    const changeInput = e => {
        const {value} = e.target
        setAddText({...addText, comText: value})
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!comText) return alert('댓글을 입력하세요.') 
        const curMaxId = getMaxId()
        const nextId = userDiary ? curMaxId + 1 : 0
        addText.id = nextId
        addText.comDate = `${curYear}.${curMonth}.${curDate} ${curHour}:${curMinute}`     
        // dispatch(addComData({id, addText})) //diarySlice
        dispatch(addComDiary({id, addText, userID})) //action.payload 값이 2개일 때는 객체형태로
        setAddText({id:'', ...addText, comText:'', comDate:''})
    }

    return (
        <>
            <div className='diary-comment'>
                <ul className="com-list">   
                    {
                        comment.map(comItem => <Diary_comItem key={comItem.id} comItem={comItem}/>)
                    }
                </ul>
                <form className="com-input" onSubmit={onSubmit}>
                    <p>댓글</p>
                    <input type="text" value={comText} onChange={changeInput}/>
                    <button type='submit'>확인</button>
                </form>
            </div>            
        </>
    );
};

export default Diary_comment;