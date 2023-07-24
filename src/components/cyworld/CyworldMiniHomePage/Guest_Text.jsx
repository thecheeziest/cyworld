import React from 'react';
import { CyworldGuestPg } from '../../styled/cyworldStyle';


const Guest_Text = () => {
    return (
        <CyworldGuestPg>
            <div className='GuestText'>
            <p>No 1500  name  (2007,04,21 15:17)</p>
                <div className='GuestWrit'>
                <img src="https://via.placeholder.com/200x200" alt="" />
                <textarea name="" id="" cols="70" rows="10" placeholder='친구에게 방명록을 남겨주세요.'></textarea>
                <button>등록</button>
                </div>
                <p>No 1499  심초롱  (2007,03,26 16:11)</p>
                <div className='Guestbox'>
                <img src="https://www.cyworld.com/img/gif/ani_pictureminime_3x.gif" alt="" />
                <span>
                <p> 눈물을 흘린 ㄷ ㅏ .....<br/>
                    ㄱ ㅏ끔은 눈물을 참을 수 없는 내가 별루ㄷ ㅏ...<br/>
                    맘이 ㄴ ㅓ 무 ㅇ ㅏ ㅍ ㅏ ㅅ ㅓ...
                </p>
                </span>
                </div>
                {/* <button>수정</button> */}
                <p>No 1498  조아  (2006,03,02 14:21)</p>
                <div className='Guestbox'>
                <img src="https://www.cyworld.com/img/gif/ani_santa_3x.gif" alt="" />
                <span>
                <p>
                    사랑해 사랑해 사랑해 사랑해 사랑해 사랑해 <br/>
                    사랑해 사랑해 사랑해 사랑해 사랑해 사랑해 <br/>
                    사랑해 사랑해 사랑해 사랑해 사랑해 사랑해 <br/>
                    사랑해 사랑해 사랑해 사랑해 사랑해 사랑해 <br/>
                    사랑해 사랑해 사랑해 사랑해 사랑해 사랑해 <br/>
                </p>
                </span>
                </div>
                {/* <button>수정</button> */}
            </div>
        </CyworldGuestPg>
    );
};

export default Guest_Text;