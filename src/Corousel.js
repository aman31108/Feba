import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Carousel } from 'react-bootstrap';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './App.css';
// //
// const photos =[
//   {
//     name:"Photo 1",
//     url: "https://www.feba.co.in/media/BridalImages/315/123/15984428333011.jpg"
//   },
//   {
//     name:"Photo 2",
//     url: "https://www.feba.co.in/media/BridalImages/315/123/15984428333013.jpg"
//   },
//   {
//     name:"Photo 3",
//     url: "https://www.feba.co.in/media/BridalImages/315/123/15984428333012.jpg"
//   }
// ]
//
// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       // arrows: true,
//       slidesToScroll: 0.5,
//       className:"slides"
//     };
//     return (
//       <div className ="corousel">
//
//         <Slider {...settings}>
//           {photos.map((photo) => {
//             return(
//               <div>
//               <img width ="50%" src ={photo.url} />
//               </div>
//             )
//           })}
//         </Slider>
//       </div>
//     );
//   }
// }
function  SimpleSlider() {
  return (

    <div>
    <Carousel>
      <Carousel.Item>
        <img width ="50%"
          className="coroselimg"
          src="https://www.feba.co.in/media/BridalImages/315/123/15984428333011.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
      <img width ="50%"
          className="coroselimg"
          src="https://www.feba.co.in/media/BridalImages/315/123/15984428333011.jpg"
          alt="Third slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img width ="50%"
          className="coroselimg"
          src="https://www.feba.co.in/media/BridalImages/272/123/15921438090390.jpg"
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>


    </div>

);

}

export default  SimpleSlider;
