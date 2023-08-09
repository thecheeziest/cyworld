import React from 'react';
import { CyworldCart, CyworldMinimi } from '../components/styled/cyworldStyle';
import { minimiList } from '../assets/api/cyworldData';
import MinimiCart from '../components/cyworld/CyworldDotoriStore/MinimiCart';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, onCart } from '../store/modules/minimiSlice';
import sAlert from '../assets/sweetalert/sweetalert';

const Minimi = () => {
    const { showCart } = useSelector(state => state.minimi);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const saveCart = id => {
        if (user.userMinimi && user.userMinimi.find(item => item.id === id)) {
            sAlert('error', '보유 중인 미니미입니다!')
            return;
        }
        dispatch(addCart(id));
    }

    return (
        <CyworldMinimi>
            <div className="inner">
                <h3>미니미 리스트</h3>
                <strong>원하는 미니미를 골라 봐!</strong>
                <ul>
                    {
                        minimiList.map(item => <li key={item.id}>
                            <div className="minimi-pic" style={{backgroundImage: `url(${item.minimiURL})`}}></div>
                            <button className="add" onClick={() => saveCart(item.id)}><p>담기</p></button>
                        </li>)
                    }
                </ul>
                <CyworldCart>
                    <button className='cartBtn' onClick={() => dispatch(onCart())}>
                        <p>장바구니</p>
                    </button>
                    <div className={`basketList ${showCart ? 'open' : ''}`}>
                        <MinimiCart />
                    </div>
                </CyworldCart>
            </div>
        </CyworldMinimi>
    );
};

export default Minimi;