import React from "react";
import Detail from "./Detail";
import Icon from "./Icon";
const ResultDisplay = ({ data }) => {
  return (
    <div className="row animated flipInX">
      <div className="col-md-7 center">
        <div className="card">
          <div className="card-block">
            <div className="weather-report">
              <Icon id={data.icon} description={data.description} />
              <Detail title="Temperature" unit="C" value={data.temp} />
              <Detail title="Humidity" unit="%" value={data.humidity} />
              <Detail title="Wind" unit="km/hr" value={data.wind} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
