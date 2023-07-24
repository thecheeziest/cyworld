import { BiPlayCircle } from "react-icons/Bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MusicBox from "../components/cyworld/CyworldDotoriStore/MusicBox";
/* import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; */

const BgmStore = () => {
    return (
        <div className='store-bgm'>
            <div className="inner">
                
                {/* 최신앨범 영역 */}
                <div className="new-music">        
                    <div className="sub-title">
                        <h3>최신음악</h3>
                        <p><span>Scroll</span><span></span></p>
                    </div> 
                    <div className="swiper-wrap">
                        <Swiper /* navigation={true} modules={[Navigation]} */ slidesPerView={6} spaceBetween={25} className="new-list">
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://cdnimg.melon.co.kr/cm2/album/images/112/81/456/11281456_20230706180841_500.jpg/melon/resize/260/quality/80/optimize" alt="" /><strong>NewJeans 'Super Shy'</strong><p>NewJeans</p></SwiperSlide>
                        </Swiper>
                    </div>
                    <MusicBox/>
                </div>
                
                {/* 배너 영역 */}
                <div className="banner">
                    <img src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20230707062956.jpg/melon/quality/80" alt="" style={{width:'100%', height:'100px'}}/>
                </div>

                {/* 차트 영역 */}
                <div className="chart"></div>

                {/* MV 영역 */}
                <div className="music-video">
                    <div className="sub-title">
                        <h3>MV</h3>
                        <p><span>Scroll</span><span></span></p>
                    </div>
                    <div className="swiper-wrap">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={25}   
                            className="mv-list"                        
                            // modules={[Pagination]}
                            // pagination={{clickable: true}}                                                
                        >
                            <SwiperSlide className='mv-item'><img src="./images/sample4.jpeg" alt="" /><strong>Super Shy</strong><p>NewJeans</p><BiPlayCircle className='i'/></SwiperSlide>
                            <SwiperSlide className='mv-item'><img src="./images/sample4.jpeg" alt="" /><strong>Super Shy</strong><p>NewJeans</p><BiPlayCircle className='i'/></SwiperSlide>
                            <SwiperSlide className='mv-item'><img src="./images/sample4.jpeg" alt="" /><strong>Super Shy</strong><p>NewJeans</p><BiPlayCircle className='i'/></SwiperSlide>
                            <SwiperSlide className='mv-item'><img src="./images/sample4.jpeg" alt="" /><strong>Super Shy</strong><p>NewJeans</p><BiPlayCircle className='i'/></SwiperSlide>
                            <SwiperSlide className='mv-item'><img src="./images/sample4.jpeg" alt="" /><strong>Super Shy</strong><p>NewJeans</p><BiPlayCircle className='i'/></SwiperSlide>
                            <SwiperSlide className='mv-item'><img src="./images/sample4.jpeg" alt="" /><strong>Super Shy</strong><p>NewJeans</p><BiPlayCircle className='i'/></SwiperSlide>
                            <SwiperSlide className='mv-item'><img src="./images/sample4.jpeg" alt="" /><strong>Super Shy</strong><p>NewJeans</p><BiPlayCircle className='i'/></SwiperSlide>
                            <SwiperSlide className='mv-item'><img src="./images/sample4.jpeg" alt="" /><strong>Super Shy</strong><p>NewJeans</p><BiPlayCircle className='i'/></SwiperSlide>
                            <SwiperSlide className='mv-item'><img src="./images/sample4.jpeg" alt="" /><strong>Super Shy</strong><p>NewJeans</p><BiPlayCircle className='i'/></SwiperSlide>
                            <SwiperSlide className='mv-item'><img src="./images/sample4.jpeg" alt="" /><strong>Super Shy</strong><p>NewJeans</p><BiPlayCircle className='i'/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BgmStore;