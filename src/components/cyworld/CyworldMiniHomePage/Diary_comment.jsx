
import Diary_comItem from './Diary_comItem';



const Diary_comment = ({comment}) => {

    return (
        <>
            <div className='diary-comment'>
                <ul className="com-list">
                    {
                        comment.map(comItem => <Diary_comItem key={comItem.no} comItem={comItem}/>)
                    }
                </ul>
                <div className="com-input" >
                    <p>댓글</p>
                    <input type="text" />
                    <button>확인</button>
                </div>
            </div>            
        </>
    );
};

export default Diary_comment;