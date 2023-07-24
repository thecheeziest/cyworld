import React from 'react';
import { CyworldProfilePg } from '../../styled/cyworldStyle';

const Profile_Edit = () => {
    return (
        <CyworldProfilePg>
            <div className="profile-con">
                <div className='imgBox'>
                    <img src="https://cdn.topstarnews.net/news/photo/202107/14612238_664992_044.jpg" alt="" />
                </div>
                <div className="info-text">
                    <p>
                        <label htmlFor="">이름</label>
                        <input type="text" placeholder='홍길동'  disabled/>
                    </p>
                    <p>
                        <label htmlFor="">성별</label>
                        <input type="text" placeholder='여자or남자' disabled/>
                    </p>
                    <p>
                        <label htmlFor="">생년월일</label>
                        <input type="text" placeholder='1994.04.21.' disabled/>
                    </p>
                    <p>
                        <label htmlFor="">자기소개</label>
                        <input type="text" placeholder='내용을 입력해주세요.'
                        style={{height:'235px'}} disabled/>
                    </p>
                 <button>수정</button>
                </div>
            </div>
        </CyworldProfilePg>
    );
};

export default Profile_Edit;
