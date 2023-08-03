import { Icon } from '@iconify/react';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import CyworldModal from './CyworldModal';
import { setData } from '../../../assets/api/cyworldData';
import Numeral from "numeral";
import { addCart, toggleLike } from '../../../store/modules/musicBoxSlice';


const MusicBoxItem = ({item}) => {
  const { rank, poster, state, album, title, singer,done,like } = item;
  const dispatch = useDispatch();
  const [localLike, setLocalLike] = useState(false); // 로컬 상태 추가
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 추가
  const isItemInCart = useSelector(state => state.music.carts.some(cartItem => cartItem.id === item.id));
  const LikeClick = () => {
    setLocalLike((prevLocalLike) => !prevLocalLike);
    // const data = [/* 데이터 배열 */]; 
    const updatedData = setData(data, id); // setData 함수를 호출하여 데이터 업데이트
    // 업데이트된 데이터로 토글된 좋아요 상태를 스토어에 디스패치
    dispatch(toggleLike({ data: updatedData, id }));
  };

  const Open = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addToCart = () => {
    if (isItemInCart) {
      // 해당 음악이 이미 카트에 있을 경우 알림 
      alert('해당음악은 장바구니의 담겨 있습니다.');
    } else {
      dispatch(addCart(item));
    }
  };

  return (
    <tr>
      {/* <td><input type="checkbox" name="" id=""/></td> */}
      <td>{rank}</td>
      <td className="img">
        <img src={poster} alt="" width="75" height="75" />
        <p className="img">
          <span>{title}</span>
          {singer}
        </p>
      </td>
      <td>{album}</td>
      <td>
        <button onClick={LikeClick}>
          {localLike ? (
            <Icon icon="mdi:heart" color="#f60" width="24" />
          ) : (
            <Icon icon="mdi:heart-outline" color="#f60" width="24"/>
          )}
        </button>
        {Numeral(localLike ? like + 1 : like).format('0,0')} {/* 업데이트된 좋아요 수 표시 */}
      </td>
        <td>
          <button onClick={addToCart}>
        <Icon icon="iconamoon:sign-plus-thin" color="#f60" width="30" />
          </button>
        </td>
        <td>
        <button onClick={Open}>
          <Icon icon="ion:videocam" color="#f60" width="25" />
          {isModalOpen && <CyworldModal isOpen={isModalOpen} onClose={Open} item={item} />}
        </button>
      </td>
        <td>
          {state === '상승' &&  <Icon icon="mdi:arrow-up" color="#f60" width="25" />}
          {state === '유지' &&  <Icon icon="typcn:minus" color="#f60" width="25" />}
          {state === '하강' &&  <Icon icon="mdi:arrow-down"  color="#000" width="25" />}
        <span style={{marginLeft:10}}>
        </span>
        </td>
    </tr>
    );
};

export default MusicBoxItem;