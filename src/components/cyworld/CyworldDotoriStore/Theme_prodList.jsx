import {themeData} from '../../../assets/api/dotoriThemeData.js'
import Theme_ProdItem from './Theme_ProdItem';

const Theme_prodList = () => {
    return (
        <div className="prod-list"> 
            <h3>MINIROOM</h3>
            <p className='length'>총 {themeData.length}개의 상품</p>
                <ul>
                    {
                        themeData.map(item => <Theme_ProdItem key={item.id} item={item} />)
                    }
                </ul>


            
        </div>
    );
};

export default Theme_prodList;