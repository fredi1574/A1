import { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const MonthlySteps = () => {
  const username = localStorage.getItem("username");

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const initialStepsData = Array.from({ length: daysInMonth }, (_, index) => ({
    day: index + 1,
    steps: 0,
  }));

  const [stepsData, setStepsData] = useState(initialStepsData);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URI + `/activity/getSteps/${username}`
        );

        // Transform the steps data to match the expected format
        const transformedStepsData = response.data.map((item) => ({
          day: new Date(item.date).getDate(),
          steps: item.steps,
        }));

        // Update stepsData with fetched steps data and keep 0 for missing days
        const updatedStepsData = initialStepsData.map((dayData) => {
          const foundData = transformedStepsData.find(
            (item) => item.day === dayData.day
          );
          return foundData ? foundData : dayData;
        });

        // Sort the steps data by day
        updatedStepsData.sort((a, b) => a.day - b.day);

        setStepsData(updatedStepsData);
      } catch (error) {
        console.error("Error fetching steps data:", error);
      }
    };

    fetchSteps();
  }, [username]);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-xl text-activity-primary border-b-2 border-activity-primary text-center pb-6 my-6">
        Monthly steps
      </h1>
      <div className="flex justify-center">
        <BarChart
          width={window.innerWidth * 0.75}
          height={window.innerHeight * 0.5}
          data={stepsData}
          margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
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
