import { useState } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const MonthlyPressure = () => {
  // Get the number of days in the current month
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const [pressure, setPressure] = useState(
    Array.from({ length: daysInMonth }, (ignore, index) => ({
      day: index + 1,
      systolic: 0,
      diastolic: 0,
    }))
  );

  return (
    <div className="flex justify-center">
      <LineChart
        width={window.innerWidth * 0.6}
        height={window.innerHeight * 0.4}
        data={pressure}
        margin={{ top: 5, right: 20, bottom: 10, left: 0 }}
      >
        <XAxis
          dataKey="day"
          stroke="#FF5CB6"
          label={{ value: "Day of the week", position: "insideBottom", dy: 10 }}
        />
        <YAxis
          stroke="#FF5CB6"
          label={{ value: "pressure", angle: -90, position: "insideLeft" }}
        />
        <CartesianGrid stroke="#FF85CA" opacity={0.5} strokeDasharray="10" />
        <Tooltip />
        <Line dataKey="systolic" stroke="#FF5CB6" />
        <Line dataKey="diastolic" stroke="#e0007b" />
      </LineChart>
    </div>
  );
};

export default MonthlyPressure;
