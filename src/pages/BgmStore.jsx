import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MusicBox from "../components/cyworld/CyworldDotoriStore/MusicBox";
import { CyworldBgmWr } from "../components/styled/cyworldStyle";
/* import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; */



const BgmStore = () => {
    return (
        <CyworldBgmWr>
            <div className="inner">
                
                {/* 최신앨범 영역 */}
                <div className="new-music">        
                    <div className="sub-title">
                        <h3><img src="https://t1.daumcdn.net/cfile/blog/240DBA34553FB98B09" alt="" width={'50px'} height={'50px'}/> 최신음악</h3>
                        {/* <h3>최신음악<img src="https://blog.kakaocdn.net/dn/xkjct/btqzllWS6ul/SMQwG0L5OkLcvnpfdYKr11/img.gif" alt="" width={'80px'} height={'50px'}/></h3> */}
                        
                        <p><span>Scroll</span><span></span></p>
                    </div> 
                    <div className="swiper-wrap">
                        <Swiper /* navigation={true} modules={[Navigation]} */ slidesPerView={6} spaceBetween={25} className="new-list">
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/031/31935.jpg?type=r360Fll&v=20230307034219" alt="" /><strong>SG 워너비 '죄(罪)와 벌(罰)'</strong><p>SG 워너비</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/031/31566.jpg?type=r360Fll&v=20230307034219" alt="" /><strong>버즈 '겁쟁이'</strong><p>버즈</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/033/33233.jpg?type=r360Fll&v=20230307034217" alt="" /><strong>김종국 '제자리 걸음'</strong><p>김종국</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/029/29568.jpg?type=r360Fll&v=20230307034222" alt="" /><strong>채연 '둘이서'</strong><p>채연</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/142/142678.jpg?type=r360Fll&v=20230331114100" alt="" /><strong>원더걸스 'So Hot'</strong><p>원더걸스</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/145/145656.jpg?type=r100Fll&v=20230414182541" alt="" /><strong>BIGBANG (빅뱅) '하루 하루'</strong><p>BIGBANG (빅뱅)</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/135/135373.jpg?type=r360Fll&v=20230331114024" alt="" /><strong>브라운아디드걸스 'LOVE'</strong><p>브라운아이드걸스</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/147/147231.jpg?type=r360Fll&v=20230331114126" alt="" /><strong>원더걸스 'Nobody'</strong><p>원더걸스</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/138/138666.jpg?type=r100Fll&v=20230608183100" alt="" /><strong>MC몽 '서커스 (Feat. 임유경(달래음악단)'</strong><p>MC몽</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/144/144152.jpg?type=r360Fll&v=20230307033943" alt="" /><strong>다비치 '사랑과 전쟁 (Narr. 하하)'</strong><p>다비치</p></SwiperSlide>
                            <SwiperSlide className='new-item'><img src="https://musicmeta-phinf.pstatic.net/album/000/144/144543.jpg?type=r360Fll&v=20230331114111" alt="" /><strong>2AM '이노래'</strong><p>2AM</p></SwiperSlide>
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
                            <SwiperSlide className='mv-item'><iframe width="331" height="185" src="https://www.youtube.com/embed/lmun5PO54VE" title="Wonder Girls(원더걸스) &quot;So Hot&quot; M/V" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <strong>So Hot</strong><p>원더걸스</p></SwiperSlide>
                            <SwiperSlide className='mv-item'><iframe width="331" height="185" src="https://www.youtube.com/embed/Bsj8WEyRV1g" title="TVXQ! 동방신기 &#39;Hi Ya Ya 여름날&#39; MV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <strong>Hi Ya Ya 여름날</strong><p>TVXQ! 동방신기</p></SwiperSlide>
                            <SwiperSlide className='mv-item'><iframe width="331" height="185" src="https://www.youtube.com/embed/NWkS9S8QWm8" title="TVXQ! 동방신기 &#39;O -正.反.合. (정반합)&#39; MV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <strong>O -正.反.合. (정반합)</strong><p>TVXQ! 동방신기</p></SwiperSlide>
                            <SwiperSlide className='mv-item'><iframe width="331" height="185" src="https://www.youtube.com/embed/x6QA3m58DQw" title="SUPER JUNIOR 슈퍼주니어 &#39;쏘리 쏘리 (SORRY, SORRY)&#39; MV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <strong>쏘리 쏘리 (SORRY, SORRY)</strong><p>SUPER JUNIOR 슈퍼주니어</p></SwiperSlide>
                            <SwiperSlide className='mv-item'><iframe width="331" height="185" src="https://www.youtube.com/embed/6SwiSpudKWI" title="Girls&#39; Generation 소녀시대 &#39;소원을 말해봐 (Genie)&#39; MV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <strong>소원을 말해봐 (Genie)</strong><p>Girls' Generation 소녀시대</p></SwiperSlide>
                            <SwiperSlide className='mv-item'><iframe width="331" height="185" src="https://www.youtube.com/embed/49AfuuRbgGo" title="2NE1 - FIRE (Street Ver.) M/V" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <strong>FIRE (Street Ver.)</strong><p>2NE1</p></SwiperSlide>
                            <SwiperSlide className='mv-item'><iframe width="331" height="185" src="https://www.youtube.com/embed/R_AQ7AkVzpM" title="KARA - Honey M/V" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <strong>Honey</strong><p>KARA</p></SwiperSlide>
                            <SwiperSlide className='mv-item'><iframe width="331" height="185" src="https://www.youtube.com/embed/NeDeZUqNiVo" title="BIGBANG - 거짓말(LIE) M/V" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <strong>거짓말</strong><p>BIGBANG</p></SwiperSlide>
                            <SwiperSlide className='mv-item'><iframe width="331" height="185" src="https://www.youtube.com/embed/HtJS32n6LNQ" title="TVXQ! 동방신기 &#39;주문 - MIROTIC&#39; MV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <strong>주문 - MIROTIC</strong><p>TVXQ! 동방신기</p></SwiperSlide>
                            <SwiperSlide className='mv-item'><iframe width="331" height="185" src="https://www.youtube.com/embed/1dYmMoUt66Q" title="SHINee 샤이니 &#39;산소 같은 너 (Love like Oxygen)&#39; MV Dance Ver." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <strong>산소 같은 너 (Love like Oxygen)</strong><p>SHINee 샤이니</p></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </CyworldBgmWr>
    );
};

export default BgmStore;