import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Holdings from './Holdings';
import Orders from './Orders';
import Funds from './Funds';
import Positions from './Positions';
import Summary from './Summary';
import WatchList from './WatchList';
import Apps from './Apps.js';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <WatchList />
            <div className='content'>
                <Routes>
                    <Route exact path='/' element={<Summary />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/holdings' element={<Holdings />} />
                    <Route path='/positions' element={<Positions />} />
                    <Route path='/funds' element={<Funds />} />
                    <Route path='/apps' element={<Apps />} />
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard;