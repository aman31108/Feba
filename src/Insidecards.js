import React from 'react';
import './App.css';
import Nav from './Nav';
import Grid from './Grid';
import Line from './Line';
import  SimpleSlider from './Corousel.js';
import Group from './Group';
import Footer from './Footer';

function Insidecards() {
  return (
    <div>
    <Nav />
    <  SimpleSlider />
    <div className="mycard2">
    <div className="overflow">
    </div>
    <div >
    <button className="button3">SUPER VENDOR</button>
    <img  className="star"src="https://img.icons8.com/emoji/48/000000/star-emoji.png"/>
    <h6 className="sheading">4.8</h6>
 <h5 className="page2sheading">BRIDAL MAKEUP ARTIST< /h5>
    <h2 className="card-title">JssMakeuOvers</h2>
    <h6 className="jaipur">Jaipur</h6>

    </div>
    </div>
< Line />
<h4 className="mheading">Album (30+Images)</h4>

<Grid />
< Line />
<div className="revdiv">
<h3 className="mheading">YOUR REVIEW </h3>
<img  className="starR " src="https://img.icons8.com/officexs/26/000000/star.png"/>
<img  className="starR "src="https://img.icons8.com/officexs/26/000000/star.png"/>
<img className="starR " src="https://img.icons8.com/officexs/26/000000/star.png"/>
<img  className="starR "src="https://img.icons8.com/officexs/26/000000/star.png"/>
<img  className="starR "src="https://img.icons8.com/officexs/26/000000/star.png"/>
</div>
< Line />
<Footer />
    </div>
  );
}

export default Insidecards;
