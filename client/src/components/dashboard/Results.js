import React from "react";

function Results(props) {
  const sort = () => {
    props.recommendations();
  };

  return (
    <table className="table">
      <tbody></tbody>
    </table>
  );
}

export default Results;
