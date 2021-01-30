import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh"}} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <Jumbotron fluid>
              <Container>
                <h1>Safe Travels</h1>
                <p>
                   This is a web application to see which coountrys are okay to travel to avoid.
                </p>
              </Container>
            </Jumbotron>
            
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
