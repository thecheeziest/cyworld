import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CyworldModalItem from './CyworldModalItem';
import { falseOpen } from '../../../store/modules/userSlice';
import { styled } from 'styled-components';

const CyModal = styled.div`
    width: 700px;
    height: 700px;
    margin: auto;
    position: relative;
    background-color: #fff;
    h2 {
        text-align: center;
        margin-top: 20px;
        font-size: 30px;
    }
    ul {
        margin-bottom: 30px;
        li {
            display: flex;
            strong {
                display: block;
                width: 100px;
                text-align: center;
                font-size: 20px;
                margin-left: 50px;
            }
            em {
                display: block;
                text-align: center;
                font-size: 20px;
                width: 100px;
                margin-left: 120px;
            }
        }
    }
    .one {
        margin-top: 50px;
        strong, em {
            font-size: 25px;
        }

    }
    .ok {
        position: absolute;
        top : 600px;
        right: 50px;
        padding : 10px 20px;
    }
`

const CyworldModal = () => {
    const dispatch = useDispatch()
    return (
        <CyModal>
            <div className="popup">
                <h2>신청현황</h2>
                <ul className='one'>
                    <li><strong>이름</strong> <em>상태</em></li>
                </ul>
                    {
                        <CyworldModalItem />
                    }
                <button className='ok' onClick={() => dispatch(falseOpen())}>확인</button>
            </div>
        </CyModal>
    );
};

export default CyworldModal;