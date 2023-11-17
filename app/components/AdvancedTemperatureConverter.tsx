"use client";
import { useState } from "react";

export default function AdvancedTemperatureConverter() {
  const [celsius, setCelsius] = useState<number>();
  const [fahrenheit, setFahrenheit] = useState<number>();
  const [kelvin, setKelvin] = useState<number>();

  function handleChange(event: { target: { id: string; value: any } }) {
    const newValue = parseFloat(event.target.value);
    if (isNaN(newValue)) {
      return 0;
    }

    console.log("Type of value", typeof event.target.value);
    if (isNaN(event.target.value)) {
      console.log("isNan", typeof event.target.value);
    }
    // Changes on celsius
    if (event.target.id === "celsius") {
      const celsius = event.target.value;
      setCelsius(celsius);

      const toFahrenheit = (celsius * 9) / 5 + 32;

      setFahrenheit(Math.round(toFahrenheit * 100) / 100);

      const toKelvin = parseFloat(celsius) + 273.15;
      setKelvin(Math.round(toKelvin * 100) / 100);
    }

    // Changes on fahrenheit
    if (event.target.id === "fahrenheit") {
      const fahrenheit = event.target.value;
      setFahrenheit(fahrenheit);

      const toCelsius = ((fahrenheit - 32) * 5) / 9;
      setCelsius(Math.round(toCelsius * 100) / 100);

      const toKelvin = (fahrenheit - 32) / 1.7999999 + 273.5; // fixed formula here
      setKelvin(Math.round(toKelvin * 100) / 100);
    }

    // Changes on kelvin
    if (event.target.id === "kelvin") {
      const kelvin = event.target.value;
      setKelvin(kelvin);

      const toCelsius = parseFloat(kelvin) - 273.15;
      setCelsius(Math.round(toCelsius * 100) / 100);

      const toFahrenheit = kelvin - 457.87;
      setFahrenheit(Math.round(toFahrenheit * 100) / 100);
    }
    console.log("Current change on. ", event.target.id);
  }

  return (
    <>
      <div className="flex flex-col gap-10 border-2 border-primary p-10">
        <div className="w-96 justify-between flex items-center">
          <label className="text-lg font-bold text-active">Celsius °C:</label>
          <input
            id="celsius"
            type="number"
            placeholder="Celsius"
            className="text-lg text-center input input-bordered input-primary"
            onChange={handleChange}
            value={celsius}
            pattern="[0-9"
          />
        </div>

        <div className="bg-red-500 h-1"></div>
        <div className="w-96 justify-between flex items-center">
          <label className="text-lg font-bold text-active">
            Fahrenheit °F:
          </label>
          <input
            id="fahrenheit"
            type="number"
            placeholder="Fahrenheit"
            className="text-lg text-center input input-bordered input-primary"
            onChange={handleChange}
            value={fahrenheit}
          />
        </div>
        <div className="bg-red-500 h-1"></div>
        <div className="w-96 justify-between flex items-center">
          <label className="text-lg font-bold text-active">Kelvin °K:</label>
          <input
            id="kelvin"
            type="number"
            placeholder="Kelvin"
            className="text-lg text-center input input-bordered input-primary"
            onChange={handleChange}
            value={kelvin}
          />
        </div>
      </div>
    </>
  );
}

/*
// if function separation required
    function convertFromCelsius() {
      setFahrenheit(celsius + 1);
      setCelsius(celsius + 1);
    }
    function convertFromFahrenheit() {}
    function convertFromKelvin() {}

// logs
    console.log(toFahrenheit); // Normal display
    console.log(toFahrenheit.toFixed(2)); // format: rounds the number to two decimal places and returns it as a STRING
    console.log(Math.round(toFahrenheit * 100) / 100); // format: this one doesn't convert the number to string, the one to use

//Block string inputs into number input
    if (!isNaN(newValue)) {
    setInputValue(newValue);
    onInputChange(newValue); // Call the callback function in the parent component
    } else {
    setInputValue(0);
    }

  */
