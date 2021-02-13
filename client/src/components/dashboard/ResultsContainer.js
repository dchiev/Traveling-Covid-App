import React, { Component, useState, useEffect } from "react";
import API from "../../utils/API";
import Results from "./Results";
import { Card, Row, Col, Icon } from "react-materialize";
import advisory1 from "../../images/advisory1.png";
import advisory2 from "../../images/advisory2.png";
function ResultsContainer(props) {
  /*   const test = {
    data: {
      US: {
        name: "United States",
        advisory: {
          message: "test US message",
        },
      },
      MX: {
        name: "Mexico",
        advisory: {
          message: "test MX message",
        },
      },
    },
  }; */
  /*  let searchCountry = "US";
  console.log(test.data[searchCountry].advisory.message); */

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
            actions={[
              <a key="1" href="#">
                This is a link
              </a>,
              <a key="2" href="#">
                This is a link
              </a>,
            ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            title={!recomendations ? "" : recomendations.advisory.message}

          /*    title={props.recomendations} */
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
            <h5>{!recomendations ? "" : recomendations.name}</h5>
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
                <span class="card-title"></span>
                {posts.map((userPost) => (
                  <Card textClassName="black-text">
                    <p>{userPost.text}</p>
                  </Card>
                ))}
                <p>Post text goes here</p>
                <p>Posted by user:</p>
                <p>Posted on:</p>


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsContainer;
