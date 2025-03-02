import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';  

function NotFound(){
    return (
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
                <h1>404 - Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;