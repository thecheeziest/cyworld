import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCart, removeCart, resetCart, selectMusicForManager, totalCart } from '../../../store/modules/musicBoxSlice';
import { addBgm } from '../../../store/modules/userSlice';


const MusicBasket = ({item}) => {
  const { user } = useSelector(state => state.user);
  const {userID} = useParams() //주인장의 id

    const cart = useSelector(state => state.music.carts);
    const dispatch = useDispatch();

    //알림 메세지 
    const [addedToBasket, setAddedToBasket] = useState(false);
    
    const [musicHistory, setMusicHistory] = useState([]);

    const AddToBasket = () => {
        if (cart.length === 0) {
            setAddedToBasket(false);
            dispatch(selectMusicForManager(cart));
        } else {
            setAddedToBasket(true);
            const cartItems = cart.map((cartItem) => cartItem.id);
            dispatch(addCart(cartItems));

            // 카트 상태를 리셋하는 액션을 디스패치
            dispatch(resetCart());
            dispatch(addBgm(cart))

           // 음악 히스토리 업데이트
           const updatedMusicHistory = [...musicHistory, ...cart];
           setMusicHistory(updatedMusicHistory);

            setTimeout(() => {
                setAddedToBasket(false);
            }, 2000);
        }
    };
  
    const RemoveItem = (id) => {
        // 클릭한 아이템의 ID를 파라미터로 removeCart 액션을 디스패치합니다.
        dispatch(removeCart(id));
        dispatch(totalCart());
      };

      const navigate = useNavigate();
      const onGo = () => {
        navigate(`/${user.emailID}/manager`);  // 설정으로 이동
      };  

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
              <h4 onClick={AddToBasket} className='cart-save'>배경음악 담기<Icon icon="bxs:music" width="23"/></h4>
              {cart.length === 0 && (
                <div className='BasketEmpty'>
                  <h2>음악 바구니가 비어있습니다. 음악을 담아주세요!</h2>
                </div>
              )}
              <button className='BasketBtn' onClick={onGo}>미니홈피 가기</button>
              {addedToBasket && (
                  <div className='BasketMessage'>
                    <h2>담기 성공!</h2>
                    {/* <h2 onClick={onGo}>배경화면 설정하기</h2> */}
                  </div>
                )}
              <div>
              </div>
        </div>
    );
};

export default MusicBasket;