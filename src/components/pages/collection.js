import React, { Component } from 'react';
import Item from '../item';
import AubSkinnyPlant1 from '../../imgs/CPC Aubergine SKINNY PILLAR Planter (P).jpg'
import AubSkinnyPlant2 from '../../imgs/CPC Aubergine SKINNY PILLAR Planter.png'
import OliveSkinnyVase from '../../imgs/CPC Olive Green SKINNY VASE Planter.png'
import TurqColumn from '../../imgs/CPC Turquoise COLUMN Planter (P).jpg'
import GreyColumn from '../../imgs/Silver Grey COLUMNS (P).jpg'

class Collection extends Component {
  render() {
    return (
     <div className="container-fluid"> 
       
       <h1>
         The Collection
       </h1>

       <div className="colltext">
          Our collection of products within the Landscape exhibition.
       </div>
       <div>

       </div>
       
       <Item image={AubSkinnyPlant1} title={"Aubergine Skinny Planter"}/>
       <Item image={AubSkinnyPlant2} title={"Aubergine Skinny Planter 2"}/>
       <Item image={OliveSkinnyVase} title={"Olive Skinny Vase"}/>
       <Item image={TurqColumn} title={"Turquoise Skinny Planter"}/>
       <Item image={GreyColumn} title={"Silver Grey Columns"}/>
       <Item title={"Yellow Cube Planter"}/>
       <Item />
       <Item />

     </div>
    );
  }
}

export default Collection;