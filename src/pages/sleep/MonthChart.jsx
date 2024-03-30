import { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const MonthChart = () => {
  const username = localStorage.getItem("username");

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const [sleepData, setSleepData] = useState(
    Array.from({ length: daysInMonth }, (_, index) => ({
      day: index + 1,
      sleep: 0,
    }))
  );

  useEffect(() => {
    const fetchSleepData = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URI + `/sleep/getSleep/${username}`
        );
        console.log("Sleep data response:", response.data);
        // Assuming the response data is an array of objects with 'day' and 'sleep' properties
        setSleepData(response.data);
      } catch (error) {
        console.error("Error fetching sleep data:", error);
      }
    };

    fetchSleepData();
  }, [username]);

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
