import React from "react";

function Hero() {
  return (

    <div className="container">
      <div className="row p-5 border-bottom m-5 text-center">
        <h1>Pricing</h1>
        <h3 className="m-2 fs-5 text-muted">
          Free equity investments and flat traday and F&O trades
        </h3>
      </div>

      <div className="row p-5">

        <div className="col-4 text-center p-5">
          <img src="images\pricing-eq.svg" style={{ width: "80%" }}></img>
          <h2 className="p-3">Free equity delivery</h2>
          <p className="text-muted fs-6">
            All equity delivery investments (NSE, BSE), are absoulately free-
            &#8377; 0 brokerage
          </p>
        </div>

        <div className="col-4 text-center p-5">
          <img src="images\other-trades.svg" style={{ width: "80%" }}></img>
          <h2 className="p-3">Intraday and F&O trades</h2>
          <p className="text-muted fs-6">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.{" "}
          </p>
        </div>

        <div className="col-4 text-center p-5">
          <img src="images\pricing-eq.svg" style={{ width: "80%" }}></img>
          <h2 className="p-3">Free direct MF</h2>
          <p className="text-muted fs-6">
            All direct mutual fund investments <br />
            are absolutely free — ₹ 0
            commissions <br /> & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
