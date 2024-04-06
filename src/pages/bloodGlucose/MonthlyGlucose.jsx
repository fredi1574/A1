import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const MonthlyGlucose = () => {
  const username = localStorage.getItem("username");

  // Get the number of days in the current month
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const [glucose, setGlucose] = useState(
    Array.from({ length: daysInMonth }, (ignore, index) => ({
      day: index + 1,
      glucose: 0,
    }))
  );

  useEffect(() => {
    const fetchGlucose = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URI +
            `/bloodGlucose/getMonthlyGlucose/${username}`
        );
        const data = response.data;
        console.log(data);

        // Update the state with the new pressure data
        setGlucose((prevPressure) =>
          prevPressure.map((dayData) => {
            const matchingData = data.find(
              (item) => new Date(item.day).getDate() === dayData.day
            );
            return matchingData
              ? { ...dayData, glucose: matchingData.glucose }
              : dayData;
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchGlucose();
  }, [username, currentYear, currentMonth]);

  return (
    <div className="flex justify-center">
      <LineChart
        width={window.innerWidth * 0.75}
        height={window.innerHeight * 0.5}
        data={glucose}
        margin={{ top: 0, right: 5, bottom: 10, left: 0 }}
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
        <Line dataKey="glucose" stroke="#FF0A0A" />
      </LineChart>
    </div>
  );
};

export default MonthlyGlucose;
