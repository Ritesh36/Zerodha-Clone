import React from 'react';

function Education() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='images\education.svg' alt='education_image' style={{width: "70%"}} />
                </div>
                <div className='col-6 mt-3'>
                    <h1 className='mb-4'>Free and open market education</h1>
                    <div className='mb-4'>
                        <p>Varsity, the largest online stock market education book in the world <br />covering everything from the basics to advanced trading. </p>
                        <a href='#'>Versity <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div mt-3>
                        <p>TradingQ&A, the most active trading and investment community in<br /> India for all your market related queries. </p>
                        <a href='#'>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;