import { CyworldDotoriThemePg } from '../components/styled/cyworldStyle';
import { BiSearchAlt } from 'react-icons/Bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import Theme_prodList from '../components/cyworld/CyworldDotoriStore/Theme_prodList';
import Theme_cartList from '../components/cyworld/CyworldDotoriStore/Theme_cartList';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Theme = () => {
    const {carts} = useSelector(state => state.theme)
    const [isHeader, setIsHeader] = useState(false)
    const [isShow, setIsShow] = useState({cart: false, search: false})
    const onSearch = () => setIsShow({...isShow, search: !isShow.search})
    const onCart = () => setIsShow({...isShow, cart: !isShow.cart})
    const onScroll = () => window.scrollY >= 100 ? setIsHeader(true) : setIsHeader(false)
    window.addEventListener('scroll', onScroll);

    return (
        <CyworldDotoriThemePg>
            <div className="inner">
                <div className={`sub-header ${isHeader && 'fixed'}`} >
                    <ul>
                        <li>ALL</li>
                        <li>MINIROOM</li>
                        <li>SKIN</li>
                    </ul>
                    <div className="all-menu">
                        <button>LOGOUT</button>
                        <button onClick={onCart}>CART</button>
                        <button onClick={onSearch}>SEARCH</button>
                        {carts.length > 0 && <span></span>}
                    </div>
                </div>
                {
                    isShow.search 
                    &&
                    <div className='search-box'>
                        <input type="text" />
                        <button><BiSearchAlt className='icon'/></button>
                    </div>
                }
                {
                    isShow.cart
                    &&
                    <Theme_cartList />
                }

                





                <Theme_prodList />
                
            


        </div>
        </CyworldDotoriThemePg>
    );
};

export default Theme;