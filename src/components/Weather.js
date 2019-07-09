import React, { useState, useEffect, Suspense } from "react";
import InputCity from "./InputCity";
import Axios from "axios";
import Error from "./Error";
import Loading from "./Loading";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [error, setError] = useState("");
  useEffect(() => {
    if (city) {
      Axios.get(
        `https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22`
      )
        .then(result => {
          const { icon, description } = result.weather;
          const { temp, pressure, humidity } = result.main;
          const wind = result.wind.speed;
          //Kelvin-273.15 -> C :
          setWeather({
            icon,
            description,
            temp: temp - 273.15,
            pressure,
            humidity,
            wind
          });
        })
        .catch(error => {
          setError(error.message);
        });
    }
  }, [city]);

  const ResultDisplay = React.lazy(() => import("./ResultDisplay"));

  return (
    <div className="container">
      <InputCity cityChanged={city => setCity(city)} />
      <Error message={error} />
      <Suspense fallback={<Loading />}>
        {weather && <ResultDisplay data={weather} />}
      </Suspense>
    </div>
  );
};

export default Weather;
