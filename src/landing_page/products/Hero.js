import React from "react";

function Hero() {
    return (
        <div className="container text-center mt-5 pt-5 border-bottom">
            <div className="row p-5">
                <h1>Technology</h1>
                <h4 style={{lineHeight: "2.5rem"}}>Sleek, modern, and intuitive trading platforms </h4>
                <p style={{lineHeight: "2.5rem"}}>Check out our <a href="#">investment offerings <i class="fa-solid fa-arrow-right-long"></i></a> </p>
            </div>
        </div>
    );
}

export default Hero;