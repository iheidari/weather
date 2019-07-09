import React, { useState } from "react";

const InputCity = ({ cityChanged }) => {
  const [city, setCity] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    cityChanged(city);
  };
  return (
    <div className="row">
      <div className=" col-md-7 center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            placeholder="Please Enter City Name"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default InputCity;
