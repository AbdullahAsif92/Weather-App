  import React, { useEffect, useState } from "react";
  import SingleCity from "./SingleCity";

  const CityWeather = (props) => {
    const [weather, setWeather] = useState(null);
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${props.apiKey}&units=metric`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setWeather(parsedData);
      props.setWeatherApiData(parsedData);
    };
    useEffect(() => {
      fetchWeather();
    }, [props.city]);
    if (!weather) {
      return <h3 className="mx-6 text-3xl">Loading...</h3>;
    }
    return (
      <>
        <div className="mx-6 md:w-[92%]">
          <SingleCity cityName={weather.city.name} weatherList={weather.list} addCity={props.addCity} />
        </div>
      </>
    );
  };

  export default CityWeather;
