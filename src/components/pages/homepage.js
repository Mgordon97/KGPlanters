import React, { Component } from 'react';
import img1 from '../../imgs/CPC Aubergine SKINNY PILLAR Planter (P).jpg';
import { Link } from 'react-router-dom';


class Homepage extends Component {
  render() {
    return (
     <div className="container-fluid"> 
       
       
         <h1>Land<span>scape</span></h1>

       

      <div className="hometxt">
        <p>
            In Spring we open the “LANDSCAPE” showroom in L’viv, Ukraine. It will be the first of it’s kind in Ukraine, and our aspiration is that it will be highly innovative 
            in every aspect of design and detail. The showroom will showcase the very best of European outdoor furniture and products, and our target market is very high net 
            worth individuals and hospitality establishments.
        </p>

        <div className="start"><Link to="/Design">Click here to get started...</Link></div>
      </div>
       

       <div className="homeImg">
        <img src={img1} alt="homePlanter" />
       </div>
       
     
     </div>
    );
  }
}

export default Homepage;
