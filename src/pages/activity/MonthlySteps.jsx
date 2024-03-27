import { useRef, useState } from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const MonthlySteps = () => {
  // Get the number of days in the current month
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const dayRef = useRef();
  const stepsRef = useRef();
  const [steps, setSteps] = useState(
    Array.from({ length: daysInMonth }, (ignore, index) => ({
      day: index + 1,
      steps: 0,
    }))
  );

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-xl text-activity-primary border-b-2 border-activity-primary text-center pb-6 my-6">
        Monthly steps
      </h1>
      <div className="flex justify-center">
        <BarChart
          width={window.innerWidth * 0.6}
          height={window.innerHeight * 0.4}
          data={steps}
          margin={{ top: 5, right: 20, bottom: 10, left: 0 }}
        >
          <XAxis
            dataKey="day"
            stroke="#FBB24B"
            label={{
              value: "Day",
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
          <CartesianGrid stroke="#FCBA5F" opacity={0.5} strokeDasharray="10" />
          <Tooltip />
          <Bar dataKey="steps" fill="#FBB24B" />
        </BarChart>
      </div>
    </div>
  );
};

export default MonthlySteps;
