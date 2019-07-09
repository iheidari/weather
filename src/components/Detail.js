import React from "react";

const Detail = ({ title, unit, value }) => {
  return (
    <div className="col-md-3 text-center wr w1">
      <h5 className="title">{title}</h5>
      <p className="weather-details">
        <span id="temp">{value}</span>
        <a className="small">{unit}</a>
      </p>
    </div>
  );
};

export default Detail;
