import React from 'react';
import CyworldHeader from '../components/cyworld/CyworldHome/cyworldHeader';
import { Outlet } from 'react-router-dom';
import CyworldFooter from '../components/cyworld/CyworldHome/CyworldFooter';
import { CyworldWrap } from '../components/styled/cyworldStyle';

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