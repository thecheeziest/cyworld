
const MusicBoxItem = ({item}) => {
    const {rank, id, poster, done, like, state, album,title,singer}= item
    return (
        <tr>
        <td>{rank}</td>
        <td className="img">
            <img src={poster} alt="" width="75" height="75" />
            <p className="img">
            <span>{title}</span>
                {singer}                 
            </p>
        </td>
        <td>
            {album}
        </td>
        <td className="like">
            {/* <i onClick={()=> onLike(id)}>
            {
                done ? <FcLike /> :<FcLikePlaceholder/>
            }
            </i>
           {Numeral(like).format(0,0)}
           하트/숫자표시 */}
           <i className="xi-heart-o" style={{color:'tomato'}}></i>
        </td>
        <td>
            <i className='xi-play-circle-o' style={{color:'tomato'}}> </i>
        </td>
        <td>
            <i className='xi-plus-thin'></i>
        </td>
        <td>
            <i className='xi-videocam-o' style={{color:'tomato'}} >
            </i>
        </td>
        <td>
            {/* {state === '상승' && <FcUp style={{color:'red'}}/>}
            {state === '유지' && <FcMinus color='blue' />}
            {state === '하강' && <FcUp />} */}
          <i className='xi-arrow-up' style={{color:'tomato'}}> </i>
        <span style={{marginLeft:10}}>
           
        </span>
        </td>
    </tr>
    );
};

export default MusicBoxItem;