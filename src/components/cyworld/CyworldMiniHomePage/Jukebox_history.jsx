import React from 'react';
import { CyworldJukeboxPg } from '../../styled/cyworldStyle';
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react';
import { useState } from 'react';
// import { selectMusic } from '../../../store/modules/musicBoxSlice';


const Jukebox_history = () => {
    const date = useSelector(state => state.music.date);
    const [musicHistory, setMusicHistory] = useState([]);
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.user);
    const {userID} = useParams() //주인장의 id

    useEffect(() => {
        const savedMusicHistory = JSON.parse(localStorage.getItem('musicHistory'));
        if (savedMusicHistory) {
            setMusicHistory(savedMusicHistory);
        }
    }, []);

    // const JukeboxDelete = (index) => {
    //     const updatedMusicHistory = [...musicHistory];
    //     updatedMusicHistory.splice(index, 1);

    //     setMusicHistory(updatedMusicHistory);
    //     localStorage.setItem('musicHistory', JSON.stringify(updatedMusicHistory));
    // };

    // const selectMusics = (music) => {
    //     dispatch(selectMusic(music));
    //   };


    return (
        <CyworldJukeboxPg>
        <div className="history">
            {/* <p className="none">설정된 배경 음악이 없습니다.</p> */}
            {userID === user.emailID && musicHistory.length > 0 ? (
                    musicHistory.map((music, index) => (
                        <p key={index} className='on'>
                            <b>{date}</b>
                            <strong>{music.title}</strong>
                            <em>{music.singer}</em>
                            <p className='HistoryBtn'>
                                {/* <button className='h' onClick={() => selectMusics(music)}>
                                    적용<Icon icon="mingcute:check-fill" />
                                </button>

                                <button className='c' onClick={() => JukeboxDelete(index)}>
                                    삭제<Icon icon="fxemoji:cancellationx" />
                                </button> */}
                            </p>
                        </p>
                    ))
                ) : (
                    <p className="none">설정된 배경 음악이 없습니다.</p>
                )}
         
        </div>
        <div className="go-store">
            <Link to="/dotori_store"><button>도토리 상점 바로가기</button></Link>
        </div>
        </CyworldJukeboxPg>
    );
};

export default Jukebox_history;