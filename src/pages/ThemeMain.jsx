import React from 'react';
import { CyworldDotoriThemeMain } from '../components/styled/cyworldStyle';
import { BiSearchAlt, BiSearch } from 'react-icons/Bi';
import { CgSearch } from 'react-icons/Cg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; 
const ThemeMain = () => {
    return (
        <CyworldDotoriThemeMain>
            <div className="inner">
                <div className="search-box">
                    <input type="text" />
                    <button><BiSearchAlt/></button>
                    {/* <button><BiSearch/></button> */}
                </div>
                <div className="visual">
                    <img src="/images/dotoristore/theme_visual.jpeg" alt="축싸이월드오픈" />
                </div>
                <div className="collection">
                    <div className="left-box box">
                        <strong>여긴 강조할 문구</strong>
                        <p>여기는 설명문구여기는 설명문구여기는 설명문구여기는 설명문구</p>
                        <span>#시나모롤</span>
                        <span>#산리오프로젝트</span>
                    </div>
                    <div className="center-box box">
                        <div><img src="" alt="" /></div>
                    </div>
                    <div className="right-box box">
                        <div><img src="" alt="" /></div>
                        <div><img src="" alt="" /></div>
                    </div>
                </div>
                <div className="hot-prod prod-box">
                    <h3>인기상품</h3>
                    <div className="category">
                        <button>전체</button>
                        <button>테마</button>
                        <button>미니룸</button>
                    </div>
                    <Swiper navigation={true} modules={[Navigation]} slidesPerView={3} spaceBetween={25} className="swiper-miniroom">
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                    </Swiper>
                    <button>더 알아보기</button>
                </div>
                <div className="new-prod prod-box">
                    <h3>새로 나왔어요</h3>
                    <div className="category">
                        <button>전체</button>
                        <button>테마</button>
                        <button>미니룸</button>
                    </div>
                    <Swiper  navigation={true} modules={[Navigation]} slidesPerView={3} spaceBetween={25} className="swiper-miniroom">
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                        <SwiperSlide className='miniroom-item'><img src="/images/dotoristore/theme/miniroom16.jpeg" alt="miniroom" /><strong></strong><p></p></SwiperSlide>
                    </Swiper>
                    <button>더 알아보기</button>
                </div>
                




            </div>
        </CyworldDotoriThemeMain>
    );
};

export default ThemeMain;