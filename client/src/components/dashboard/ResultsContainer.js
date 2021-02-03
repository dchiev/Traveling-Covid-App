import React, { Component, useState, useEffect } from "react";
import API from "../../utils/API";
import Results from "./Results";

function ResultsContainer(props) {
  const [searchCountry, setCountry] = useState([]);
  useEffect(() => {
    console.log("mounted");
    API.findCountry1()
      .then((results) => setCountry(results.data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log("rendered");
  });
  console.log("anything");

  return (
    <div>
      <Results results={props.recommendations} setCountry={setCountry} />
    </div>
  );
}

export default ResultsContainer;
