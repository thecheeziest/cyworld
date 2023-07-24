import React from 'react';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, totalCart } from '../../../store/modules/musicCartSlice';

const MusicBasket = () => {
    const cart = useSelector(state => state.cart.carts);
    const dispatch = useDispatch();

    const RemoveItem = (id) => {
        // 클릭한 아이템의 ID를 파라미터로 removeCart 액션을 디스패치합니다.
        dispatch(removeCart(id));
        dispatch(totalCart());
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
              <h4>적용하기<Icon icon="bxs:music" width="23"/></h4>
              <div>
              </div>
        </div>
    );
};

export default MusicBasket;