import React, { useState, useEffect } from 'react';
import { CyworldGuestPg } from '../../styled/cyworldStyle';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { guestDate } from '../../../store/modules/guestSlice';

const Guest_Text = () => {
  const { user } = useSelector((state) => state.user);
  const { userID } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const { date } = useSelector((state) => state.guest);
  const [text, setText] = useState('');
  const [guestList, setGuestList] = useState([]);

  const GuestClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(guestDate());
  }, [dispatch]);

  const handleSave = () => {
    if (text.trim() !== '') {
      const newGuest = {
        no: guestList.length + 1,
        name: user.name, // Removed unnecessary brackets
        date: date,
        message: text,
      };
      setGuestList((prevGuestList) => [...prevGuestList, newGuest]);
      setText('');
    }
    setIsEditing(false);
  };

  return (
    <CyworldGuestPg>
      <div className='GuestText'>
        <p>No {guestList.length + 1} {user.emailID} ({date})</p>
        <div className='GuestWrit'>
          <img src={user.nowMinimi ? user.nowMinimi : 'https://via.placeholder.com/200x200'} alt='' />
          <textarea
            name=''
            id=''
            cols='70'
            rows='10'
            value={text}
            onChange={handleChange}
            placeholder='친구에게 방명록을 남겨주세요.'
          ></textarea>
          {userID !== user.emailID ? (
            <button onClick={isEditing ? handleSave : GuestClick}>
              {isEditing ? '저장' : '수정'}
            </button>
          ) : null}
        </div>
      </div>
      <div>
        {/* <h2>방명록 내용</h2> */}
        <ul>
          {guestList.map((guest) => (
            <li key={guest.no}> {/* Removed unnecessary brackets */}
              <p>
                No {guest.no} {guest.name} ({guest.date}) {/* Removed unnecessary brackets */}
              </p>
              <div className='Guestbox_Wr'>
                <img src='https://www.cyworld.com/img/gif/ani_pictureminime_3x.gif' alt='' />
                {/* dangerouslySetInnerHTML is removed, as it's not needed here */}
                <textarea name='' id='' cols='70' rows='10' value={guest.message}></textarea>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CyworldGuestPg>
  );
};

export default Guest_Text;