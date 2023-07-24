import { Icon } from '@iconify/react';

const Diary_comItem = ({comItem}) => {
    const {no, comUser, comText, comDate} = comItem
    return (
        <li>
            <p className='com-user'>{comUser}</p><b> : </b>
            <p>{comText}</p>
            <p className='com-date'>{comDate}</p>
            <span>
                <button><Icon icon="mdi:eraser" color="#a9a9a9" /></button>
                <button><Icon icon="mdi:close-box-outline" color="#a9a9a9" /></button>
            </span>
        </li>
    );
};

export default Diary_comItem;