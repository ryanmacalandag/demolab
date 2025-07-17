"use client";

import { useState } from "react";

export default function CostOfLivingCalculator() {
  const [city, setCity] = useState("Sydney");
  const [familySize, setFamilySize] = useState(2);
  const [housing, setHousing] = useState("Shared accommodation");
  const [transport, setTransport] = useState("Public transport");
  const [groceries, setGroceries] = useState("");
  const [eatingOut, setEatingOut] = useState("");
  const [utilities, setUtilities] = useState("");
  const [misc, setMisc] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const total =
      Number(groceries) + Number(eatingOut) + Number(utilities) + Number(misc);
    setResult(total);
  };

  return (
    <div className="max-w-md mx-auto bg-[#fef9f5] shadow-md rounded-2xl p-6 space-y-6 text-gray-800">
      <h1 className="text-2xl font-bold text-center">
        Cost of Living Calculator
      </h1>
      <p className="text-center text-sm">
        Estimate your monthly expenses in Australia using this calculator.
      </p>

      {/* Step 1 */}
      <div>
        <label className="block font-semibold mb-1">1. Select a city</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option>Sydney</option>
          <option>Melbourne</option>
          <option>Brisbane</option>
          <option>Perth</option>
          <option>Adelaide</option>
        </select>
      </div>

      {/* Step 2 */}
      <div>
        <label className="block font-semibold mb-1">
          2. Enter your details
        </label>
        <div className="space-y-2">
          <input
            aria-label="Family size"
            type="number"
            min={1}
            value={familySize}
            onChange={(e) => setFamilySize(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
            placeholder="Family size"
          />
          <select
            value={housing}
            onChange={(e) => setHousing(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option>Shared accommodation</option>
            <option>One-bedroom unit</option>
            <option>Two-bedroom unit</option>
          </select>
          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option>Public transport</option>
            <option>Own car</option>
            <option>Bike/walk only</option>
          </select>
        </div>
      </div>

      {/* Step 3 */}
      <div>
        <label className="block font-semibold mb-1">
          3. Enter your monthly costs
        </label>
        <div className="space-y-2">
          <input
            aria-label="Groceries"
            type="number"
            value={groceries}
            onChange={(e) => setGroceries(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Groceries ($)"
          />
          <input
            aria-label="Eating Out"
            type="number"
            value={eatingOut}
            onChange={(e) => setEatingOut(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Eating Out ($)"
          />
          <input
            aria-label="Utilities"
            type="number"
            value={utilities}
            onChange={(e) => setUtilities(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Utilities ($)"
          />
          <input
            aria-label="Miscellaneous"
            type="number"
            value={misc}
            onChange={(e) => setMisc(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Miscellaneous ($)"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
      >
        CALCULATE
      </button>

      {result !== null && (
        <div className="text-center mt-4 font-semibold text-lg">
          Estimated Monthly Cost:{" "}
          <span className="text-orange-600">${result}</span>
        </div>
      )}
    </div>
  );
}
