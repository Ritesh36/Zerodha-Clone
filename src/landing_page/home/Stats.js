import React from "react";

function Stats() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-6">
          <h1 className="mb-5">Trust with confidence</h1>
          <div className="mb-4">
            <h3 className="mb-3">Customer-first always</h3>
            <p className="text-muted">
              That's why 1.5+ crore customers trust Zerodha with
              <br /> ₹4.5+ lakh crores of equity investments and contribute to{" "}
              <br /> 15% of daily retail exchange volumes in India.{" "}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="mb-3">No spam or gimmicks</h3>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push
              <br /> notifications. High quality apps that you use at your
              <br /> pace, the way you like.{" "}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="mb-3">The Zerodha universe</h3>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments
              <br /> in 30+ fintech startups offer you tailored services
              <br /> specific to your needs.{" "}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="mb-3">Do better with money</h3>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              <br /> facilitate transactions, but actively help you do better
              <br /> with your money.{" "}
            </p>
          </div>
        </div>
        <div className="col-6">
          <img
            src="images\ecosystem.png"
            alt="stats"
            style={{ width: "98%" }}
            className="mt-5"
          />
          <a href="#" className="mx-5 mt-2" style={{textDecoration: "none"}}>Explore our products &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
          <a href="#" className="mx-5 mt-2" style={{textDecoration: "none"}}>Try kite demo &nbsp; <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
