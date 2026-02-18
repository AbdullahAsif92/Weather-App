import React, { useState } from "react";

const AllCities = (props) => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleDetails = (city) => {
    setSelectedCity(city);
  };

  const threeDayForecast =
    selectedCity?.data
      .filter(item => item.dt_txt.includes("12:00:00"))
      .slice(0, 3);

  return (
    <div className="md:flex gap-6 w-[90%] my-0 mx-auto pb-6">
      <ul className="md:w-[65%]">
        {props.savedCities.length === 0 ? (
          <p className="text-2xl font-bold">No Saved Cities</p>
        ) : (
          props.savedCities.map((item, index) => (
            <li
              key={index}
              className="bg-gray-700 p-4 rounded-2xl flex justify-between items-center mb-4"
            >
              <span className="text-xl font-bold">{item.city}</span>
              <div className="flex flex-row gap-4">
                <button
                  className="py-2 px-5 bg-blue-600 rounded-2xl"
                  onClick={() => handleDetails(item)}
                >
                  Details
                </button>
                <button className="py-2 px-5 bg-red-600 rounded-2xl" onClick={()=>{props.removeCity(item.city)}}>
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>

      {selectedCity && (
        <div className="md:w-[35%]  bg-gray-700 p-5 rounded-2xl">
          <h2 className="text-3xl font-bold mb-2">
            {selectedCity.city}
          </h2>

          <p className="capitalize">
            {selectedCity.data[0].weather[0].description}
          </p>

          <div className="flex items-center gap-4 my-4 justify-between">
            <h3 className="text-4xl font-bold">
              {selectedCity.data[0].main.temp.toFixed(0)}°C
            </h3>
            <img
              src={`https://openweathermap.org/img/wn/${selectedCity.data[0].weather[0].icon}.png`}
              alt="icon"
            />
          </div>

          <h4 className="text-xl font-bold mb-2">3 Day Forecast</h4>

          {threeDayForecast.map((day, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-500 py-2"
            >
              <span className="w-[33%]">
                {new Date(day.dt_txt).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </span>
              <div className="w-[33%] flex justify-center">
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt="icon"
                />
              </div>
              <span className="w-[33%] text-end">{day.main.temp.toFixed(0)}°C</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCities;