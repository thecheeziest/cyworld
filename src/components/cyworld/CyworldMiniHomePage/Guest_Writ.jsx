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
 
    const [guestContent, setGuestContent] = useState(''); // textarea의 내용을 저장할 상태 변수
    const [guestList, setGuestList] = useState([]); // 방명록 리스트를 관리하는 상태 변수
    const dispatch = useDispatch();
    const { date } = useSelector(state => state.guest);
    const initialNo = 1500;
    const [editingIndex, setEditingIndex] = useState(-1); // 수정 중인 아이템의 인덱스
    const [editContent, setEditContent] = useState('');

    const GuestSave = () => {
        if (guestContent.trim() !== '') {
            const newGuest = {
            no: guestList.length === 0 ? initialNo : guestList[guestList.length - 1].no + 1,
            name: user.name,
            date: date,
            message: guestContent,
          };
          setGuestList((prevGuestList) => [...prevGuestList, newGuest]);
          setGuestContent(''); // 저장 후 textarea를 비웁니다.
        }
      };
    
      // 수정 버튼 클릭 시 해당 아이템을 수정할 수 있도록 하는 함수
      const GuestEdit = (index) => {
        setEditingIndex(index);
        setEditContent(guestList[index].message);
      };

        // 저장 버튼 클릭 시 수정된 내용을 저장하는 함수
        const GuestUpdate = (index) => {
            const updatedGuestList = [...guestList];
            updatedGuestList[index].message = guestContent;
            setGuestList(updatedGuestList);
            setEditingIndex(-1); // 수정 완료 후, 수정 중인 아이템 인덱스 초기화
            setGuestContent(''); // 저장 후 textarea를 비웁니다.
        };

        const GuestDelete = (index) => {
            const updatedGuestList = [...guestList];
            updatedGuestList.splice(index, 1); // 지정된 인덱스에서 게스트 항목을 제거
            setGuestList(updatedGuestList);
          };
        

        useEffect(() => {
            dispatch(guestDate());
        }, [dispatch]);

    return (

       <CyworldGuestWr>
      <div className='GuestText_Wr'>
        <div className='GuestWrit_Wr'>
        <p>No {guestList.length === 0 ? initialNo : guestList[guestList.length - 1].no + 1} {user.emailID} ({date})</p>
          <img src="https://www.cyworld.com/img/gif/ani_santa_3x.gif" alt="" />
          <textarea
            name=""
            id=""
            cols="70"
            rows="10"
            placeholder='친구에게 방명록을 남겨주세요.'
            value={guestContent} // textarea의 값은 상태 변수로 설정합니다.
            onChange={(e) => setGuestContent(e.target.value)} // 사용자가 입력할 때마다 상태를 업데이트합니다.
            disabled={user.emailID === userID}
          ></textarea>
          {user.emailID !== userID ? (
            <button onClick={GuestSave}>저장</button>
          ) : null}
        </div>

        {guestList.slice().reverse().map((guest, index) => (
        <div className='GuestWrit_map' key={guest.no}>
          <p>No {guest.no} {guest.name} ({guest.date})</p>
          <img src="https://www.cyworld.com/img/gif/ani_santa_3x.gif" alt="" />
         {editingIndex === index ? (
  <textarea
    value={editContent}
    onChange={(e) => setEditContent(e.target.value)}
            ></textarea>
          ) : (
            // 수정 중이 아닌 아이템은 기존의 내용 표시
            <textarea disabled>{guest.message}</textarea>
          )}
          <div className='mapBtn'>
            {editingIndex === index ? (
              // 수정 중인 아이템의 경우, 저장 버튼 표시
              <button onClick={() => GuestUpdate(index)}>저장</button>
            ) : (
              // 수정 중이 아닌 아이템의 경우, 수정 버튼 표시
              <button onClick={() => GuestEdit(index)}>수정</button>
            )}
            <button onClick={() => GuestDelete(index)}>삭제</button>
          </div>
        </div>
      ))}
            <p>No 1499  심초롱  (2007,03,26 16:11)</p>
            <div className='Guestbox_Wr'>
            <img src="https://www.cyworld.com/img/gif/ani_pictureminime_3x.gif" alt="" />
            <textarea name="" id="" cols="120" rows="10" placeholder='🌸⁺◟(●˙▾˙●)◞⁺🌸 💐⁺◟(◍˙▾˙◍)◞⁺💐 (~🌸’ㅅ’)~🌸인정합니다 ◟( ˘ ³˘)◞ ~🌹⁼³₌₃ 인정 (~˘▾˘)~🌸이♫•*¨인*•.¸¸저♪엉🌸 (~💐˘▾˘)~인💐정 🌹인＼(´▽ `)ノ정🌹 (*˘︶˘*).:*🌸 인🌸⁺◟(◍’◡’◍)◞⁺🌸정 🌸⁺◟(●˙▾˙●)◞⁺🌸 💐
            ⁺◟(◍˙▾˙◍)◞⁺💐 (~🌸’ㅅ’)~🌸인정합니다 ◟( ˘ ³˘)◞ ~🌹⁼³₌₃ 인정 (~˘▾˘)~🌸이♫•*¨인*•.¸¸저♪엉🌸 (~💐˘▾˘)~인💐정 🌹인＼(´▽ `)ノ정🌹 (*˘︶˘*).:*🌸 인🌸⁺◟(◍’◡’◍)◞⁺🌸정 🌸⁺◟(●˙▾˙●)◞⁺🌸 💐⁺◟(◍˙▾˙◍)◞⁺💐 (~🌸’ㅅ’)~🌸인정
            
             ' disabled></textarea>
            </div>
        </div>
    </CyworldGuestWr>
    );
};

export default Guest_Writ;