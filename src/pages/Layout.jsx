import React from 'react';
import { Outlet } from 'react-router-dom';
import { CyworldWrap } from '../components/styled/cyworldStyle';
import CyworldHeader from '../components/cyworld/CyworldHome/CyworldHeader.jsx';
import CyworldFooter from '../components/cyworld/CyworldHome/CyworldFooter.jsx';

const Layout = () => {
    return (
        <CyworldWrap>
            <CyworldHeader />
                <main className="main">
                    <Outlet />
                </main>
            <CyworldFooter />
        </CyworldWrap>
    );
};

export default Layout;