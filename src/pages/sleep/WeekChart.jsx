import { useState, useRef, useEffect } from "react";
import { days } from "../../utils/timeArrays";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

import axios from "axios";
import getCurrentWeekBounds from "../../utils/getCurrentWeekBounds";

const WeekChart = () => {
  const username = localStorage.getItem("username");

  const { sunday, saturday } = getCurrentWeekBounds();
  const [sleepData, setSleepData] = useState(
    days.map((day) => ({ day, sleep: 0 }))
  );

  const selectedDateRef = useRef();
  const sleepHoursRef = useRef();
  const sleepMinutesRef = useRef();

  // Fetch sleep data when the component mounts
  useEffect(() => {
    const fetchSleepData = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URI + `/sleep/getSleep/${username}`
        );

        // Sort the sleep data by day of the week
        const sortedData = response.data.sort(
          (a, b) => a.dayOfWeek - b.dayOfWeek
        );

        // Map the sorted data to match the days array
        const newData = days.map((day, index) => {
          const found = sortedData.find((item) => item.dayOfWeek === index);
          return { day, sleep: found ? found.sleepHours : 0 };
        });

        setSleepData(newData);
      } catch (error) {
        console.error("Error fetching sleep data:", error);
      }
    };

    fetchSleepData();
  }, [username]);

  const addToChart = async () => {
    // Parse the selected date
    const selectedDate = new Date(selectedDateRef.current.value);
    const selectedDay = selectedDate.getDay();

    // Count the total time in the input fields
    const selectedHours = parseInt(sleepHoursRef.current.value, 10);
    const selectedMinutes = parseInt(sleepMinutesRef.current.value, 10);

    // Check if the input fields are valid
    if (selectedHours > 24 || selectedMinutes > 59) {
      return;
    }

    // Calculating total time and converting it to hours
    const totalMinutes = selectedHours * 60 + selectedMinutes;
    const totalHours = totalMinutes / 60;

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URI + "/sleep/addSleep",
        {
          username,
          date: selectedDate.toISOString().substring(0, 10),
          sleepHours: totalHours,
          dayOfWeek: selectedDay,
        }
      );
      // Update the sleep data state with the new data in the chart
      const newData = [...sleepData];
      newData[selectedDay] = {
        ...newData[selectedDay],
        sleep: totalHours,
      };
      setSleepData(newData);

      console.log("Sleep data added:", response.data);
    } catch (error) {
      console.error("Error adding sleep data:", error);
    }

    // Reset the input fields
    sleepHoursRef.current.value = "8";
    sleepMinutesRef.current.value = "0";
  };

  return (
    <div>
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
              value: "Day of the week",
              position: "insideBottom",
              dy: 15,
            }}
          />
          <YAxis
            stroke="#A15BEC"
            label={{
              value: "hours",
              angle: -90,
              position: "insideLeft",
              dx: 20,
            }}
          />
          <CartesianGrid stroke="#C499F3" opacity={0.5} strokeDasharray="10" />
          <Tooltip />
          <Bar dataKey="sleep" fill="#A15BEC" />
        </BarChart>
      </div>
      <h1 className="text-xl text-sleep-primary text-center border-b-2 border-sleep-primary mt-6 mb-4 pb-2">
        Add Sleep Time
      </h1>
      <div className="flex justify-center gap-2 text-md text-sleep-primary">
        <div className="flex-col">
          <div className="mt-2">Hours</div>
          <input
            type="number"
            min={0}
            max={24}
            placeholder={8}
            ref={sleepHoursRef}
            className="border-2 border-sleep-primary rounded-lg bg-sleep-background dark:bg-sleepDark-button dark:text-white outline-none p-1"
          />
        </div>
        <div className="mt-9">:</div>
        <div className="flex-col">
          <div className="mt-2">Minutes</div>
          <input
            type="number"
            min={0}
            max={59}
            placeholder={0}
            ref={sleepMinutesRef}
            className="border-2 border-sleep-primary rounded-lg bg-sleep-background dark:bg-sleepDark-button dark:text-white outline-none p-1"
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
              className="border-2 border-sleep-primary rounded-lg bg-sleep-background dark:bg-sleepDark-button dark:text-white outline-none p-1 mt-8"
            />
            <button
              onClick={addToChart}
              className="bg-sleep-primary dark:bg-sleepDark-background w-1/6 mt-8 rounded-md p-1 text-white
                   duration-200 hover:bg-sleep-hover active:bg-sleep-active active:scale-90 active:duration-75 drop-shadow-lg"
            >
              Add
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WeekChart;
