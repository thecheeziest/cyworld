import React from 'react';
import { CyworldGuestWr } from '../../styled/cyworldStyle';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { guestDate } from '../../../store/modules/guestSlice';

const Guest_Writ = () => {
    const { user } = useSelector(state => state.user); // userData 중 로그인한 사람의 객체만 뽑은거
    const { userID } = useParams(); // 주인장의 id
    // const [isEditing, setIsEditing] = useState(false);
    const [no, setNo] = useState(1500); // 예시로 1500으로 설정

    const GuestClick = () => {
        setIsEditing(!isEditing);
    };

    const dispatch = useDispatch();
    const { date } = useSelector(state => state.guest);

    useEffect(() => {
        dispatch(guestDate());
    }, [dispatch]);
    return (
        <CyworldGuestWr>
        <div className='GuestText_Wr'>
        <p>No {no} {user.emailID} ({date})</p>
            <div className='GuestWrit_Wr'>
            <img src="https://via.placeholder.com/200x200" alt="" />
                    <textarea name="" id="" cols="70" rows="10" placeholder='친구에게 방명록을 남겨주세요.'></textarea>
                    {user.emailID !== userID ? (
                        <button onClick={GuestClick}>저장</button>
                    ) : null}

            </div>
           
            <p>No 1499  심초롱  (2007,03,26 16:11)</p>
            <div className='Guestbox_Wr'>
            <img src="https://www.cyworld.com/img/gif/ani_pictureminime_3x.gif" alt="" />
           
            <textarea name="" id="" cols="70" rows="10" placeholder='수정할 내용을 입력해주세요.'></textarea>
            </div>
            <button>수정</button>
            <p>No 1498  조아  (2006,03,02 14:21)</p>
            <div className='Guestbox_Wr'>
            <img src="https://www.cyworld.com/img/gif/ani_santa_3x.gif" alt="" />
            <textarea name="" id="" cols="50" rows="10" placeholder='수정할 내용을 입력해주세요.'></textarea>
            </div>
            <button>수정</button>
        </div>
    </CyworldGuestWr>
    );
};

export default Guest_Writ;