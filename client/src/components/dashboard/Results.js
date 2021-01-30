import React from "react";

function Results(props) {
  const sort = () => {
    props.setCountry();
  };

  return (
    <table className="table">
      <tbody>
        {props.results.map((country) => (
          <tr>
            <td>{country.data.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Results;
