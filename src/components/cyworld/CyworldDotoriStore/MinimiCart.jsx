import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delCart, resetCart } from '../../../store/modules/minimiSlice';
import { addMinimi } from '../../../store/modules/userSlice';
import sAlert from '../../../assets/sweetalert/sweetalert';
import { Link, useNavigate } from 'react-router-dom';

const MinimiCart = () => {
    const { user } = useSelector(state => state.user);
    const { cartList } = useSelector(state => state.minimi);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveMinimi = () => {
        dispatch(resetCart());
        dispatch(addMinimi(cartList));
        sAlert('success', '미니미 구입 성공!')
        navigate(`/${user.emailID}/manager`)
    }

    return (
        <div className='minimi'>
            <h3>PICK ! 미니미</h3>
            {
                cartList.length === 0 ?
                <div className='BasketEmpty'>
                    <p>미니미 바구니가 비어 있습니다. 미니미를 담아 주세요!</p>
                    <Link to={`/${user.emailID}`}><button className='go-minihp'>미니홈피 가기</button></Link>
                </div>
                : <>
                <table>
                    <colgroup>
                    <col className='w8'/>
                    <col className='w9'/>
                    </colgroup>
                    <tbody>
                        {
                            cartList.map(item => <tr key={item.id}>
                                <td className='minimi-img'>
                                <img src={item.minimiURL} />
                                </td>
                                <td>
                                    <button onClick={() => dispatch(delCart(item.id))}>삭제</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <p className='cnt'>선택된 미니미 개수: <b>{cartList.length}</b> 개</p>
                <button className='cart-save' onClick={saveMinimi}>미니미 구입</button>
            </>
            }
        </div>
    );
};

export default MinimiCart;