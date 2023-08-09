import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CyworldCart, MusicBoxContainer } from '../../styled/cyworldStyle';
import MusicBoxList from './MusicBoxList';
import { Icon } from '@iconify/react';
import MusicBasket from './MusicBasket';
import { getMusicDate } from '../../../store/modules/musicBoxSlice'; // 수정된 import 구문

const MusicBox = ({ item }) => {
  const { music, date } = useSelector(state => state.music);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isBasketVisible, setIsBasketVisible] = useState(true);
  const cart = useSelector(state => state.music.carts);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getMusicDate());
  }, [dispatch]);

    const handleSearch = () => {
        // 검색어를 MusicBoxList 컴포넌트로 전달
        // filteredMusicList는 검색어에 따라 필터링된 음악 리스트 보여줌
    };
    // 장바구니 보이기/숨기기 함수
    const toggleBasket = () => {
        setIsBasketVisible(!isBasketVisible);
        console.log(isBasketVisible)
    };

    return (
        <MusicBoxContainer>
            <h1>TOP <span>100</span></h1>
            <h2>{date} <span>인기차트</span></h2>
            <div className='searchText'>
                <input
                    type="text"
                    placeholder='제목을 검색해주세요.'
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}/>
                    <button className="searchBtn" onClick={handleSearch}><Icon icon="ion:search" color="#f60" width="30"/></button>
                    <CyworldCart>
                    <button className='cartBtn' onClick={toggleBasket}>
                        <div className='cartCnt'>{cart.length}</div>
                        <p>장바구니</p>
                        <img src="./images/dotoristore/music_cart_btn.gif" alt="" />
                    </button>
                    <div className={`basketList ${isBasketVisible ? '' : 'open'}`}>
                        {/* 장바구니 컴포넌트를 보이거나 숨김 */}
                    <MusicBasket item={music}/>
                    </div>
                </CyworldCart>
            </div>
        <MusicBoxList searchKeyword={searchKeyword} /> {/* 검색어를 MusicBoxList 컴포넌트로 전달 */}
        </MusicBoxContainer> 
    );
};

export default MusicBox;