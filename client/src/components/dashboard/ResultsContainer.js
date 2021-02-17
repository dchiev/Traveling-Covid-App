import React, { Component, useState, useEffect } from "react";
import API from "../../utils/API";

import { Card, Row, Col, Icon } from "react-materialize";
import advisory1 from "../../images/advisory1.png";
import advisory2 from "../../images/advisory2.png";
function ResultsContainer(props) {
  const { cases, searchCountry, recomendations, posts } = props;
  const [setCountry] = useState([]);
  useEffect(() => {
    console.log("mounted");
  }, []);
  useEffect(() => {
    console.log(props);
  });
  console.log("anything");

  return (
    <div>
      <Row>
        <Col>
          <Card
            actions={[]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title={!recomendations ? "" : recomendations.advisory.message}
          >
            {" "}
            <img
              src={
                !recomendations.advisory
                  ? ""
                  : recomendations.advisory.score < 3
                  ? advisory1
                  : advisory2
              }
            />
            <h5>Country:</h5>
            <h5>{("Country:", !recomendations ? "" : recomendations.name)}</h5>
            <h5>Cases:</h5> <h5>{cases?.confirmed || ""}</h5>
            <h5>Dead:</h5>
            <h5>{cases?.dead || ""}</h5>
          </Card>
        </Col>
      </Row>
      <div>
        <div class="row">
          <div class="col-md">
            <div class="card blue darken-1">
              <div class="card-content white-text">
                <b>What Travelers Are Experiencing in This Country:</b>
                <span class="card-title"></span>
                {posts.map((userPost) => (
                  <Card textClassName="black-text">
                    <p>{userPost.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsContainer;
