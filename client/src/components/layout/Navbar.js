import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Image from https://www.fda.gov/food/food-safety-during-emergencies/food-safety-and-coronavirus-disease-2019-covid-19
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.css';


class Navbar extends Component {
  render() {
    return (
    
      <Nav
        activeKey="/home" className="justify-content-center" 
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        
        <Nav.Item>
          <Nav.Link href="/home" size="lg">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="justify-content-center">
          <Nav.Link eventKey="link-1" size="lg">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item className="justify-content-center">
          <Nav.Link eventKey="link-2">Forum</Nav.Link>
        </Nav.Item>
        
      </Nav>
      
    );
  }
}
export default Navbar;
