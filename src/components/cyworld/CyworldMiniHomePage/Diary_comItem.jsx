import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { delComData } from '../../../store/modules/diarySlice';

const Diary_comItem = ({comItem}) => {
    const {id, comUser, comText, comDate} = comItem
    const dispatch = useDispatch()
    console.log(comItem)
    return (
        <li>
            <p className='com-user'>{comUser}</p><b> : </b>
            <p>{comText}</p>
            <p className='com-date'>{comDate}</p>
            <span>
                <button><Icon icon="mdi:eraser" color="#a9a9a9" /></button>
                <button onClick={()=>dispatch(delComData(id))}><Icon icon="mdi:close-box-outline" color="#a9a9a9" /></button>
            </span>
        </li>
    );
};

export default Diary_comItem;