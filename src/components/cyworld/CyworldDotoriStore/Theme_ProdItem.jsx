import { useDispatch, useSelector } from 'react-redux';
import { addCarts } from '../../../store/modules/dotoriThemeSlice';
import { Icon } from '@iconify/react';

const Theme_ProdItem = ({item}) => {        
    const {id, title, url, dotori} = item
    const dispatch = useDispatch()


    

    return (
        <li>
            <img src={url} alt={title} />
            <p className="text">
                <strong>{title}</strong>
                <p className='dotori'>
                    <Icon icon="fxemoji:acorn" /><b>{dotori}</b>0토리
                </p>
                <span onClick={()=>dispatch(addCarts({id, item}))}>
                    <button ><Icon icon="mdi:cart-heart" color="orange" /></button>
                </span>



            </p>
        </li>
    );
};

export default Theme_ProdItem;