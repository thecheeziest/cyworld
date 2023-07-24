import React, { useState } from 'react';
import { CyworldHPContainer } from '../components/styled/cyworldStyle';
import CyworldToday from '../components/cyworld/CyworldMiniHome/CyworldToday';
import { Icon } from '@iconify/react';
import CyworldTitle from '../components/cyworld/CyworldMiniHome/CyworldTitle';
import { BsFillHeartFill, BsFillHeartbreakFill } from 'react-icons/bs'
import { AiFillCamera, AiFillPicture } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Gallery = () => {
    // 사진 배열
    const { user, userData } = useSelector(state => state.user);
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    const [count, setCount] = useState(0) // 셀렉트로 골라줄 숫자
    const [no, setNo] = useState(1)
    const [text, setText] = useState('cat0.jpg')
    const [data, setData] = useState(nowUser.gallery)
    const [com, setCom] = useState()
    const {like, date} = data[count]
    const changePic = (e) => {
        const cat = document.getElementById('cat').selectedIndex;
        const value_opt = e.target.value
        setText(value_opt)
        setCount(cat)
    }
    const comAdd = (id, text) => {
        if(text != '') {
            setNo(no+1)
            let addList = [...data]
            const newArray = addList.map(item => {
                if(item.id == id) {
                    return {
                        ...item,
                        reply : [
                            ...item.reply,
                            {
                                c_id : no,
                                main : text
                            }
                        ]
                    }
                }
                return item
            })
            setData(newArray)
        }
        setCom('')
    }
    const comDel = (id, replyId) => {
        const updateList = data.map(item => {
            if(item.id == id) {
                const updateReply = item.reply.filter(rep => rep.c_id !== replyId)
                return {
                    ...item,
                    reply : updateReply
                };
            }
            return item
        })
        setData(updateList)
    }
    const changeInput = (e) => {
        const {value} = e.target
        setCom(value)
    }
    const onLike = (id) => {
        setData(data.map(item => item.id === id ? {...item, like:!item.voted ? item.like+1 : item.like-1, voted:!item.voted} : item))
    }
    return (
        <CyworldHPContainer>
            <div className="profile">
                <CyworldToday />
                <div className="pro-inner">
                    <ul className="board-menu">
                        <li>사진첩</li>
                        <li>『 Photo ★ List。。』</li>
                        {
                            /* 메뉴 명 + 게시판 제목 들어가는 영역 */
                            <select name="" id="cat" onChange={changePic}>
                                {
                                    data.map(item => <option key={item.id} value={item.img}>고양이{item.id}</option>)
                                }
                            </select>
                        }

                    </ul>
                </div>
            </div>
            <div className="main">
                <CyworldTitle />
                <div className="main-inner">
                    <div className="content">
                        <div className="title">
                            <Icon icon="clarity:cd-dvd-solid" />
                            <h3> 사진 모음..</h3>
                            {/* <input type="file" /> */}
                            <button className='file'><i><AiFillCamera /></i></button>
                            {/* 본문의 아이콘 & 제목 들어가는 영역 */}

                        </div>

                        { /* 여기부터 본문 내용 들어가면 됨 (컴포넌트 연결하거나 그냥 작성하거나) */}
                        <div>
                            <p>고양이 {date} 좋아요: {like} { (data[count].voted==false) 
                            ? <button className='like' onClick={() => onLike(count+1)}><BsFillHeartFill /></button> 
                            : <button className='like' onClick={() => onLike(count+1)}><BsFillHeartbreakFill /></button> }</p> 
                            <img src={`images2/${text}`} alt="" />
                        </div>
                    </div>
                    {/* 댓글 입력 영역 */}
                    <div> 
                        <input type="text" onChange={changeInput} value={com} /> <button onClick={()=>comAdd(count+1,com)}>등록</button>
                    </div>

                    {/* 댓글창 영역 */}
                    <div className='reply'>
                        {
                            data[count].reply.map(item => <p key={item.c_id}> {item.main}<button onClick={()=>comDel(count+1, item.c_id)}>삭제</button></p>)
                        }
                    </div>
                </div>
            </div>
        </CyworldHPContainer>
    );
};

export default Gallery;