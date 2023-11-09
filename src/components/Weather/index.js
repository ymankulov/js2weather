import axios from "axios";
import React, { useEffect, useState } from "react";
import Details from "./details";

const Weather = () => {
  const [value, setValue] = useState("");
  const [weather, setWeather] = useState({});
  const getWeather = async (city) => {
    if (value === "") {
      return null;
    } else {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6b4c292e3e049dbf64d6c2441cc77864&lang=ru`
      );
      const { data } = res;
      setWeather(data);
    }
  };
  function search() {
    getWeather(value);
  }
  useEffect(() => {
    getWeather(value);
  }, []);

  function valueEnter(e) {
    if (e.key === "Enter") {
      getWeather(value);
    }
  }

  console.log(weather);
  return (
    <div className="container">
      <div className="flex items-center w-[70%] justify-center m-auto pt-6">
        <input
          type="text"
          onInput={(e) => setValue(e.target.value.trim())}
          onChange={(e) => setValue(e.target.value.trim())}
          onKeyDown={(e) => {
            valueEnter(e);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="City"
        />
        {value !== "" ? (
          <button
            type="button"
            onClick={() => search()}
            className="ml-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Search
          </button>
        ) : null}
      </div>
      <Details data={weather} value={value} />
    </div>
  );
};

export default Weather;
