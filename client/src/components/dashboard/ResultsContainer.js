import React, { Component, useState, useEffect } from "react";
import API from "../../utils/API";
import Results from "./Results";
import { Card, Row, Col, Icon } from "react-materialize";

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

  const { cases, searchCountry, recomendations } = props;
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
        <Col m={6} s={12}>
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
            title={
              !recomendations ? "No title" : recomendations.advisory.message
            }

            /*    title={props.recomendations} */
          >
            {" "}
            <h2>{cases?.confirmed || "Search for your Country"}</h2>
            <h5>{!recomendations ? "" : recomendations.advisory.score}</h5>
            <h5>Country:</h5>
            <h5>{!recomendations ? "" : recomendations.name}</h5>
            <h5>Cases:</h5> <h5>{cases?.confirmed || ""}</h5>
            <h5>Dead:</h5>
            <h5>{cases?.dead || ""}</h5>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ResultsContainer;
