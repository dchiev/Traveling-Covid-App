import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper blue">
          <a href="#!" className="brand-logo center">
            Safe Travels!
          </a>
          <ul className="left hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Searches</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
