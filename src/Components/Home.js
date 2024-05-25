import React,{useState,useEffect} from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import logo from "./image/MotionArtEffect-logo.png";
import {MobileView,isMacOs,isTablet,isBrowser} from 'react-device-detect';

import {
    Link,
  } from "react-router-dom";

function Home(){

const [width, setWidth] = useState(window.innerWidth);

useEffect(() => {
    setWidth(window.innerWidth);
  });

  return(
    <>
    <div className="web">
    <Navbar />
<a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
  <img className="logo" src={logo} alt="logo"></img>
  <button type="button" className="btn1 btn-outline-light btn-lg download-button"><span className="purchase">Purchase Now</span></button>
</a>
<table>
<tr>
  <td>
  <div className="text1">
<span className="text11">
<p><span className="motion">Transform</span><br/><span className=" motion text111"> Your Website</span></p>
  </span>
    <span className="text12">
  <p>With Motion<br/><span className="text111"> Art Effect</span></p>
  </span>
</div>
 </td>
  <td>
  <div className="head">
<span><span className="heading" style={{fontFamily:"Sora, sans-serif"}}>Attract Your Visitors<br/>Attention With Colorful<br/></span><span className="motion"> Motion Art Effect</span></span>
</div>
  </td>
 </tr>
</table>
<div className="para1"><p style={{fontFamily:"Outfit, sans-serif"}}>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution <br/>for seamlessly integrating captivating animations into your website. </p></div>


<div className="s1"><Section1/></div>
</div>

<div className="web1">
<table>
<tr>
  <td>
  <div className="text2">
<span className="textaa">
<p><span className="motion2"><span className="motion2">Transform</span><span className="textaaa"> Your</span><br/>Website</span></p>
  </span>
    <span className="textab">
  <p>With Motion<span className="text111"> Art Effect</span></p>
  </span>
</div>
</td>
</tr>

<tr> 
  <td>
  <div className="head2">
<span><span className="heading2">Attract Your<br/>Visitors<br/>Attention With <br/>Colorful<br/></span><span className="motion2">Motion Art Effect</span></span>
</div>
  </td>
  </tr>
</table>
<div className="para2"><p>Unleash the power of creativity with Motion <br/>Art for Elementor - your ultimate solution for <br/>seamlessly integrating captivating animations <br/>into your website. </p></div>

<div className="s2"><Section1/></div>
<div className="web3">
<table>
<tr>
  <td>
  <div className="text3">
<span className="textaa1">
<p><span className="motion3"><span className="motion3">Transform</span><span className="textaaa"> Your</span><br/><span className="motion3"> Website</span></span></p>
  </span>
    <span className="textab1">
  <p>With Motion<span className="text111"> Art<br/> Effect</span></p>
  </span>
</div>
</td>

  <td>
  <div className="head3">
<span><span className="heading3">Attract Your Visitors<br/>Attention With Colorful<br/></span><span className="motion3"> Motion Art Effect</span></span>
</div>

  </td>
 </tr>
</table>
<div className="para3"><p>Unleash the power of creativity with Motion Art for Elementor -<br/> your ultimate solution for seamlessly integrating captivating <br/>animations into your website. </p></div>
<div className="s3"><Section1/></div>
</div>
</div>

</>
);

}

export default Home;
