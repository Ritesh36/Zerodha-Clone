import React from 'react';
import Menu from './Menu';
import '../index.css';

const TopBar = () => {
    return(
        <div className="topbar-container">
            <div className='indices-container'>
                <div className='nifity'>
                    <p className='index'>NIFITY 50</p>
                    <p className='index-points'>{100.2}</p>
                    <p className='percent'></p>
                </div>
                <div className='sensex'>
                    <p className='index'>SENSEX</p>
                    <p className='index-points'>{100.2}</p>
                    <p className='percent'></p>
                </div>
            </div>
            <Menu />
        </div>
    )
};

export default TopBar;