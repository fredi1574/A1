import { useState } from "react";
import {
  BarChart,
  Legend,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const MonthChart = () => {
  // Get the number of days in the current month
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const [sleepData, setSleepData] = useState(
    Array.from({ length: daysInMonth }, (ignore, index) => ({
      day: index + 1,
      sleep: 0,
    }))
  );

  return (
    <div className="flex justify-center">
      <BarChart
        width={window.innerWidth * 0.75}
        height={window.innerHeight * 0.5}
        data={sleepData}
        margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
      >
        <XAxis
          dataKey="day"
          stroke="#A15BEC"
          label={{
            value: "Day of the month",
            position: "insideBottom",
            dy: 10,
          }}
        />
        <YAxis
          stroke="#A15BEC"
          label={{ value: "hours", angle: -90, position: "insideLeft", dx: 20 }}
        />
        <CartesianGrid stroke="#C499F3" opacity={0.5} strokeDasharray="10" />
        <Tooltip />
        <Bar dataKey="sleep" fill="#A15BEC" />
      </BarChart>
    </div>
  );
};

export default MonthChart;
