
import {CyworldModalBox} from '../../styled/CyworldStyle'

const CyworldModal = ({music,onClose}) => {
    const {title,singer,key} = music
    return (
        <CyworldModalBox className="Modal">
        <div className="bg" onClick={onClose}></div>
        <div className="popup">
            <h2>곡: {title} </h2>
            <div>
            <iframe width="956" height="538" src="https://www.youtube.com/embed/iTK3E1zooRY" title="[Playlist] 틀어놓으면 그냥 기분이 좋아지는 노래모음 플레이리스트 안 좋아지면 환불해드림 ㅋ 광고없음" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <p>가수 :{singer}</p> 
                <span>
                <i onClick={onClose}> X </i>
                </span>
        </div>
    </CyworldModalBox>
    );
};

export default CyworldModal;