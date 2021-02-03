import React from "react";

function Results(props) {
  const sort = () => {
    props.recommendations();
  };

  return (
    <table className="table">
      <tbody>
        {props.results.map((country) => (
          <tr>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
