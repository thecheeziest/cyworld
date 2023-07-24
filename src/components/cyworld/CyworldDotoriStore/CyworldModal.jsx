import React from 'react';
import { Icon } from '@iconify/react';
import { MusicModalWr  } from '../../styled/cyworldStyle';

const CyworldModal = ({isOpen,onClose,item}) => {
    const {title,singer,music_video} = item
    if (!isOpen) return null;
    
    return (
        <MusicModalWr className="MusicModa">
        <div className="ModalBg"></div>
        <div className="ModalPopup">
            <h2>곡: {title}</h2>
            <div>
            <iframe
            width="624"
            height="416"
            src={music_video}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
                </div>
                <p>가수 :{singer}</p> 
                <span>
                <i onClick={onClose}><Icon icon="memory:checkbox-cross" width="40" /></i>
                </span>
        </div>
    </MusicModalWr>
    );
};

export default CyworldModal;