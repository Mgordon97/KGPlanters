import React, { Component } from 'react';
import YellCubePlant from '../imgs/CPC Yellow Cube Planter.jpg'


class Item extends Component {
   

  render() {
    const { image = YellCubePlant } = this.props;
    const { title = "Image Title"} = this.props;
    return (

       <div className="item">
           {title}
           <hr/>
           <img src={image} alt="placeholder"></img>
       </div>
     
    );
  }
}

export default Item;