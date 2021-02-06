import React from "react";
import { Card, Row, Col, Icon } from "react-materialize";
function Results(props) {
  return (
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
        ></Card>
      </Col>
    </Row>
  );
}

export default Results;
