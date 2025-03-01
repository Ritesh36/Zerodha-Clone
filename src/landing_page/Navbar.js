import React from "react";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom fixed-top" style={{backgroundColor: "#FFF"}}>

        <div class="container p-2">
          <img src="images\logo.svg" alt="logo" style={{ width: "15%", marginRight: "40%" }} />

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
                <ul class="navbar-nav  mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                        Signup
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                        About
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                        Product
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                        Pricing
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                        Support
                        </a>
                    </li>
                </ul>
            </form>

          </div>
        </div>
      </nav>
  );
}

export default Navbar;
