import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CyworldProfilePg } from '../../styled/cyworldStyle';
import { update } from '../../../store/modules/profileSlice';
import { useParams } from 'react-router-dom';


const Profile_Edit = () => {
 const { user } = useSelector(state => state.user); //userData 중 로그인한 사람의 객체만 뽑은거
 const {userID} = useParams() //주인장의 id
 // 주인장 === 유저.email.id
//  조건식 && 버튼이보인다
// userID === user.emailID && <button></button> 

  const [isEditing, setIsEditing] = useState(false);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);

  const InputChange = (event) => {
    const { name, value } = event.target;
    dispatch(update({ [name]: value }));
  };

  const Edit = () => {
    setIsEditing(true);
  };

  const Save = () => {
    setIsEditing(false);
  };

  const ImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  
    // 이미지 업로드 전에 선택한 이미지를 미리 보여주기 위해 미리보기 기능을 추가
    // 간단하게 "imgBox" div에 미리보기 이미지를 표시
    const reader = new FileReader();
    reader.onloadend = () => {
      const imgBox = document.querySelector('.imgBox img');
      imgBox.src = reader.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <CyworldProfilePg>
      <div className="profile-con">
      <div className="imgBox">
  <img src={selectedImage ? URL.createObjectURL(selectedImage) : "https://cdn.topstarnews.net/news/photo/202107/14612238_664992_044.jpg"} alt="" />
  <input
    type="file"
    accept="image/*"
    onChange={ImageChange}
    disabled={!isEditing}
  />
</div>  
        <div className="info-text">
          <p>
            <label htmlFor="">이름</label>
            <input 
              type="text"
              placeholder="홍길동"
              name="name"
              value={profile.name}
              onChange={InputChange}
              disabled={!isEditing}
            />
          </p>
          <p>
            <label htmlFor="">성별</label>
            <input 
              type="text"
              placeholder="여자or남자"
              name="gender"
              value={profile.gender}
              onChange={InputChange}
              disabled={!isEditing}
            />
          </p>
          <p>
            <label htmlFor="">생년월일</label>
            <input 
              type="text"
              placeholder="1994.04.21."
              name="birthday"
              value={profile.birthday}
              onChange={InputChange}
              disabled={!isEditing}
            />
          </p>
          <p>
            <label htmlFor="">자기소개</label>
            <input 
              type="text"
              placeholder="내용을 입력해주세요."
              style={{ height: '235px' }}
              name="bio"
              value={profile.bio}
              onChange={InputChange}
              disabled={!isEditing}
            />
          </p>
          {!isEditing && userID === user.emailID ? (
          <button onClick={Edit}>수정</button>
          ) : (
          userID === user.emailID && <button onClick={Save}>저장</button>
           )}
        </div>
      </div>
    </CyworldProfilePg>
  );
};

export default Profile_Edit;