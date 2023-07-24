import React from 'react';
import { Link } from 'react-router-dom';

const CyworldHeader = () => {
    return (
        <header>
            <h1><Link to="/"><img src="./images/logo.png" alt="cyworld" /></Link></h1>
        </header>
    );
};

export default CyworldHeader;