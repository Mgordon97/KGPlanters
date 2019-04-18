import React, { Component } from 'react';
import Swal from 'sweetalert2'
import YellCube from '../../imgs/CPC Yellow Cube Planter.jpg'
import TurqColumn from '../../imgs/CPC Turquoise COLUMN Planter.png'
import AubSkinnyPillar from '../../imgs/CPC Aubergine SKINNY PILLAR Planter (P).jpg'
import OliveGreenSkinnyVase from '..//..//imgs/CPC Olive Green SKINNY VASE Planter (P).jpg'


class Design extends Component {
  constructor(props) {
    super(props);
    this.imgSelect = this.imgSelect.bind(this);
    this.state = {
      plantImage: YellCube,
      value: {
        plantstyle: "",
        size: "",
        colour: "",
        finish: "",
      }
    };
  }
  
  handleChange = field => event => {
    let targetvalue = event.target.value
    this.setState(prevState => ({
      value: {
        ...prevState.value,
        [field]: targetvalue,
      }
    }))};

  sweetalertFunc() {
    Swal.fire("Design a planter!", "Personalise you product with the dropdown menus below.", "info");
  }

  imgSelect() {
    if(this.state.value.plantstyle === "Column") {
      this.setState(prevState => ({
        ...prevState,
        plantImage: TurqColumn,})
      )}

      else if(this.state.value.plantstyle === "Pillar") {
          this.setState(prevState => ({
            ...prevState,
            plantImage: AubSkinnyPillar,})
              )}

      else if(this.state.value.plantstyle === "Cube") {
          this.setState(prevState => ({
            ...prevState,
            plantImage: YellCube,})
              )}
              
      else if(this.state.value.plantstyle === "Vase") {
          this.setState(prevState => ({
            ...prevState,
            plantImage: OliveGreenSkinnyVase,})
              )}            
  }

  render() {
    return (

      
      <div className="container-fluid">
        <h1>Design A Planter</h1>

        <div className="destext">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div className="start">
          <button className="astext" onClick={this.sweetalertFunc}>
            How to use.
          </button>
        </div>

        
          <div className="select">
            <select name="plantstyle" onChange={this.handleChange("plantstyle")}>
              <option value="">Style</option>
              <option value="Pillar">Pillar</option>
              <option value="Vase">Vase</option>
              <option value="Column">Column</option>
              <option value="Cube">Cube</option>
            </select>

            <select name="size" onChange={this.handleChange("size")}>
              <option size="">Size</option>
              <option size="small">Small</option>
              <option size="medium">Medium</option>
              <option size="large">Large</option>
            </select>

            <select name="Colour" onChange={this.handleChange("colour")}>
              <option value="">Select colour</option>
              <option value="red">Red</option>
              <option value="brown">Brown</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="turquoise">Turquoise</option>
              <option value="grey">Grey</option>
              <option value="white">White</option>
              <option value="black">Black</option>
            </select>

            <select name="Paint Finish" onChange={this.handleChange("finish")}>
              <option value="">Finish</option>
              <option value="matte">Matte</option>
              <option value="paint">Paint</option>
            </select>

            <div className="start">
              <button className="astext" onClick={this.imgSelect}>Go!</button></div>
            </div>
          
          <div className="desimg">
            <img src={this.state.plantImage} alt="placeholder" />
          </div>
        
      </div>
    );
  }
}

export default Design;