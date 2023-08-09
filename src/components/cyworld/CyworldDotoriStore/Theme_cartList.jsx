import Theme_cartItem from './Theme_cartItem';
import { useDispatch, useSelector } from 'react-redux';
import { resetCarts } from '../../../store/modules/dotoriThemeSlice';
import { addMiniroom } from '../../../store/modules/userSlice';
import sAlert from '../../../assets/sweetalert/sweetalert';


const Theme_cartList = () => {
    const dispatch = useDispatch()

    const {carts} = useSelector(state => state.theme)

    const submitOrder = () => {
        if(carts.length === 0) return sAlert('error', '장바구니에 상품을 추가해주세요!')    
        dispatch(addMiniroom(carts))
        sAlert('success', '구입이 완료되었습니다!')
        dispatch(resetCarts())
    }

    
    return (
        <>
            <div className="cart-modal">
                <h4>MINIROOM</h4>
                <div className='cart-list'>
                    {(!carts || carts.length === 0) ? (
                        <p>장바구니에 담긴 상품이 없습니다.</p>
                    ) : (
                        carts.map(item => <Theme_cartItem key={item.id} item={item} />)
                    )}
                </div>
                <p className="btn-wrap">
                    <button className='order-btn' onClick={submitOrder}>구입하기</button>
                    <button className='reset-btn' onClick={()=>dispatch(resetCarts())}>전체삭제</button>
                </p>
            </div>
        </>
    );
};

export default Theme_cartList;