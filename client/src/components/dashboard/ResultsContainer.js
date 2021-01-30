import React, { Component, useState, useEffect } from "react";
import API from "../../utils/API";

function ResultsContainer() {
  const [searchCountry, setCountry] = useState([]);
  useEffect(() => {
    console.log("mounted");
    API.findCountry()
      .then((results) => setCountry(results.data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    console.log("rendered");
  });
  console.log("anything");

  return (
    <div>
      <Results results={searchCountry} setCountry={setCountry} />
    </div>
  );
}

export default ResultsContainer;
