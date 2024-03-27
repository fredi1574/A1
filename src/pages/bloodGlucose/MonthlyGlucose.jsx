import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const MonthlyGlucose = () => {
  // Get the number of days in the current month
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const [bloodGlucose, setBloodGlucose] = useState(
    Array.from({ length: daysInMonth }, (ignore, index) => ({
      day: index + 1,
      bloodGlucose: 0,
    }))
  );

  return (
    <LineChart
      width={window.innerWidth * 0.6}
      height={window.innerHeight * 0.4}
      data={bloodGlucose}
      margin={{ top: 5, right: 20, bottom: 10, left: 0 }}
    >
      <XAxis
        dataKey="day"
        stroke="#FF0A0A"
        label={{ value: "Day of the week", position: "insideBottom", dy: 10 }}
      />
      <YAxis
        stroke="#FF0A0A"
        label={{ value: "hours", angle: -90, position: "insideLeft" }}
      />
      <CartesianGrid stroke="#a03131" opacity={0.5} strokeDasharray="10" />
      <Tooltip />
      <Line dataKey="bloodGlucose" stroke="#FF0A0A" />
    </LineChart>
  );
};

export default MonthlyGlucose;
