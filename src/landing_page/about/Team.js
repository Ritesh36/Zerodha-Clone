import React from "react";

function Team() {
  return (
    <div className="container p-5">
      <div className="row">
        <h1 className="text-center mb-5">People</h1>
        <div className="col-6 text-center">
          <img
            src="images\nithinKamath.jpg"
            alt="image"
            style={{ borderRadius: "50%", width: "45%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <p className="text-muted mt-3">Founder, CEO</p>
        </div>
        <div className="col-6 fs-6 mt-4 mr-5" style={{lineHeight: "1.8"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br/>
            hurdles he faced during his decade long stint as a trader. Today,<br/>
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee<br/>
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
