"use client";
import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState();
  const [kelvin, setKelvin] = useState();

  function convertTemperature() {}
  return (
    <>
      <div className="flex flex-col gap-10 border-4 border-slate-500 p-10">
        <div className="w-96 justify-between flex">
          <label className="text-lg font-bold">Celsius °C:</label>
          <input
            type="number"
            placeholder="Celsius"
            className="text-lg text-center"
            onChange={convertTemperature}
          />
        </div>

        <div className="bg-red-500 h-1"></div>
        <div className="w-96 justify-between flex">
          <label className="text-lg font-bold">Fahrenheit °F:</label>
          <input
            type="number"
            placeholder="Fahrenheit"
            className="text-lg text-center"
          />
        </div>
        <div className="bg-red-500 h-1"></div>
        <div className="w-96 justify-between flex">
          <label className="text-lg font-bold">Kelvin °K:</label>
          <input
            type="number"
            placeholder="Kelvin"
            className="text-lg text-center"
          />
        </div>
      </div>
    </>
  );
}
