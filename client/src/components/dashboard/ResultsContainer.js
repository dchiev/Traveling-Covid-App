import React, { useState, useEffect } from "react";
import { Card, Row, Col, Icon } from "react-materialize";
import advisory1 from "../../images/advisory1.png";
import advisory2 from "../../images/advisory2.png";
import "./resultscontainerstyles.css";
function ResultsContainer(props) {
  const { cases, recomendations, posts } = props;

  return (
    <div>
      <Row>
        <Col>
          <Card
            actions={[]}
            className="blue-grey darken-1 results-card"
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
            <p>Country:</p>
            <p>{!recomendations ? "" : recomendations.name}</p>
            <p>Cases:</p> <p>{cases?.confirmed || ""}</p>
            <p>Dead:</p>
            <p>{cases?.dead || ""}</p>
          </Card>
        </Col>
      </Row>
      <div>
        <div className="row">
          <div className="col-md">
            <div className="card blue darken-1">
              <div className="card-content white-text">
                <span className="card-title"></span>
                <b>What Travelers are Experiencing:</b>
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
