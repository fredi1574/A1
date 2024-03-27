import { useState, useRef } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { weeks } from "../../utils/timeArrays";

const MonthChart = () => {
  const [weight, setWeight] = useState(
    weeks.map((week) => ({ weeks: week, weight: 0 }))
  );
  const weekRef = useRef();
  const weightRef = useRef();

  const handleAddWeight = () => {
    const enteredWeight = parseInt(weightRef.current.value, 10);
    const enteredWeek = parseInt(weekRef.current.value, 10);

    const newData = [...weight];
    newData[enteredWeek] = {
      weight: enteredWeight,
      weeks: enteredWeek,
    };

    setWeight(newData);

    weightRef.current.value = "";
  };

  return (
    <div>
      <LineChart
        width={window.innerWidth * 0.6}
        height={window.innerHeight * 0.4}
        data={weight}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="weight" stroke="#55A33E" />
        <CartesianGrid stroke="#B5DB80" strokeDasharray="10" />
        <XAxis
          dataKey="weeks"
          stroke="#55A33E"
          label={{ value: "Weeks", position: "insideBottom", dy: 10 }}
        />
        <YAxis
          stroke="#55A33E"
          label={{ value: "Kg", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
      </LineChart>
      <h1 className="text-2xl text-weight-primary dark:text-weightDark-primary border-b-2 border-weight-primary dark:border-weightDark-primary text-center pb-2 my-6">
        Add weight
      </h1>
      <div className="flex justify-center gap-4 text-md text-weight-primary">
        <div className="flex-col">
          <div className="mt-2 dark:text-weightDark-primary">Weight</div>
          <input
            type="number"
            min={0}
            max={500}
            placeholder="kg"
            ref={weightRef}
            className="border-2 border-weight-primary dark:border-weightDark-primary rounded-lg bg-weight-background dark:bg-weightDark-background dark:text-white dark:placeholder:text-white outline-none p-1"
          />
        </div>
        <select
          ref={weekRef}
          defaultValue={new Date().getDay().toString()}
          className="border-2 border-weight-primary dark:border-weightDark-primary rounded-lg bg-weight-background dark:bg-weightDark-background dark:text-white outline-none p-1 mt-8"
        >
          {weeks.map((week, index) => (
            <option key={index} value={index}>
              {week}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddWeight}
          className="bg-weight-primary dark:bg-weightDark-button w-1/6  mt-8 rounded-md p-1 text-white dark:text-weightDark-text
                   duration-200 hover:bg-weight-hover active:bg-weight-active active:scale-90 active:duration-75 drop-shadow-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MonthChart;
