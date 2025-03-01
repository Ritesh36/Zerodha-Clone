import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                {/* <img src='/images/homeHero.png' alt='Hero' className='mb-5'/> */}
                <h1 className='mt-5 mb-4'>Open a Zerodha account</h1>
                <p className='fs-5 mb-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.  </p>
                <button className='p-2 btn btn-primary fs-5' style={{width: "18%", margin: "0 auto", textDecoration: "underline"}}>Sign up for free</button>
            </div>
        </div>
    )
}

export default OpenAccount;