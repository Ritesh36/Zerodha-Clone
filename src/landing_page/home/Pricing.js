import React from "react";

function Pricing() {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-4">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price<br /> transparency in India. Flat fees and no hidden charges. </p>
                    <a href="#">see pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                    <div className="col-4">
                        <img src="images\pricing-eq.svg" style={{width: "55%"}} />
                        <p>Free account <br />  &nbsp;opening</p>
                    </div>
                    <div className="col-4">
                        <img src="images\pricing-eq.svg" style={{width: "55%"}} />
                        <p>Free equity<br /> delivery
                        and direct<br /> mutual funds</p>
                    </div>
                    <div className="col-4 mr-3">
                        <img src="images\other-trades.svg" style={{width: "55%"}} />
                        <p>Intraday and
                           F&O</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;