import React,{useState} from "react";

const SingleCity = (props) => {
  const dailyForecast = props.weatherList.filter((item) => item.dt_txt.includes("12:00:00")).slice(0, 6);

  const getDayName = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
    });
  };
  const [showAlert,setShowAlert] = useState(false);
  const handleOnClick = () => {
    props.addCity(props.cityName, props.weatherList);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  }
  return (
    <>
      {showAlert && 
      <div className="bg-white-600 border border-black-400 text-black-700 px-4 py-3 rounded-2xl relative mb-8" role="alert">
        <strong className="font-bold">City Saved</strong>
      </div>}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-[80%]">
          <div className="flex justify-start items-top gap-4">
            <div>
              <h2 className="text-4xl font-bold md:text-6xl">
                {props.cityName}
              </h2>
              <p>
                {props.weatherList[0].weather[0].description
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </p>
            </div>
            <div>
              <i className="fa-solid fa-bookmark text-4xl cursor-pointer" onClick={handleOnClick}></i>
            </div>
          </div>
          <div className="my-8 flex justify-between items-center">
            <h3 className="text-4xl font-bold md:text-6xl">
              {props.weatherList[0].main.temp.toFixed(0)} °C
            </h3>
            <img className="md:w-24" src={`https://openweathermap.org/img/wn/${props.weatherList[0].weather[0].icon}.png`} alt="icon"/>
          </div>
          <div className="bg-gray-700 p-4 rounded-2xl">
            <h3 className="text-1xl font-bold ">Important Information</h3>
            <div className="flex flex-wrap my-4 md:gap-2">
              <div className="flex flex-[48%] items-top px-5 md:px-24 md:gap-1">
                <div>
                  <i className="fa-solid fa-temperature-quarter"></i>
                </div>
                <div className="flex items-start flex-col">
                  <h4>Real Feel</h4>
                  <h4 className="font-bold text-[1.2rem] md:text-3xl">
                    {props.weatherList[0].main.feels_like.toFixed(0)} °C
                  </h4>
                </div>
              </div>
              <div className="flex flex-[48%] items-top px-5 md:px-24 md:gap-1">
                <div>
                  <i className="fa-solid fa-wind"></i>
                </div>
                <div className="flex items-start flex-col">
                  <h4>Air Pressure</h4>
                  <h4 className="font-bold text-[1.2rem] md:text-3xl">
                    {props.weatherList[0].main.pressure}
                  </h4>
                </div>
              </div>
              <div className="flex flex-[48%] items-top px-5 md:px-24 md:gap-1">
                <div>
                  <i className="fa-solid fa-droplet"></i>
                </div>
                <div className="flex items-start flex-col">
                  <h4>Humidity</h4>
                  <h4 className="font-bold text-[1.2rem] md:text-3xl">
                    {props.weatherList[0].main.humidity}
                  </h4>
                </div>
              </div>
              <div className="flex flex-[48%] items-top px-5 md:px-24 md:gap-1">
                <div>
                  <i className="fa-solid fa-gear"></i>
                </div>
                <div className="flex items-start flex-col">
                  <h4>Wind Degree</h4>
                  <h4 className="font-bold text-[1.2rem] md:text-3xl">
                    {props.weatherList[0].wind.deg}
                  </h4>
                </div>
              </div>
              <div className="flex flex-[48%] items-top px-5 md:px-24 md:gap-1">
                <div>
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div className="flex items-start flex-col">
                  <h4>Wind Speed</h4>
                  <h4 className="font-bold text-[1.2rem] md:text-3xl">
                    {props.weatherList[0].wind.speed}
                  </h4>
                </div>
              </div>
              <div className="flex flex-[48%] items-top px-5 md:px-24 md:gap-1">
                <div>
                  <i className="fa-solid fa-fire"></i>
                </div>
                <div className="flex items-start flex-col">
                  <h4>Temp Max</h4>
                  <h4 className="font-bold text-[1.2rem] md:text-3xl">
                    {props.weatherList[0].main.temp_max.toFixed(0)} °C
                  </h4>
                </div>
              </div>
              <div className="flex flex-[48%] items-top px-5 md:px-24 md:gap-1">
                <div>
                  <i className="fa-solid fa-fan"></i>
                </div>
                <div className="flex items-start flex-col">
                  <h4>Temp Min</h4>
                  <h4 className="font-bold text-[1.2rem] md:text-3xl">
                    {props.weatherList[0].main.temp_min.toFixed(0)} °C
                  </h4>
                </div>
              </div>
              <div className="flex flex-[48%] items-top px-5 md:px-24 md:gap-1">
                <div>
                  <i className="fa-solid fa-smog"></i>
                </div>
                <div className="flex items-start flex-col">
                  <h4>Gust</h4>
                  <h4 className="font-bold text-[1.2rem] md:text-3xl">
                    {props.weatherList[0].wind.gust}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded-2xl md:w-[45%]">
          <h3 className="font-bold text-2xl mb-4">6 Days Forecast</h3>
          <div className="flex flex-col gap-3">
            {dailyForecast.map((day, index) => (
              <div key={index} className="flex justify-between items-center p-3 border-b border-gray-500">
                <span className="font-semibold md:w-[25%] w-[20%]">{getDayName(day.dt_txt)}</span>
                <div className="md:w-[25%] w-[20%]">
                  <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="icon"/>
                </div>
                <p className="md:w-[25%] w-[25%]">{day.weather[0].main}</p>
                <span className="font-bold ">{day.main.temp.toFixed(0)}°C</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCity;
