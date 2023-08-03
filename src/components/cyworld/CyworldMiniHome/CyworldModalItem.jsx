import React from 'react';

const CyworldModalItem = ({data}) => {
    const onSure = () =>{
        
    }
    const onNo = () =>{

    }
    return (
        <ul>
            {
                data.map(item => <li>
                    {item.send} {item.status}
                    <button onClick={() => onSure()}>수락</button>
                    <button onClick={() => onNo()}>거절</button>
                </li>)
            }
        </ul>
    );
};

export default CyworldModalItem;