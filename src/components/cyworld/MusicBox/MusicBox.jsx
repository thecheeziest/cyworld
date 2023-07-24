// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MusicBoxContainer } from '../../styled/MusicBoxStyle';
import MusicBoxList from './MusicBoxList';
// import { getMusicDate } from './';


const MusicBox = () => {
    const {music} = useSelector(state => state.music)
    const dispatch = useDispatch()

     // getMusicDate 액션을 dispatch하는 함수
  const handleGetMusicDate = () => {
    dispatch(getMusicDate());
  };

    return (
        <MusicBoxContainer>
        <h1>TOP <span>100</span></h1>
        <h2 onClick={handleGetMusicDate}>2023.07.13 <span>인기차트</span></h2>
        <MusicBoxList/>
        </MusicBoxContainer> 
    );
};

export default MusicBox;