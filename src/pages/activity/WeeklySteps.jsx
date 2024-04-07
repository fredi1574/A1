import axios from "axios";

import { useRef, useState, useEffect } from "react";
import { days } from "../../utils/timeArrays";
import getCurrentWeekBounds from "../../utils/getCurrentWeekBounds";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const WeeklySteps = () => {
  const username = localStorage.getItem("username");
  const { sunday, saturday } = getCurrentWeekBounds();

  const selectedDateRef = useRef();
  const stepsRef = useRef();
  const [steps, setSteps] = useState(days.map((day) => ({ day, steps: 0 })));

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URI + `/activity/getSteps/${username}`
        );

        // Sort the steps data by day of the week
        const sortedData = response.data.sort(
          (a, b) => a.dayOfWeek - b.dayOfWeek
        );

        // Map the sorted data to match the days array
        const newData = days.map((day, index) => {
          const found = sortedData.find((item) => item.dayOfWeek === index);
          return { day, steps: found ? found.steps : 0 };
        });

        setSteps(newData);
      } catch (error) {
        console.error("Error fetching steps data:", error);
      }
    };

    fetchSteps();
  }, [username]);

  const addToChart = async () => {
    const enteredSteps = parseInt(stepsRef.current.value, 10);
    const selectedDate = new Date(selectedDateRef.current.value);
    const selectedDay = selectedDate.getDay();

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URI + "/activity/addSteps",
        {
          username,
          date: selectedDate.toISOString().substring(0, 10),
          steps: enteredSteps,
          dayOfWeek: selectedDay,
        }
      );
      // Update the steps data state with the new data in the chart
      const newData = [...steps];
      newData[selectedDay] = {
        ...newData[selectedDay],
        steps: enteredSteps,
      };
      setSteps(newData);

      console.log("Steps added:", response.data);
    } catch (error) {
      console.error("Error adding steps:", error);
    }
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
          {sunday && saturday && (
            <>
              <input
                type="date"
                defaultValue={new Date().getDate().toString()}
                ref={selectedDateRef}
                min={sunday.toISOString().split("T")[0]}
                max={saturday.toISOString().split("T")[0]}
                className="p-2 mx-4 mt-6 border-2 dark:text-white border-activity-primary rounded-lg bg-activity-background dark:bg-activityDark-background dark:placeholder:text-white outline-none"
              />
            </>
          )}
          <button
            className="bg-activity-primary dark:bg-activityDark-button mt-6  p-2 rounded-lg text-activity-text hover:bg-activity-hover active:bg-activity-active"
            onClick={addToChart}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklySteps;
