import React from 'react';
import { CyworldGuestWr } from '../../styled/cyworldStyle';

const Guest_Writ = () => {
    return (
        <CyworldGuestWr>
        <div className='GuestText_Wr'>
        <p>No 1500  name  (2007,04,21 15:17)</p>
            <div className='GuestWrit_Wr'>
            <img src="https://via.placeholder.com/200x200" alt="" />
            <textarea name="" id="" cols="70" rows="10" placeholder='친구에게 방명록을 남겨주세요.'></textarea>
            <button>등록</button>
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