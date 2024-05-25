import React from "react";
import "./Home.css";
import { DiEnvato } from "react-icons/di";
import envato from "./image/envato-market.jpg";
function Navbar(){
return(
<div className="bodyNav">


<nav className="navbar navbar-expand-lg navbar-dark navbar-fixed-top data-bs-theme=dark">
<div className="container-fluid">
<a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891?_gl=1*1lu63wx*_ga*MTM3NzY5MzgwNS4xNzE2MzM5NDUw*_ga_ZKBVC1X78F*MTcxNjYyMTc0MS4xMC4xLjE3MTY2MjQ0OTMuMC4wLjA.&_ga=2.206689685.767182737.1716339450-1377693805.1716339450" className="navbar-brand">
<div className="navbar-brand-text"><span style={{color:"#81B441",paddingTop:"5px",width:"25px",height:"20px",marginTop:"3px"}}><DiEnvato /></span><span className="envato">envato</span><span className="market">market</span></div>
    </a>
<a href="https://codecanyon.net/checkout/102416617/create_account?_ga=2.203209239.767182737.1716339450-1377693805.1716339450" target="_blank">
<button className="btn btn-dark btn-mid nav-button"  type="button" role="button"> Buy now</button>
</a>
</div>
</nav>
</div>
);
}

export default Navbar;