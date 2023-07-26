import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, totalCart } from '../../../store/modules/musicCartSlice';
import { useNavigate } from 'react-router-dom';


const MusicBasket = () => {
    const cart = useSelector(state => state.cart.carts);
    const dispatch = useDispatch();

    //알림 메세지 
    const [addedToBasket, setAddedToBasket] = useState(false);
    const AddToBasket = () => {
      // 카트에 아이템이 없으면 담기 실패로 처리
      if (cart.length === 0) {
        setAddedToBasket(false);
      } else {
        setAddedToBasket(true);
      }
    };

    const RemoveItem = (id) => {
        // 클릭한 아이템의 ID를 파라미터로 removeCart 액션을 디스패치합니다.
        dispatch(removeCart(id));
        dispatch(totalCart());
      };

      const navigate = useNavigate()
      const onGo = () => {
        navigate('/lcl3399/manager');
    }

    return (
        <div>
             <h2>Music is my life<img src="https://t1.daumcdn.net/cfile/blog/240DBA34553FB98B09" alt="" width={'50px'} height={'50px'}/></h2>
              <table>
                <colgroup>
                <col className='w8'/>
                <col className='w9'/>
                <col className='w10'/>
                <col className='w11'/>
                </colgroup>
                <thead>
                  <tr>
                    <th><Icon icon="ri:music-2-fill" width="23"/></th>
                    <th>곡정보</th>
                    <th>가수</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                    {/* 카트 데이터를 매핑하고 각 아이템을 표시 */}
                    {cart.map((item) => (
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.singer}</td>
                        <td><Icon icon="tabler:trash" width="23" onClick={() => RemoveItem(item.id)} /></td>
                        </tr>
                    ))}
                    </tbody>
              </table>
              <h3>선택한 곡 수 : </h3> <h3>{cart.length} 곡</h3>
              <h4 onClick={AddToBasket}>배경음악 담기<Icon icon="bxs:music" width="23"/></h4>
              {cart.length === 0 && (
                <div className='BasketEmpty'>
                  <h2>음악 바구니가 비어있습니다. 음악을 담아주세요!</h2>
                </div>
              )}
              {addedToBasket && (
                  <div className='BasketMessage'>
                    <h2>담기 성공!</h2>
                    <h2 onClick={onGo}>배경화면 설정하기</h2>
                  </div>
                )}
              <div>
              </div>
        </div>
    );
};

export default MusicBasket;