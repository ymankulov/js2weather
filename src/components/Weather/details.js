import React from "react";

const Details = ({ data, value }) => {
  const { name, sys, main, wind, weather } = data;
  return (
    <>
      {value === "" ? (
        <div className=" w-full text-center mt-5 text-3xl text-[red]">
          "Нет Данных!!!"
        </div>
      ) : (
        <div className="w-3/4 wheather-card mx-auto mt-10 rounded-2xl p-8 h-[60vh] border-2 border-solid border-neutral-900">
          <div className="flex  items-center justify-center gap-28 w-full">
            <div className="flex flex-col items-start">
              <h1 className="text-xl font-semibold">
                {name} <span>{sys?.country}</span>
              </h1>
              <h4 className="text-xl font-semibold">
                Температура:{" "}
                <span className="text-lg font-normal">
                  {main?.temp}
                  <sup>0c</sup>
                </span>
              </h4>
              <h4 className="text-xl font-semibold">
                Скорость ветра:{" "}
                <span className="text-lg font-normal">{wind?.speed}</span>
              </h4>
              <div className="mt-5 uppercase text-base">
                {weather?.map((el) => (
                  <h4>{el.description}</h4>
                ))}
              </div>
            </div>
            <div className="w-[220px] h-[280px]">
              {weather?.map((el) => (
                <img
                  className=" w-full h-full object-cover"
                  src={`http://openweathermap.org/img/w/${el.icon}.png`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
