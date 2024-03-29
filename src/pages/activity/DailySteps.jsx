import { useRef, useState } from "react";
import { days } from "../../utils/timeArrays";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const DailySteps = () => {
  const dayRef = useRef();
  const stepsRef = useRef();
  const [steps, setSteps] = useState(days.map((day) => ({ day, steps: 0 })));

  const handleStepsGraph = () => {
    const enteredDay = parseInt(dayRef.current.value, 10);
    const enteredSteps = parseInt(stepsRef.current.value, 10);

    const newData = [...steps];
    newData[enteredDay] = {
      ...newData[enteredDay],
      steps: enteredSteps,
    };

    setSteps(newData);

    stepsRef.current.value = "";
  };

  return (
    <div>
      <div className="flex flex-col justify-center">
        <h1 className="text-xl text-activity-primary border-b-2 border-activity-primary text-center pb-6 my-6">
          Daily steps
        </h1>
        <div className="flex justify-center">
          <BarChart
            width={window.innerWidth * 0.75}
            height={window.innerHeight * 0.5}
            data={steps}
            margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
          >
            <XAxis
              dataKey="day"
              stroke="#FBB24B"
              label={{
                value: "Day of the week",
                position: "insideBottom",
                dy: 10,
              }}
            />
            <YAxis
              stroke="#FBB24B"
              label={{
                value: "Steps",
                angle: -90,
                position: "insideLeft",
                dx: 20,
              }}
            />
            <CartesianGrid
              stroke="#FCBA5F"
              opacity={0.5}
              strokeDasharray="10"
            />
            <Tooltip />
            <Bar dataKey="steps" fill="#FBB24B" />
          </BarChart>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col text-activity-text">
            <label>Steps</label>
            <input
              ref={stepsRef}
              type="number"
              placeholder="Enter Steps"
              min={0}
              className="w-full p-2 border-2 dark:text-white border-activity-primary rounded-lg bg-activity-background dark:bg-activityDark-background dark:placeholder:text-white outline-none"
            />
          </div>
          <select
            ref={dayRef}
            className="p-2 border-2 border-activity-primary rounded-lg bg-activity-background dark:bg-activityDark-background outline-none mx-4 mt-6 text-activity-text dark:text-white"
          >
            {days.map((day, index) => (
              <option key={day} value={index}>
                {day}
              </option>
            ))}
          </select>
          <button
            className="bg-activity-primary dark:bg-activityDark-button mt-6  p-2 rounded-lg text-activity-text hover:bg-activity-hover active:bg-activity-active"
            onClick={handleStepsGraph}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailySteps;
