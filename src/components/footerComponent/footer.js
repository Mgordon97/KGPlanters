import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
     <div>
        <footer>
            <div className="cop">
            {new Date().getFullYear()} © Kyle Gallagher
            </div>
            
        </footer>
     
     </div>
    );
  }
}

export default Footer;
