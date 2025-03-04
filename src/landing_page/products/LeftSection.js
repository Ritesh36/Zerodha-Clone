import React from "react";

function LeftSection({imgUrl, productDescription, productName, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-6" style={{paddingLeft: "10%", paddingTop: "2%"}}>
                    <img src={imgUrl} alt="product_img" style={{width: "85%"}}/>
                </div>

                <div className="col-6" style={{marginTop: "40px", paddingLeft: "10%"}}>
                    <h1 className="mb-4">{productName}</h1>

                    <div style={{width: "80%"}}>
                    <h6 style={{lineHeight: "1.5", fontSize: "18px"}}>{productDescription}</h6>
                    </div>
                    
                    <div>
                        <a href="">Try demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href="" style={{marginLeft: "50px"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>

                    <div className="mt-3">
                        <img src={googlePlay} alt="img" />
                        <img src={appStore} alt="img" style={{marginLeft: "50px"}}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default LeftSection;