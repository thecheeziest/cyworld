import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { acceptRel, declineRel, falseOpen, trueOpen } from '../../../store/modules/userSlice';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';


const CyItem = styled.ul`
    margin-top: 20px;
    li {
        button {
            &:first-child {
                margin-left: 150px;
            }
        }
    }
`

const CyworldModalItem = () => {
    const { user, relationData, userData } = useSelector(state => state.user)
    const { userID } = useParams();
    const nowUser = userData.find(item => item.emailID === userID);
    const [data, setData] = useState(relationData)
    const [relList, setRelList] = useState([])
    const dispatch = useDispatch()
    useEffect( () => {
        setData(data.filter(item => item.arrive === user.name && item.send === nowUser.name))
        setRelList(data.filter(item => item.status === '대기중'))
    },[user])

    const refresh = () => {
        dispatch(falseOpen())
        setTimeout( () => {
            dispatch(trueOpen())
        },[1])
    }

    const onSure = (id) =>{
        dispatch(acceptRel(id))
        refresh()
    }

    const onNo = (id) => {
        dispatch(declineRel(id))
        refresh()
    }
    return (
        <CyItem>
            {
                relList.map(item => <li key={item.id}>
                    <strong>{item.send}</strong> <em>{item.status}</em>
                    <p>
                        <button onClick={() => onSure(item.id)}>수락</button>
                        <button onClick={() => onNo(item.id)}>거절</button>
                    </p>
                </li>)
            }
        </CyItem>
    );
};

export default CyworldModalItem;