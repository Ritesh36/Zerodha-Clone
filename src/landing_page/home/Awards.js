import React from 'react';

const Awards = () => {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='images\largestBroker.svg' alt='largest_broker'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order
                        volumes in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-6 mt-3'>
                            <ul>
                                <li>
                                    <p>Futuers and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 mt-3'>
                            <ul>
                            <li>
                                <p>Futuers and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                            </ul>
                        </div>
                        <img src='images/pressLogos.png' alt='press_image' style={{width: "90%"}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;