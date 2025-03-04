import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center p-5">
                <h1>The Zerodha Universe</h1>

                <p className="mt-4 mb-5">Extend your trading and investment experience even further with our partner platforms </p>

                <div className="col-4 p-3">
                    <img src="images\zerodhaFundhouse.png" style={{width: "50%"}} />
                    <p className="text-muted text-small mt-3" style={{textDecoration: "underline"}}>Thematic investment platform</p>
                </div>

                <div className="col-4 p-3">
                    <img src="images\sensibullLogo.svg" style={{width: "50%"}}/>
                    <p className="text-muted text-small mt-3" style={{textDecoration: "underline"}}>Option trading platform</p>
                </div>

                <div className="col-4 p-3">
                    <img src="images\tijori.svg" style={{width: "50%"}}/>
                    <p className="text-muted text-small mt-3" style={{textDecoration: "underline"}}>Investment research platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="images\streakLogo.png" style={{width: "50%"}}/>
                    <p className="text-muted text-small mt-3" style={{textDecoration: "underline"}}>Systematic trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="images/smallcaseLogo.png" style={{width: "50%"}}/>
                    <p className="text-muted text-small mt-3" style={{textDecoration: "underline"}}>Thematic investment platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="images\dittoLogo.png" style={{width: "40%"}} />
                    <p className="text-muted text-small mt-3" style={{textDecoration: "underline"}}>Personlised advice</p>
                </div>

                <form className="mt-4">
                    <button className="btn btn-primary fs-5" style={{textDecoration: "underline", padding: "10px 20px"}}>Sign up for free</button>
                </form>
            </div>

        </div>
    );
}

export default Universe;