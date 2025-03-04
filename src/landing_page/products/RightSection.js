import React from "react";

function RightSection({imgUrl, productDescription, productName, learnMore}) {
    return (
        <div className="container p-5 mt-4">
            <div className="row">
                
                <div className="col-6" style={{marginTop: "10%", paddingLeft: "30px"}}>
                    <h1 style={{ marginBottom: "20px"}}>{productName}</h1>

                    <div style={{width: "70%"}}>
                    <h6 style={{lineHeight: "1.5", fontSize: "18px"}}>{productDescription}</h6>
                    </div>

                    <div className="mt-3">
                        <a href="">Learn More <i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>

                <div className="col-6 mb-3" style={{paddingRight: "20px"}}>
                    <img src={imgUrl} alt="product_img" />
                </div>

            </div>
        </div>
    );
}

export default RightSection;