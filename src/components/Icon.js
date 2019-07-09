import React from "react";

const Icon = ({ id, description }) => {
  if (!id) return null;
  return (
    <div className="col-md-3 text-center wr w1">
      <img
        src={`http://openweathermap.org/img/wn/${id}%402x.png`}
        alt={description}
      />
    </div>
  );
};

export default Icon;
