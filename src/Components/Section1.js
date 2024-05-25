import React from "react";
import "./Home.css";
import star from "./image/motionarteffect-img4.png";
import one from "./image/motionarteffect-img2.png";
import two from "./image/motionarteffect-img1.png";
import three from "./image/motionarteffect-img3.png";
import wand from "./image/motionarteffect-img5.png";
import cd2 from "./image/motionarteffect-img10.png";
import cd1 from "./image/motionarteffect-img11.png";
import cd3 from "./image/motionarteffect-img8.png";
import card4a from "./image/motionarteffect-img9.png";
import card4b from "./image/motionarteffect-img6.png";
import card4c from "./image/motionarteffect-img7.png";

import Card from 'react-bootstrap/Card';


function Section1(){
return(
<div className="sec1body">

<div className="sec1heading" style={{fontFamily:"Outfit, sans-serif"}}>Trusted by thousands of users around the world</div>

<div style={{paddingTop:"52px"}} className="star">
<section>

      <div className="container-fluid">
    <div className="row">

      <div className="feature-box1 col">
      <table>
        <tr>
          <td>
          <img src={one} alt="leaf"></img>
          </td>
          <td>
         <div style={{paddingTop:"25px"}}><div style={{paddingLeft:"7px",paddingBottom:"20px"}}><img src={star} alt="star"></img></div>
        <div className="Rating" style={{paddingLeft:"10px"}}><p>4.5 Score, 9 Reviews</p></div></div>
          </td>
        </tr>
      </table>
      </div>

      <div className="feature-box3 col">
      <table>
        <tr>
          <td>
         <div className="img1"><img src={two} alt="G2"></img></div>
          </td>
          <td>
         <div style={{paddingTop:"25px"}}><div style={{paddingLeft:"7px",paddingBottom:"20px"}}><img src={star} alt="star"></img></div>
        <div className="Rating" style={{paddingLeft:"10px"}}><p>4.5 Score, 9 Reviews</p></div></div>
          </td>
        </tr>
      </table>
      </div>

      <div className="feature-box2 col">
      <table>
        <tr>
          <td>
          <img src={three} alt="w"></img>
          </td>
          <td>
         <div style={{paddingTop:"25px"}}><div style={{paddingLeft:"7px",paddingBottom:"20px"}}><img src={star} alt="star"></img></div>
        <div className="Rating" style={{paddingLeft:"10px"}}><p>4.5 Score, 9 Reviews</p></div></div>
          </td>
        </tr>
      </table>
      </div>
      
    </div>
    </div>
  </section>
</div>

<div className="wand">
<section>
<div style={{paddingTop:"110px",paddingLeft:"40px"}} className="container-fluid1">
<div className="row">
<div className="col wandcol">
<div ><h2 className="wandhead1" style={{fontFamily:"Sora, sans-serif"}}>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2></div>
<div style={{paddingTop:"20px",paddingBottom:"7px"}}><p className="wandpara" style={{fontFamily:"Outfit, sans-serif"}}>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p></div>
<a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891" target="_blank"><button className="purchase-envato">Purchase From Envato &nbsp;&nbsp; 🡢</button></a>

</div>
<div className="col wandcol1">
<img className="colimg" src={wand} alt="magic_wand"></img>

</div>
</div>
</div>
</section>
</div>

<div className="cad">
<div className="cards">
<div className="cardshead"><h1 className="chead" style={{fontFamily:"Sora, sans-serif"}}>Apply On Any Section Or Enable For Whole Page</h1></div>
</div>
<div className="cad1">
<section>
<div className="container-fluid2">
<div className="row">
<div className="col c1">
<Card className="card border-dark" style={{backgroundColor:"#0E0F19", borderRadius:"15px",background:"linear-gradient(180deg, #140D25 30%,#211A31 50%)"}}>
<div className="cd1">
<Card.Body>
        <div className="cardTitle"><Card.Title style={{fontSize: "25px",paddingTop: "15px",fontFamily:"Sora,sans-serif"}}>Apply On Section</Card.Title></div>
        <div className="cardText">
        <Card.Text>
        Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. 
        </Card.Text>
        <img className="cdimg" style={{paddingRight:"10px",paddingTop:"20px",paddingBottom: "10px"}} src={cd1} alt="card1"></img>
        </div>
      </Card.Body>
      </div>
    </Card>
</div>
<div className="col c2">
<Card className="card border-dark" style={{backgroundColor:"#0E0F19", borderRadius:"15px",background:"linear-gradient(180deg, #140D25 30%,#211A31 50%)"}}>
<div className="cd1" style={{paddingLeft:"15px"}}>
<Card.Body >
        <div className="cardTitle" ><Card.Title style={{fontSize: "25px",paddingTop: "15px",fontFamily:"Sora,sans-serif"}}>Apply On Page</Card.Title></div> 
        <div className="cardText">
        <Card.Text>
        Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.
        </Card.Text>
        <img className="cdimg" style={{paddingRight:"10px",paddingTop:"20px",paddingBottom: "10px"}} src={cd2} alt="card2"></img>
        </div>
      </Card.Body>
      </div>
    </Card>

</div>
    </div>
</div>
    </section>
</div>
</div>


<section>
<div className="hey">
<Card className="card3 border-dark" style={{ backgroundColor:"#0E0F19", borderRadius:"15px",background:"linear-gradient(180deg, #140D25 30%,#211A31 50%)"}}>
<div className="cd3" style={{paddingLeft:"15px"}}>
<Card.Body >
        <div className="card3Title" ><Card.Title style={{fontSize: "30px",paddingTop: "15px",fontFamily:"Sora,sans-serif"}}>Supported by All Popular Browsers
</Card.Title></div> 
        <div className="card3Text">
        <Card.Text>
        Rest assured, Motion Art is designed to be compatible with all major web browsers.
        </Card.Text>
        <div className="cd31img">
        <img className="cd3img" style={{paddingRight:"10px",paddingTop:"20px",paddingBottom: "10px",fontFamily:"Outfit,sans-serif"}} src={cd3} alt="card2"></img>
        </div>
        </div>
      </Card.Body>
      </div>
    </Card>

    </div>
</section>

<div className="cardsa">
<div className="cardsheada"><h1 className="cheada" style={{fontFamily:"Sora,sans-serif"}}>An All-Round Plugin With Powerful Features</h1></div>
<div className="cardpara"><p style={{color:"#B4AEC4",fontFamily:"Sora,sans-serif"}}>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p></div>
</div>

<div className="cardabc">
<section>

      <div className="container-fluid">
    <div className="row">

      <div className="c41 col">
      <Card className="card4 border-dark" style={{ backgroundColor:"#0E0F19", borderRadius:"15px",background:"linear-gradient(180deg, #140D25 30%,#211A31 50%)"}}>
<div className="cd4" style={{paddingLeft:"15px"}}>
<Card.Body >
<div className="cd41img">
        <img className="cd4img" style={{paddingTop:"15px",paddingBottom: "10px"}} src={card4a} alt="card4a"></img>
        </div>
        <div className="card4Title" ><Card.Title style={{fontSize: "25px",paddingTop: "15px"}}>Light Weight
</Card.Title></div> 
        <div className="card4Text">
        <Card.Text>
        Motion Art for Elementor is designed to be lightweight.
        </Card.Text>
        </div>
      </Card.Body>
      </div>
    </Card>

      </div>

      <div className="c42 col">
      <Card className="card4 border-dark" style={{ backgroundColor:"#0E0F19", borderRadius:"15px",background:"linear-gradient(180deg, #140D25 30%,#211A31 50%)"}}>
<div className="cd4" style={{paddingLeft:"15px"}}>
<Card.Body >
<div className="cd41img">
        <img className="cd4img" style={{paddingRight:"10px",paddingTop:"20px",paddingBottom: "10px"}} src={card4b} alt="card4b"></img>
        </div>
        <div className="card4Title" ><Card.Title style={{fontSize: "25px",paddingTop: "15px"}}>100% Responsive
</Card.Title></div> 
        <div className="card4Text">
        <Card.Text>
        Create a consistent visual experience across all devices.
        </Card.Text>
        </div>
      </Card.Body>
      </div>
    </Card>

      </div>

      <div className="c43 col">
      <Card className="card43 border-dark" style={{ backgroundColor:"#0E0F19", borderRadius:"15px",background:"linear-gradient(180deg, #140D25 30%,#211A31 50%)"}}>
<div className="cd4" >
<Card.Body >
<div className="cd41img">
        <img className="cd4img" style={{paddingRight:"10px",paddingTop:"10px",paddingBottom: "10px"}} src={card4c} alt="card4c"></img>
        </div>
        <div className="card4Title" style={{paddingLeft:"15px"}} ><Card.Title style={{fontSize: "25px",paddingTop: "15px"}}>User Friendly Interface
</Card.Title></div> 
        <div className="card4Text" style={{paddingLeft:"15px"}}>
        <Card.Text>
        Ensure a smooth experience for both applicants and administrators.
        </Card.Text>
        </div>
      </Card.Body>
      </div>
    </Card>

      </div>
      
    </div>
    </div>
  </section>
</div>

<div className="footer">
            <span className="fotters">© 2023 Copywrite. All rights reserved by QodeMatrix</span>
            <span className="footer2">
                <a href="#">Documentation</a>
                <a href="#">Support</a>
            </span>
        </div>



</div>
);
}

export default Section1;