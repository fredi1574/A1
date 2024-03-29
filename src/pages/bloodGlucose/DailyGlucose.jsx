import { useState, useRef, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { hours } from "../../utils/timeArrays";

const DailyGlucose = () => {
  const isDarkMode = localStorage.getItem("theme") === "dark";

  const [bloodGlucose, setBloodGlucose] = useState(
    hours.map((hour) => ({ hours: hour, bloodGlucose: 0 }))
  );
  const hourRef = useRef();
  const bloodGlucoseRef = useRef();

  const handleAddBloodGlucose = () => {
    const enteredBloodGlucose = parseInt(bloodGlucoseRef.current.value, 10);
    const enteredHour = parseInt(hourRef.current.value, 10);

    const updatedBloodGlucose = [...bloodGlucose];
    updatedBloodGlucose[enteredHour] = {
      hours: enteredHour,
      bloodGlucose: enteredBloodGlucose,
    };

    setBloodGlucose(updatedBloodGlucose);

    bloodGlucoseRef.current.value = "";
    hourRef.current.value = new Date().getHours();
  };

  return (
    <div>
      <LineChart
        width={window.innerWidth * 0.75}
        height={window.innerHeight * 0.5}
        data={bloodGlucose}
        margin={{ top: 0, right: 5, bottom: 10, left: 0 }}
      >
        <Line type="monotone" dataKey="bloodGlucose" stroke="#FF0A0A" />
        <CartesianGrid stroke="#C03535" opacity={0.5} strokeDasharray="10" />
        <XAxis
          dataKey="hours"
          stroke="#FF0A0A"
          label={{
            value: "hours",
            position: "insideBottom",
            dy: 10,
          }}
        />
        <YAxis
          stroke="#FF0A0A"
          label={{
            value: "mg/dL",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip />
      </LineChart>
      <h1 className="text-xl text-bloodGlucose-primary dark:text-bloodGlucoseDark-primary text-center border-b-2 border-bloodGlucose-primary dark:border-bloodGlucoseDark-primary mt-6 mb-4 pb-2">
        Add Blood Glucose
      </h1>
      <div className="flex justify-center gap-4 text-md">
        <div className="flex-col">
          <div className="mt-2 text-bloodGlucose-primary dark:text-bloodGlucoseDark-primary">
            Hour
          </div>
          <input
            type="number"
            min={0}
            max={24}
            ref={hourRef}
            className="text-bloodGlucose-text dark:text-white border-2 border-bloodGlucose-primary dark:border-bloodGlucoseDark-primary rounded-lg bg-bloodGlucose-background dark:bg-bloodGlucoseDark-button outline-none p-1"
          />
        </div>
        <input
          type="number"
          placeholder="mg/dL"
          min={0}
          ref={bloodGlucoseRef}
          className="w-1/6 text-bloodGlucose-text dark:text-white border-2 border-bloodGlucose-primary dark:border-bloodGlucoseDark-primary rounded-lg bg-bloodGlucose-background dark:bg-bloodGlucoseDark-button outline-none p-1 mt-8"
        ></input>
        <button
          onClick={handleAddBloodGlucose}
          className="bg-bloodGlucose-primary dark:bg-bloodGlucoseDark-primary w-1/6 mt-8 rounded-md p-1 text-white dark:text-bloodGlucoseDark-button
                   duration-200 hover:bg-bloodGlucose-hover active:bg-bloodGlucose-active active:scale-90 active:duration-75 drop-shadow-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DailyGlucose;
