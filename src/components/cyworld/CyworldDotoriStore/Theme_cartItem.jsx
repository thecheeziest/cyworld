import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { delCarts } from '../../../store/modules/dotoriThemeSlice';
import { CgCloseO } from 'react-icons/Cg';


const Theme_cartItem = ({item}) => {
    const {id, title, url} = item 
    const dispatch = useDispatch()
    return (
        <div className='cart-item'>
            <img src={url} alt={title} />
            <strong>{title}</strong>
            <p className='dotori'>
                <Icon icon="fxemoji:acorn" />0토리
            </p>

            <button onClick={()=>dispatch(delCarts(id))}><CgCloseO className='icon'/></button>
        </div>
    );
};

export default Theme_cartItem;
// 휴지통아이콘 <Icon icon="ri:delete-bin-2-line" />