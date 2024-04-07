import { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { months } from "../../utils/timeArrays";

const YearChart = () => {
  const [weight, setWeight] = useState(
    Object.entries(months).map(([month]) => ({
      month,
      weight: Math.floor(Math.random() * 5) + 50, // generate a random number between 50-55
    }))
  );

  return (
    <div className="flex justify-center">
      <LineChart
        width={window.innerWidth * 0.75}
        height={window.innerHeight * 0.5}
        data={weight}
        margin={{ top: 0, right: 5, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="weight" stroke="#55A33E" />
        <CartesianGrid stroke="#B5DB80" strokeDasharray="10" />
        <XAxis
          dataKey="month"
          stroke="#55A33E"
          label={{ value: "Month", position: "insideBottom", dy: 10 }}
        />
        <YAxis
          stroke="#55A33E"
          label={{ value: "Kg", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default YearChart;
