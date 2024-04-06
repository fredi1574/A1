import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const MonthlyPressure = () => {
  const username = localStorage.getItem("username");

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

  useEffect(() => {
    const fetchPressure = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URI +
            `/bloodPressure/getMonthlyPressure/${username}`
        );
        const data = response.data;

        // Update the state with the new pressure data
        setPressure((prevPressure) =>
          prevPressure.map((dayData) => {
            const matchingData = data.find((item) => item.day === dayData.day);
            return matchingData ? { ...dayData, ...matchingData } : dayData;
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchPressure();
  }, [username, currentYear, currentMonth]);

  return (
    <div className="flex justify-center">
      <LineChart
        width={window.innerWidth * 0.75}
        height={window.innerHeight * 0.5}
        data={pressure}
        margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
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
