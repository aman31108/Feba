import React from 'react';
import Experi from './Experi';
// import Cards from './Table';


function Group() {
  return (
 <>
<h5 className="heading2"><b>Bridal Makeup Artist</b></h5>
<h5 className="heading2">showing <strong>160+results</strong></h5>
    <div >
    <div className="row">

    <div className="col-md-3"><Experi imgsrc={"https://www.feba.co.in/media/BridalImages/315/123/15984428333010.jpg"} title="Jssmakeuovers" info="15000"/></div>
    <div className="col-md-3"><Experi imgsrc={"https://www.feba.co.in/media/BridalImages/272/123/15921438090390.jpg"} title="Nickymua" info="28500"/> </div>
    <div className="col-md-3"><Experi imgsrc={"https://www.feba.co.in/media/BridalImages/307/123/16001919824310.jpg"} title="ManuDheeraj MakeupArtist"  info="15000"/></div>
    <div className="col-md-3"><Experi imgsrc={"https://www.feba.co.in/media/BridalImages/125/123/16025667795180.jpg"} title="Makeup by The Beauty and The Blus" info="10000"/> </div>


    </div>




    </div>
</>
  );
}

export default Group;
