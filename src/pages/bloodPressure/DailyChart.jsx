import { useState, useRef } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { hours } from "../../utils/timeArrays";

const DailyChart = () => {
  const [pressure, setPressure] = useState(
    hours.map((hour) => ({ hour, systolic: 0, diastolic: 0 }))
  );

  const systolicRef = useRef();
  const diastolicRef = useRef();
  const hoursRef = useRef();

  const addData = () => {
    const systolic = parseInt(systolicRef.current.value, 10);
    const diastolic = parseInt(diastolicRef.current.value, 10);
    const hours = parseInt(hoursRef.current.value, 10);

    const newData = [...pressure];
    newData[hours] = {
      hours,
      systolic,
      diastolic,
    };

    setPressure(newData);
  };

  return (
    <div>
      <div className="flex justify-center">
        <LineChart
          width={window.innerWidth * 0.75}
          height={window.innerHeight * 0.5}
          data={pressure}
          margin={{ top: 0, right: 0, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="systolic" stroke="#FF5CB6" />
          <Line type="monotone" dataKey="diastolic" stroke="#e0007b" />
          <CartesianGrid stroke="#FF99D3" strokeDasharray="10" />
          <XAxis
            dataKey="hour"
            stroke="#FF5CB6"
            label={{ value: "hours", position: "insideBottom", dy: 10 }}
          />
          <YAxis
            stroke="#FF5CB6"
            label={{ value: "pressure", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
        </LineChart>
      </div>
      <h1 className="text-xl text-pressure-primary text-center border-b-2 border-pressure-primary mt-6 mb-4 pb-2">
        Add blood pressure
      </h1>
      <div className="flex justify-center gap-4 text-md text-pressure-primary">
        <div className="flex-col">
          <div className="mt-2">Hour</div>
          <input
            type="number"
            min={0}
            max={24}
            defaultValue={new Date().getHours()}
            ref={hoursRef}
            className="border-2 dark:text-white border-pressure-primary rounded-lg bg-pressure-background dark:bg-PressureDark-background outline-none p-1"
          />
        </div>
        <div className="flex-col">
          <div className="mt-2">systolic</div>
          <input
            type="number"
            min={0}
            max={300}
            placeholder="mmHg"
            ref={systolicRef}
            className="border-2 dark:text-white dark:placeholder:text-white border-pressure-primary rounded-lg bg-pressure-background dark:bg-PressureDark-background outline-none p-1"
          />
        </div>
        <div className="flex-col">
          <div className="mt-2">diastolic</div>
          <input
            type="number"
            min={0}
            max={300}
            placeholder="mmHg"
            ref={diastolicRef}
            className="border-2 dark:text-white dark:placeholder:text-white border-pressure-primary rounded-lg bg-pressure-background dark:bg-PressureDark-background outline-none p-1"
          />
        </div>
        <button
          onClick={addData}
          className="bg-pressure-primary dark:bg-PressureDark-button w-1/6  mt-8 rounded-md p-1 text-white dark:text-PressureDark-text
                   duration-200 hover:bg-pressure-hover active:bg-pressure-active active:scale-90 active:duration-75 drop-shadow-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DailyChart;
