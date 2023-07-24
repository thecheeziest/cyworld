import React, { useEffect } from 'react';
import { CyworldMiniNav } from '../../styled/cyworldStyle';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onMenu } from '../../../store/modules/cyworldSlice';

const CyworldMenu = () => {
    const { menuData } = useSelector(state => state.cyworld);
    const { user } = useSelector(state => state.user);
    const { userID } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onMenu(1));
        // 새로고침 될 때마다 홈 메뉴에 on 클래스
      }, []); 

    return (
        <CyworldMiniNav>
            <ul className="gnb">
                {
                    // 현재 접속 user와 미니홈피 주인 id가 다를 때 설정 메뉴 노출 안 함
                    menuData.filter(item => user.emailID !== userID ? item.id !== 7 : item).map(item => <li
                    className={item.on ? "on" : ""} key={item.id}
                    onClick={() => dispatch(onMenu(item.id))} >
                    <Link to={`/${userID}/${item.link}`}>{item.menu}</Link></li>)
                }
            </ul>
        </CyworldMiniNav>
    );
};

export default CyworldMenu;