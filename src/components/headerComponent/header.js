import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
     <div className="App">
        <header>
            <div className="logo">
            <Link to="/">Landscape</Link>
            </div>

            <nav>
                <ul>

                    <li className ="first">
                        <Link to="/Design">Design A Plant</Link>
                    </li>

                    <li className ="mid">
                        <Link to="/Collection">Collection</Link>
                    </li>

                    <li className ="mid">
                        <Link to="/Spec">Specifications</Link> 
                    </li>

                    <li className ="mid">
                        <Link to="/Buy">How to purchase</Link> 
                    </li>

                    <li className="last">
                    <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
     
     
     </div>
    );
  }
}

export default Header;
