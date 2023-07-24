
// import { useSelector } from 'react-redux';
import { MusicBoxListContainer} from '../../styled/MusicBoxStyle';
import { music } from '../../../assets/api/data'
import MusicBoxItem from './MusicBoxItem';


const MusicBoxList = () => {
    
    return (
        <MusicBoxListContainer className="MusicBoxList">
        <table>
            <colgroup>
                <col className="w1" />
                <col className="w2" />
                <col className="w3" />
                <col className="w4" />
                <col className="w5" />
                <col className="w6" />                
                <col className="w7" />                
                <col className="w8" />                
            </colgroup>
            <thead>
                <tr>
                    <th>순위</th>
                    <th>곡정보</th>
                    <th>앨범</th>
                    <th>좋아요</th>
                    <th>듣기</th>
                    <th>담기</th>
                    <th>동영상</th>
                    <th>상승/하락</th>
                </tr>
            </thead>
            <tbody>
               
             {
                music.map(item => <MusicBoxItem key={item.id} item={item}/>)
                // console.log(data)
             }
             
            </tbody>
        </table>
        </MusicBoxListContainer>
    );
};

export default MusicBoxList;