import React from "react";

function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-5">
                <h3 className="text-muted mb-5 fs-4">To create a ticket, select a relevant topic</h3>
                <div className="col-4 p-4">
                    <h5 style={{textDecoration: "underline"}}> <i class="fa-solid fa-plus"></i>&nbsp; Account Opening </h5>
                    <div className="fs-6" style={{lineHeight: "2.5", marginLeft: "30px"}}>
                    <a href="">Resident individual</a> <br />
                    <a href="">Minor</a>  <br />
                    <a href="">Non Resident Indian (NRI)</a> <br />
                    <a href="">Company, Partnership, HUF and LLP</a> <br /> 
                    <a href="">Glossary</a>
                    </div>
                </div>
                <div className="col-4 p-4">
                    <h5 style={{textDecoration: "underline"}}> <i class="fa-regular fa-user"></i>&nbsp; Your Zerodha Account  </h5>
                    <div className="fs-6" style={{lineHeight: "2.5", marginLeft: "30px"}}>
                    <a href="">Your Profile</a> <br />
                    <a href="">Account modification</a>  <br />
                    <a href="">Client Master Report (CMR) and Depository Participant (DP)</a> <br />
                    <a href="">Nomination</a> <br /> 
                    <a href="">Transfer and conversion of securities</a>
                    </div>
                </div>
                <div className="col-4 p-4">
                    <h5 style={{textDecoration: "underline"}}> <i class="fa-solid fa-lines-leaning"></i>&nbsp; Kite </h5>
                    <div className="fs-6" style={{lineHeight: "2.5", marginLeft: "30px"}}>
                    <a href="">IPO</a> <br />
                    <a href="">Trading FAQs</a>  <br />
                    <a href="">Margin Trading Facility (MTF) and Margins</a> <br />
                    <a href="">Charts and orders</a> <br /> 
                    <a href="">Alerts and Nudges</a> <br />
                    <a href="">General</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;