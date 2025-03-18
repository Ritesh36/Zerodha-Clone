import React from "react";

function Hero() {
  return (
    <div className="container-fluid">
      <div className="row p-5 mt-5" style={{color: "white", backgroundColor: "#387ed1"}}>
        <div className="col-6 p-5 ">
          <h3 className="mb-5" style={{ textDecoration: "underline" }}>
            Support Portal
          </h3>
          <h4 className="mb-5">
            Search for an answer or browse help topics to create a ticket
          </h4>

          <input
            style={{ height: "60px", width: "100%" }}
            placeholder="Eg: How do i activate F&O, why is my order getting rejected..."
          /> 

            <div className="fs-6 mt-3">
                <a href="" style={{color: "white", lineHeight: "2"}}>Track account opening</a> &nbsp; &nbsp;

                <a href="" style={{color: "white", lineHeight: "2"}}>Track segment activation</a> &nbsp; &nbsp;

                <a href="" style={{color: "white", lineHeight: "2"}}>Intraday margins</a> <br />

                <a href="" style={{color: "white", lineHeight: "2"}}>Kite user manual</a> 
            </div>
        </div>
        <div className="col-6 mt-5">
            <h6 style={{textAlign: "right" , textDecoration: "underline", marginRight: "80px"}}>Track Tickets</h6>
            <div style={{lineHeight: "2", marginTop: "90px", marginLeft: "50px", fontSize: "18px"}}>
            <h5 className="mb-2">Featured</h5>
                <ol>
                    <li><a href="" style={{color: "white"}}>Surveillance measure on scrips - March 2025</a></li>
                    <li><a href="" style={{color: "white"}}>Current Takeovers and Delisting – March 2025</a></li>
                </ol>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
