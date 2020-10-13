import  React from "react";
import "./Experi.css"



function Experi(props) {
  return (

    <div className="mycards">
    <div className="overflow">
  <a href="/profile">  <img className="images" src ={props.imgsrc} alt="image" /></a>
   <a href="/login"><img   className="heart"src="https://img.icons8.com/ios-filled/30/000000/like.png"/></a>

    </div>
    <div >
    <button className="button3">SUPER VENDOR</button>
    <img  className="star"src="https://img.icons8.com/emoji/48/000000/star-emoji.png"/>
    <h6 className="sheading">4.8</h6>

    <h5 className="card-title">{props.title}</h5>
    <p className="card-text text-secondary"><strong>{props.info}</strong>/Bridal Makeup</p>
    </div>
    </div>

  );
}
// <strong>₹15000</strong>/Bridal Makeup
export default Experi;
