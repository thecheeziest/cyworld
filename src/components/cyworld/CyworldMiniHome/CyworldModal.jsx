import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CyworldModalItem from './CyworldModalItem';

const CyworldModal = ({nowUser}) => {
    const { relationData } = useSelector(state => state.user)
    const [data, setData] = useState(relationData)
    setData(data.find(item => item.arrive === nowUser))
    return (
        <div className="Modal">
            <div className="bg"></div>
            <div className="popup">
                <h2>신청현황</h2>
                {
                    data.map(item => <CyworldModalItem data={data} />)
                }
                <button>확인</button>
            </div>
        </div>
    );
};

export default CyworldModal;