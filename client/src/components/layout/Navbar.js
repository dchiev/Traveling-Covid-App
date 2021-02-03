import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Image from https://www.fda.gov/food/food-safety-during-emergencies/food-safety-and-coronavirus-disease-2019-covid-19
import { Nav } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';




class Navbar extends Component {
  render() {
    return (

      
    
      <nav>
    <div className="nav-wrapper blue">
      <a href="#!" className="brand-logo center">Safe Travels</a>
      <ul className="left hide-on-med-and-down">
        <li><a href="sass.html">Home</a></li>
        <li><a href="badges.html">Components</a></li>
        <li className="active"><a href="collapsible.html">Forum</a></li>
      </ul>
    </div>
  </nav>
      
    );
  }
}
export default Navbar;
