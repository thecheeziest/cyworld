
import { MusicBoxListContainer} from '../../styled/cyworldStyle';
import { music } from '../../../assets/api/data'
import MusicBoxItem from './MusicBoxItem';
import { useSelector } from 'react-redux';

const MusicBoxList = ({ searchKeyword }) => {
    const like = useSelector((state) => state.music.like);
    const getFilteredMusicList = () => {
      return music.filter(item =>
        item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.singer.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    };
  
    const filteredMusicList = getFilteredMusicList();

    return (
      <MusicBoxListContainer className="MusicBoxList">
        <table>
          <colgroup>
            {/* <col className="w0" /> */}
            <col className="w1" />
            <col className="w2" />
            <col className="w3" />
            <col className="w4" />
            <col className="w5" />
            <col className="w6" />
            <col className="w7" />
          </colgroup>
          <thead>
            <tr>
              <th>순위</th>
              <th>곡정보</th>
              <th>앨범</th>
              <th>좋아요</th>
              <th>담기</th>
              <th>동영상</th>
              <th>상승/하락</th>
            </tr>
          </thead>
           <tbody>
          {/* 검색어에 따라 필터링된 음악 리스트를 표시 */}
          {filteredMusicList.map(item => (
            <MusicBoxItem key={item.id} item={item} like={like} />
          ))}
        </tbody>
        </table>
      </MusicBoxListContainer>
    );
  };
  
  export default MusicBoxList;